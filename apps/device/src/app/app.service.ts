import { Injectable } from '@nestjs/common';
import { Master } from '../../../../libs/entity/src/lib/domain/device/master.entity';

@Injectable()
export class AppService {
  getData(): { message: string } {
    const master = new Master();
    master.address = 'home';
    console.log(`Master: `, master);
    return { message: 'Welcome to device!' };
  }
}
