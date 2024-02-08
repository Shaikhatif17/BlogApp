import conf from "../Conf/conf";
import {Client ,Acount ,ID} from "appwrite"

export class AuthService {
    client = new Client();
    acount;


    constructor() {
this.client
.setEndpoint(conf.appWriteUrl)
.setProject(conf.appWriteProjectId);
this.acount = new Acount(this.client);
 }

 async createAcount ({email,password , name}){
try {
   const userAcount= await this.acount.create(ID.unique(),email,password,name)
   if(userAcount){
   //call another method
   }else{
    return
   }
} catch (error) {
    throw error
}
 }

 async login ({email,password}){
try {
  return  await this.acount.createEmailSession(email,password);

} catch (error) {
    throw error;
}
 }

 async getCurrentUser (){
try {
    await this.acount.get();
} catch (error) {
    throw error
}
return null;
 }
 async logout (){
    try {
        await this.acount.deleteSessions();
    } catch (error) {
        throw error
    }
    return null;
 }
    
    }







   
    



const authService = new AuthService();
export default authService