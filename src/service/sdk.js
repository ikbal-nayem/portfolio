import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

var basicData = {};
var skills = [];

const getBasicData = async () => {
	const qs = await getDocs(collection(db, "basic_info"));
	basicData = qs.docs.at(0).data();
};

const getSkills = async () => {
	const qs = await getDocs(collection(db, "skills"));
	skills = qs.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return skills;
};

export { getBasicData, basicData, getSkills, skills };
