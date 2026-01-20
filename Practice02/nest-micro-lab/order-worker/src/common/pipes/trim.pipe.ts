import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TrimPipe implements PipeTransform<string, string> {
  transform(value: any): string {
    if (typeof value !== 'string') {
      throw new BadRequestException('Value must be a string');
    }

    const trimmed = value.trim();

    if (!trimmed) {
      throw new BadRequestException('Value cannot be empty');
    }

    return trimmed;
  }
}
