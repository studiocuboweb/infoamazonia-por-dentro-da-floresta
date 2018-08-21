import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { media } from '../styles/utils';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  display: block;
  background-color:#ffffff;
  padding: 1rem 1rem 3rem;
      a {
        max-height: 12rem;
        display: flex;
      }
      .related-content {
        margin-left: .5rem;
        padding: 10px 0;
        h3 {
          color: black;
          font-size: .9rem;
        }
        p {
          word-wrap: break-word;
          font-size: .8rem;
          color: #333;
        }
      }
      img {
        height: 4.8rem;
        margin: .5rem 0;
      }
    }
  ${media.phablet`
    .more-content {
      padding:10px 0;
      height:400px;
      a {
        max-height: 12rem;
        display: flex;
      }
      .related-content {
        h3 {
          font-size: 1.2rem;
        }
        p {
          font-size: 1rem;
        }
      }
      img {
        height: 6rem;
        margin: 0;
        margin-top: .5rem;
      }
    }
  `}
  ${media.desktop`
    margin-left: 8vw;
    margin-right: 8vw;
  `}
  @media (min-width: 75em) {
    margin: 0 auto;
    max-width: 640px;
    .more-content {
      .related-content {
        font-size: 1.2em;
        h3 {
          font-size: 1.4rem;
        }
      }
    }
  }
  .more-content-header {
    padding-bottom: 0.5rem;
    margin-bottom: 1.3rem;
  }
  .related-content>h3 {
    border-bottom: 1px rgba(0,0,0,.3) solid;
  }
`

const RelatedNews = ({ sectionTitle, title, subtitle, imageUrl, href }) => {
  return (    
    <Wrapper>
      <div className="more-content-header">
        <h3>{sectionTitle}</h3>
      </div>
      <div className="more-content">
        <a href={href}>
          <img src={imageUrl} />
          <div className="related-content">
            <h3>{title}</h3>
            <p align="justify">{ subtitle}</p>
          </div>
        </a>
      </div>
    </Wrapper>
  );
}

RelatedNews.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default RelatedNews;