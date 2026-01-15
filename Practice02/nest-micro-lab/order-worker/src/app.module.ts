import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
// import { ReceiptsModule } from './receipts/receipts.module';
import { PaymentsModule } from './payments/payments.module';
import { NotificationModule } from './notifications/notifications.module';
import { CoreModule } from './core/core.module';
// import { APP_INTERCEPTOR } from '@nestjs/core';
// import { NotifyInterceptor } from './notifications/notify.interceptor';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductsModule } from './modules/product/product.module';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './modules/customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    AuthModule,
    NotificationModule.forRoot({
      appName: 'API Gateway Lab',
      defaultChannel: 'log',
      enable: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    OrdersModule,
    // ReceiptsModule,
    PaymentsModule,
    CoreModule,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    DatabaseModule.forRoot({
      host: process.env.DB_HOST!,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER!,
      password: process.env.DB_PASS!,
      database: process.env.DB_NAME!,
    }),
    CategoryModule,
    ProductsModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  // providers: [
  //   {
  //     provide: APP_INTERCEPTOR,
  //     useClass: NotifyInterceptor,
  //   },
  // ],
})
export class AppModule {}
