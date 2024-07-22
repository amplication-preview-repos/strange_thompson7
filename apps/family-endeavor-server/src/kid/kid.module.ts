import { Module } from "@nestjs/common";
import { KidModuleBase } from "./base/kid.module.base";
import { KidService } from "./kid.service";
import { KidController } from "./kid.controller";
import { KidResolver } from "./kid.resolver";

@Module({
  imports: [KidModuleBase],
  controllers: [KidController],
  providers: [KidService, KidResolver],
  exports: [KidService],
})
export class KidModule {}
