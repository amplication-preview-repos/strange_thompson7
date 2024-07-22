import { Module } from "@nestjs/common";
import { EndeavorModuleBase } from "./base/endeavor.module.base";
import { EndeavorService } from "./endeavor.service";
import { EndeavorController } from "./endeavor.controller";
import { EndeavorResolver } from "./endeavor.resolver";

@Module({
  imports: [EndeavorModuleBase],
  controllers: [EndeavorController],
  providers: [EndeavorService, EndeavorResolver],
  exports: [EndeavorService],
})
export class EndeavorModule {}
