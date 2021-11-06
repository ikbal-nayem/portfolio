import React from 'react';
import PrintJS from 'print-js';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";
import nice_logo from '../../assets/Nice_Logo.png';
import pdf from '../../CV/Ikbal-Nayem.pdf'

const Resume = () => {
	return (
		<div className="page" id="resume">
			<Title icon={'fa fa-briefcase'}>
				Resume - Total Experience {moment().diff('08/01/2020', 'years', true).toFixed(2)} years
			</Title>
			<ResumeItem
				date={'Aug 2020 - Present'}
				title={'React Developer'}
				company={'Nice Power & IT Solution LTD'}
				logo={nice_logo}
			>
				<ul>
					<li>Participate in the entire application lifecycle, focusing on coding and debugging</li>
					<li>Developing and implementing front-end architecture to support user interface concepts</li>
					<li>Writing application interface codes using JavaScript following React.js workflows</li>
					<li>Modifying software to fix errors, adapt it to new hardware, improve its performance</li>
					<li>Developing and implementing highly-responsive user interface components using React concepts</li>
				</ul>
			</ResumeItem>
			<Title icon='fa fa-university'>
				Education
			</Title>
			<ResumeItem
				date={'2016 – 2020'}
				company={'National University'}
				logo={'https://seeklogo.com/images/N/national-university-of-bangladesh-logo-105B0CD1FD-seeklogo.com.png'}
			>
				Bachelor of Science in Computer Science and Engineering
			</ResumeItem>

			<div className="download">
				<button
					className="download__btn"
					onClick={()=>PrintJS(pdf)}
				>
					Print CV <i className="fa fa-download"></i>
				</button>
			</div>
			
		</div>
	);
};

export default Resume;
