import { Test, TestingModule } from '@nestjs/testing';
import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import { Client } from 'pg';

import { IssuesRepositoryService } from './issues-repository.service';
import { jestIntegrationTestTimeout } from '../../../../lib/constants/testing/integration-testing.constants';
import { PrismaModule } from '../../../../lib/prisma/prisma.module';
import {
  delayedAction,
  runPrismaMigrations,
} from '../../../../lib/util/helpers.util';

describe('IssuesRepositoryService', () => {
  jest.setTimeout(jestIntegrationTestTimeout);

  let repository: IssuesRepositoryService;
  let postgresContainer: StartedPostgreSqlContainer;
  let postgresClient: Client;

  beforeAll(async () => {
    postgresContainer = await new PostgreSqlContainer().start();
    postgresClient = new Client({
      connectionString: postgresContainer.getConnectionUri(),
    });
    await postgresClient.connect();
    await runPrismaMigrations(postgresContainer.getConnectionUri());
  });

  afterAll(async () => {
    await postgresClient.end();
    await delayedAction(async () => {
      await postgresContainer.stop();
    });
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [IssuesRepositoryService],
    }).compile();

    repository = module.get<IssuesRepositoryService>(IssuesRepositoryService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create test data with no error', async () => {
    await repository.test();

    const result = await repository.testGet();
    expect(result).toBeDefined();
  });
});
