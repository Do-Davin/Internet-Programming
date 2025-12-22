/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Inject, Injectable } from '@nestjs/common';
// import { EVENT_PUBLISHER } from 'src/core/tokens';

// type EventPublisher = { publish: (event: string, payload: any) => void };

@Injectable()
export class NotificationsService {
  constructor(
    @Inject('NOTIFICATION_OPTIONS')
    // private readonly eventPublisher: EventPublisher,
    private options: any,
  ) {}

  // notify(event: string, payload: any) {
  //   // console.log(`[NOTIFY] ${event}`, payload);
  //   this.eventPublisher.publish(event, payload);
  //   return { ok: true };
  // }
  notify(message: string) {
    switch (this.options.type) {
      case 'email':
        console.log(`[Email]: ${message}`);
        break;
      case 'sms':
        console.log(`[SMS]: ${message}`);
        break;
      case 'log':
      default:
        console.log(`[LOG]: ${message}`);
    }
  }
}
