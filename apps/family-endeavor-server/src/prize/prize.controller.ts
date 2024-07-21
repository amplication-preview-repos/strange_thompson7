import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrizeService } from "./prize.service";
import { PrizeControllerBase } from "./base/prize.controller.base";

@swagger.ApiTags("prizes")
@common.Controller("prizes")
export class PrizeController extends PrizeControllerBase {
  constructor(protected readonly service: PrizeService) {
    super(service);
  }
}
