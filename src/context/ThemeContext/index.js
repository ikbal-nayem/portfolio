import React, { Component, useContext } from "react";
import { EMPTY, Subject, interval } from "rxjs";
import { startWith, switchMap } from "rxjs/operators";
import { THEMES } from "./data";

const themeChangeTimer$ = new Subject();

let ThemeContext;
const { Provider, Consumer } = (ThemeContext = React.createContext());

class ThemeProvider extends Component {
	state = {
		...THEMES.react,
		type: "react",
		isLoading: true,
	};
	subscription = null;

	componentDidMount() {
		this.setThemeColors(THEMES.react);
		this.subscription = themeChangeTimer$
			.pipe(
				startWith(true),
				switchMap((val) => (val ? interval(10 * 1000) : EMPTY))
			)
			.subscribe(() => {
				const themesKeys = Object.keys(THEMES);
				let randomKey =
					themesKeys[Math.floor(Math.random() * themesKeys.length)];
				while (randomKey === this.state.type) {
					randomKey = themesKeys[Math.floor(Math.random() * themesKeys.length)];
				}
				this.changeTheme(randomKey);
			});
	}

	changeTheme = (type) => {
		if (THEMES[type]) {
			this.setState((state) => {
				this.setThemeColors(THEMES[type]);
				if (state.type !== type) {
					return {
						...THEMES[type],
						animate: true,
						type,
					};
				}
				return state;
			});
		}
	};

	stopThemeChangeTimer = () => {
		themeChangeTimer$.next(false);
	};

	startThemeChangeTimer = () => {
		themeChangeTimer$.next(true);
	};

	setThemeColors(theme) {
		document.documentElement.style.setProperty(
			"--primary-color",
			theme.primaryColor
		);
		document.documentElement.style.setProperty(
			"--secondary-color",
			theme.color
		);
	}

	setInitLoading = (isLoading) => {
		this.setState((state) => ({ ...state, isLoading }));
		// if (!isLoading) removeSplashScreen();
	};

	render() {
		return (
			<Provider
				value={{
					...this.state,
					changeTheme: this.changeTheme,
					stopThemeChangeTimer: this.stopThemeChangeTimer,
					startThemeChangeTimer: this.startThemeChangeTimer,
					setInitLoading: this.setInitLoading,
				}}
			>
				{this.props.children}
			</Provider>
		);
	}
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, Consumer as ThemeConsumer, useTheme };
