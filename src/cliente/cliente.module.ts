import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './cliente.controller';
import { ClienteRepository } from './cliente.repository';
import { ClienteService } from './cliente.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteRepository])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
