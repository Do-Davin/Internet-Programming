// src/common/pipes/verify-customer.pipe.ts
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CustomersService } from 'src/modules/customers/customers.service';
import { VerifyCustomerDto } from 'src/modules/customers/dto/create-customer';
import { TrimPipe } from './trim.pipe';
import { DobFormatAndYearPipe } from './dob.pipe';
import { PhoneNormalizePipe } from './phone-normalize.pipe';

@Injectable()
export class VerifyCustomerPipe implements PipeTransform<
  any,
  VerifyCustomerDto
> {
  constructor(private readonly customersService: CustomersService) {}

  transform(value: any): VerifyCustomerDto {
    if (!value || typeof value !== 'object') {
      throw new BadRequestException('Invalid request body');
    }

    const dto = value as VerifyCustomerDto;

    const trimPipe = new TrimPipe();
    const dobPipe = new DobFormatAndYearPipe();
    const phonePipe = new PhoneNormalizePipe();

    const fullName = trimPipe.transform(dto.fullName);

    const dob = dobPipe.transform(dto.dob);

    const phone = phonePipe.transform(dto.phone);

    const nationalId = dto.nationalId;

    if (this.customersService.isBlockedPhone(phone)) {
      throw new BadRequestException('This phone is blocked');
    }

    if (this.customersService.isBlockedNationalId(nationalId)) {
      throw new BadRequestException('This national ID is blocked');
    }

    if (this.customersService.isBlockedName(fullName)) {
      throw new BadRequestException('This customer name is blocked');
    }

    return {
      fullName,
      dob,
      phone,
      nationalId,
    };
  }
}
