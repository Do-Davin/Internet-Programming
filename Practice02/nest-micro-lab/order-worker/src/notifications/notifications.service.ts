/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Inject, Injectable } from '@nestjs/common';
import type {
  NotificationChannel,
  NotificationFeatureOptions,
  NotificationModuleOptions,
} from './interface';
import {
  NOTIFICATION_FEATURE_REGISTRY,
  NOTIFICATION_OPTIONS,
} from './constants';
// import { EVENT_PUBLISHER } from 'src/core/tokens';

// type EventPublisher = { publish: (event: string, payload: any) => void };

@Injectable()
export class NotificationsService {
  constructor(
    @Inject(NOTIFICATION_OPTIONS)
    private readonly options: NotificationModuleOptions,

    @Inject(NOTIFICATION_FEATURE_REGISTRY)
    private readonly features: NotificationFeatureOptions[],
  ) {}

  // Get feature config by name
  private getFeature(
    featureName: string,
  ): NotificationFeatureOptions | undefined {
    return this.features.find((f) => f.featureName === featureName);
  }

  // Resolve channels (feature override -> global default)
  private resolveChannels(
    feature?: NotificationFeatureOptions,
  ): NotificationChannel[] {
    if (!this.options.enable) return [];
    if (feature && feature.enable === false) return [];
    if (feature?.channels?.length) return feature.channels;
    return [this.options.defaultChannel];
  }

  notify(featureName: string, event: string, payload: any) {
    const feature = this.getFeature(featureName);

    if (feature?.enable === false)
      return { skipped: true, reason: 'feature disabled' };

    if (!this.options.enable)
      return { skipped: true, reason: 'notifications disabled globally' };

    const channels = this.resolveChannels(feature);

    if (channels.length === 0)
      return { skipped: true, reason: 'no channels available' };

    const prefix = feature?.prefix ?? `[${featureName.toUpperCase()}]`;
    const message = `${prefix} (${this.options.appName}) ${event}`;

    for (const ch of channels) {
      console.log(`[${ch.toUpperCase()}] ${message}`, payload);
    }

    return { ok: true, channels, featureName, event };
  }
}
