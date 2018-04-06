import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";
import { expandMedia } from "actions/media";

const Preview = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  .open {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    transition: all 0.4s ease-in-out;
    opacity: 1;
    font-size: 0.8em;
    font-weight: 600;
    > span {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 0;
      margin-top: -1.5rem;
      text-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  a {
    position: absolute;
    font-size: 2em;
    color: #fff;
    text-shadow: 0 0 1rem #000;
    top: 0;
    bottom: 0;
    width: 50%;
    box-sizing: border-box;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    .fa {
      flex: 1 1 100%;
    }
    &:hover,
    &:active,
    &:focus {
      color: #fff;
    }
    &:hover {
      text-shadow: 0 0 0.5rem #000;
    }
    &.prev {
      left: 0;
    }
    &.next {
      right: 0;
      text-align: right;
    }
  }
`;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
    this._handleKeydown = this._handleKeydown.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._prev = this._prev.bind(this);
    this._next = this._next.bind(this);
  }
  componentDidMount() {
    window.addEventListener("keydown", this._handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this._handleKeydown);
  }
  _handleKeydown(ev) {
    switch (ev.keyCode) {
      case 37:
        this._prev();
        break;
      case 39:
        this._next();
        break;
    }
  }
  _next() {
    const { items } = this.props.data;
    const { current } = this.state;
    this.setState({
      current: current == items.length - 1 ? 0 : current + 1
    });
  }
  _prev() {
    const { items } = this.props.data;
    const { current } = this.state;
    this.setState({
      current: current == 0 ? items.length - 1 : current - 1
    });
  }
  _handleClick(ev) {
    ev.preventDefault();
    this.props.expandMedia(true);
  }
  render() {
    const { data, preview } = this.props;
    if (preview) {
      const first = data.items[0];
      return (
        <Preview
          style={{
            backgroundImage: `url(${first.src})`
          }}
          onClick={this._handleClick}
        >
          <span className="open">
            <span>
              +{data.items.length}{" "}
              <FormattedMessage
                id="gallery.photos_label"
                defaultMessage="photos"
              />
            </span>
          </span>
        </Preview>
      );
    } else {
      const { current } = this.state;
      return (
        <Wrapper>
          <a href="javascript:void(0);" className="prev" onClick={this._prev}>
            <span className="fa fa-angle-left" />
          </a>
          <div className="image">
            <img src={data.items[current].src} />
          </div>
          <a href="javascript:void(0);" className="next" onClick={this._next}>
            <span className="fa fa-angle-right" />
          </a>
        </Wrapper>
      );
    }
  }
}

const mapDispatchToProps = {
  expandMedia
};

export default connect(null, mapDispatchToProps)(Gallery);
