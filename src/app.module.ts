import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB } from './config'

@Module({
  imports: [TasksModule, MongooseModule.forRoot(MONGODB)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
