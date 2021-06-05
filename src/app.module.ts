import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mongodb',
          autoLoadEntities: true,
          synchronize: true,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          database: configService.get('DB_DATABASE'),
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
