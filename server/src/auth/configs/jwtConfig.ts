import { JwtModuleOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export const jwtConfigFactory = async (
  configService: ConfigService,
): Promise<JwtModuleOptions> => {
  return {
    secret: configService.get('JWT_SECRET'),
    signOptions: {
      expiresIn: '21600s',
    },
  };
};
