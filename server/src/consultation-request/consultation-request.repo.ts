import { PrismaGenericRepo } from "@/shared/prisma-client/prisma-generic.repo";
import { PrismaService } from "@/shared/prisma-client/prisma.service";
import { Injectable } from "@nestjs/common";
import { ConsultatinReq, Prisma } from "@prisma/client";

@Injectable()
export class ConsultatinReqRepo extends PrismaGenericRepo<Prisma.ConsultatinReqCreateInput, ConsultatinReq, Prisma.ConsultatinReqInclude> {
    constructor(private prismaService: PrismaService) {
        super('consultatinReq', prismaService, { patient: true })
    }

}