import { TestBed } from '@automock/jest';

import { IssuesController } from './issues.controller';

describe('IssuesController', () => {
  let controller: IssuesController;

  beforeEach(async () => {
    const { unit } = TestBed.create(IssuesController).compile();
    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
