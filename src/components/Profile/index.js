import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
// import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
import my_pic from '../../assets/ami.jpg';


const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img src={my_pic} alt={type} />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Ikbal Nayem
                </div>
                <TypedText
                  dataText={
                      [
                        'Python Development',
                        'Django Development',
                        'Django_rest_framework',
                        'React Development',
                        'React-Native Development',
                        'Node.JS Development',
                      ]
                  }
                />
                <SocialLinks/>
                {/**<Info icon="location">
                                    Dhaka / Bangladesh
                                </Info>**/}
                <Skills />
            </div>
        </div>
    );
};

export default Profile;
