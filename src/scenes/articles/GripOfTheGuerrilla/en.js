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
    <Helmet>
      <title>Amazonas and Western-Bolívar: in the guerrillas’ grip | Digging into the Mining Arc</title>
    </Helmet>
    <Container>
      <Title as="h2">
        Amazonas and Western-Bolívar: in the guerrillas’ grip
      </Title>
      <Paragraph>
        The ones bearing the brunt of Venezuela’s mining bonanza are the{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/embed/?map_only=1&map_id=17467"
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
      <Quote author="Liborio Guarulla, ex-governor of Amazonas">
        The indigenous way of living has been affected by the presence of
        illegal armed groups and miners
      </Quote>
      <Paragraph>
        In Puerto Ayacucho, Liborio Guarulla, who governed the state of Amazonas
        from 2001 to 2017 and a Baniva indigenous person, sits at his desk with
        a large painting of the South American freedom fighter Simón Bolívar
        behind his back.{" "}
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "b0MjlZWd4Tk"
            }
          }}
        >
          He explains
        </StoryMedia>: “The indigenous way of living has been affected by the
        presence of illegal armed groups and miners. They have been inserted in
        mining economies”.
      </Paragraph>
      <Paragraph>
        The gravity of the situation becomes apparent after learning about
        groups of indigenous slaves who have numbers tattooed on their backs or{" "}
        <ExternalLink
          language="en"
          href="https://uk.reuters.com/article/us-venezuela-amazon/illegal-miners-infest-venezuelas-amazon-idUKBRE9B205S20131203"
        >
          shoulders in the Amazonas state
        </ExternalLink>. “When we received the denouncement that they killed
        some Yanomami [indigenous people], I went to the Alto Orinoco, which is
        an extensive municipality,” says the retired major general from the
        army, Clíver Alcalá Cordones. In 2012, the army began a three-week
        operation after receiving a complaint that Yanomami indigenous people
        were being killed around illegal mining projects. “I saw some Yanomami
        that were marked.”
      </Paragraph>
      
      <Paragraph>
        Alcalá explains that various indigenous people had been branded by
        invading Brazilian miners, called <em>garimpeiros</em>, who enslaved
        them in the mines. “So, they can say ‘this indigenous is mine’.” Not
        only have the indigenous people been enslaved to work, but young
        indigenous girls have also been taken from their communities and{" "}
        <FileLink
          format="pdf"
          size="0.4MB"
          href={require("documents/AliciaMoncadaAcosta_Violencia-Mujeres-Indigenas-Mineros-Amazonia-Colombia-Venezoela.pdf")}
        >
          forced into prostitution
        </FileLink>{" "}
        in and around the mines. “The ‘beautiful’ girls cannot leave anymore,
        they keep them there,” says Henelda Rodríguez, from the Organization for
        Amazon Indigenous Women Waanalera. “Girls that want to escape
        disappear.”
      </Paragraph>
      <Paragraph>
        Amazonas is not officially part of the Arco Minero, but Guarulla fears
        it is only a matter of time before encroaching projects expand across
        the state border. More than half of Amazonas’ lands are under
        environmental protection, but have nevertheless been invaded by illegal
        mining and armed men.
      </Paragraph>
      <Paragraph>
        About 25 percent of Venezuela’s lands belong to indigenous populations.
        The{" "}
        <FileLink
          format="pdf"
          size="0.3MB"
          href={require("documents/PROVEA_Derechos-Pueblos-Indigenas_2016.pdf")}
        >
          Arco Minero is inhabited by 198 indigenous communities
        </FileLink>, but most ancestral lands are neither recognized by legal
        boundaries nor given protection. The constitution has required legal
        protection of indigenous lands since 1999, but only{" "}
        <FileLink
          format="pdf"
          size="0.4MB"
          href={require("documents/PROVEA_Derechos-Pueblos-Indigenas_2014.pdf")}
        >
          12.4 percent of their territories have been demarcated
        </FileLink>.
      </Paragraph>
      <Paragraph>
        Indigenous communities that find themselves in the way of prospective
        mining projects, a sector branded as one of the motors of the national
        economy, are now an inconvenient obstacle—or worse, cheap labour.
      </Paragraph>
      <Quote author="Liborio Guarulla, ex-governor of Amazonas">
        Practically, it's the guerrilla who exercises control here. The
        guerrilla with the help of the Venezuelan armed forces. They receive
        part of the share.
      </Quote>
      <Paragraph>
        Guarulla argues that his state has been overrun: “Practically, it's the
        guerrilla who exercises control here. The guerrilla with the help of the
        Venezuelan armed forces. They receive part of the share.” According to
        the former governor, the guerrilla forces buy off the army to act as an
        authority that controls mining operations “so that they can function in
        the zone.”
      </Paragraph>
      <Paragraph>
        The Amazonas state shares an extensive frontier with Colombia on the
        west and connects with Bolívar state on the east. According to Guarulla,
        there are about 4 to 4.5 thousand Colombian guerrillas present in
        Amazonas. Most of them belong to the National Liberation Army (ELN) or
        to Armed Revolutionary Forces of Colombia (FARC) dissident groups.
        Indigenous organizations think the number could be much higher.
      </Paragraph>
      <Paragraph>
        When the FARC was still at arms, the ELN was Colombia’s second largest
        guerrilla group, and now finds itself{" "}
        <ExternalLink
          language="es"
          href="http://www.altocomisionadoparalapaz.gov.co/dialagos-eln/Paginas/Noticias/octubre/Titulares.aspx"
        >
          negotiating a peace
        </ExternalLink>{" "}
        deal with the Colombian government in Ecuador. Meanwhile, FARC has
        increased its presence in Venezuela. Here the Colombian guerrillas have
        been welcomed for over a decade. From 2002 on,{" "}
        <FileLink
          format="pdf"
          size="0.2MB"
          href={require("documents/FriedrichEbertStiftung_Farc-Venezuela-Huesped-Incomodo.pdf")}
        >
          FARC rebels began using Venezuela
        </FileLink>{" "}
        as both a safe haven and a new strategic area – to move fighters,
        weapons and kidnapping victims – as Colombia’s army stepped up efforts
        to combat the guerrillas within its national borders.
      </Paragraph>
      <Paragraph>
        According to Alcalá, the former major general for the Venezuelan army,
        FARC dissident groups that did not want to participate in the peace
        process came to Venezuela. They are involved in illicit economies and
        launder drug money through illegal mining activities involving the local
        population. “Guerrilla forces the indigenous people to work in
        the mines,” Alcalá explains.
      </Paragraph>
      <Paragraph>
        Both the FARC, when still an active guerrilla movement, and the ELN
        financed their operations with{" "}
        <ExternalLink
          language="en"
          href="https://www.insightcrime.org/news/brief/colombia-captures-czar-of-coltan-with-farc-eln-ties/"
        >
          illegally mined minerals
        </ExternalLink>, among other illicit revenue streams. The guerrillas
        could not have chosen a better location, as the subsoil hides a variety
        of world’s most wanted minerals, such as gold, diamonds and coltan. Even
        uranium deposits have been reported and caught the attention of the
        Iranian government,{" "}
        <ExternalLink
          language="en"
          href="https://search.wikileaks.org/plusd/cables/09CARACAS1296_a.html"
        >
          although a leaked document
        </ExternalLink>{" "}
        downplayed the viability of its exploitation.
      </Paragraph>
      <Paragraph>
        Coltan deposits are within easy reach when crossing the Venezuelan
        border from Colombia. Coltan ore consists of two minerals, columbite and
        tantalite — both are increasingly used in modern electronics.
      </Paragraph>
      <Paragraph>
        Few countries possess deposits of coltan, but according to Roland
        Chavasse, director of the Tantalum-Niobium International Study Centre:
        “The{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-2",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/embed/?map_only=1&map_id=17453"
            }
          }}
        >
          Guiana shield
        </StoryMedia>{" "}
        is known to us to be very, very rich, possibly the richest, biggest ore
        body of coltan in the world,” he said. Yet, certified numbers on
        Venezuela’s coltan deposits are absent.
      </Paragraph>
      <Paragraph>
        Coltan’s scarcity and demand characterizes the importance of the
        mineral. Most people the world over own modern electronic devices
        (laptops, tablets, cell phones) that contain coltan. Moreover, tantalum
        (the most important element of tantalite) is also used for new military
        applications such as anti-tank systems, smart bombs, drones and robots,
        making it a highly-prized strategic mineral.{" "}
        <FileLink
          format="pdf"
          size="2.3MB"
          href={require("documents/DepartmentDefenseUS_Strategic-Critical-Materials-2015-Stockpile-Requirements.pdf")}
        >
          The U.S. Department of Defence recommended stockpiling coltan in 2015
        </FileLink>, elevating the mineral to a national security issue.
      </Paragraph>
      <Paragraph>
        As far back as the 1970’s,{" "}
        <FileLink
          format="pdf"
          size="2.3MB"
          href={require("documents/TIC_Bulletin67.pdf")}
        >
          studies done by the Geological Survey of Venezuela and the Ministry of
          Mines
        </FileLink>{" "}
        identified a vast tantalum reserve in Venezuela. One area, inhabited by
        the Piaroa indigenous people, was investigated in 1989 and 1990 and
        received special attention because of the attractive deposits. These
        deposits are located in the most western point of the Bolívar state, in
        the armpit of the Parguaza and the Orinoco river.
      </Paragraph>
    </Container>
  </article>
);
