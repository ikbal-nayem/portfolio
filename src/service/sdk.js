import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

var basicData = {};
var skills = [];
var educationInfo = [];
var experianceInfo = [];

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

const getExperianceInfo = async () => {
	const qs = await getDocs(
		query(collection(db, "experience_info"), orderBy("sl", "desc"))
	);
	experianceInfo = qs.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return experianceInfo;
};

export {
	getBasicData,
	basicData,
	getSkills,
	skills,
	getEducationInfo,
	educationInfo,
	getExperianceInfo,
	experianceInfo,
};
