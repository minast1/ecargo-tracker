import { Order } from '.prisma/client';
import {  Get,  Put,createHandler,  Post, HttpCode, Delete, Body, Param, NotFoundException } from '@storyofams/next-api-decorators';
//import { addTrackerInput } from '../../../dto/addTrackerDto';
import prisma from '../../../../src/Prisma';

//date
//tracking_number  
//courier
//message? 
class OrderHandler {   

  //GET /api/v2/orders   Admin route
  @Get()
 async fetchAllOrders() {
    const orders =  await prisma.order.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return orders;
  }

  //Put /api/v2/orders/:id   This is done by the admin at the backend
  @Put('/:id')
  async updateOrderDetails(
    @Param('id') id: string,
    @Body() body : Pick<Order, "status" | "createdAt">
  ): Promise<Order | void> {
    
    const updatedOrderStatus = await prisma.order.update({
      where: {
        id: id
      },
      data: {
        status: body.status,
        createdAt: body.createdAt
      }
    });
    return updatedOrderStatus
  }
  
   //Delete /api/v2/orders/:id
  @Delete('/:id')
  @HttpCode(204)
  async deleteOrder(@Param('id') id: string): Promise<void> {
         await prisma.order.delete({
      where: {
        id: id 
      }
    })
  }

  //POsT /api/v2/orders  requsest sent from the frontend client 
  @Post()
  @HttpCode(201)
  async CreateOrder(@Body() body: Order): Promise<Order>{
   
      return await prisma.order.create({
          data: {
              awb: body.awb ,
              //jrn: body.jrn != null ? body.awb: undefined ,
              email: body.email,
              phone: body.phone != null ? body.phone : undefined,
              status: body.status
          }
      });
    
  }
    
    //Get /api/v2/orders/:id
    @Get('/:id')
    async getUserTrackin(@Param('id') id: string): Promise<Order> {
        const order =  await prisma.order.findUnique({
            where: {
                awb:  id
                 }
        })
        if (!order) {
            throw new NotFoundException(`Invalid Tracking Number`);
        }
        return order
    }
}

export default createHandler(OrderHandler)