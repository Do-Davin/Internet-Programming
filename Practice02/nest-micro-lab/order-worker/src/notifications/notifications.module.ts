import { DynamicModule, Module } from '@nestjs/common';
import {
  NotificationFeatureOptions,
  NotificationModuleOptions,
} from './interface';
import {
  NOTIFICATION_FEATURE_OPTIONS,
  NOTIFICATION_OPTIONS,
} from './constants';
import { NotificationsService } from './notifications.service';
import { NotificationsRegistryModule } from './notifications-registry.module';
import { NotificationFeatureRegistrar } from './notifications-feature.registrar';

@Module({
  imports: [NotificationsRegistryModule],
})
export class NotificationModule {
  // App-level config, should be called ONCE (AppModule)
  static forRoot(options: NotificationModuleOptions): DynamicModule {
    return {
      module: NotificationModule,
      global: true, // optional: make it globally available without importing everywhere
      providers: [
        {
          provide: NOTIFICATION_OPTIONS,
          useValue: options,
        },
        NotificationsService,
      ],
      exports: [NotificationsService],
    };
  }

  // Feature-level config, can be called MANY TIMES (OrdersModule, ReceiptsModule…)
  static forFeature(feature: NotificationFeatureOptions): DynamicModule {
    return {
      module: NotificationModule,
      providers: [
        // register this feature into a shared array token
        {
          provide: NOTIFICATION_FEATURE_OPTIONS,
          useValue: feature,
        },
        NotificationFeatureRegistrar,
      ],
    };
  }
}

// import { DynamicModule, Module } from '@nestjs/common';
// import { NotificationsService } from './notifications.service';
// import { NotificationModuleOptions } from './interface';

// @Module({})
// export class NotificationsModule {
//   static register(options: NotificationModuleOptions): DynamicModule {
//     return {
//       module: NotificationsModule,
//       providers: [
//         {
//           provide: 'NOTIFICATION_OPTIONS',
//           useValue: options,
//         },
//         NotificationsService,
//       ],
//       exports: [NotificationsService],
//     };
//   }
// }
