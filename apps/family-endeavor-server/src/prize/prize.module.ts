import { Module } from "@nestjs/common";
import { PrizeModuleBase } from "./base/prize.module.base";
import { PrizeService } from "./prize.service";
import { PrizeController } from "./prize.controller";
import { PrizeResolver } from "./prize.resolver";

@Module({
  imports: [PrizeModuleBase],
  controllers: [PrizeController],
  providers: [PrizeService, PrizeResolver],
  exports: [PrizeService],
})
export class PrizeModule {}
