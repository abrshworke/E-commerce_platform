import mongoose from "mongoose";

let cached = global.mongoose
if (!cached) {
    global.cached = {conn : null , Promise: null}
}

async function ConnectDB() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.Promise) {
        const opts = {
            bufferCommands: false
        }
    }
    cached.Promise = mongoose.connect(`${process.env.MONGODB_URI}/commerce`,opts).then(mongoose => {
        return mongoose
    })

    cached.conn = await cached.Promise
    return cached.conn

}

export default ConnectDB;


