import { DynamicModule, Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationModuleOptions } from './notifications.interface';

@Module({})
export class NotificationsModule {
  static register(options: NotificationModuleOptions): DynamicModule {
    return {
      module: NotificationsModule,
      providers: [
        {
          provide: 'NOTIFICATION_OPTIONS',
          useValue: options,
        },
        NotificationsService,
      ],
      exports: [NotificationsService],
    };
  }
}
