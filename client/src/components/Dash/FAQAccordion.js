import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FAQSection from './FAQSection'

class FAQAccordion extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
    };
  
    constructor(props) {
      super(props);
  
      const openSections = {};
  
      this.state = { openSections };
    }
  
    onClick = label => {
      const {
        state: { openSections },
      } = this;
  
      const isOpen = !!openSections[label];
  
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    };
  
    render() {
      const {
        onClick,
        props: { children },
        state: { openSections },
      } = this;
  
      return (
        <div 
            className="m-5"
            style={{ color: 'lightgrey' }}>
          {children.map(child => (
            <FAQSection
              isOpen={!!openSections[child.props.label]}
              label={child.props.label}
              onClick={onClick}
            >
              {child.props.children}
            </FAQSection>
          ))}
        </div>
      );
    }
  }
  
  export default FAQAccordion;