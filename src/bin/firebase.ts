import config from "../config/config";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(config.firebase);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
 