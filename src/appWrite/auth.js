import conf from "../Conf/conf";
import {Client ,Account ,ID} from "appwrite"

export class AuthService {
    client = new Client();
    account;


    constructor() {
this.client
.setEndpoint(conf.appWriteUrl)
.setProject(conf.appWriteProjectId);
this.account = new Account(this.client);
 }

 async createAcount ({email,password , name}){
try {
   const userAccount= await this.account.create(ID.unique(),email,password,name)
   if(userAccount){
   //call another method
   }else{
    return
   }
} catch (error) {
    console.log("Appwrite service :: createAcount :: error",error);
}
 }

 async login ({email,password}){
try {
  return  await this.account.createEmailSession(email,password);

} catch (error) {
    console.log("Appwrite service :: login :: error",error);
}
 }

 async getCurrentUser (){
try {
    await this.account.get();
} catch (error) {
    console.log("Appwrite service :: getCurrentUser :: error",error);
}
return null;
 }
 async logout (){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite service :: logout :: error",error);
    }
    return null;
 }
    
    }







   
    



const authService = new AuthService();
export default authService