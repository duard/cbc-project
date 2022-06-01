import { ApiContactsModule } from '@cbs/api/contacts';
import { ApiCoreModule } from '@cbs/api/core';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiCoreModule, ApiContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
