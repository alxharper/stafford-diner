import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCmkMpRNbeGkP2frWG5ONdQ-M-67tDffu4",
	authDomain: "stafford-diner.firebaseapp.com",
	databaseURL: "https://stafford-diner.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
