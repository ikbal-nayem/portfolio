import React from 'react';
import './index.scss';
import { basicData } from "../../service/sdk";

const SocialLinks = () => {
  return (
		<div className="social">
			<SocialLinks.Link url={basicData?.links?.github} type={"github"} />
			<SocialLinks.Link url={basicData?.links?.linkedin} type={"linkedin"} />
			<SocialLinks.Link url={basicData?.links?.facebook} type={"facebook"} />
			<SocialLinks.Link url={basicData?.links?.skype} type={"skype"} />
		</div>
	);
};


// eslint-disable-next-line
SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>

export default SocialLinks;
