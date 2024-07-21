import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EndeavorServiceBase } from "./base/endeavor.service.base";

@Injectable()
export class EndeavorService extends EndeavorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
