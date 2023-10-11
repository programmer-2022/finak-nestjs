import { CreateEventDto } from '../dto';
import { Event } from '../entities';

export interface IEventRepository {
  findAll(): Promise<Event[]>;
  create(createEventDto: CreateEventDto): Promise<Event>;
}
