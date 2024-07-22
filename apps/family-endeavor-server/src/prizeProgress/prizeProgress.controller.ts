import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrizeProgressService } from "./prizeProgress.service";
import { PrizeProgressControllerBase } from "./base/prizeProgress.controller.base";

@swagger.ApiTags("prizeProgresses")
@common.Controller("prizeProgresses")
export class PrizeProgressController extends PrizeProgressControllerBase {
  constructor(protected readonly service: PrizeProgressService) {
    super(service);
  }
}
