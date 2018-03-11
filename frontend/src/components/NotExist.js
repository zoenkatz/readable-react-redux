import React, { Component } from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class NotExist extends Component {

    render(){
      return(
          <div className={'notExist'}>
              <p>Page doesn't exist</p>
              <Link className='button' to={'/'}>Go to homepage</Link>
          </div>
      )
    }
}

NotExist.propTypes = {




}

export default NotExist;