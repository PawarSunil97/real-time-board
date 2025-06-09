import {auth} from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async()=>{
    try{
        await signInWithPopup(auth, provider);
    }catch(error){
        console.log('Error signing in with Google', error);
        throw error;
    }
}