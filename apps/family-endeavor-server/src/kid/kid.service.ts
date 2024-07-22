import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KidServiceBase } from "./base/kid.service.base";

@Injectable()
export class KidService extends KidServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
