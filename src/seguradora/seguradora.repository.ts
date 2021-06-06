import { EntityRepository, Repository } from 'typeorm';
import { Seguradora } from './seguradora.entity';

@EntityRepository(Seguradora)
export class SeguradoraRepository extends Repository<Seguradora> {}
