import { Body, Controller, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
// import { DobFormatAndYearPipe } from 'src/common/pipes/dob.pipe';
// import { PhoneNormalizePipe } from 'src/common/pipes/phone-normalize.pipe';
// import { TrimPipe } from 'src/common/pipes/trim.pipe';
// import { CustomerNotBlockedPipe } from 'src/common/pipes/customer-not-blocked.pipe';
import { VerifyCustomerPipe } from 'src/common/pipes/verify-customer.pipe';
import type { VerifyCustomerDto } from './dto/create-customer';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // @Post('verify')
  // verify(
  //   @Body(CustomerNotBlockedPipe) body: any,

  //   @Body('fullName', TrimPipe) fullName: string,
  //   @Body('dob', DobFormatAndYearPipe) dob: string,
  //   @Body('phone', PhoneNormalizePipe) phone: string,
  //   @Body('nationalId') nationalId: string,
  // ) {
  //   return {
  //     ok: true,
  //     normalized: {
  //       fullName,
  //       dob,
  //       phone,
  //       nationalId,
  //     },
  //   };
  // }

  @Post('verify')
  verify(@Body(VerifyCustomerPipe) body: VerifyCustomerDto) {
    return {
      ok: true,
      normalized: body,
    };
  }
}
