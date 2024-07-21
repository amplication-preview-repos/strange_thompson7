import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EndeavorService } from "./endeavor.service";
import { EndeavorControllerBase } from "./base/endeavor.controller.base";

@swagger.ApiTags("endeavors")
@common.Controller("endeavors")
export class EndeavorController extends EndeavorControllerBase {
  constructor(protected readonly service: EndeavorService) {
    super(service);
  }
}
