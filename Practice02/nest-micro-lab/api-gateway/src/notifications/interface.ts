export type NotificationChannel = 'log' | 'email' | 'sms' | 'telegram';

export interface NotificationModuleOptions {
  appName: string; // global app name
  defaultChannel: NotificationChannel;
  enable: boolean; // master switch
}

export interface NotificationFeatureOptions {
  featureName: string; // Ex: "orders", "receipts"
  prefix?: string; // Ex: "[ORDERS]"
  channels?: NotificationChannel[]; // override channels for this feature
}
