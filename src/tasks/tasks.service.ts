import { Injectable } from '@nestjs/common';
import { Task } from "./interfaces/Task";

@Injectable()
export class TasksService {
  // este arreglo simula el retorno de la DB.
  tasks: Task[] = [
    {
      id: 1,
      title: "Testing 1",
      description: "Testing desc 1",
      done: true
    },
    {
      id: 2,
      title: "Testing 2",
      description: "Testing desc 2 ",
      done: true
    },
    {
      id: 3,
      title: "Testing 3",
      description: "Testing desc 3",
      done: true
    }
  ]

  getTasks(): Task[] {
    return this.tasks
  }

  getTask(id: number): Task {
    return this.tasks.find(task => task.id === id)
  }


}
