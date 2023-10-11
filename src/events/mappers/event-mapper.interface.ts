import { CreateEventDto } from '../dto';
import { Event } from '../entities';

export interface IEventMapper {
  toEntity(createProductDto: CreateEventDto): Event;
}
