import { Module } from '@nestjs/common';
import { EventService } from './services/event.service';
import { EventController } from './controllers/event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities';
import { EventType } from './entities/event-type.entity';
import { EventMapperService } from './services/event-mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event, EventType])],
  controllers: [EventController],
  providers: [EventService, EventMapperService],
  exports: [TypeOrmModule],
})
export class EventsModule {}
