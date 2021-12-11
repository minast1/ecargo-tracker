import { Tracker } from '.prisma/client';
import {  Get,  Put,createHandler,  Post, HttpCode, Delete, Body, Param, ParseNumberPipe } from '@storyofams/next-api-decorators';
//import { addTrackerInput } from '../../../dto/addTrackerDto';
import prisma from '../../../src/Prisma';

//date
//tracking_number  
//courier
//message? 
class TrackingHandler {   

  //GET /api/v2   Admin route
  @Get()
 async fetchAllTracking() {
    const trackers = await await prisma.tracker.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return trackers;
  }

  //Put /api/v2/:id   This is done by the admin at the backend
  @Put('/:id')
  async updateTracker(
    @Param('id', ParseNumberPipe) id: number,
    @Body() body : Tracker
  ): Promise<Tracker | void> {
    
    const updatedTracker = await prisma.tracker.update({
      where: {
        id: id
      },
      data: {
        status: body.status,
        date: body.date,
        message: body.message
      }
    });
    return updatedTracker 
  }
  
   //POst /api/v2/:id
  @Delete('/:id')
  @HttpCode(204)
  async deleteTracker(@Param('id', ParseNumberPipe) id: number): Promise<void> {
         await prisma.tracker.delete({
      where: {
        id: id 
      }
    })
  }

  //POsT /api/v2  requsest sent from the frontend client 
  @Post()
  @HttpCode(201)
  async findOrCreateTracker(@Body() body:Tracker): Promise<Tracker>{
    const tracker = await prisma.tracker.findFirst({
      where: {
        tracking_number: {
          equals: body.tracking_number
        }
          
      /*  courier: {
          equals: body.courier
        }*/
          }
    });

    if (!tracker) {
      return await prisma.tracker.create({
        data: {
          tracking_number: body.tracking_number,
          courier: body.courier
        }
      })
    }
    return tracker
  }
}

export default createHandler(TrackingHandler)