import moment from "moment";
import PrintJS from "print-js";
import pdf from "../../CV/Ikbal-Nayem.pdf";
import Title from "../common/Title";
import { companyData } from "./data";
import "./index.scss";
import ResumeItem from "./Item";

const Resume = () => {
	return (
		<div className="page" id="resume">
			<Title icon="fa fa-briefcase">
				Resume - Total Experience{" "}
				{moment().diff("08/01/2020", "years", true).toFixed(2)} years
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
				<button className="download__btn" onClick={() => PrintJS(pdf)}>
					Print CV <i className="fa fa-download"></i>
				</button>
			</div>
		</div>
	);
};

export default Resume;
