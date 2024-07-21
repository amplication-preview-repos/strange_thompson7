import * as graphql from "@nestjs/graphql";
import { ParentResolverBase } from "./base/parent.resolver.base";
import { Parent } from "./base/Parent";
import { ParentService } from "./parent.service";

@graphql.Resolver(() => Parent)
export class ParentResolver extends ParentResolverBase {
  constructor(protected readonly service: ParentService) {
    super(service);
  }
}
