import React from 'react';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
   counter-reset: section;
`;

const IndexPage = ({ location }: IndexProps) => (
   <Layout location={location}>
      <StyledMainContainer className="fillHeight">
         <Hero />
         <About />
         <Jobs />
         <Featured />
         <Projects />
         <Contact />
      </StyledMainContainer>
   </Layout>
);

interface IndexProps {
   location: object;
}

export default IndexPage;
