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

export default () => (
  <article>
      <div className='foreground'>
        <Helmet>
          <title>Amazonas and Western-Bolívar: in the guerrillas’ grip | Digging into the Mining Arc</title>
        </Helmet>
        <Container>
          <div className='background-color padding-header margin-bottom-1'>
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
                    layerId: "PDigital2000_2016_AMZ_shp-7s3enh2",
                    sourceOptionType: "vector",
                    sourceOptionUrl: "mapbox://infoamazonia.cds2byee",
                    coordinates: [-54.372,-2.636],
                    style: "mapbox://styles/infoamazonia/ciqwmpsz1000cbgno5jpumkcw",
                    sourceId: "source1",
                    layerType: "line",
                    sourceLayer: "PDigital2000_2016_AMZ_shp-7s3enh",
                    layoutVisibility: "visible"
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
          </div>
          <div className='background-color margin-bottom-1'>
            <Paragraph>
              The ones bearing the brunt of Venezuela’s mining bonanza are the{" "}
              <StoryMedia
                icon="map"
                media={{
                  id: "map-2",
                  type: "mapbox",
                  data: {
                    layerId: "Sementes-dbky3y2",
                    sourceOptionType: "vector",
                    sourceOptionUrl: "mapbox://infoamazonia.de1tfaxh",
                    coordinates: [-54.945,-2.800],
                    style: "mapbox://styles/infoamazonia/ciqwmpsz1000cbgno5jpumkcw",
                    sourceId: "source2",
                    layerType: "circle",
                    sourceLayer: "Sementes-dbky3y",
                    layoutVisibility: "visible"
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
          </div>
          <div className='background-color margin-bottom-1'>
            <Paragraph>
              The ones bearing the brunt of Venezuela’s mining bonanza are the{" "}
              <StoryMedia
                icon="map"
                media={{
                  id: "map-3",
                  type: "mapbox",
                  data: {
                    layerId: "Assentamentos_incra-2wyd2b2",
                    sourceOptionType: "vector",
                    sourceOptionUrl: "mapbox://infoamazonia.1kti1hxh",
                    coordinates: [-54.372,-2.636],
                    style: "mapbox://styles/infoamazonia/ciqwmpsz1000cbgno5jpumkcw",
                    sourceId: "source3",
                    layerType: "fill",
                    sourceLayer: "Assentamentos_incra-2wyd2b",
                    layoutVisibility: "visible"
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
          </div>
          <div className='background-color end-of-content margin-bottom-1'>
            <Paragraph>
              The ones bearing the brunt of Venezuela’s mining bonanza are the{" "}
              <StoryMedia
                icon="map"
                media={{
                  id: "map-4",
                  type: "mapbox",
                  data: {
                    layerId: "ongs-atuacao-amazonia-58ujje2",
                    sourceOptionType: "vector",
                    sourceOptionUrl: "mapbox://infoamazonia.0pei8v8p",
                    coordinates: [-54.372,-2.636],
                    style: "mapbox://styles/infoamazonia/ciqwmpsz1000cbgno5jpumkcw",
                    sourceId: "source4",
                    layerType: "circle",
                    sourceLayer: "ONGs_Atuacao_Amazonia-58ujje",
                    layoutVisibility: "visible"
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
          </div>
        </Container>
      </div>
  </article>
);