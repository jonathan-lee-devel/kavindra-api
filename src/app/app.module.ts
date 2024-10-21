import { Module } from '@nestjs/common';

import { BuildSystemsModule } from './build-systems/build-systems.module';
import { IssuesModule } from './issues/issues.module';
import { ReleasesModule } from './releases/releases.module';
import { SourceControlModule } from './source-control/source-control.module';

@Module({
  imports: [
    IssuesModule,
    ReleasesModule,
    BuildSystemsModule,
    SourceControlModule,
  ],
})
export class AppModule {}
