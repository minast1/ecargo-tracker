import { IsNotEmpty, MinLength } from 'class-validator';


//tracking_number
//courier

export class addTrackerInput {
    @IsNotEmpty({message: 'Please select a courier service'})
    public courier: string ;

    @IsNotEmpty({message: 'Please enter your tracking number'})
    @MinLength(8, {message: 'Tracking number must be at least 8 characters'})
   public tracking_number:  string 
}