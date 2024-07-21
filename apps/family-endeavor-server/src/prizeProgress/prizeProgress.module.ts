import { Module } from "@nestjs/common";
import { PrizeProgressModuleBase } from "./base/prizeProgress.module.base";
import { PrizeProgressService } from "./prizeProgress.service";
import { PrizeProgressController } from "./prizeProgress.controller";
import { PrizeProgressResolver } from "./prizeProgress.resolver";

@Module({
  imports: [PrizeProgressModuleBase],
  controllers: [PrizeProgressController],
  providers: [PrizeProgressService, PrizeProgressResolver],
  exports: [PrizeProgressService],
})
export class PrizeProgressModule {}
