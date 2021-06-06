import {
  BaseEntity,
  Entity,
  Column,
  ObjectIdColumn,
  ObjectID,
  ManyToOne,
} from 'typeorm';
import { Seguradora } from '../seguradora/seguradora.entity';

@Entity()
export class Cliente extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  cep: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  email: string;

  @ManyToOne(() => Seguradora, (seguradora) => seguradora.clientes)
  seguradora: Seguradora;
}
