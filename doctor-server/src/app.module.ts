import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { DoctorModule } from './doctor/doctor.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { StreamingModule } from './streaming/streaming.module';

@Module({
  imports: [DoctorModule,StreamingModule],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: UserGuard,
    // },
    AppService
  ],
})
export class AppModule { }
