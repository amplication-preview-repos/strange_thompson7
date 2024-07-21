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
import { ProgressService } from "../progress.service";
import { ProgressCreateInput } from "./ProgressCreateInput";
import { Progress } from "./Progress";
import { ProgressFindManyArgs } from "./ProgressFindManyArgs";
import { ProgressWhereUniqueInput } from "./ProgressWhereUniqueInput";
import { ProgressUpdateInput } from "./ProgressUpdateInput";

export class ProgressControllerBase {
  constructor(protected readonly service: ProgressService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Progress })
  async createProgress(
    @common.Body() data: ProgressCreateInput
  ): Promise<Progress> {
    return await this.service.createProgress({
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
  @swagger.ApiOkResponse({ type: [Progress] })
  @ApiNestedQuery(ProgressFindManyArgs)
  async progresses(@common.Req() request: Request): Promise<Progress[]> {
    const args = plainToClass(ProgressFindManyArgs, request.query);
    return this.service.progresses({
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
  @swagger.ApiOkResponse({ type: Progress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async progress(
    @common.Param() params: ProgressWhereUniqueInput
  ): Promise<Progress | null> {
    const result = await this.service.progress({
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
  @swagger.ApiOkResponse({ type: Progress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProgress(
    @common.Param() params: ProgressWhereUniqueInput,
    @common.Body() data: ProgressUpdateInput
  ): Promise<Progress | null> {
    try {
      return await this.service.updateProgress({
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
  @swagger.ApiOkResponse({ type: Progress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProgress(
    @common.Param() params: ProgressWhereUniqueInput
  ): Promise<Progress | null> {
    try {
      return await this.service.deleteProgress({
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
