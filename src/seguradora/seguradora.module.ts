import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeguradoraController } from './seguradora.controller';
import { SeguradoraRepository } from './seguradora.repository';
import { SeguradoraService } from './seguradora.service';

@Module({
  imports: [TypeOrmModule.forFeature([SeguradoraRepository])],
  controllers: [SeguradoraController],
  providers: [SeguradoraService],
})
export class SeguradoraModule {}
