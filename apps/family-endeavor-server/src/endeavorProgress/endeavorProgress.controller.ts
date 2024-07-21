import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EndeavorProgressService } from "./endeavorProgress.service";
import { EndeavorProgressControllerBase } from "./base/endeavorProgress.controller.base";

@swagger.ApiTags("endeavorProgresses")
@common.Controller("endeavorProgresses")
export class EndeavorProgressController extends EndeavorProgressControllerBase {
  constructor(protected readonly service: EndeavorProgressService) {
    super(service);
  }
}
