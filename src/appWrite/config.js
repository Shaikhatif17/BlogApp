import conf from '../Conf/conf';
import {Client ,Acount ,ID,Databases,Storage,Query} from "appwrite"


export class Service {
Client = new Client();
databases ;
bucket;
constructor(){
    this.Client
    .setEndpoint(conf.appWriteUrl)
    .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.Client)
}

async createPost({title , slug , content , featuredImage,status ,userId}){
try {
    await this.databases.createDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug, //slug is document id
        {
            title,
            content,
            featuredImage,
            status,
            userId
        } )




} catch (error) {
    console.log("Appwrite service :: createPost :: error",error);
}
}


async updatePost (slug , {title,content,featuredImage,status}){
    try {
        await this.databases.updateDocument(conf.appWriteDataBaseId,conf.appWriteCollectionId ,slug ,
            {
            title,
            content,
            featuredImage,
            status
        })
    } catch (error) {
        console.log("Appwrite service :: updatePost :: error",error);
    }

}

async deletePost (slug){
    try {
        await this.databases.deleteDocument(conf.appWriteDataBaseId,conf.appWriteCollectionId,slug,  )
        return true;
    } catch (error) {
console.log("Appwrite service :: deletePost :: error",error);
return false;
        
    }
}

async getPost(slug){
try {
    await this.databases.getDocument(conf.appWriteDataBaseId,conf.appWriteCollectionId, slug)
    return true
} catch (error) {
    console.log("Appwrite service :: getPost :: error",error);
    return false;
}

}

async getPosts(queries = [Query.equal("status", "active")]){

    try {
        await this.databases.getDocument(
            conf.appWriteDataBaseId,
            conf.appWriteCollectionId,
            queries
        )
    } catch (error) {
        console.log("Appwrite service ::getPosts :: error",error);
    }
}

// file upload service


async uploadFile (file){
    try {
        return await this.bucket.createFile(
            conf.appWriteBucketId,
            ID.unique(),
            file
        )
        return true
    } catch (error) {
        console.log("Appwrite service ::uploadFile :: error",error);
    }
    return false
}

async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(conf.appWriteBucketId,fileId)
        return true
    } catch (error) {
        console.log("Appwrite service ::deleteFile :: error",error);
         return false
    }
}

getFilePreview(fileId){
return this.bucket.getFilePreview(conf.appWriteBucketId,fileId)
}
}



const service =new Service()
export default service
