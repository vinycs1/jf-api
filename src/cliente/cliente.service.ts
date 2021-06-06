import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteRepository } from './cliente.repository';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteRepository)
    private clienteRepository: ClienteRepository,
  ) {}
}
