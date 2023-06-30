import moment from "moment";
import PrintJS from "print-js";
import Title from "../common/Title";
import "./index.scss";
import ExperianceItem from "./Item/Experiance";
import { basicData, educationInfo, experianceInfo } from "../../service/sdk";
import EducationItem from "./Item/Education";

const Resume = () => {
	const duration = moment.duration(moment().diff(basicData?.jobStartDate));

	return (
		<div className="page" id="resume">
			<Title icon="fas fa-briefcase">
				Total Experience &lt;{duration.years()} years, {duration.months()}{" "}
				months&gt;
			</Title>
			{experianceInfo?.map((company) => (
				<ExperianceItem data={company} key={company?.id} />
			))}

			<Title icon="fa fa-university">Education</Title>
			{educationInfo?.map((edu) => (
				<EducationItem data={edu} key={edu?.id} />
			))}

			<div className="download">
				<button className="download__btn" onClick={() => PrintJS(basicData.cv)}>
					Print CV <i className="fa fa-download"></i>
				</button>
			</div>
		</div>
	);
};

export default Resume;
