import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

var basicData = {};
var skills = [];
var educationInfo = [];

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

const getEducationInfo = async () => {
	const qs = await getDocs(collection(db, "education_info"));
	educationInfo = qs.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return educationInfo;
};

export {
	getBasicData,
	basicData,
	getSkills,
	skills,
	getEducationInfo,
	educationInfo,
};
