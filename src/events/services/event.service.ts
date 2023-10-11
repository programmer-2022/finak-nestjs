import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateEventDto } from '../dto';
import { Event } from '../entities';
import { IEventRepository } from '../repository';
import { EventMapperService } from './event-mapper.service';

@Injectable()
export class EventService implements IEventRepository {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    private readonly mapperService: EventMapperService,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const newEvent = this.mapperService.toEntity(createEventDto);
    return this.eventRepository.save(newEvent);
  }

  async findAll(): Promise<Event[]> {
    return await this.eventRepository.find({ relations: ['tipoEvento'] });
  }
}
