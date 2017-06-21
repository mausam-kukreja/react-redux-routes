import React from 'react';
import PropTypes from 'prop-types';
import SideBarPartial from './partials/SideBarPartial';
import s from './common';

const MyApp = props => (
  <s.MyApp>
    <SideBarPartial />
    <s.Content>
      <s.Main>
        {props.children}
      </s.Main>
    </s.Content>
  </s.MyApp>
);

MyApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyApp;
