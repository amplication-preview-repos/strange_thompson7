import * as graphql from "@nestjs/graphql";
import { KidResolverBase } from "./base/kid.resolver.base";
import { Kid } from "./base/Kid";
import { KidService } from "./kid.service";

@graphql.Resolver(() => Kid)
export class KidResolver extends KidResolverBase {
  constructor(protected readonly service: KidService) {
    super(service);
  }
}
