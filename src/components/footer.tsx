import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
   ${({ theme }) => theme.mixins.flexCenter};
   flex-direction: column;
   height: auto;
   min-height: 70px;
   padding: 15px;
   text-align: center;
`;

const StyledSocialLinks = styled.div`
   display: none;

   @media (max-width: 768px) {
      display: block;
      width: 100%;
      max-width: 270px;
      margin: 0 auto 10px;
      color: var(--light-slate);
   }

   ul {
      ${({ theme }) => theme.mixins.flexBetween};
      padding: 0;
      margin: 0;
      list-style: none;

      a {
         padding: 10px;
         svg {
            width: 20px;
            height: 20px;
         }
      }
   }
`;

const StyledCredit = styled.div`
   color: var(--light-slate);
   font-family: var(--font-mono);
   font-size: var(--fz-xxs);
   line-height: 1;

   a {
      padding: 10px;
   }

   .github-stats {
      margin-top: 10px;

      & > span {
         display: inline-flex;
         align-items: center;
         margin: 0 7px;
      }
      svg {
         display: inline-block;
         margin-right: 5px;
         width: 14px;
         height: 14px;
      }
   }
`;

const Footer = () => {
   const [githubInfo, setGitHubInfo] = useState({
      stars: 0,
      forks: 0,
   });

   useEffect(() => {
      if (process.env.NODE_ENV !== 'production') {
         return;
      }
      fetch('https://api.github.com/repos/bchiang7/v4')
         .then((response) => response.json())
         .then((json) => {
            const { stargazers_count, forks_count } = json;
            setGitHubInfo({
               stars: stargazers_count,
               forks: forks_count,
            });
         })
         .catch((e) => console.error(e));
   }, []);

   return (
      <StyledFooter>
         <StyledSocialLinks>
            <ul>
               {socialMedia &&
                  socialMedia.map(({ name, url }: string, i: string) => (
                     <li key={i}>
                        <a href={url} aria-label={name}>
                           <Icon name={name} />
                        </a>
                     </li>
                  ))}
            </ul>
         </StyledSocialLinks>

         <StyledCredit>
            <a href="https://github.com/bchiang7/v4">
               <div>Design by Brittany Chiang &amp; Built by Matthew Griffin</div>

               {githubInfo.stars && githubInfo.forks && (
                  <div className="github-stats">
                     <span>
                        <Icon name="Star" />
                        <span>{githubInfo.stars.toLocaleString()}</span>
                     </span>
                     <span>
                        <Icon name="Fork" />
                        <span>{githubInfo.forks.toLocaleString()}</span>
                     </span>
                  </div>
               )}
            </a>
         </StyledCredit>
      </StyledFooter>
   );
};

export default Footer;