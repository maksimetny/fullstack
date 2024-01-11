import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';

import { EnvironmentConfigKey } from './enums/environment-config-key.enum';

import { SqliteConfigService } from './services/sqlite-config.service';

@Module({
  providers: [SqliteConfigService],
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        [EnvironmentConfigKey.Port]: Joi.number(),
        [EnvironmentConfigKey.DatabaseName]: Joi.string(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [SqliteConfigService],
      useClass: SqliteConfigService,
    }),
  ],
  exports: [],
})
export class CoreModule {}
