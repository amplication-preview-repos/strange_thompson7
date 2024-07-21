/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PrizeProgress as PrismaPrizeProgress,
  Kid as PrismaKid,
  Prize as PrismaPrize,
} from "@prisma/client";

export class PrizeProgressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PrizeProgressCountArgs, "select">
  ): Promise<number> {
    return this.prisma.prizeProgress.count(args);
  }

  async prizeProgresses(
    args: Prisma.PrizeProgressFindManyArgs
  ): Promise<PrismaPrizeProgress[]> {
    return this.prisma.prizeProgress.findMany(args);
  }
  async prizeProgress(
    args: Prisma.PrizeProgressFindUniqueArgs
  ): Promise<PrismaPrizeProgress | null> {
    return this.prisma.prizeProgress.findUnique(args);
  }
  async createPrizeProgress(
    args: Prisma.PrizeProgressCreateArgs
  ): Promise<PrismaPrizeProgress> {
    return this.prisma.prizeProgress.create(args);
  }
  async updatePrizeProgress(
    args: Prisma.PrizeProgressUpdateArgs
  ): Promise<PrismaPrizeProgress> {
    return this.prisma.prizeProgress.update(args);
  }
  async deletePrizeProgress(
    args: Prisma.PrizeProgressDeleteArgs
  ): Promise<PrismaPrizeProgress> {
    return this.prisma.prizeProgress.delete(args);
  }

  async getKid(parentId: string): Promise<PrismaKid | null> {
    return this.prisma.prizeProgress
      .findUnique({
        where: { id: parentId },
      })
      .kid();
  }

  async getPrize(parentId: string): Promise<PrismaPrize | null> {
    return this.prisma.prizeProgress
      .findUnique({
        where: { id: parentId },
      })
      .prize();
  }
}
