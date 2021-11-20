import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Meta, Loader, Nav, Social, Email, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
   // eslint-disable-next-line global-require
   require('smooth-scroll')('a[href*="#"]');
}

const StyledContent = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`;

const Layout = ({ children, location }: LayoutProps) => {
   const isHome: boolean = location.pathname === '/';
   const [isLoading, setIsLoading] = useState(isHome);

   // Sets rel="noopener noreferrer" on external links
   const handleExternalLinks = () => {
      const allLinks = Array.from(document.querySelectorAll('a'));
      if (allLinks.length > 0) {
         allLinks.forEach((link) => {
            if (link.host !== window.location.host) {
               link.setAttribute('rel', 'noopener noreferrer');
            }
         });
      }
   };

   useEffect(() => {
      if (isLoading) return;
      if (location.hash) {
         const id = location.hash.substring(1); // location.hash without the '#'
         setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
               el.scrollIntoView();
               el.focus();
            }
         }, 0);
      }
      handleExternalLinks();
   }, [isLoading]);

   return (
      <>
         <Meta />
         <div id="root">
            <ThemeProvider theme={theme}>
               <GlobalStyle />
               <a className="skip-to-content" href="#content">
                  Skip to Content
               </a>
               {isLoading && isHome ? (
                  <Loader finishLoading={() => setIsLoading(false)} />
               ) : (
                  <StyledContent>
                     <Nav isHome={isHome} />
                     <Social isHome={isHome} />
                     <Email isHome={isHome} />
                     <div id="content">
                        {children}
                        <Footer />
                     </div>
                  </StyledContent>
               )}
            </ThemeProvider>
         </div>
      </>
   );
};

interface LayoutProps {
   children: React.ReactNode;
   location: any;
}

export default Layout;
