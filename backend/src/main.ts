import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

import { EnvironmentConfig } from './core/interfaces/environment-config.interface';

import { EnvironmentConfigKey } from './core/enums/environment-config-key.enum';

import { DEFAULT_PORT } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const reflector = app.get(Reflector);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  const configService: ConfigService<EnvironmentConfig> =
    app.get(ConfigService);

  const port = configService.get(EnvironmentConfigKey.Port, DEFAULT_PORT);

  app.setGlobalPrefix('/api');

  await app.listen(port);
}

bootstrap();
