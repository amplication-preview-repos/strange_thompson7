import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrizeServiceBase } from "./base/prize.service.base";

@Injectable()
export class PrizeService extends PrizeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
