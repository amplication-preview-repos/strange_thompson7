import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrizeProgressServiceBase } from "./base/prizeProgress.service.base";

@Injectable()
export class PrizeProgressService extends PrizeProgressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
