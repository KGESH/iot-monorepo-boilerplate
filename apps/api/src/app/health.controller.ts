import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get('')
  health() {
    return 'OK';
  }
}
