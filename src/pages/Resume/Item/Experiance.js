import React from "react";
import "./index.scss";

const ExperianceItem = ({ data }) => {
	const startDate = data.startDate?.toDate()?.toDateString()?.split(" ");
	const endDate = data.endDate?.toDate()?.toDateString()?.split(" ");

	return (
		<div className="resume-item">
			<div className="resume-item__experience">
				<div>
					<div className="resume-item__date">
						{startDate[1]} {startDate[3]} -{" "}
						{endDate ? `${endDate[1]} ${endDate[3]}` : "Present"}
					</div>
					<div className="resume-item__company">
						<h3>{data?.companyName}</h3>
						<strong>{data?.designation}</strong>
					</div>
				</div>
				<img src={data?.companyImage} alt={data?.companyName} />
			</div>
			<p className="resume-item__desc">
				<ul>
					{data?.responsibilities?.map((desc, i) => (
						<li key={i}>{desc}</li>
					))}
				</ul>
			</p>
		</div>
	);
};

export default ExperianceItem;
