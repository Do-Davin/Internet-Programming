import { ForbiddenException, Injectable, PipeTransform } from '@nestjs/common';
import { CustomersService } from 'src/modules/customers/customers.service';
import { VerifyCustomerDto } from 'src/modules/customers/dto/create-customer';

@Injectable()
export class CustomerNotBlockedPipe implements PipeTransform<VerifyCustomerDto> {
  constructor(private readonly customersService: CustomersService) {}

  transform(value: VerifyCustomerDto) {
    if (!value || typeof value !== 'object') {
      throw new ForbiddenException('Invalid request body');
    }

    const { phone, nationalId, fullName } = value;

    if (this.customersService.isBlockedPhone(phone)) {
      throw new ForbiddenException('This phone is blocked');
    }

    if (this.customersService.isBlockedNationalId(nationalId)) {
      throw new ForbiddenException('This national ID is blocked');
    }

    if (this.customersService.isBlockedName(fullName)) {
      throw new ForbiddenException('This customer name is blocked');
    }

    return value;
  }
}
