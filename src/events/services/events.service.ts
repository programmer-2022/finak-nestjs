import { Injectable } from '@nestjs/common';
import { CreateEventDto, UpdateEventDto } from '../dto';
import configuration from '../../config/configuration';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EventsService {
  constructor(private configService: ConfigService) {}

  create(createEventDto: CreateEventDto) {
    return 'This action adds a new event';
  }

  findAll() {
    return 'funciona';
  }
}
