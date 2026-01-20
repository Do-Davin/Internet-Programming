import { DynamicModule, Global, Module } from '@nestjs/common';
import { DATA_SOURCE } from './database.constants';
import { DataSource } from 'typeorm';

type DbOptions = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities?: any[];
};

@Global() // so you don't need to import it everywhere (research why)
@Module({})
export class DatabaseModule {
  static forRoot(options: DbOptions): DynamicModule {
    const dataSourceProvider = {
      provide: DATA_SOURCE,
      useFactory: async () => {
        const ds = new DataSource({
          type: 'postgres',
          host: options.host,
          port: options.port,
          username: options.username,
          password: options.password,
          database: options.database,
          //   entities: options.entities,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        });

        return ds.initialize();
      },
    };

    return {
      module: DatabaseModule,
      providers: [dataSourceProvider],
      exports: [dataSourceProvider],
    };
  }

  static forFeature(entities: any[]): DynamicModule {
    const repoProviders = entities.map((entity) => ({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      provide: `${entity.name.toUpperCase()}_REPO`,
      useFactory: (ds: DataSource) => ds.getRepository(entity),
      inject: [DATA_SOURCE],
    }));

    return {
      module: DatabaseModule,
      providers: repoProviders,
      exports: repoProviders,
    };
  }
}
