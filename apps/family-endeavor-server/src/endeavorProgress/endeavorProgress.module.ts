import { Module } from "@nestjs/common";
import { EndeavorProgressModuleBase } from "./base/endeavorProgress.module.base";
import { EndeavorProgressService } from "./endeavorProgress.service";
import { EndeavorProgressController } from "./endeavorProgress.controller";
import { EndeavorProgressResolver } from "./endeavorProgress.resolver";

@Module({
  imports: [EndeavorProgressModuleBase],
  controllers: [EndeavorProgressController],
  providers: [EndeavorProgressService, EndeavorProgressResolver],
  exports: [EndeavorProgressService],
})
export class EndeavorProgressModule {}
