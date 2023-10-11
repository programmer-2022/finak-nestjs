import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './event.entity';

@Entity({ name: 'event_type', database: 'registration' })
export class EventType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @OneToMany(() => Event, (event) => event.tipoEvento)
  events: Event[];
}
