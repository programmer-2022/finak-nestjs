import { CreateEventDto } from '../dto';
import { Event, EventType } from '../entities';
import { IEventMapper } from '../mappers';

export class EventMapperService implements IEventMapper {
  toEntity(createProductDto: CreateEventDto): Event {
    const event = new Event();
    event.descripcion = createProductDto.descripcion;

    if (createProductDto.tipoEventoId) {
      const tipo = new EventType();
      tipo.id = createProductDto.tipoEventoId;
      event.tipoEvento = tipo;
    }
    return event;
  }
}
