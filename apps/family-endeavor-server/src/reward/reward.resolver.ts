import * as graphql from "@nestjs/graphql";
import { RewardResolverBase } from "./base/reward.resolver.base";
import { Reward } from "./base/Reward";
import { RewardService } from "./reward.service";

@graphql.Resolver(() => Reward)
export class RewardResolver extends RewardResolverBase {
  constructor(protected readonly service: RewardService) {
    super(service);
  }
}
