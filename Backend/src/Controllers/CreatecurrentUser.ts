import { Request, Response } from "express";
import User from "../Models/user";


 const CreatecurrentUser =async (req:Request, res:Response) => {
  try {
    const {Auth0Id} = req.body;
    const  existingUser  = await User.findOne({ Auth0Id: Auth0Id})

    if(existingUser){
     return   res.status(200).send({
        message: "user already exist",

    })
    }

    const  NewUser = new User(req.body)
    await  NewUser.save();

    res.status(201).json(NewUser.toObject())

  } catch(err) {
        // Handle errors
        console.error("Error in creating user:", err);
    res.status(500).send({
        message: "error in creating user",
        error: err,
        status: 500,


    })
  }
  
}

export default CreatecurrentUser;