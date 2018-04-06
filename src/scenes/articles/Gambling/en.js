import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import FeaturedText from "components/blocks/FeaturedText";
import Quote from "components/blocks/Quote";

export default () => (
  <article>
    <Helmet>
      <title>Gambling away the environment | Digging into the Mining Arc</title>
    </Helmet>
    <Container>
      <Title as="h2">Gambling away the environment</Title>
      <Paragraph>
        <StoryMedia
          media={{
            id: "gallery-1",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/nacupay/El Callao-70.jpg")
                },
                {
                  src: require("photos/nacupay/El Callao-73.jpg")
                },
                {
                  src: require("photos/nacupay/El Callao-74.jpg")
                },
                {
                  src: require("photos/nacupay/El Callao-76.jpg")
                },
                {
                  src: require("photos/nacupay/El Callao-77.jpg")
                }
              ]
            }
          }}
        >
          Loud, vibrating sounds of generators accompany the back-breaking work
          of the illegal miners, just a kilometre outside of the village El
          Callao
        </StoryMedia>. Covered in mud, they sway around in the mining pits as
        they pan for gold, dig more holes, or use the noisy machines on the
        edges of the mining pit to fill large sacks with quantities of the
        gold-containing mud that will later be processed with mercury. At this
        exact spot, there used to be a forest, but many layers of vegetation
        have already been removed by mining.
      </Paragraph>
      <Paragraph>
        If there is one reason to not proceed with the Arco Minero it is the
        environment, according to Edgar Yerena, a biologist of the Simón Bolívar
        University (USB), in Caracas. “It’s a very bad idea. It’s the worst
        idea. There is no worse use that you can think of, in my opinion, for
        the{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/embed/?map_only=1&map_id=17453"
            }
          }}
        >
          Guiana Shield
        </StoryMedia>.”
      </Paragraph>
      <Paragraph>
        In Venezuela, the Guiana shield completely overlaps Bolívar state and
        also includes the states Amazonas and Delta Amacuro. The region is,
        according to environmental experts, of utmost importance for the
        generation of water and conservation of species, but should be avoided
        by mining. “From the ecological viewpoint [the area] functions as a
        different system than the rest of the country. It is very delicate
        because the generated soils are very lixiviated, and very washed. It has
        few nutrients, is very sandy and the environmental recuperation of any
        impact in the Guiana Shield is very slow if not irreversible,” explains
        Yerena.
      </Paragraph>
      <Paragraph>
        Yerena’s observations are backed up by another Venezuelan environmental
        specialist. “The soils are very thin and when removed will be very
        difficult to restore,” says Juan Carlos Sánchez, co-winner of the 2007
        Nobel Peace Prize and an expert with the United Nations
        Intergovernmental Panel on Climate Change. The laureate also warns that
        the forests of the Guiana shield function as a habitat for endemic
        species that will be severely impacted. There are{" "}
        <ExternalLink
          language="en"
          href="http://www.worldcat.org/title/flora-of-the-venezuelan-guayana/oclc/31938617"
        >
          9,411 species of flora, of which 2,136 are endemic
        </ExternalLink>.
      </Paragraph>
      <Paragraph>
        There is no possible coexistence between mining and forests in the
        Guiana Shield, says Sánchez. “<StoryMedia
          media={{
            id: "gallery-2",
            type: "gallery",
            data: {
              credits: "Wilmer González/Correo del Caroní",
              items: [
                {
                  src: require("photos/wilmer/DSC_0028.jpg")
                },
                {
                  src: require("photos/wilmer/DSC_0029.jpg")
                },
                {
                  src: require("photos/wilmer/DSC_0127.jpg")
                },
                {
                  src: require("photos/wilmer/DSC_0128.jpg")
                },
                {
                  src: require("photos/wilmer/DSC_0268.jpg")
                },
                {
                  src: require("photos/wilmer/DSC_0456.jpg")
                },
                {
                  src: require("photos/wilmer/DSC_0463.jpg")
                },
                {
                  src: require("photos/wilmer/DSC_0489.jpg")
                }
              ]
            }
          }}
        >
          All lands dedicated to mining, and in particular to surface mining
        </StoryMedia>, will be a terrain where forests are sacrificed because it
        requires the removal of large amounts of land. This sacrifice of the
        forests represents an irreparable loss of natural capital.”
      </Paragraph>
      <FeaturedText>
        About 75 percent of the lands in Bolívar state are environmentally
        protected, but not against the Arco Minero.
      </FeaturedText>
      <Paragraph>
        These lush lands are declared as national parks, natural monuments,
        protected zones, woodlands and forest reserves. The Canaima National
        Park even has been recognized as a Unesco World Heritage site. All this
        does not seem to matter. These woodlands and forest reserves will suffer
        most from the immediate consequences of mineral extraction in the Arco
        Minero.
      </Paragraph>
      <Paragraph>
        Additionally, the impact on water sources will be severe. Bolívar state
        basically functions as a water factory for the country and possesses the
        eleventh largest water reserve in the world. For example, the Caroní
        river basin generates hydropower to 65 percent of Venezuela’s territory
        which is created in the Guri dam, Venezuela’s most important energy
        supplier.
      </Paragraph>
      <Paragraph>
        According to Yerena, “Mining damages the quality of the available water.
        The topic of hydroelectric potential in Guiana not only depends on the
        quantity of water, but also on the quality. It requires water with
        little sediment,” he explains while referring to the Caroní river that
        borders the mining region and increasingly becomes sedimented.
      </Paragraph>
      <Quote author="Edgar Yerena, biologist">
        The Venezuelan state has a history of not knowing how to manage mining.
        Why would they know how to do so now?
      </Quote>
      <Paragraph>
        The environmental impact might be irreversible. Experts explains that
        over the long term, the environmental damages might far outweigh the
        revenues of the mining sector. Yerena adds: “The Venezuelan state has a
        history of not knowing how to manage mining. Why would they know how to
        do so now?”.
      </Paragraph>
      <Paragraph>
        Not knowing is also a problem for environmental justice movements that
        have little research and facts available to make an argument. “It’s
        complicated because until now, the defence is based on the concept of
        the project, and the form of how they are trying to implement the
        project,” explains Yerena.
      </Paragraph>
      <Paragraph>
        “But there is still no environmental strategic evaluation. This is
        absent and should have provided public information so the academic and
        environmental sector could properly review. Until now, we only have
        fractionated, punctual unofficial information. There are no clear
        mechanisms to obtain official information for persons curious to know
        what is happening with the project.”
      </Paragraph>
      <FeaturedText>
        Two undebated risks of mining are
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/embed/?map_only=1&map_id=17456"
            }
          }}
        >
          deforestation
        </StoryMedia>
        and mercury contamination.
      </FeaturedText>
      <Paragraph>
        “As I interpret it, according to Venezuela’s environmental norms, this
        should not have happened. This is constructed on a base of illegality in
        which the environmental evaluation study over the whole project has not
        been conducted,” Yerena says.
      </Paragraph>
      <Paragraph>
        Alexander Luzardo, the former senator who wrote the environmental
        standards for Venezuela’s current constitution doubts that mining is
        worth the damage when envisioning economic benefits. There was never any
        certified proof that the country possesses amounts of gold and coltan as
        large as it claims to have.
      </Paragraph>
      <Quote author="Alexander Luzardo, former senator">
        Mining is linked to illicit businesses and financial illegal activities
        linked to money laundering.
      </Quote>
      <Paragraph>
        The professor says it might be a myth, a strategy to develop projects in
        order to launder money. “The creation of phantom companies, without any
        experience, without knowledge, they play the game of elevation [market
        speculation] and money laundering,” he says. “Mining is linked to
        illicit businesses and financial illegal activities linked to money
        laundering.” According to him, these companies will buy and trade the
        minerals from illegal mining, or try to speculate and sell their project
        to the highest bidder.
      </Paragraph>
      <Paragraph>
        The government’s “good news show” about monstrous mineral deposits is,
        according to Luzardo, a misleading offer to the country. “It’s to give
        them the hope of a lottery,” he laughs. “It’s the mining lottery. Always
        betting on it all. ‘We’ve got the biggest reserves of the world’.” The
        distraction from the economic and political crisis ignores more
        important issues at stake. “It’s not about work, not about education,
        organization nor energetic diversification and not about assuming the
        great challenges,” he says ironically.
      </Paragraph>
      <Paragraph>
        Its name, the Arco Minero, is also bothersome for Luzardo. He argues
        that the term ‘Mining Arc’ is linguistic reductionism. “You reduce
        everything to Arco Minero,” he explains. “Already with the name you give
        up the territory [to mining],” arguing that an <em>
          Arc of Biodiversity
        </em> would be a better fit and would do more justice to the, on paper,
        protected environmental areas.
      </Paragraph>
      <Paragraph>
        There is hope though, according to Luzardo. The professor refers to a{" "}
        <FileLink
          format="pdf"
          size="0.2MB"
          href={require("documents/AsambleaNacionalVenezuela_CancelamientoArcoMinero.pdf")}
        >
          decision by the Venezuelan National Assembly that cancelled the Arco
          Minero Decree
        </FileLink>{" "}
        on the 14th of June 2016. “You cannot legalize an environmental crime,”
        he grunts, but the Assembly’s decision was not recognized by Venezuela’s
        Supreme Court that{" "}
        <ExternalLink
          language="es"
          href="http://runrun.es/nacional/292903/tsj-declaro-nulas-las-sesiones-del-5-y-el-9-de-enero-de-la-asamblea-nacional.html"
        >
          sidelined the National Assembly
        </ExternalLink>{" "}
        and all its decisions already from the 11th January 2017.
      </Paragraph>
      <Paragraph>
        Meanwhile, Venezuela’s political and economic crisis continues, driving
        more desperate and unemployed Venezuelans to the mining region. They
        continue to dig in the valuable muds of El Callao and many other areas
        in the south of the country. For now, the political opposition against
        the Arco Minero is left without legal weapons. Accelerated deforestation
        and an expanding mining frontier are the undeniable consequences of the
        crisis in the country, which seems far from over.
      </Paragraph>
    </Container>
  </article>
);
