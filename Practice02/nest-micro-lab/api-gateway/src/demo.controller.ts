/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller('gateway')
export class DemoController {
  @UseGuards(JwtAuthGuard)
  @Get('secure')
  secure(@Req() req: any) {
    return {
      message: 'gateway access ok',
      user: req.user,
    };
  }
}
