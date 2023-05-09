export const removeSplashScreen = () => {
	const splashContent = document.getElementById("splash-screen");
	splashContent.style.display = "none";
};

export const showSplashScreen = () => {
	const splashContent = document.getElementById("splash-screen");
	splashContent.style.display = "block";
};
