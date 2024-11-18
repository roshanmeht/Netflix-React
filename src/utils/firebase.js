 import { getAuth} from "firebase/auth";
 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: "AIzaSyB2r1zgbTB-dvw1TPuxMLZ3BeIsuoR0yAw",
//   authDomain: "netflix-3b187.firebaseapp.com",
//   projectId: "netflix-3b187",
//   storageBucket: "netflix-3b187.appspot.com",
//   messagingSenderId: "205729228804",
//   appId: "1:205729228804:web:875dfd7cc6d89ea2b46d51",
//   measurementId: "G-3HK026JBT1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseConfig = {
  apiKey: "AIzaSyCSjxEyxa9I7TrgMdja1nmTBkcZzj0bX58",
  authDomain: "netflix-75555.firebaseapp.com",
  projectId: "netflix-75555",
  storageBucket: "netflix-75555.firebasestorage.app",
  messagingSenderId: "1054555655783",
  appId: "1:1054555655783:web:c818d8c0bf94417302cec2",
  measurementId: "G-DB7FF31VS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();