import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import StoryMedia from "components/StoryMedia";
import FeaturedText from "components/blocks/FeaturedText";
import Quote from "components/blocks/Quote";

export default () => (
  <article>
    <Helmet>
      <title>
        Unrest in Venezuela’s cradle of gold mining | Digging into the Mining
        Arc
      </title>
    </Helmet>
    <Container>
      <Title as="h2">Unrest in Venezuela’s cradle of gold mining</Title>

      <Paragraph>
        Venezuela does not have an elaborate mining history like its neighbours
        Colombia and Brazil, but if there is one place in the country that
        traditionally breathes mining, it is El Callao. The face of the village
        in Bolívar state changed forever when gold was discovered there in The
        face of the village in Bolívar state changed forever when gold was
        discovered in 1853 and it even became the world’s{" "}
        <ExternalLink
          href="https://www.britannica.com/place/El-Callao"
          language="en"
        >
          leading gold producer in 1885
        </ExternalLink>. Various foreign companies operated mines in the area,
        but it is Minerven, a company created in 1970 and nationalised four
        years later, that has exploited most gold coming from El Callao.
      </Paragraph>

      <Paragraph>
        Local miners tell that working for Minerven used to mean status, and
        that employees would wear company shirts with honour, but things have
        changed in recent years. Minerven has fallen into decay.{" "}
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              src: require("photos/El Callao-55.jpg")
            }
          }}
        >
          Production plants have been dismantled
        </StoryMedia>{" "}
        and the yearly production targets are not met, by far. Meanwhile, many
        armed groups have started to overtake the larger mines that surround the
        village. About one year ago, the Venezuelan army increased its presence
        the area – for its own gain, many say – and has not stopped fighting
        with gangs and killing their members ever since.
      </Paragraph>

      <Paragraph>
        <StoryMedia
          media={{
            id: "image-2",
            type: "image",
            data: {
              src: require("photos/El Callao-3.jpg")
            }
          }}
        >
          Mining in El Callao belongs to the Arco Minero project
        </StoryMedia>. About four mixed companies claim to be part of it, but a
        visit to El Callao is more than enough to understand that illegal and
        legal mining go hand in hand.
      </Paragraph>

      <Paragraph>
        Not only is most of the population directly or indirectly involved in
        the rudimentary extraction of gold, but mining and village life are
        intertwined. Wherever you are in El Callao, you probably will not have
        to walk more than a minute to find a gold merchant while it is a more
        difficult task to encounter a bakery or a supermarket.
      </Paragraph>

      <Paragraph>
        In the evenings, when most shops close up and when most miners dedicate
        themselves to their favourite activity – drinking – you will see people
        sweeping the floor in front of the{" "}
        <StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              src: require("photos/IMG_4420.jpg")
            }
          }}
        >
          gold shops
        </StoryMedia>, not only to clean, but to find gold. Flakes of gold can
        be accidently dropped by an uncareful salesman, and small shavings of
        gold get lost while burning the mercury amalgam, which is an activity
        that one prefers to do in front of the shop so that the toxic mercury
        fumes do not remain indoors.
      </Paragraph>

      <Paragraph>
        In 2017, until mid-November the{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/motor-minero-cierra-2017-victorioso-con-la-entrega-de-85-toneladas-de-oro-al-bcv/"
          language="es"
        >
          Central Bank of Venezuela (BCV) received 8.5kg of gold
        </ExternalLink>, all from Minerven. “El Callao is maintaining
        Venezuela,” comments the owner of a gold pawn shop on the central square
        of the village. However, according to various miners and Minerven
        personnel interviewed for this report, the gold does not originally come
        from Minerven, but from the small-scale, and illegal mines.
      </Paragraph>

      <Quote author="Minerven source">
        We are authorized to buy from 17 or 18 associations of artisanal gold
        producers, but we know they buy from illegal miners
      </Quote>

      <Paragraph>
        “I can’t affirm that Minerven buys from illegal mines, because on paper
        it is not like that,” a Minerven source says. “We are authorized to buy
        from 17 or 18 associations of artisanal gold producers, but we know they
        buy from illegal miners. That’s how it works now. Everyday people are
        looking to conduct business with us to become legal.”
      </Paragraph>

      <Paragraph>
        Miners explain that only a minor portion of Venezuela’s gold production
        ends up at the BCV. Most of it is smuggled abroad by the army and
        organized crime. “Eight thousand kilos are nothing,” says retired
        general Clíver Alcalá Cordones. “It goes to Aruba and Curacao.” About 80
        per cent of Venezuela’s gold illegally leaves the country by airplanes
        transporting contraband, according to Alcalá.
      </Paragraph>

      <Paragraph>
        Since the 19th century, various international companies, from France,
        the United Kingdom, and Russia have entered the region to mine the rich
        gold veins that not only surround the village, but run right beneath it.{" "}
        <StoryMedia
          media={{
            id: "image-4",
            type: "image",
            data: {
              src: require("photos/El Callao-57.jpg")
            }
          }}
        >
          Neighbourhoods around the centre slowly became mines
        </StoryMedia>.
      </Paragraph>

      <Paragraph>
        It is not uncommon for a house to have a few processing mills in its
        backyard close to various holes in the ground.{" "}
        <StoryMedia
          media={{
            id: "image-5",
            type: "image",
            data: {
              src: require("photos/El Callao-22.jpg")
            }
          }}
        >
          These holes
        </StoryMedia>{" "}
        must not be mistaken for bad sewerage – they are mining tunnels that
        lead to various horizontal mining galleries.
      </Paragraph>

      <Paragraph>
        “Confrontations have already been taking place for two years, these
        occur because there are many mining zones here,” says a local miner from
        El Callao. “Mining zones are big, there are neighbourhoods with mining.
        If one neighbourhood has too much gold, another neighbourhood wants to
        enter. Not to work, but to rob with weapons in their hands and to get
        rid of the people who have gold they want to take.”
      </Paragraph>

      <Paragraph>
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/embed/?map_only=1&map_id=17464"
            }
          }}
        >
          Villages becomes mines, and mines become villages
        </StoryMedia>. Mining areas around El Callao are called Colombia, Peru
        and Chile, along with other names that were given by previously present
        foreign mining companies. At the moment, these mines are worked by
        illegal small-scale miners. They operate under pressure of the local
        gangs that collaborate with the army. Meanwhile, unknown intruders who
        have fought for years over the gold mines have already stained El Callao
        with blood.
      </Paragraph>

      <Paragraph>
        “These gangs are called <em>bases</em> here in the municipality. Before,
        there were three gangs, now there is only one [in charge],” the miner
        from El Callao explains. Still, various areas are filled with
        reminiscences of former gangs. “Small bases are still active between the
        people.” According to the miner, the ones in El Perú are the most
        horrific. Violent encounters occur frequently. In September, before our
        visit to El Perú—in a sector under command by a gangster alias “el Toto”
        –{" "}
        <ExternalLink
          href="http://www.eluniversal.com/noticias/sucesos/mueren-personas-durante-incursion-del-ejercito-mina-bolivar_669537"
          language="es"
        >
          eight people died
        </ExternalLink>{" "}
        in a confrontation with the army.
      </Paragraph>

      <Paragraph>
        Our pick-up truck is driven by Minerven personnel and leaves El Callao
        to visit the mines, not the ones controlled by Minerven, but the{" "}
        <StoryMedia
          media={{
            id: "galery-1",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/el-peru/El Peru_1.jpg")
                },
                {
                  src: require("photos/el-peru/El Peru_2.jpg")
                },
                {
                  src: require("photos/el-peru/El Peru_3.jpg")
                },
                {
                  src: require("photos/el-peru/El Peru_4.jpg")
                },
                {
                  src: require("photos/el-peru/El Peru_5.jpg")
                },
                {
                  src: require("photos/el-peru/El Peru_6.jpg")
                },
                {
                  src: require("photos/el-peru/El Peru_7.jpg")
                },
                {
                  src: require("photos/el-peru/El Peru_8.jpg")
                }
              ]
            }
          }}
        >
          illegal ones
        </StoryMedia>{" "}
        around the village. Here, mineral extraction plants based on the{" "}
        <FileLink
          href={require("documents/GacetaOficial_40960.pdf")}
          format="pdf"
          size="10.5MB"
        >
          prohibited use of mercury
        </FileLink>{" "}
        produce gold to sell to the state company.
      </Paragraph>

      <Paragraph>
        “Come with us,” our driver shouts at the local army major, who already
        is waiting for us in a black jeep. He puts an armed soldier in the back
        of our truck and escorts us with his own transport. We pass various
        military checkpoints before entering El Perú. The area is completely
        militarized, but the danger comes from the hilltops where gangs might
        come down to take over one of the mines. This lurking danger became
        evident after{" "}
        <ExternalLink
          href="http://www.eluniversal.com/noticias/sucesos/guerra-entre-bandas-sur-bolivar-dejo-seis-muertos_674893"
          language="es"
        >
          six locals were killed
        </ExternalLink>{" "}
        in a gang shootout the night after our visit.
      </Paragraph>

      <Paragraph>
        “If you behave well nothing will happen to you.” One miner, who operates
        a small gold-processing mill, explains that a ‘vaccine’— an extortion
        fee of four or five grams of gold per month for each mill—is paid to one
        of the gangs. With a calm expression on his face, he adds: “If not you
        will go up [into the hills] and they will turn on the chainsaw.” Horror
        stories about mass graves and dismemberment are common. Gangs are known
        to come down to the village and disappear with people in the surrounding
        hilltops.
      </Paragraph>

      <FeaturedText>
        Minerven personnel say that more than 30 thousand miners work the gold
        veins of El Callao and the surrounding areas.
      </FeaturedText>

      <Paragraph>
        Many of them are migrant workers and came to the region as a result of
        the crisis and a lack of job opportunities elsewhere in the country. One
        of those workers{" "}
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "6L0blKDiaS4"
            }
          }}
        >
          crawls out of a makeshift tunnel, followed by his 15-year old nephew
        </StoryMedia>. “If I do not work in the mines, I do not have a way to
        maintain my family,” the former carpenter says.
      </Paragraph>

      <Paragraph>
        Close to him rests Minorca Maurera, a 23-year single mom who worked in a
        bakery before she came to El Callao. “The minimum wage just doesn’t cut
        it for me. I’m a single mother of three children. I resigned [from the
        bakery] because of the low wage and came to this place. It is a bit
        tough, but I’ve been doing quite well. Independently, I can maintain my
        children now.”
      </Paragraph>

      <Paragraph>
        Dusty, slum-like neighbourhoods with dispersed and small makeshift
        wooden shacks that just have a thin corrugated roof are filled with
        mining migrants, but also with El Callao natives. More than a century
        and a half of gold extraction has brought the local population anything
        but riches, which even makes a hardcore Chavist wary of the Arco Minero.
      </Paragraph>

      <Quote author="Darwin Lizardi, local coordinator of the government party">
        The Arco Minero practically has functioned to cover up many things
      </Quote>

      <Paragraph>
        “The Arco Minero, practically has functioned to cover up many things,”
        says Darwin Lizardi Tabor. The 28-year old is the local coordinator of
        the youth branch of the Venezuela’s United Socialist Party (PSUV), the
        government party, and wears a red Minerven cap when we meet him. “The
        Arco Minero as such has not functioned, man. I will tell you that I’m a
        revolutionary Chavist, but you need to tell the things as they are. This
        is camouflage here. I don’t know why. Because in the end it’s hurting us
        as miners and the village.”
      </Paragraph>

      <Paragraph>
        Lizardi is proudly El Callao-born, but times have changed. He explains
        that his mother grew up in quieter times. “This was when you could leave
        the door of your house open all night, nobody would enter.” Lizardi’s
        66-year old mother now considers leaving the place they both carry in
        their heart.
      </Paragraph>

      <Paragraph>
        Violence and poverty make El Callao a difficult place to live. “The
        miner is still the dirty one that walks on street. He earns 300 thousand
        bolívares, drinks a beer and the next day he has nothing and needs to
        find{" "}
        <StoryMedia
          media={{
            id: "image-6",
            type: "image",
            data: {
              src: require("photos/IMG_4490.jpg")
            }
          }}
        >
          0.3 or 0.4 grams of gold
        </StoryMedia>{" "}
        to bring food back to his home. A miner should not live like this if the
        Arco Minero really was functioning.”
      </Paragraph>

      <Paragraph>
        We continue to speak in a bar closed to outsiders, as miners and alcohol
        can be a very explosive combination. Lizardi orders new beers as he
        continues his discourse about the lack of state infrastructure and
        medicines, all while the locals hand over their gold to the government.
        “Thanks to the miner, the one that{" "}
        <StoryMedia
          media={{
            id: "video-2",
            type: "youtube",
            data: {
              id: "ogK2c9iuqZA"
            }
          }}
        >
          goes down into a tunnel of 100-120 meters
        </StoryMedia>
        , thanks to this miner the state has four tons of gold.”
      </Paragraph>

      <Paragraph>
        The Arco Minero has received a lot of criticism in the Venezuelan press,
        mainly because of its future environmental impact, gang involvement and
        its presence in indigenous territories. In October, the state’s Ministry
        of Information went on the counter-attack and published an article that{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/criminalizacion-mediatica-deforma-la-verdad-del-arco-minero-del-orinoco/"
          language="es"
        >
          accuses the press of criminalizing the small-scale miners
        </ExternalLink>{" "}
        and overlooking the fact that 250 thousand people directly or indirectly
        depend on the Arco Minero.
      </Paragraph>

      <FeaturedText>
        In El Callao, where miners start to earn their own money while they are
        still young, the benefits of the Arco Minero are hard to perceive.
      </FeaturedText>

      <Paragraph>
        “All the gold would be invested in social work in the municipality of El
        Callao and now, not even an ambulance has arrived,” explains Lizardi,
        who says the people of El Callao have been promised a lot by the
        government. “Minerven already has the money from the state to buy the
        gold from the small miners. What Minerven practically does is to pick up
        the gold and bring it to the Central Venezuelan Bank. They are not
        assuming their role as a mining company because all their plants are
        halted.”
      </Paragraph>

      <Paragraph>
        Having your income determined by luck and hard work instead of just
        working hours is an integral part of mining culture. “At the moment
        nobody receives a wage. You work to get the gold and the money is
        yours,” says Eduardo Gutiérrez, a 43-year old man from El Callao who
        works at one of the{" "}
        <StoryMedia
          icon="binoculars"
          media={{
            id: "vr-1",
            type: "embed",
            data: {
              src: "https://roundme.com/embed/ZzUPHJB7RQlm7o4yp4BK"
            }
          }}
        >
          processing mills in El Perú
        </StoryMedia>.
      </Paragraph>

      <Paragraph>
        Gutiérrez is satisfied with the price the state company Minerven pays
        for his gold and he hopes that the Arco Minero project will send him
        more resources and equipment, but he still lacks a safe working
        environment. Gutiérrez touches{" "}
        <StoryMedia
          media={{
            id: "image-7",
            type: "image",
            data: { src: require("photos/IMG_4489.jpg") }
          }}
        >
          water mixed with mercury
        </StoryMedia>{" "}
        with his bare hands, as he scrapes a mass of gold amalgam from a plate.
        He then heats the residue with a gas burner to isolate the gold, but
        makes no effort to cover his face from the toxic mercury fumes.
      </Paragraph>

      <FeaturedText>
        Various scientists have already sounded the alarm about mercury
        pollution in El Callao causing{" "}
        <FileLink
          href={require("documents/RedAra_Contaminacion_mercurio_Guayana_Venezoelana.pdf")}
          format="pdf"
          size="4.0MB"
        >
          neurological problems for the miners
        </FileLink>, as well as leading to cases of{" "}
        <ExternalLink
          href="http://www.autismoava.org/noticias/el-veneno-silencioso-de-el-callao"
          language="es"
        >
          autism in young children
        </ExternalLink>.
      </FeaturedText>

      <Paragraph>
        Neurological disorders, kidney, lung, and skin problems are most the
        common health consequences of mercury contamination, says Marianella
        Herrera, the director of the Venezuelan Health Observatory in Caracas.
        “One important problem is the exposure to mercury for pregnant woman in
        the first stages of life. Also, researchers have connected heavy metals
        exposure, such as mercury, to autism.”
      </Paragraph>

      <Paragraph>
        A study carried out in various mining areas in Bolívar state found that
        only{" "}
        <ExternalLink
          href="http://www.spda.org.pe/wpfb-file/la-realidad-de-la-mineria-ilegal-en-paises-amazonicos-spda-pdf/"
          language="es"
        >
          32 per cent of the children had mercury levels below the safety limit
        </ExternalLink>{" "}
        in their blood.
      </Paragraph>

      <Quote author="Darwin Lizardi, local coordinator of the government party">
        All the gold that arrives at Minerven is legal, on paper, even if it’s
        illegal
      </Quote>

      <Paragraph>
        Severe health problems, bloody gang battles and military controlled
        areas. Illegal gold mining in El Callao has contributed to unsafe and
        unhealthy circumstances, but the Arco Minero has a stake in it all. “All
        the gold that arrives at Minerven is legal, on paper, even if it’s
        illegal,” Lizardi explains.{" "}
      </Paragraph>

      <Paragraph>
        <ExternalLink
          language="es"
          href="http://www.correodelcaroni.com/index.php/sucesos/violencia-minera-en-guayana/item/54451-bandas-armadas-atemorizan-a-vecinos-y-comercio-de-tumeremo-en-retaliacion-a-operativos-policiales"
        >
          The sector has been taken over by gangs and the army
        </ExternalLink>. Illegally mined gold is bought up by legal ‘mining’
        companies that are actually not mining the gold themselves, which
        essentially means they function as a large gold pawn shop. “Here in El
        Callao we have too much gold, but we do not have the machines nor the
        resources necessary to really be able [to mine it all],” boasts Darwin.
      </Paragraph>

      <Paragraph>
        The obscure symbiosis between legal and illegal mining is almost too
        obvious. On the other side of the village we are taken to a gang
        controlled mine called “Nacupay”. Before entering the area, we are told
        to “not take pictures of armed men,” nor of mercury-using mining
        machinery. Just before the entrance, a sign says{" "}
        <StoryMedia
          media={{
            id: "image-8",
            type: "image",
            data: {
              src: require("photos/El Callao-78.jpg")
            }
          }}
        >
          MunSol – “Mining enterprise affiliated to the Bolivarian homeland in
          the <em>Arco Minero del Orinoco</em>”
        </StoryMedia>. Behind the sign we find dozens of informal miners working
        in the muddy open-air pits.
      </Paragraph>

      <Paragraph>
        We are only allowed to take pictures of{" "}
        <StoryMedia
          media={{
            id: "video-5",
            type: "youtube",
            data: {
              id: "HFXKNxumg4I"
            }
          }}
        >
          miners working with washing boards, characteristic for artisanal
          mining operations
        </StoryMedia>, they don’t want us to show nor document the larger
        installations. We are still able to photograph the camps the miners live
        in, next to the mining pits filled with stagnant and contaminated water.
      </Paragraph>

      <Paragraph>
        The situation in El Callao is not an exception. About 91 percent of the
        gold mined in Venezuela is reported to be illegal, according to a{" "}
        <FileLink
          href={require("documents/GIATOC-OC_Illegally-Mined-Gold-in-Latin-America.pdf")}
          format="pdf"
          size="10.8MB"
        >
          research by the Global Initiative against Transnational Organized
          Crime
        </FileLink>. Small batches of gold are turned into jewellery and then
        smuggled to, for example, the Caribbean Islands. Just as in different
        parts of Venezuela, the corrupt army transports larger batches to
        coastal routes, Colombia and Brazil.
      </Paragraph>

      <Paragraph>
        Only a minor portion of the gold ends up in the hands of the state. This
        shows, as Lizardi mentioned before, how the Arco Minero so far functions
        as a facade. “I remember when Commander Chávez spoke about the Arco
        Minero [in 2011] and the Bolívar state should become a potency in
        Venezuela. We would not depend on petroleum!”, says the youngster, who
        has become disillusioned with the Arco Minero. “Here, things are
        happening and the Arco Minero has functioned to cover up corruption
        within the government.”
      </Paragraph>
    </Container>
  </article>
);
