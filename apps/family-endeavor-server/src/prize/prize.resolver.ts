import * as graphql from "@nestjs/graphql";
import { PrizeResolverBase } from "./base/prize.resolver.base";
import { Prize } from "./base/Prize";
import { PrizeService } from "./prize.service";

@graphql.Resolver(() => Prize)
export class PrizeResolver extends PrizeResolverBase {
  constructor(protected readonly service: PrizeService) {
    super(service);
  }
}
