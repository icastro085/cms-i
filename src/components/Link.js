import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
  render() {
    let { active, children, onClick } = this.props;
    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          onClick()
        }}
      >
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;