import mongodb from "../../assets/MongoDB.jpg";
import bootstrap from "../../assets/bootstrap.png";
import django from "../../assets/django.png";
import docker from "../../assets/docker.jpg";
import drf from "../../assets/drf.png";
import flask from "../../assets/flask.png";
import git from "../../assets/git.jpg";
import jquery from "../../assets/jquery.png";
import js from "../../assets/js.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node.png";
import python from "../../assets/python.jpg";
import react from "../../assets/react.png";
import redux from "../../assets/redux.jpg";
import ts from "../../assets/typescript.png";

export const THEMES = {
	javascript: {
		backgroundImage: js,
		linearGradient: createLinearGradient("#F7E018", "#000000"),
		primaryColor: "#e6892e",
		color: "#F7E018",
	},
	typescript: {
		backgroundImage: ts,
		linearGradient: createLinearGradient("#00598e", "#ffffff"),
		primaryColor: "#00598e",
		color: "#242A31",
	},
	react: {
		backgroundImage: react,
		linearGradient: createLinearGradient("#61dafb", "#000000"),
		primaryColor: "#4479a1",
		color: "#000000",
	},
	node: {
		backgroundImage: node,
		linearGradient: createLinearGradient("#80BD01", "#333333"),
		primaryColor: "#80BD01",
		color: "#333333",
	},
	python: {
		backgroundImage: python,
		linearGradient: createLinearGradient("#3773a7", "#ffd241"),
		primaryColor: "#3773a7",
		color: "#222222",
	},
	django: {
		backgroundImage: django,
		linearGradient: createLinearGradient("#0c3c26", "#d9c8de"),
		primaryColor: "#0c3c26",
		color: "#49D191",
	},
	drf: {
		backgroundImage: drf,
		linearGradient: createLinearGradient("#853636", "#2d2d2d"),
		primaryColor: "#853636",
		color: "#2d2d2d",
	},
	flask: {
		backgroundImage: flask,
		linearGradient: createLinearGradient("#f3f3f3", "#292d35"),
		primaryColor: "#292d35",
		color: "#2d2d2d",
	},
	jquery: {
		backgroundImage: jquery,
		linearGradient: createLinearGradient("#00598e", "#ffffff"),
		primaryColor: "#00598e",
		color: "#242A31",
	},
	redux: {
		backgroundImage: redux,
		linearGradient: createLinearGradient("#764ABD", "#1E1E1E"),
		primaryColor: "#764ABD",
		color: "#1E1E1E",
	},
	mysql: {
		backgroundImage: mysql,
		linearGradient: createLinearGradient("#4479a1", "#e6892e"),
		primaryColor: "#4479a1",
		color: "#e6892e",
	},
	mongodb: {
		backgroundImage: mongodb,
		linearGradient: createLinearGradient("#80BD01", "#e6892e"),
		primaryColor: "#e6892e",
		color: "#80BD01",
	},
	bootstrap: {
		backgroundImage: bootstrap,
		linearGradient: createLinearGradient("#62488a", "#ffffff"),
		primaryColor: "#62488a",
		color: "#e6892e",
	},
	docker: {
		backgroundImage: docker,
		linearGradient: createLinearGradient("#25afdd", "#262c3a"),
		primaryColor: "#234374",
		color: "#262c3a",
	},
	git: {
		backgroundImage: git,
		linearGradient: createLinearGradient("#ffffff", "#f34f36"),
		primaryColor: "#f34f36",
		color: "#000000",
	},
};

function createLinearGradient(color1, color2) {
	return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
