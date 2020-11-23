import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
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
                        'JavaScript Development',
                      ]
                  }
                />
                <SocialLinks/>
                {/**<Info icon="location">
                                    Dhaka / Bangladesh
                                </Info>**/}
                <Skills />
            </div>
            {/**<div className="profile__contact">
                <a href="https://drive.google.com/file/d/19mMozCLwcoayBEUxl7X3gdRlJe5Sy0Q3/view" target="_blank" rel="noreferrer">
                    <span>Download CV</span>
                </a>
                <a href="mailto:3mr3baskan@gmail.com">
                    <span>Contact Me</span>
                </a>
            </div>**/}
        </div>
    );
};

export default Profile;
