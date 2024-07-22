/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PrizeService } from "../prize.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PrizeCreateInput } from "./PrizeCreateInput";
import { Prize } from "./Prize";
import { PrizeFindManyArgs } from "./PrizeFindManyArgs";
import { PrizeWhereUniqueInput } from "./PrizeWhereUniqueInput";
import { PrizeUpdateInput } from "./PrizeUpdateInput";
import { PrizeProgressFindManyArgs } from "../../prizeProgress/base/PrizeProgressFindManyArgs";
import { PrizeProgress } from "../../prizeProgress/base/PrizeProgress";
import { PrizeProgressWhereUniqueInput } from "../../prizeProgress/base/PrizeProgressWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PrizeControllerBase {
  constructor(
    protected readonly service: PrizeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Prize })
  @nestAccessControl.UseRoles({
    resource: "Prize",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPrize(@common.Body() data: PrizeCreateInput): Promise<Prize> {
    return await this.service.createPrize({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        costInBlueGems: true,
        costInPurpleGems: true,
        costInRedGems: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Prize] })
  @ApiNestedQuery(PrizeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Prize",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async prizes(@common.Req() request: Request): Promise<Prize[]> {
    const args = plainToClass(PrizeFindManyArgs, request.query);
    return this.service.prizes({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        costInBlueGems: true,
        costInPurpleGems: true,
        costInRedGems: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Prize })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Prize",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async prize(
    @common.Param() params: PrizeWhereUniqueInput
  ): Promise<Prize | null> {
    const result = await this.service.prize({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        costInBlueGems: true,
        costInPurpleGems: true,
        costInRedGems: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Prize })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Prize",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePrize(
    @common.Param() params: PrizeWhereUniqueInput,
    @common.Body() data: PrizeUpdateInput
  ): Promise<Prize | null> {
    try {
      return await this.service.updatePrize({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          costInBlueGems: true,
          costInPurpleGems: true,
          costInRedGems: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Prize })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Prize",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePrize(
    @common.Param() params: PrizeWhereUniqueInput
  ): Promise<Prize | null> {
    try {
      return await this.service.deletePrize({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          costInBlueGems: true,
          costInPurpleGems: true,
          costInRedGems: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/prizeProgresses")
  @ApiNestedQuery(PrizeProgressFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PrizeProgress",
    action: "read",
    possession: "any",
  })
  async findPrizeProgresses(
    @common.Req() request: Request,
    @common.Param() params: PrizeWhereUniqueInput
  ): Promise<PrizeProgress[]> {
    const query = plainToClass(PrizeProgressFindManyArgs, request.query);
    const results = await this.service.findPrizeProgresses(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        datePurchased: true,

        kid: {
          select: {
            id: true,
          },
        },

        prize: {
          select: {
            id: true,
          },
        },

        status: true,
        dateRedeemed: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Patch("/:id/prizeProgresses")
  @nestAccessControl.UseRoles({
    resource: "Prize",
    action: "update",
    possession: "any",
  })
  async updatePrizeProgresses(
    @common.Param() params: PrizeWhereUniqueInput,
    @common.Body() body: PrizeProgressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      prizeProgresses: {
        set: body,
      },
    };
    await this.service.updatePrize({
      where: params,
      data,
      select: { id: true },
    });
  }
}
