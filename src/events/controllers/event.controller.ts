import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventService } from '../services/event.service';
import { CreateEventDto } from '../dto/create-event.dto';
import { Event } from '../entities';

@Controller('eventos')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return await this.eventService.create(createEventDto);
  }

  @Get()
  async findAll() {
    return await this.eventService.findAll();
  }
}
