import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMainContainer = styled.main`
   counter-reset: section;
`;

const IndexPage = ({ location }) => (
   <>
      <h1>Heya</h1>
   </>
);

IndexPage.propTypes = {
   location: PropTypes.object.isRequired,
};

export default IndexPage;
