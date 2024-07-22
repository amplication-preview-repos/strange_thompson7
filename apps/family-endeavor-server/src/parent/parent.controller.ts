import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParentService } from "./parent.service";
import { ParentControllerBase } from "./base/parent.controller.base";

@swagger.ApiTags("parents")
@common.Controller("parents")
export class ParentController extends ParentControllerBase {
  constructor(protected readonly service: ParentService) {
    super(service);
  }
}
