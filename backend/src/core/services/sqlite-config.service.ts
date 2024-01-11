import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { EnvironmentConfig } from '../interfaces/environment-config.interface';

import { EnvironmentConfigKey } from '../enums/environment-config-key.enum';

import entities from '../entities';

@Injectable()
export class SqliteConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService<EnvironmentConfig>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',
      database: this.configService.get(EnvironmentConfigKey.DatabaseName),
      entities,
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}
