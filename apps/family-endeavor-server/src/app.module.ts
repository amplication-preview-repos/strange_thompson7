import { Module } from "@nestjs/common";
import { EndeavorModule } from "./endeavor/endeavor.module";
import { ParentModule } from "./parent/parent.module";
import { KidModule } from "./kid/kid.module";
import { RewardModule } from "./reward/reward.module";
import { PrizeModule } from "./prize/prize.module";
import { PrizeProgressModule } from "./prizeProgress/prizeProgress.module";
import { EndeavorProgressModule } from "./endeavorProgress/endeavorProgress.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    EndeavorModule,
    ParentModule,
    KidModule,
    RewardModule,
    PrizeModule,
    PrizeProgressModule,
    EndeavorProgressModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
