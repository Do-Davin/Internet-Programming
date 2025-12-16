import { Inject, Injectable } from '@nestjs/common';
import { EVENT_PUBLISHER } from 'src/core/tokens';

type EventPublisher = { publish: (event: string, payload: any) => void };

@Injectable()
export class NotificationsService {
  constructor(
    @Inject(EVENT_PUBLISHER)
    private readonly eventPublisher: EventPublisher,
  ) {}

  notify(event: string, payload: any) {
    // console.log(`[NOTIFY] ${event}`, payload);
    this.eventPublisher.publish(event, payload);
    return { ok: true };
  }
}
