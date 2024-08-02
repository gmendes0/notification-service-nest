import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**
   * This method will be called when the module is initialized.
   */
  async onModuleInit() {
    await this.$connect();
  }
}
