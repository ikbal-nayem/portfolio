import React, { useContext } from 'react';
import './index.scss';
import { ThemeContext } from "../../context/ThemeContext";

const Skills = () => {
	const { changeTheme, startThemeChangeTimer, stopThemeChangeTimer } = useContext(ThemeContext);

	function handleMouseEnter(e) {
		const type = e.nativeEvent.target.id;
		if (type) {
			changeTheme(type)
		}
	}

	return (
		<div className="skills">
			<h4>Technical Skills</h4>
			<ul
				onMouseEnter={stopThemeChangeTimer}
				onMouseLeave={startThemeChangeTimer}
				onMouseOver={handleMouseEnter}
			>
				<li id="javascript">JavaScript</li>
				<li id="typescript">TypeScript</li>
				<li id="react">ReactJS</li>
				<li id="node">NodeJS</li>
				<li id="redux">Redux</li>
				<li id="python">Python</li>
				<li id="django">Django</li>
				<li id="drf">Rest_Framework</li>
				<li id="flask">Flask</li>
				<li id="jquery">jQuery</li>
				<li id="bootstrap">Bootstrap</li>
				<li id="mysql">MySQL</li>
				<li id="mongodb">MongoDB</li>
				<li id="docker">Docker</li>
				<li id="git">Git</li>
			</ul>
		</div>
	);
};

export default Skills;
