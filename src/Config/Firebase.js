import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAEdeamTdImajq5uyroZg4SuFfgvCSsqRE",
    authDomain: "main-mern-7dd3c.firebaseapp.com",
    projectId: "main-mern-7dd3c",
    storageBucket: "main-mern-7dd3c.appspot.com",
    messagingSenderId: "862756897576",
    appId: "1:862756897576:web:6ac15a3a22cea9012b461d"
};

// Initialize Firebase



const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app)
// url crfeate work in firebase
export async function urlGetNodeWork(info) {
    try {
        const { img } = info
        // step 1
        const storageRef = ref(storage, `adds - ${img.name}`);
        await uploadBytes(storageRef, img)
        // step2
        const url = await getDownloadURL(storageRef)
        // step3
        await addDoc(collection(db, "image"), {
            URlimage: url
        });
        alert('Success')

        return url
    } catch (e) {
        alert(e.message)
        throw e;
    }
}

export async function getUrl() {
    const querySnapshot = await getDocs(collection(db, "image"));
    const ADD = []

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const ads = doc.data();
        ads.id = doc.id

        ADD.push(ads)

    });

    return ADD
}
//--------------------------------------------------------------