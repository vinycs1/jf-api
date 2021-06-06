import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeguradoraRepository } from './seguradora.repository';

@Injectable()
export class SeguradoraService {
  constructor(
    @InjectRepository(SeguradoraRepository)
    private seguradoraRepository: SeguradoraRepository,
  ) {}
}
