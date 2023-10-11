import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  tipoEventoId: number;
}
