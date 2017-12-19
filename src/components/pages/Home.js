/**
 * @author Philip Van Raalte
 * @date 2017-12-19
 */
import React, {Component} from 'react';
import {Page} from '../SpectreCSS';

import {graphql} from 'react-apollo';
import searchForGame from '../../queries/searchForGame';

class Home extends Component {
  render() {
    console.log(this.props);

    window.myprops = this.props;

    if(this.props.data.error) {
      return <div/>;
    }

    return(
      <Page centered>
        Home
      </Page>
    );
  }
}

export default graphql(searchForGame)(Home);