/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NotificationsService } from 'src/notifications/notifications.service';
import { PaymentsService } from 'src/payments/payments.service';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_SERVICE') private readonly client: ClientProxy,
    private readonly paymentsService: PaymentsService,
    private readonly notificationsService: NotificationsService,
  ) {}

  createOrder(orderDto: any) {
    console.log('emit order_created');
    this.client.emit('order_created', {
      order: orderDto,
      createAt: new Date().toISOString(),
    });

    // this.notificationsService.notify('order_created', {
    //   order: orderDto,
    // });

    this.notificationsService.notify('email');

    return { status: 'Order accepted', order: orderDto };
  }

  deleteOrder() {
    this.client.emit('order_deleted', '');
    return { status: 'Order deleted' };
  }
}
