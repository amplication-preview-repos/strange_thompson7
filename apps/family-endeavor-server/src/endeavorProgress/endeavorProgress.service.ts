import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EndeavorProgressServiceBase } from "./base/endeavorProgress.service.base";

@Injectable()
export class EndeavorProgressService extends EndeavorProgressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
