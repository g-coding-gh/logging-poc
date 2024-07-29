import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { LoggingModule } from './logging/logging.module';

@Module({
  imports: [PeopleModule, LoggingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
