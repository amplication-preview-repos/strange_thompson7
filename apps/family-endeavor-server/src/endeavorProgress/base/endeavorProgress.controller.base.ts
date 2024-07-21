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
import { EndeavorProgressService } from "../endeavorProgress.service";
import { EndeavorProgressCreateInput } from "./EndeavorProgressCreateInput";
import { EndeavorProgress } from "./EndeavorProgress";
import { EndeavorProgressFindManyArgs } from "./EndeavorProgressFindManyArgs";
import { EndeavorProgressWhereUniqueInput } from "./EndeavorProgressWhereUniqueInput";
import { EndeavorProgressUpdateInput } from "./EndeavorProgressUpdateInput";

export class EndeavorProgressControllerBase {
  constructor(protected readonly service: EndeavorProgressService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EndeavorProgress })
  async createEndeavorProgress(
    @common.Body() data: EndeavorProgressCreateInput
  ): Promise<EndeavorProgress> {
    return await this.service.createEndeavorProgress({
      data: {
        ...data,

        kid: data.kid
          ? {
              connect: data.kid,
            }
          : undefined,

        endeavor: data.endeavor
          ? {
              connect: data.endeavor,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        blueGemsEarned: true,
        redGemsEarned: true,
        purpleGemsEarned: true,

        kid: {
          select: {
            id: true,
          },
        },

        endeavor: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EndeavorProgress] })
  @ApiNestedQuery(EndeavorProgressFindManyArgs)
  async endeavorProgresses(
    @common.Req() request: Request
  ): Promise<EndeavorProgress[]> {
    const args = plainToClass(EndeavorProgressFindManyArgs, request.query);
    return this.service.endeavorProgresses({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        blueGemsEarned: true,
        redGemsEarned: true,
        purpleGemsEarned: true,

        kid: {
          select: {
            id: true,
          },
        },

        endeavor: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EndeavorProgress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async endeavorProgress(
    @common.Param() params: EndeavorProgressWhereUniqueInput
  ): Promise<EndeavorProgress | null> {
    const result = await this.service.endeavorProgress({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        blueGemsEarned: true,
        redGemsEarned: true,
        purpleGemsEarned: true,

        kid: {
          select: {
            id: true,
          },
        },

        endeavor: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EndeavorProgress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEndeavorProgress(
    @common.Param() params: EndeavorProgressWhereUniqueInput,
    @common.Body() data: EndeavorProgressUpdateInput
  ): Promise<EndeavorProgress | null> {
    try {
      return await this.service.updateEndeavorProgress({
        where: params,
        data: {
          ...data,

          kid: data.kid
            ? {
                connect: data.kid,
              }
            : undefined,

          endeavor: data.endeavor
            ? {
                connect: data.endeavor,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          status: true,
          blueGemsEarned: true,
          redGemsEarned: true,
          purpleGemsEarned: true,

          kid: {
            select: {
              id: true,
            },
          },

          endeavor: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: EndeavorProgress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEndeavorProgress(
    @common.Param() params: EndeavorProgressWhereUniqueInput
  ): Promise<EndeavorProgress | null> {
    try {
      return await this.service.deleteEndeavorProgress({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          status: true,
          blueGemsEarned: true,
          redGemsEarned: true,
          purpleGemsEarned: true,

          kid: {
            select: {
              id: true,
            },
          },

          endeavor: {
            select: {
              id: true,
            },
          },
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
}
