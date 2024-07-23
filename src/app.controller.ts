import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { Notification } from '@prisma/client';
import { CreateNotificationBody } from './create-notification-body';

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
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);

    const { category, content, recipient_id } = body;

    return await this.prisma.notification.create({
      data: {
        category,
        content,
        recipient_id,
      },
    });
  }
}
