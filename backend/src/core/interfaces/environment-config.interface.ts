import { EnvironmentConfigKey } from '../enums/environment-config-key.enum';

export interface EnvironmentConfig {
  [EnvironmentConfigKey.Port]: number;
  [EnvironmentConfigKey.DatabaseName]: string;
}
