import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import FeaturedText from "components/blocks/FeaturedText";
import Quote from "components/blocks/Quote";

export default () => (
  <article>
    <Helmet>
      <title>New visitors in coltan country | Digging into the Mining Arc</title>
    </Helmet>
    <Container>
      <Title as="h2">New visitors in coltan country</Title>
      <Paragraph>
        <strong>Puerto Ayacucho</strong>. It’s six in the morning and the heat
        already feels familiar, even before the sun has risen. Yonnier Rivera,
        our Cuban driver, arrives in time with his white pick-up truck and
        discusses the logistics of the day, as we wait for our other two travel
        companions: Noraima Ángel, a human rights coordinator from Puerto
        Ayacucho’s Vicarage, and Pedro Ortiz, an indigenous member of Red de
        Defensores y Defensoras Indígenas, a local indigenous protection
        network.{" "}
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "QmOJt-Idd2Q"
            }
          }}
        >
          The plan is to visit two small indigenous communities
        </StoryMedia>{" "}
        called Agua Mena and Tierra Blanca, in the neighbouring Bolívar state.
        The indigenous people live in the proximity of the Parguaza river that
        curls through – what we learn to be – “coltan country”.
      </Paragraph>
      <Paragraph>
        The Parguaza is one of the hundreds of tributaries of the Orinoco, the
        fourth most voluminous river in the world. The region, also called
        Parguaza, has been targeted by both illegal and legal mining projects.
        The lands are inhabited by the Piaroa and Penare people, who
        traditionally depend on agriculture and fishery.
      </Paragraph>
      <Paragraph>
        Our journey is interrupted several times by the Venezuelan National
        Guard. On one occasion, we are forced to open our bags for the armed
        men. Cars, trucks and buses passing through this region are subjected to
        frequent checks and are halted, on some occasions, every 20 kilometres.
        The soldiers check personal belongings, car seats, and even the insides
        of car doors, as they search for “contraband”.
      </Paragraph>
      <FeaturedText>
        Scarcely available products, such as food, medicine, car tires, and even
        fuel are often seized.
      </FeaturedText>
      <Paragraph>
        These daily humiliations for Venezuelans on the road do not concern us
        too much as we are more worried about the guerrilla presence in the
        region. As we enter Bolívar state, leaving Amazonas in the north, our
        vehicle makes a curve to the east slowly entering the Parguaza region.
        As we drive along an area called Los Gallitos, Ortiz, from the local
        defence network, tells us that this is where the ELN guerrilla get their
        coltan.
      </Paragraph>
      <Paragraph>
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/embed/?map_only=1&map_id=17444"
            }
          }}
        >
          Our first stop is Tierra Blanca
        </StoryMedia>. We were expecting to meet the Cacique, the indigenous
        authority in the region, but were instead met by the captain of Tierra
        Blanca. We later learn that the Cacique travelled to Caracas for a
        meeting in the Ministry of Mines.
      </Paragraph>
      <Paragraph>
        We receive few answers, because the Cacique did not authorize his
        captain to speak with us.{" "}
        <StoryMedia
          media={{
            id: "video-2",
            type: "youtube",
            data: { id: "b66GospDYoY" }
          }}
        >
          The indigenous people bring us to the Parguaza river
        </StoryMedia>. Children of local indigenous communities joyfully throw
        themselves in the water, and canoe around in the slow current. The
        slapping sound of wet clothing on stones is made by the indigenous women
        as they do the wash on the riverbanks. Few indigenous men are seen, as
        they hunt or work the land away from the village during the day. The
        equilibrium between nature and civilization is not yet irreversibly
        disturbed, but new players have entered the panorama.
      </Paragraph>
      <FeaturedText>
        From interviews with indigenous people from the Parguaza region,
        previous to our field visit, it becomes clear that the Colombian
        guerrilla increased its presence in their territories about three years
        ago.
      </FeaturedText>
      <Paragraph>
        In the community Agua Mena, close and similar to Tierra Blanca, the
        inhabitants are involved in the artisanal mining of coltan. Stones are
        recollected by an indigenous middleman, who subsequently sells to the
        guerrilla. The price is 80 to 100 thousand bolívares a kilo, which is
        less than one dollar. A fraction of what is offered on international
        markets for coltan, but none of the interviewed indigenous people were
        aware of usual going rates for coltan.
      </Paragraph>
      <Quote author="Juan López, indigenous from Agua Mena">
        We are the destroyers of the jungle
      </Quote>
      <Paragraph>
        The few dollars paid to the indigenous communities for opening up the
        earth and extracting minerals for financial gain contrasts with their
        ancestral beliefs. “We were recognized as protectors of the jungle. This
        is not what we are anymore. We are the destroyers of the jungle,” says
        Juan López, an indigenous person who currently works as a lawyer for the
        vicariate in Puerto Ayacucho, Amazonas.
      </Paragraph>
      <Paragraph>
        Coltan rich territories are not only traversed by Colombian guerrillas.
        The Arco Minero decree enabled the formation of new companies that were
        hastily set up and share the same motive as the armed guerrillas
        operating export routes to Colombia.
      </Paragraph>
      <Paragraph>
        By the end of 2016, the Empresa Mixta Minera Ecosocialista Parguaza was
        created with the initial goal of producing{" "}
        <ExternalLink
          language="es"
          href="http://avn.info.ve/contenido/20-toneladas-colt%C3%A1n-al-mes-prev%C3%A9-producir-empresa-mixta-parguaza"
        >
          20 tons a month, to be increased to 50 tons monthly
        </ExternalLink>. The company is a joint venture, owned by the public
        mining company Corporación Venezolana de Minería (CVM) and Corporación
        Faoz. The joint venture received a concession of 10,201 hectares that
        besides coltan contains gold, diamonds, quartz and other minerals. The
        company is constructing a coltan mine located close to the community
        Agua Mena.
      </Paragraph>
      <Paragraph>
        It is about midday when we visit Agua Mena. After speaking with the
        whole community, there is still some time to present ourselves at the{" "}
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              src: require("photos/Paraguaza-2.jpg")
            }
          }}
        >
          gate of the Empresa Mixta Minera Ecosocialista Parguaza
        </StoryMedia>, which is protected around the clock by the National
        Guard. Army personnel is also present on their terrain.
      </Paragraph>
      <Paragraph>
        We introduce ourselves around 1 PM in the afternoon and inquire about
        social investments in nearby indigenous communities. “You need a
        permission from the Ministry of Mines in Caracas to speak with us,” we
        are told by Luisa Herminia Alcalá Otero, the company representative who
        meets us and allow us to enter the company terrain.
      </Paragraph>

      <Paragraph>
        Just as we thought that we would be shoved off with a reprimand for
        asking questions, it seems that our visit is an extended one.
      </Paragraph>

      <FeaturedText>
        The National Guard does not allow us to leave. It takes a few hours of
        waiting, while our papers are inspected, to understand that we are being
        detained.
      </FeaturedText>

      <Paragraph>
        It is the end of the afternoon, close to sunset, and we are unsure how
        long we will be held. Day laborers are lining up to hop on the bus that
        takes them back to their communities. Before they can leave, their bags
        are checked by the National Guard. As we are surrounded by armed
        National Guards, we can observe the workers, wearing ragged clothes,
        replica football shirts and muddy boots. Many indigenous people glimpse
        at us while they wait to have their bags inspected.
      </Paragraph>
      <Paragraph>
        The workers do not seem very intimidated by the assault rifles of the
        National Guard and it is unclear if the armed men are present to prevent
        workers from stealing from the company, or to protect the project from
        the guerrillas. A National Guard who works in the mining camp comments
        that there is “mutual respect” when they encounter the guerrilla. “They
        do not mess with us, and we do not mess with them.” Meanwhile we are
        brought to the barracks of the National Guard and locked up with armed
        guards in front of the door.
      </Paragraph>

      <Paragraph>
        At 1 AM in the morning it is still unclear what will happen with us
        while we are interviewed. We are not allowed to make any phone calls,
        but are told that we are under investigation. Our detention was
        completely illegal and improvised. Not only were we locked up in a
        mining company, we did we not receive the right to make a phone call or
        to speak with a lawyer. Amongst other omissions, we were also
        interviewed by a National Guard who did not have the authority to do so.
        According to the National Guard, their suspicion is either that our lead
        investigator is a foreign spy, or an investigator of the
        government-opposition.
      </Paragraph>
      <Paragraph>
        As uncertainty surrounds us, we can tell from small interactions that
        the youngsters from the National Guard have problems understanding our
        detention, but they obey the orders of the company. At 3 AM in the
        morning we are commanded to get ready for transport. Two pick-up trucks
        transport the four of us, guarded by armed National Guards, to Caicara
        del Orinoco, seven hours further into coltan country.
      </Paragraph>
      <Paragraph>
        We are surprisingly set free 24 hours after our detention. Two
        investigators of the military counterintelligence in Caicara del Orinoco
        subject us to an interrogation, but it seems that no alarms are set of.
        It comes to our attention that the church, the Dutch Embassy, media and
        civil society campaigned for our liberation. Astounded by the fact that
        we were just apprehended inside a mining company, while we only thought
        the guerrilla could give us trouble, it is hard to imagine how the
        company establishes a good relationship with its indigenous neighbours.
      </Paragraph>
      <Paragraph>
        The Empresa Mixta Minera Ecosocialista Parguaza is not the only joint
        venture that operates in the area. The same municipality, Cedeño, counts
        with two other recently formed companies. Oro Azul, a joint venture
        between CVM and Supracal, received a concession with 8,159 hectares and
        Empresa Mixta Minera Metales del Sur, participated by the Canadian
        company Energold.
      </Paragraph>
      <Paragraph>
        So far, the indigenous communities of the region have been promised a
        lot by the new companies: new housing, roads, electricity and pick-up
        trucks. Health workers have also been sent to the malaria-tormented
        communities. Various indigenous people are temporarily contracted for
        the minimum wage, which{" "}
        <ExternalLink
          language="es"
          href="http://www.finanzasdigital.com/2017/11/cendas-canasta-alimentaria-familiar-octubre-2017-se-ubico-3-918-34125-bolivares-461/"
        >
          is not enough to feed a family
        </ExternalLink>{" "}
        in Venezuela and has been floating frequently. Currently, it is about
        350 thousand bolívares, which would be about US$3,50 in the black-market
        rate. They work as private security personnel and construction workers,
        but do not possess fixed contracts.
      </Paragraph>
      <FeaturedText>
        The three companies do not have experience with coltan extraction and
        did not present obligatory socio-environmental impact studies.
      </FeaturedText>
      <Paragraph>
        Consulted local indigenous communities say they have never been told
        about the real implications of the project, and were manipulated with
        false development promises and wrong information.
      </Paragraph>
      <Paragraph>
        The entrance of the guerrilla and the new companies in Parguaza are,
        according to Franklin Quiñones, a 28-year old Piaroa indigenous person
        from the region, owed to the Cacique. “The Cacique permitted the
        entrance of the guerrilla, and also the instalment of the [company]
        camp.” According to Quiñones and other anonymous sources, the Cacique
        has been bought and a minority of the indigenous leadership were given
        jobs or benefits by the company.
      </Paragraph>
      <Paragraph>
        “You [the leaders] are puppets, you don't have the capacity to say this
        to the company,” says Quiñones, while adding: “They focus on individual
        gain, they are used”.
      </Paragraph>
      <Paragraph>
        The indigenous youngster understands very well how the recently arrived
        companies apply strategies to divide and conquer the communities and how
        newly created frictions cause unrest. “When you install a company, here,
        this will be the end of our culture, the end of our customs. And so, a
        complete transculturalisation. So, there are many preoccupied
        communities that ask: ‘who will help us?’.”
      </Paragraph>
    </Container>
  </article>
);
