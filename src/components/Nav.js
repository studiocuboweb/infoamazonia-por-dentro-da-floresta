import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { media } from 'styles/utils';

const Wrapper = styled.nav`
  font-family: "Cinzel", serif;
  font-weight: 600;
  font-size: .4em;
  text-align: center;
  background: #f7f7f7;
  box-shadow: 0 .2rem .5rem rgba(0,0,0,0.05);
  position: relative;
  z-index: 10;
  flex: 0 0 auto;
  ol {
    display: table;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
      display: table-cell;
      line-height: 1;
      position: relative;
      overflow: hidden;
      a {
        position: relative;
        z-index: 1;
        display: block;
        color: #aaa;
        padding: .5rem;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #ddd;
        position: relative;
        .progress {
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 1px;
          background: #bbb;
          transition: all .2s ease-in-out;
          z-index: 2;
        }
        &:hover,
        &:active,
        &:focus {
          color: #333;
        }
        &.active {
          color: #333;
          background: #fff;
          .progress {
            height: 1px;
            background: #f09429;
            box-shadow: 0 0 .5rem #f09429;
          }
        }
      }
    }
  }
  ${media.phablet`
    ol li a {
      padding: 1rem 0 1rem .5rem;
    }
  `}
  ${media.tablet`
    font-size: .6em;
  `}
  ${media.desktop`
    ol li a {
      padding: 1rem 0 1rem .5rem;
    }
  `}
  ${media.desktopHD`
    font-size: .7em;
  `}
`

const mapStateToProps = (state, ownProps) => {
  return {
    scrolls: state.context.storyScroll,
    heights: state.context.storyHeight
  }
}

const ProgressBar = connect(mapStateToProps)(({ ...props }) => {
  const { scrolls, heights, path } = props;
  if(path) {
    let progress = 0;
    if(scrolls[path] && heights[path]) {
      progress = scrolls[path]/heights[path]*100;
    }
    return (
      <span className="progress" style={{
        width: progress + '%'
      }} />
    )
  } else {
    return null;
  }
})

class ArticleNav extends Component {
  render () {
    return (
      <Wrapper>
        <ol>
          <li>
            <NavLink exact to="/story">
              <FormattedMessage
                id="articles.introduction"
                defaultMessage="Introduction" />
              <ProgressBar path="/story" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/story/gold-mining">
              <FormattedMessage
                id="articles.gold_mining"
                defaultMessage="Gold Mining" />
              <ProgressBar path="/story/gold-mining" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/story/grip-of-the-guerrilla">
              <FormattedMessage
                id="articles.grip_of_the_guerrilla"
                defaultMessage="Grip of the Guerrilla" />
              <ProgressBar path="/story/grip-of-the-guerrilla" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/story/coltan-country">
              <FormattedMessage
                id="articles.coltan_country"
                defaultMessage="Coltan Country" />
              <ProgressBar path="/story/coltan-country" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/story/malaria">
              <FormattedMessage
                id="articles.malaria"
                defaultMessage="Malaria" />
              <ProgressBar path="/story/malaria" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/story/gambling">
              <FormattedMessage
                id="articles.gambling"
                defaultMessage="Gambling" />
              <ProgressBar path="/story/gambling" />
            </NavLink>
          </li>
        </ol>
      </Wrapper>
    )
  }
}

export default ArticleNav;
