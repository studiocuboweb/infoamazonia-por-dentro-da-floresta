import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import Quote from "components/blocks/Quote";
import FeaturedText from "components/blocks/FeaturedText";
import styled, { css } from "styled-components";
const Background = styled.div`
  background-color:white;
`;

export default () => (
  <article>
    <Background>
      <Helmet>
        <title>Amazonas and Western-Bolívar: in the guerrillas’ grip | Digging into the Mining Arc</title>
      </Helmet>
    </Background>
    <Container>
      <Background>
        <Title as="h2">
          Amazonas and Western-Bolívar: in the guerrillas’ grip
        </Title>
        <Paragraph>
          The ones bearing the brunt of Venezuela’s mining bonanza are the{" "}
          <StoryMedia
            icon="map"
            media={{
              id: "map-1",
              type: "mapbox",
              data: {
                coordinates: [-2.491747846041145, 51.3233379650232]
              }
            }}
          >
            native communities in Amazonas and Bolívar states
          </StoryMedia>{" "}
          that have been usurped in both legal and illegal mining economies.
          Colombian guerrilla groups – referred to by the locals as{" "}
          <em>patagomas</em> (rubber feet) – are expanding their mining operations
          in western Venezuela, and recently announced their first mining projects
          in indigenous territories.
        </Paragraph>
      </Background>
      <Background>
      <Paragraph>
        The ones bearing the brunt of Venezuela’s mining bonanza are the{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-2",
            type: "mapbox",
            data: {
              coordinates: [-0.491747846041145, 51.3233379650232]
            }
          }}
        >
          native communities in Amazonas and Bolívar states
        </StoryMedia>{" "}
        that have been usurped in both legal and illegal mining economies.
        Colombian guerrilla groups – referred to by the locals as{" "}
        <em>patagomas</em> (rubber feet) – are expanding their mining operations
        in western Venezuela, and recently announced their first mining projects
        in indigenous territories.
      </Paragraph>
      <Paragraph>
        The ones bearing the brunt of Venezuela’s mining bonanza are the{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-3",
            type: "mapbox",
            data: {
              coordinates: [-1.491747846041145, 51.3233379650232]
            }
          }}
        >
          native communities in Amazonas and Bolívar states
        </StoryMedia>{" "}
        that have been usurped in both legal and illegal mining economies.
        Colombian guerrilla groups – referred to by the locals as{" "}
        <em>patagomas</em> (rubber feet) – are expanding their mining operations
        in western Venezuela, and recently announced their first mining projects
        in indigenous territories.
      </Paragraph>
      <Paragraph>
        The ones bearing the brunt of Venezuela’s mining bonanza are the{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-4",
            type: "mapbox",
            data: {
              coordinates: [-0.491747846041145, 49.3233379650232]
            }
          }}
        >
          native communities in Amazonas and Bolívar states
        </StoryMedia>{" "}
        that have been usurped in both legal and illegal mining economies.
        Colombian guerrilla groups – referred to by the locals as{" "}
        <em>patagomas</em> (rubber feet) – are expanding their mining operations
        in western Venezuela, and recently announced their first mining projects
        in indigenous territories.
      </Paragraph>
      </Background>
    </Container>
  </article>
);
