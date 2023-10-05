import { Module } from '@nestjs/common';
import { EventsService } from './services/events.service';
import { EventController } from './controllers/event.controller';
//import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [EventController],
  providers: [EventsService],
})
export class EventsModule {}
