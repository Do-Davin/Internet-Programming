import { forwardRef, Module } from '@nestjs/common';
import { OrdersModule } from 'src/orders/orders.module';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [forwardRef(() => OrdersModule)],
  providers: [PaymentsService],
  controllers: [PaymentsController],
  exports: [PaymentsService],
})
export class PaymentsModule {}
