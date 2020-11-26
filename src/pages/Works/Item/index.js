import React from 'react';
import './index.scss';
import Slider from "../../../components/Slider";

const WorkItem = ({images, title, description, sourceCodeLink, demoLink}) => {
    return (
        <React.Fragment>
            <div className="work-item">
                <h2>{title}</h2>
                <hr />
                <Slider
                    images={images}
                    classNames={'work-item__slider'}
                />
                <i>{description}</i>
                <div className="work-item__links">
                    <a href={sourceCodeLink} className="work-item__source-code"><i className="fas fa-code"/>Source Code</a>
                    <a href={demoLink} className="work-item__demo"><i className="fas fa-rocket" />Demo</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default WorkItem;
