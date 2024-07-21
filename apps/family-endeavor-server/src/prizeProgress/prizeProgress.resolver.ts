import * as graphql from "@nestjs/graphql";
import { PrizeProgressResolverBase } from "./base/prizeProgress.resolver.base";
import { PrizeProgress } from "./base/PrizeProgress";
import { PrizeProgressService } from "./prizeProgress.service";

@graphql.Resolver(() => PrizeProgress)
export class PrizeProgressResolver extends PrizeProgressResolverBase {
  constructor(protected readonly service: PrizeProgressService) {
    super(service);
  }
}
