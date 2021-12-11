import { NextApiRequest, NextApiResponse } from "next";
//import tracker from 'delivery-tracker';

//var tracker = require('delivery-tracker')



const handler = async (_req: NextApiRequest, res: NextApiResponse) => {

    res.json({ data : 'hello world'})
  /*   const courierString = "FEDEX"
    const courier = tracker.courier(tracker.COURIER[courierString].CODE);
  
    interface checkPointResponse {
        location: string
        message: string
        time:string
    }
    interface apiResponse {
        location: string
        message: string
        time: string
        status: string
        checkpoints: checkPointResponse[]
    }
    

    courier.trace("123456789012", function (err:Error, result:apiResponse) {
        if (result) res.send(result)
        if(err) console.log(err)
    })*/
    
};

export default handler;