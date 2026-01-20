import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { NOTIFY_METADATA } from './notify.decorator';
import { NotificationsService } from './notifications.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class NotifyInterceptor implements NestInterceptor {
  constructor(
    private reflector: Reflector,
    private notifications: NotificationsService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const meta = this.reflector.get(NOTIFY_METADATA, context.getHandler());

    return next.handle().pipe(
      tap(() => {
        if (meta) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          this.notifications.notify(meta.feature, meta.event, {
            time: new Date().toISOString(),
          });
        }
      }),
    );
  }
}
