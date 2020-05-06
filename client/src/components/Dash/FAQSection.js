import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../pages/pages.css'

class FAQSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div 
        className="text-left rounded border-rounded m-3"
        style={{
          background: isOpen ? '#555' : '#fff',
          color: isOpen ? 'white' : '#555',
          border: '1px solid #555',
          cursor: 'pointer' 
        }}
        onClick={onClick}
      >
        <div className="row justify-content-between align-items-center px-3">
          <h4 className='questionHeader'>{label}</h4>
          <div style={{padding: '5px 10px'}}
            >
            {/* {!isOpen && <span>(+)</span>} */}
            {isOpen && <span>(-)</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: 'white',
              color: '#555',
            //   border: '2px solid #555',
              marginTop: 10,
              padding: '10px 20px',
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default FAQSection;