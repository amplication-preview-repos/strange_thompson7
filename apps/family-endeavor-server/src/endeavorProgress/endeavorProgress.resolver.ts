import * as graphql from "@nestjs/graphql";
import { EndeavorProgressResolverBase } from "./base/endeavorProgress.resolver.base";
import { EndeavorProgress } from "./base/EndeavorProgress";
import { EndeavorProgressService } from "./endeavorProgress.service";

@graphql.Resolver(() => EndeavorProgress)
export class EndeavorProgressResolver extends EndeavorProgressResolverBase {
  constructor(protected readonly service: EndeavorProgressService) {
    super(service);
  }
}
