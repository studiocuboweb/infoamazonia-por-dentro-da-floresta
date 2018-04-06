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
import FullBlock from "components/blocks/Full";

export default () => (
  <article>
    <Helmet>
      <title>
        Malaria is biting through Venezuela’s mining areas | Digging into the
        Mining Arc
      </title>
    </Helmet>
    <Container>
      <Title as="h2">Malaria is biting through Venezuela’s mining areas</Title>
      <Paragraph>
        A group of gun-strapped youngsters hang around in front of a{" "}
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              src: require("photos/IMG_4452.jpg")
            }
          }}
        >
          cockfighting arena
        </StoryMedia>{" "}
        while locals pay them a visit to ask for small financial contributions,
        mediation to settle conflicts or just to socialize. In Las Claritas,
        Bolívar state, the armed gang that goes by the name of pranes not only
        controls daily life, but is also in charge of the extensive illegal gold
        mines around the village. Many of the locals who visit the cockfighting
        arena leave unattended, a sign on the wall says: “<StoryMedia
          media={{
            id: "image-2",
            type: "image",
            data: {
              src: require("photos/IMG_4480.jpg")
            }
          }}
        >
          [Financial] Contributions suspended until further notice
        </StoryMedia>.”
      </Paragraph>
      <Paragraph>
        We are also waiting around and hoping to hear from the pran, the one
        commanding all operations. He decides whether we can pay a visit to his
        mines. “Do you have some water for me?” One of the gang members asks us.
        “I have to keep drinking.” He has malaria; even gangsters are not spared
        from the epidemic and the lack of medicines that trouble Venezuela’s
        mining regions.
      </Paragraph>
      <Paragraph>
        After a long wait, we are told we cannot visit the mines that day for a
        variety of unclear reasons. We decide to check out the local clinic in
        Las Claritas and inquire about malaria, but we are only allowed to ask
        questions and take photographs if we take one of the gang members with
        us in our car. The indifference the young gangster has for our work –
        “Are you guys ready? I’m hungry” – permits us to distance ourselves from
        him while he waits in a parking lot. We manage to speak with a few of
        the pale faced, shivering, miners who are hanging around in front of the
        local clinic. Most of them have had many relapses and are in need of
        antimalarial medicines. At the entrance of the clinic a sign reads: “<StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              src: require("photos/IMG_4458.jpg")
            }
          }}
        >
          There is no malaria treatment, until further notice
        </StoryMedia>.”
      </Paragraph>
      <FeaturedText>
        In 1961, Venezuela was honoured by The World Health Organization because
        it was the{" "}
        <ExternalLink
          language="en"
          href="https://www.nytimes.com/2016/08/15/world/venezuela-malaria-mines.html"
        >
          first country to eradicate malaria
        </ExternalLink>{" "}
        in densely populated areas.
      </FeaturedText>
      <Paragraph>
        Unfortunately, this honour belongs to the past. While Venezuela has
        shown that malaria can be successfully prevented and treated, few
        attempts have been made by the current government to counter the current
        epidemic.
      </Paragraph>
      <Paragraph>
        “Watch out! There is a mosquito behind your back,” jokes a medical
        researcher at a different and unidentified clinic in Bolívar state. “But
        it could also be chikungunya.” He explains that the government
        completely lost control over epidemics.
      </Paragraph>
      <Paragraph>
        The municipality Sifontes, in which mining towns like Las Claritas and
        Tumeremo are situated, has the highest malaria rate of the country. It's
        no coincidence that malaria is rampant in illegal mining areas as the
        disease{" "}
        <ExternalLink
          language="en"
          href="https://www.researchgate.net/publication/314122136_Anthropogenic_forest_loss_and_malaria_prevalence_a_comparative_examination_of_the_causes_and_disease_consequences_of_deforestation_in_developing_nations"
        >
          is known to be related to deforestation
        </ExternalLink>. The researcher, who asked to remain anonymous for fear
        for reprisals, explains that deforested jungles and mining pits fill
        with stagnant water, creating the ideal conditions for an epidemic. The
        sun quickly heats up the water since there is no jungle cover to provide
        shade, which accelerates the development of the larvae.
      </Paragraph>
      <Paragraph>
        Many illegal miners stay at{" "}
        <StoryMedia
          media={{
            id: "gallery-1",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/acampamento/Camp_1.jpg")
                },
                {
                  src: require("photos/acampamento/Camp_2.jpg")
                },
                {
                  src: require("photos/acampamento/Camp_3.jpg")
                },
                {
                  src: require("photos/acampamento/Camp_4.jpg")
                },
                {
                  src: require("photos/acampamento/Camp_5.jpg")
                }
              ]
            }
          }}
        >
          makeshift mining camps
        </StoryMedia>{" "}
        and sometimes even sleep in hammocks right next to the mines. Their lack
        of prevention and close proximity to the mining lagoons, the breeding
        grounds for malaria mosquitos, makes them most vulnerable to infection.
      </Paragraph>
      <Paragraph>
        Malaria is an infectious disease caused by a parasite that leads to
        severe fevers, head and muscle aches and has a potentially deadly
        outcome. In the Bolívar state alone, home to 2.1 million people, roughly
        206 thousand people were infected with malaria in the ten first months
        of 2017. Amazonas, a state with a population of 180 thousand, had 42
        thousand cases of infection through September 2017, according to a
        doctor in a local health clinic. She also spoke with us on the condition
        of anonymity as fellow health workers have been fired for speaking to
        the press.
      </Paragraph>
      <Paragraph>
        “If we don't get more medicines in time it will get out of hand. There
        are already 27 thousand more cases than last year,” the doctor explained
        when we visited him in November. Each day, about 150-200 people{" "}
        <StoryMedia
          media={{
            id: "gallery-2",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/testes-malaria/IMG_4408.jpg")
                },
                {
                  src: require("photos/testes-malaria/IMG_4410.jpg")
                }
              ]
            }
          }}
        >
          are tested in Puerto Ayacucho
        </StoryMedia>. Half of those people usually test positive. According to
        the doctor, even more testing facilities and medicine handouts are
        needed in the region, especially in remote areas.
      </Paragraph>
      <Paragraph>
        Jungle municipalities in Amazonas, like Río Negro and Manapiare, are
        plagued by illegal mining and malaria. It is now a public health crisis.
        Transport from the state-capital Puerto Ayacucho to this remote region
        can take five to ten days by boat. “There are no medicines in mining
        areas,” she says. People that obtain medicines sometimes resell it per
        dose, even if they have malaria themselves. A dose will not cure you
        though, you need to finish the whole treatment, but according to her,
        people are desperate for cash and abuse the ignorance of another.
      </Paragraph>
      <Paragraph>
        In neighbouring Bolívar state, miners say medicines are sold on the
        black market at a rate of one or two grams of gold per dose.
      </Paragraph>
      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/gW7Rf/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>
      <Paragraph>
        In the past four years, the number of malaria patients has increased
        fifteenfold. In the last three years, the Ministry of Health failed to
        contain five epidemics: dengue, chikungunya, zika, diphtheria and
        malaria – and millions of Venezuelans were infected.
      </Paragraph>
      <Quote author="Carlos Chancellor, former mayor of Sifontes, Bolívar">
        This government is so irresponsible that they are not even taking care
        of their malaria victims
      </Quote>
      <Paragraph>
        The former mayor of Sifontes, Carlos Chancellor, has had enough of the
        deficient government policies. “This government is so irresponsible that
        they are not even taking care of their malaria victims,” Chancellor
        grumbles. He was still in the office when we visited him, in November
        2017, signing papers and meeting with two emotional parents who are
        pleading with the him to arrange an emergency visit with their son, who
        was recently arrested during an anti-government protest.
      </Paragraph>
      <Paragraph>
        In his cramped office without windows in Tumeremo, the mayor tries to
        work under a flickering fluorescent tube. As people keep walking into
        his office, Chancellor says that about 80 thousand people are directly
        or indirectly involved in the many illegal mines of its municipality.
        "They are respectable people, workers," but he sees the sector and its
        collateral damage, like the malaria epidemic, as a big problem.
      </Paragraph>
      <Paragraph>
        “Today I’ve been tested and I’m malaria free for the first time!” says a
        relieved{" "}
        <StoryMedia
          media={{
            id: "image-4",
            type: "image",
            data: {
              src: require("photos/IMG_4398.jpg")
            }
          }}
        >
          Eduardo Rodríguez
        </StoryMedia>, in front of a clinic in Tumeremo, Bolívar. The illegal
        miner was tested seven times over the past 18 months and six times he
        had received a “positive” result.
      </Paragraph>
      <Paragraph>
        Most miners lack the luck of Eduardo Rodríguez, so they suffer from
        continuous relapses, unable to combat the parasite. “I already had
        malaria for about 50 times,” says a miner in El Callao. “It was like I
        was urinating Coca-Cola.” His shaking body stands in front of a jungle
        shack, made from wooden poles and some plastic tarps that function as a
        roof. Just ten meters from his makeshift, miners are hosing down a muddy
        slope to further process the sediments for gold.
      </Paragraph>
      <Paragraph>
        “The frontier between mosquito and men does not exist anymore,” explains
        a local medic. “Our people are trained and available to work on the
        problem,” he says, but absent medicines are the key problem.
      </Paragraph>
      <Paragraph>
        Remote mining areas in Bolívar and Amazonas state experience similar
        problems. “Death presents itself because people live so far away,” the
        medic says. “First, they need to cross a river, then wait for a boat,
        then for a mule and then a Toyota jeep needs to transport them to us.
        This can take up to three or four days in which somebody’s health
        situation can get really complicated.”
      </Paragraph>
      <Paragraph>
        To earn extra cash, this medic has also worked in the mines during time
        off from his day job. “With a lucky strike you can earn as much in two
        weeks as in six weeks in the hospital,” he grins, but this year he will
        probably not return to the mines. The violence and risk of malaria just
        became too much.
      </Paragraph>
      <Paragraph>
        “There is an extraordinary increase in migrant miners from different
        states towards Amazonas and Bolívar, as well as collateral people like
        prostitutes, merchants, et cetera.” explains Dr Oscar Noya, director of
        the Centre of Malaria Studies and researcher at the Institute of
        Tropical Medicine at the Central University of Venezuela, in Caracas.
      </Paragraph>
      <Quote author="Dr Oscar Noya, Centre of Malaria Studies">
        The increase in cases has to do with the scarcity of antimalarials and
        aggravates the regional situation
      </Quote>
      <Paragraph>
        “Relapses are not included in the statistics, so the actual number,
        associated with an increase in asymptomatic carriers, is the actual
        number and we estimate that cases in 2016 exceeded one million.”
      </Paragraph>
      <Paragraph>
        Experts say that the worst days of the epidemic are yet to come.
        Migrating infected miners, with increased exposure to malaria, may help
        spread the disease. Health workers in the border zones of neighbouring
        countries such as Brazil and Colombia have been put on alert. In
        Colombia, of the 965 malaria-infected people who crossed the border in
        2017,{" "}
        <FileLink
          format="pdf"
          size="1.5MB"
          href={require("documents/2017BoletinEpidemiologico52_INS.pdf")}
        >
          92 per cent came from Venezuela
        </FileLink>. “Out of nothing, one case of malaria can cause an epidemic
        within six months," one of the health workers in Bolívar state said.
      </Paragraph>
    </Container>
  </article>
);
