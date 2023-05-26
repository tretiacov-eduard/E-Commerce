import { initializeApp } from 'firebase/app'
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQIAZ8gsMHrE54FYC08q3TmiNG6brVPAs",
  authDomain: "crwn-clothing-725d3.firebaseapp.com",
  projectId: "crwn-clothing-725d3",
  storageBucket: "crwn-clothing-725d3.appspot.com",
  messagingSenderId: "273539547266",
  appId: "1:273539547266:web:e5bf72b888adb3fd94f49b",
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth  = async (
  userAuth, 
  additionalInformation = {}
  ) => {
    
  if(!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid )

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth 
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName, 
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error.message);
    }

    return userDocRef;

  }

} 

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}