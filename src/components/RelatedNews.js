import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin: 0 1rem;
    @media (min-width: 75em) {
      margin: 0;
      margin-left: 10vw;
      margin-right: 10vw;
    .more-content {
      .related-content {
        h3 {
          font-size: 1rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
    }
    .more-content-header {
      border-bottom: 1px rgba(0,0,0,.3) solid;
      padding-bottom: 0.5rem;
      margin-bottom: 1.3rem;
    }
    .more-content {
      a {
        max-height: 12rem;
        display: flex;
        justify-content: space-between;
      }
      .related-content {
        margin-left: .5rem;
        h3 {
          color: black;
          font-size: .9rem;
        }
        p {
          font-size: .7rem;
          color: #333;
        }
      }
      img {
        height: 4.8rem;
        margin: 0;
      }
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
