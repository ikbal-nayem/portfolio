import React from 'react';
import PrintJS from 'print-js';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";
import pdf from '../../CV/Ikbal-Nayem.pdf'

const Resume = () => {
	return (
		<div className="page" id="resume">
			<Title icon={'fa fa-briefcase'}>
				Resume - Total Experience {moment().diff('08/01/2020', 'years', true).toFixed(2)} years
			</Title>
			<ResumeItem
				date={'Aug 2020 - Present'}
				title={'Jr. React Developer'}
				company={'Nice Power and IT Solution LTD'}
				logo={'https://www.nicegroupbd.com/images/icone.png'}
			>
				• Developing and implementing front-end architecture to support user interface concepts<br/>
				• Implemented ReactJS code to handle cross browser compatibility issues in Mozilla, IE 7, 8, 9, Safari<br/>
				• Writing application interface codes using JavaScript following React.js workflows<br/>
				• Modifying software to fix errors, adapt it to new hardware, improve its performance, or upgrade interfaces<br/>
				• Developing and implementing highly-responsive user interface components using React concepts<br/>
				• Reviewing application requirements and interface designs
			</ResumeItem>
			<Title icon='fa fa-university'>
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
				<button
					className="download__btn"
					onClick={()=>PrintJS(pdf)}
				>
					Download CV <i className="fa fa-download"></i>
				</button>
			</div>
			
		</div>
	);
};

export default Resume;
