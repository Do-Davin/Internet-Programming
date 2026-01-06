import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PhoneNormalizePipe implements PipeTransform<string, string> {
  transform(value: string): string {
    if (typeof value !== 'string') {
      throw new BadRequestException('Phone must be a string');
    }

    // remove spaces, dashes, ()
    const removeSpecialsChar = /[\s\-()]/g;
    let phone = value.replace(removeSpecialsChar, '');

    if (phone.startsWith('0')) {
      phone = '+855' + phone.slice(1);
    }

    if (!phone.startsWith('+855')) {
      throw new BadRequestException('Phone must start with 0 or +855');
    }

    const phonePrefix = /^\+855\d+$/;
    if (!phonePrefix.test(phone)) {
      throw new BadRequestException('Phone must be in format +855XXXXXXXX');
    }

    return phone;
  }
}
