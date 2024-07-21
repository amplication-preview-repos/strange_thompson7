import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KidService } from "./kid.service";
import { KidControllerBase } from "./base/kid.controller.base";

@swagger.ApiTags("kids")
@common.Controller("kids")
export class KidController extends KidControllerBase {
  constructor(protected readonly service: KidService) {
    super(service);
  }
}
