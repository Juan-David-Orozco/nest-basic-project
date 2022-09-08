import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/Task";
import { Request, Response } from 'express'

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {} // El servicio se debe instanciar para usarse

  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks()
  }
  // Se pueden manejar con express directamente (Ejemplo)
  //getTasks(@Req() req: Request, @Res() res: Response) {return res.send("Hello World")}

  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTask(id)
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(task)
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id)
    return `Deleting Task ${id}`
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task)
    return `Updating Task ${id}`
  }

}
