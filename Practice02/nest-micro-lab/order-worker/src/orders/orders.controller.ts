import { Body, Controller, Delete, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Notify } from 'src/notifications/notify.decorator';
import { VerifyCustomerPipe } from 'src/common/pipes/verify-customer.pipe';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @Notify('order', 'Order Created')
  create(
    @Body('customer', VerifyCustomerPipe) customer: any,
    @Body() body: CreateOrderDto,
  ) {
    console.log('orderController create() is called');
    return this.ordersService.createOrder({
      ...body,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      customer,
    });
  }

  @Delete()
  delete() {
    console.log('Delete order!');
    return this.ordersService.deleteOrder();
  }
}
