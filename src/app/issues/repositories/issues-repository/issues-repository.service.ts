import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../../lib/prisma/services/prisma.service';

@Injectable()
export class IssuesRepositoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async test() {
    await this.prismaService.test.create({
      data: {
        email: 'test@test.com',
        name: 'John Doe',
      },
    });
  }

  async testGet() {
    return this.prismaService.test.findMany();
  }
}
