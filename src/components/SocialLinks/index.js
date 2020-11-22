import React from 'react';
import './index.scss';

const SocialLinks = () => {
  return (
    <div className="social">
      <SocialLinks.Link
        url={'https://github.com/ikbal-nayem'}
        type={'github'}
      />
      <SocialLinks.Link
        url={'https://www.linkedin.com/in/ikbal-nayem-457758169'}
        type={'linkedin'}
      />
      <SocialLinks.Link
        url={'https://facebook.com/ikbal.nayem'}
        type={'facebook'}
      />
      <SocialLinks.Link
        url={'https://join.skype.com/invite/Db39pJluZnF5'}
        type={'skype'}
      />
    </div>
  );
};


// eslint-disable-next-line
SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>

export default SocialLinks;
