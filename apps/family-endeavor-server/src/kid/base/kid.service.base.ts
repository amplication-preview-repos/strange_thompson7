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
  Kid as PrismaKid,
  EndeavorProgress as PrismaEndeavorProgress,
  PrizeProgress as PrismaPrizeProgress,
  Parent as PrismaParent,
} from "@prisma/client";

export class KidServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.KidCountArgs, "select">): Promise<number> {
    return this.prisma.kid.count(args);
  }

  async kids(args: Prisma.KidFindManyArgs): Promise<PrismaKid[]> {
    return this.prisma.kid.findMany(args);
  }
  async kid(args: Prisma.KidFindUniqueArgs): Promise<PrismaKid | null> {
    return this.prisma.kid.findUnique(args);
  }
  async createKid(args: Prisma.KidCreateArgs): Promise<PrismaKid> {
    return this.prisma.kid.create(args);
  }
  async updateKid(args: Prisma.KidUpdateArgs): Promise<PrismaKid> {
    return this.prisma.kid.update(args);
  }
  async deleteKid(args: Prisma.KidDeleteArgs): Promise<PrismaKid> {
    return this.prisma.kid.delete(args);
  }

  async findEndeavorProgresses(
    parentId: string,
    args: Prisma.EndeavorProgressFindManyArgs
  ): Promise<PrismaEndeavorProgress[]> {
    return this.prisma.kid
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .endeavorProgresses(args);
  }

  async findPrizeProgresses(
    parentId: string,
    args: Prisma.PrizeProgressFindManyArgs
  ): Promise<PrismaPrizeProgress[]> {
    return this.prisma.kid
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .prizeProgresses(args);
  }

  async getParent(parentId: string): Promise<PrismaParent | null> {
    return this.prisma.kid
      .findUnique({
        where: { id: parentId },
      })
      .parent();
  }
}
