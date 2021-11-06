import React, { useState } from 'react';
import { projects } from './data';
import WorkItem from "./Item";
import WorksMenu from "./Menu";
import './index.scss';

const initalState = projects.filter(p => p.type === 'react');

const Works = () => {
    const [selectedProjects, setSelectedProjects] = useState(initalState);
    const [selectedType, setSelectedType] = useState('react');

    function handleMenuChange(type) {
        setSelectedProjects(projects.filter(p => p.type === type));
        setSelectedType(type);
    }


    return (
        <div className="page" id="works">
            <WorksMenu
                items={['django', 'react', 'python']}
                selected={selectedType}
                clicked={handleMenuChange}
            />
            <div className="work-row">
                {
                    selectedProjects.map(
                        item => <WorkItem key={item.sourceCodeLink} {...item}/>
                    )
                }
            </div>
        </div>
    );
};

export default Works;
