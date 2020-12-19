import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
	return (
		<div className="page" id="resume">
			<Title icon={'fa fa-briefcase'}>
				Resume - Total Commercial Experience {moment().diff('08/01/2020', 'years', true).toFixed(2)} years
			</Title>
			<ResumeItem
				date={'Aug 2020 - Present'}
				title={'Jr. Programmer'}
				company={'Nice Power and IT Solution LTD'}
				logo={'https://www.nicegroupbd.com/images/icone.png'}
			>
				• Collaborate with team members to determine best practices and client requirements for software<br/>
				• Developing and implementing front-end architecture to support user interface concepts<br/>
				• Writing application interface codes using JavaScript following React.js workflows<br/>
				• Modifying software to fix errors, adapt it to new hardware, improve its performance, or upgrade interfaces<br/>
				• Developing and implementing highly-responsive user interface components using React concepts<br/>
				• Reviewing application requirements and interface designs
			</ResumeItem>
			<Title icon={'fa fa-university'}>
				Education
			</Title>
			<ResumeItem
				date={'2016 – 2020'}
				title={'National University'}
				company={''}
				logo={'https://seeklogo.com/images/N/national-university-of-bangladesh-logo-105B0CD1FD-seeklogo.com.png'}
			>
				Bachelor of Science in Computer Science and Engineering
			</ResumeItem>

			<div className="download">
				<a href="https://drive.google.com/file/d/19mMozCLwcoayBEUxl7X3gdRlJe5Sy0Q3/view"
					target="_blank"
					rel="noreferrer"
					className="download__btn"
				>
					Download CV <i className="fa fa-download"></i>
				</a>
			</div>
			
		</div>
	);
};

export default Resume;
