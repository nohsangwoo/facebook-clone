// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_APP_MEASUREMENT_ID,
};

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore;
// const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;

firebase.initializeApp(firebaseConfig);

// firebase최상위
export const firebaseInstance = firebase;

// 인증관리
export const auth = firebase.auth();

// db  컨트롤
export const db = firebase.firestore();

// 파일 업로드 컨트롤
export const storageService = firebase.storage();
