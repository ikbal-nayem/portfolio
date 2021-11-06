import React from 'react';
import './index.scss';
import Slider from "../../../components/Slider";

const WorkItem = ({ images, title, description, sourceCodeLink, demoLink }) => {
	return (
		<React.Fragment>
			<div className="work-item">
				<h2>{title}</h2>
				<hr />
				<Slider images={images} classNames={'work-item__slider'}/>
				<i className="work-item__description">{description}</i>
				<div className="work-item__links">
					<a target="_blank" href={sourceCodeLink} rel="noreferrer" className="work-item__source-code">
						<i className="fas fa-code" /> Source Code
					</a>
					<a target="_blank" href={demoLink} rel="noreferrer" className="work-item__demo">
						<i className="fas fa-rocket" /> Demo
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default WorkItem;
