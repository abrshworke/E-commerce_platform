
import { Inngest } from "inngest";
import ConnectDB from "./db";
import User from "@/model/user";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "cart-next" });

export const syncUserCreation = inngest.createFunction(
    {id : 'create-user-from-clerk'},
    {event : 'clerk/user.created'}
)

async({event}) => {
    const {id , first_name , last_name , email_addresses  , image_url} = event.data
    const Userdata = {
        _id: id,
        email: email_addresses[0].email_address,
        name: first_name + ' ' + last_name,
        image_Url: image_url
    }
    await ConnectDB();
    await User.create(Userdata);
}

export const syncUserUpdation = inngest.createFunction(
    {id : 'update-user-from-clerk'},
    {event : 'clerk/user.updated'}
)

async({event}) => {
   const {id, first_name , last_name , email_addresses , image_url} = event.data
   const Userdata = {
    _id: id ,
    email: email_addresses[0].email_address ,
    name: first_name + ' ' + last_name ,
    image_url: image_url
   }
   await ConnectDB()
   await User.findByIdAndUpdate(Userdata);
}

export const syncUserDeletion = inngest.createFunction(
    {id: 'delete-user-with-clerk'},
    {event: 'clerk/user.deleted'}
)
async({event}) => {
  const {id} = event.data

  await ConnectDB();
  await User.findByIdAndDelete(id)
}