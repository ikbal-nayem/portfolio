import moment from "moment";
import PrintJS from "print-js";
import Title from "../common/Title";
import { companyData } from "./data";
import "./index.scss";
import ResumeItem from "./Item";
import { basicData } from "../../service/sdk";

const Resume = () => {
	const duration = moment.duration(moment().diff(basicData?.jobStartDate));
	// console.log(educationInfo);
	return (
		<div className="page" id="resume">
			<Title icon="fas fa-briefcase">
				Total Experience &lt;{duration.years()} years, {duration.months()}{" "}
				months&gt;
			</Title>
			{companyData?.map((company) => (
				<ResumeItem
					key={company.id}
					date={`${company?.startDate} - ${company?.endDate}`}
					title={company?.desicnation}
					company={company?.companyName}
					logo={company?.companyLogo}
				>
					<ul>
						{company?.description?.map((desc) => (
							<li>{desc}</li>
						))}
					</ul>
				</ResumeItem>
			))}
			<Title icon="fa fa-university">Education</Title>
			<ResumeItem
				date={"2016 – 2020"}
				company={"National University"}
				logo={
					"https://seeklogo.com/images/N/national-university-of-bangladesh-logo-105B0CD1FD-seeklogo.com.png"
				}
			>
				Bachelor of Science in Computer Science and Engineering
			</ResumeItem>

			<div className="download">
				<button className="download__btn" onClick={() => PrintJS(basicData.cv)}>
					Print CV <i className="fa fa-download"></i>
				</button>
			</div>
		</div>
	);
};

export default Resume;
