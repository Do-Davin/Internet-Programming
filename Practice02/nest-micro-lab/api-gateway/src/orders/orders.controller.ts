import { Body, Controller, Delete, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Notify } from 'src/notifications/notify.decorator';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @Notify('order', 'Order Created')
  create(@Body() body: any) {
    console.log('orderController create() is called');
    return this.ordersService.createOrder(body);
  }

  @Delete()
  delete() {
    console.log('Delete order!');
    return this.ordersService.deleteOrder();
  }
}
