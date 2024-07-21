import * as graphql from "@nestjs/graphql";
import { EndeavorResolverBase } from "./base/endeavor.resolver.base";
import { Endeavor } from "./base/Endeavor";
import { EndeavorService } from "./endeavor.service";

@graphql.Resolver(() => Endeavor)
export class EndeavorResolver extends EndeavorResolverBase {
  constructor(protected readonly service: EndeavorService) {
    super(service);
  }
}
