import { Module } from "@nestjs/common";
import { EndeavorModule } from "./endeavor/endeavor.module";
import { ParentModule } from "./parent/parent.module";
import { KidModule } from "./kid/kid.module";
import { PrizeModule } from "./prize/prize.module";
import { RewardModule } from "./reward/reward.module";
import { PrizeProgressModule } from "./prizeProgress/prizeProgress.module";
import { EndeavorProgressModule } from "./endeavorProgress/endeavorProgress.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    EndeavorModule,
    ParentModule,
    KidModule,
    PrizeModule,
    RewardModule,
    PrizeProgressModule,
    EndeavorProgressModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
