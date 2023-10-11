import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EventType } from './event-type.entity';

@Entity({ name: 'events', database: 'registration' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'varchar', length: 255 })
  descripcion: string;

  @ManyToOne(() => EventType, (tipoEvento) => tipoEvento.events, {
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  })
  tipoEvento: EventType;
}
