import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { Notification } from '@prisma/client';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async getAll(): Promise<Notification[]> {
    return await this.prisma.notification.findMany();
  }

  @Post()
  async create(): Promise<Notification> {
    return await this.prisma.notification.create({
      data: {
        category: 'SOCIAL',
        content: 'You have a new friend request!',
        recipient_id: randomUUID(),
      },
    });
  }
}
