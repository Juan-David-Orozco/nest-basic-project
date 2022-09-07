import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'

@Controller('tasks')
export class TasksController {

  @Get()
  gesTasks(): {hello: string} {
    //return "Retrieving Tasks";
    return {"hello": "world"};
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task)
    return "Creating Task";
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
