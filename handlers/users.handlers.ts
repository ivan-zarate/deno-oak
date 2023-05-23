import { Context, helpers, MongoClient, ObjectId, config } from "../depts.ts";
import { User } from "../types/user.ts";

const {MONGO_URL, MONGO_DB_NAME} = config();

//conexion de la base de datos
const client = new MongoClient();
try {
    await client.connect(MONGO_URL);
    console.log("base de datos conectada");
} catch (error) {
    console.log(error.message);
}

const db = client.database(MONGO_DB_NAME); //Crear una instancia de la base de datos
const userModel = db.collection<User>("users"); //creamos el modelo de los usuarios

export const getAllUsers = async(ctx: Context)=>{
    try {
        const users = await userModel.find().toArray();
        ctx.response.status = 200;
        ctx.response.body = {status:"success", data:users}
    } catch (error) {
        ctx.response.status = 400;
        ctx.response.body = {status:"error", message:error.message}
    }
};

export const getUser = async(ctx: Context)=>{
    try {
    const {uid} = helpers.getQuery(ctx,{mergeParams:true}); //req.params
    const user = await userModel.findOne({_id:new ObjectId(uid)});
    if(user){
        ctx.response.body = {status:"success", data: user}
    } else {
        ctx.response.body = {status:"error", message:"el usuario no existe"}
    }
    } catch (error) {
        ctx.response.status = 400;
        ctx.response.body = {status:"error", message:error.message}
    }
};

export const createUser = async(ctx:Context)=>{
    try {
        const {name, birthdate} = await ctx.request.body().value; //req.body
        const newUser = {
            name:name,
            birthdate:birthdate
        }
        const userCreated = await userModel.insertOne(newUser);
        ctx.response.body = {status:"success", data:userCreated};
    } catch (error) {
        ctx.response.status = 400;
        ctx.response.body = {status:"error", message:error.message}
    }
};