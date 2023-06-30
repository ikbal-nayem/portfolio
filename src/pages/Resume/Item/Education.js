import React from "react";

const EducationItem = ({ data }) => {
	return (
		<div className="resume-item">
			<div className="resume-item__experience">
				<div>
					<div className="resume-item__date">Session: {data?.session}</div>
					<div className="resume-item__company">
						<h3>{data?.instituteName}</h3>
						<strong>{data?.certificateName}</strong>
					</div>
					<small>
						Result: {data?.result} out of {data?.outOf}
					</small>
				</div>
				{!!data?.image && (
					<a href={data?.website || "#"} target="_blank" rel="noreferrer">
						<img src={data.image} alt={data?.website} className="img" />
					</a>
				)}
			</div>
		</div>
	);
};

export default EducationItem;
