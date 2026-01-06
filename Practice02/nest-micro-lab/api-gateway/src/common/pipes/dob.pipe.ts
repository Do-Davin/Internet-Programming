import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class DobFormatAndYearPipe implements PipeTransform<string, string> {
  transform(value: any): string {
    if (typeof value !== 'string') {
      throw new BadRequestException('Birth of Date must be a string');
    }

    const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;

    const match = value.match(regex);
    if (!match) {
      throw new BadRequestException(
        'Birth of Date must be in format dd/mm/yyyy',
      );
    }

    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);

    if (year >= 2010) {
      throw new BadRequestException('Year must be before 2010');
    }

    const date = new Date(year, month - 1, day);

    const isRealDate =
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day;

    if (!isRealDate) {
      throw new BadRequestException('DOB is not a valid calendar date');
    }

    return value;
  }
}
