import { useTheme } from "../../context/ThemeContext";
import { basicData } from "../../service/sdk";
import { useAnimation } from "../../use/animation";
import Skills from "../Skills";
import SocialLinks from "../SocialLinks";
import "./index.scss";

const Profile = () => {
	const { backgroundImage, type } = useTheme();
	const { animation } = useAnimation();

	return (
		<div className="profile">
			<div className="profile__banner">
				<div
					className={`profile__photo ${animation}`}
					style={{ backgroundImage: `url(${backgroundImage})` }}
				/>
				<img src={basicData?.image} alt={type} />
			</div>
			<div className="profile__content">
				<div className="profile__title">{basicData?.name}</div>
				{/* <TypedText
                  dataText={
                      [
                        'JavaScript Developer',
                        'ReactJS Developer',
                        'NodeJS Developer',
                        'Python Developer',
                        'Django Developer',
                        'Django_rest_framework',
                      ]
                  }
                /> */}
				<SocialLinks />
				<Skills />
			</div>
		</div>
	);
};

export default Profile;
