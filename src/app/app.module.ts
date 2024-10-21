import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BuildSystemsModule } from './build-systems/build-systems.module';
import { ClientsModule } from './clients/clients.module';
import { IssuesModule } from './issues/issues.module';
import { ReleasesModule } from './releases/releases.module';
import { SourceControlModule } from './source-control/source-control.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    IssuesModule,
    ReleasesModule,
    BuildSystemsModule,
    SourceControlModule,
    ClientsModule,
  ],
})
export class AppModule {}
