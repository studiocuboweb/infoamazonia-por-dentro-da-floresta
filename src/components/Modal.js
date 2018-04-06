import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0,0,0,0.9);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  .close-overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .modal-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 100vh;
    margin: auto;
    box-shadow: 0 0 5rem rgba(0,0,0,0.75);
    img {
      display: block;
      width: 100%;
      height: auto;
      margin: 0;
    }
  }
`

class Modal extends Component {
  constructor (props) {
    super(props);
    this._handleKeydown = this._handleKeydown.bind(this);
    this._handlePopstate = this._handlePopstate.bind(this);
  }
  componentDidMount () {
    document.addEventListener('keydown', this._handleKeydown);
    window.addEventListener('popstate', this._handlePopstate);
  }
  componentWillUnmount () {
    document.removeEventListener('keydown', this._handleKeydown);
    window.removeEventListener('popstate', this._handlePopstate);
  }
  componentWillReceiveProps (nextProps) {
    if(nextProps.location.key !== this.props.location.key) {
      this.props.close();
    }
  }
  _handleKeydown (ev) {
    if(ev.keyCode == 27) {
      this.props.close();
    }
  }
  _handlePopstate (ev) {
    ev.preventDefault();
    this.props.close();
    history.go(1);
  }
  render () {
    const { close } = this.props;
    return (
      <Wrapper>
        <div className="modal-content">
          {this.props.children}
        </div>
        <a className="close-overlay" onClick={close} href="javascript:void(0)"></a>
      </Wrapper>
    )
  }
}

export default withRouter(Modal);
