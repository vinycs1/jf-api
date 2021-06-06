import {
  BaseEntity,
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
} from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';

@Entity()
export class Seguradora extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @OneToMany(() => Cliente, (cliente) => cliente.seguradora)
  clientes: Cliente[];

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;
}
