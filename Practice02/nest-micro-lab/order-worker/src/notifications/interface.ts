export type NotificationChannel = 'log' | 'email' | 'sms' | 'telegram';

export interface NotificationModuleOptions {
  appName: string;
  defaultChannel: NotificationChannel;
  enable: boolean;
}

export interface NotificationFeatureOptions {
  featureName: string;
  channels?: NotificationChannel[];
  prefix?: string;
  enable?: boolean;
}
