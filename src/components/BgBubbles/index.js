import React from "react";
import { useAnimation } from "../../use/animation";
import { useTheme } from "../../context/ThemeContext";

import "./index.scss";

const BgBubbles = () => {
	const { linearGradient } = useTheme();
	const { animation } = useAnimation();

	return (
		<div className={`main ${animation}`} style={{ background: linearGradient }}>
			<BgBubbles.Bubbles />
		</div>
	);
};

BgBubbles.Bubbles = () => {
	return range(1, 30).map((n) => (
		<div key={n} className={`bubble bubble-${n}`} />
	));
};

function range(start, end) {
	const ans = [];
	for (let i = start; i <= end; i++) {
		ans.push(i);
	}
	return ans;
}

export default BgBubbles;
