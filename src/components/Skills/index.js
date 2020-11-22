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
			<h6>Skills</h6>
			<ul onMouseEnter={stopThemeChangeTimer}
				onMouseLeave={startThemeChangeTimer}
				onMouseOver={handleMouseEnter}
			>
				<li id="python">Python</li>
				<li id="django">Django</li>
				<li id="drf">Rest_Framework</li>
				<li id="flask">Flask</li>
				<li id="react" >React</li>
				<li id="redux">Redux</li>
				<li id="jquery">jQuery</li>
				<li id="node">Node</li>
				<li id="javascript">JavaScript</li>
				<li id="bootstrap">Bootstrap</li>
				<li id="mysql">MySQL</li>
				<li id="c">C</li>
				<li id="cpp">C++</li>
			</ul>
		</div>
	);
};

export default Skills;
