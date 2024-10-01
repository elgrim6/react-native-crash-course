
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.reactnativecrashcourse.aora",
    projectId: "66fa8b1d002abb494ccd",
    databaseId: "66fa8d5d000334e91c77",
    userCollectionId: "66fa8da800113c3ef755",
    videoCollectionId: "66fa8dd30032f1fd6dda",
    storageId: "66fa8edc003d921ba516"
}

const{
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId
} =config;


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const avatars = new Avatars(client);
    const databases = new Databases(client);
    const account = new Account(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if (!newAccount) throw Error;

        const avatarURL = avatars.getInitials(username)
        await signIn(email, password)
        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                email,
                username,
                avatar: avatarURL,
                accountID: newAccount.$id
            }
        )
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}

export const signIn= async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
} 

export const getCurrentUser = async ()=> {
    try {
        const currentAccount=await account.get();
        if(!currentAccount) throw Error

        const currentUser= await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountID',currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}

export const getAllPosts = async ()=> {
    try {
        const posts= await databases.listDocuments(
            databaseId,
            videoCollectionId
        )
        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}