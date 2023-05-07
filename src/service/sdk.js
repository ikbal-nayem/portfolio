import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

var basicData = {};

const getBasicData = async () => {
	const qs = await getDocs(collection(db, "basic_info"));
	basicData = qs.docs.at(0).data();
};

getBasicData();

export { basicData };
