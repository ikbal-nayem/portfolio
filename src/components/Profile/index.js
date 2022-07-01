import { useContext } from "react";
import "./index.scss";
import SocialLinks from "../SocialLinks";
import my_pic from "../../assets/ami.jpg";
import { ThemeContext } from "../../context/ThemeContext";
import { useAnimation } from "../../use/animation";
import Skills from "../Skills";

const Profile = () => {
	const { backgroundImage, type } = useContext(ThemeContext);
	const { animation } = useAnimation();
	return (
		<div className="profile">
			<div className="profile__banner">
				<div
					className={`profile__photo ${animation}`}
					style={{ backgroundImage: `url(${backgroundImage})` }}
				/>
				<img src={my_pic} alt={type} />
			</div>
			<div className="profile__content">
				<div className="profile__title">Ikbal Nayem</div>
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
