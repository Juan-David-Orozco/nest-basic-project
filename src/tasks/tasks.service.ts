import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from "./interfaces/Task";

@Injectable()
export class TasksService {

  //constructor(@InjectModel('task') taskModel: Model<Task>) {}
  //private readonly

}
