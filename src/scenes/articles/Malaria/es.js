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
        Malaria invade las zonas mineras de Venezuela |
        Explorando el Arco Minero
      </title>
    </Helmet>
    <Container>
      <Title as="h2">
        Malaria invade las zonas mineras de Venezuela
      </Title>
      <Paragraph>
        Un grupo de jóvenes con armas de fuego esperan frente a una{" "}
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              src: require("photos/IMG_4452.jpg")
            }
          }}
        >
          arena de peleas de gallos
        </StoryMedia>{" "}
        mientras los locales los visitan para pedirles pequeñas contribuciones
        financeiras, mediación para dirimir conflictos y solo por socializar. En
        Las Claritas, en el estado Bolívar, las bandas armadas son comandadas
        por los pranes, que no solo controlan la vida diaria, sino también están
        a cargo de las vastas minas de oro ilegales alrededor del pueblo. Muchos
        de los habitantes que visitan la arena no reparan en un cartel en la
        pared que dice: “<StoryMedia
          media={{
            id: "image-2",
            type: "image",
            data: {
              src: require("photos/IMG_4480.jpg")
            }
          }}
        >
          Las colaboraciones [financieras] están suspendidas hasta nuevo aviso
        </StoryMedia>.”
      </Paragraph>
      <Paragraph>
        También nosotros aguardamos y esperamos saber del pran, el único que
        dirige todas las operaciones. Él decide si podemos visitar sus minas.
        “¿Tiene algo de agua para mí?”, me pregunta uno de los miembros de la
        banda. “Debo mantenerme tomando agua”. Tiene malaria; incluso los
        criminales no están exentos de la epidemia y de la falta de medicinas
        que complica las regiones mineras de Venezuela.
      </Paragraph>
      <Paragraph>
        Después de una larga espera nos dicen que no podremos visitar las minas
        ese día, por una amplia variedad de razones que no nos quedan claras.
        Decidimos ir a la clínica local en Las Claritas y preguntar por la
        malaria, pero solo nos dejan preguntar y tomar fotografías si llevamos
        uno de los miembros de la banda armada con nosotros. La indiferencia que
        el joven criminal tiene por nuestro trabajo – “¿Están listos? Tengo
        hambre” – nos permite tomar distancia mientras él espera en el
        estacionamiento. Conseguimos hablar entonces con algunos de los mineros,
        que están pálidos y con temblores y que esperan alrededor de la clínica.
        La mayoría de ellos han tenido muchas recaídas y necesitan los
        medicamentos contra malaria. En la entrada de la clínica hay un letrero:
        “<StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              src: require("photos/IMG_4458.jpg")
            }
          }}
        >
          No hay tratamiento contra la malaria hasta nuevo aviso
        </StoryMedia>.”
      </Paragraph>
      <FeaturedText>
        En 1961, Venezuela fue premiada por la Organización Mundial de la Salud
        porque era el{" "}
        <ExternalLink
          language="es"
          href="https://www.nytimes.com/es/2016/08/16/la-malaria-sale-de-las-infernales-minas-ilegales-venezolanas-y-vuelve-a-esparcirse-por-el-pais/"
        >
          primer país en erradicar la malaria
        </ExternalLink>{" "}
        en áreas densamente pobladas.
      </FeaturedText>
      <Paragraph>
        Por desgracia, este honor pertenece al pasado. Aunque Venezuela ha
        probado que la malaria puede puede prevenirse y tratarse pocos
        han sido los intentos del gobierno para contrarrestar la epidemia
        actual.
      </Paragraph>
      <Paragraph>
        “¡Cuidado! Hay un mosquito detrás de tu espalda”, bromea un investigador
        médico en otra clínica del estado Bolívar que no puede ser identificada.
        “Pero también puede ser chikungunya”. Y explica que el gobierno ha
        perdido absolutamente el control sobre las epidemias.
      </Paragraph>
      <Paragraph>
        El municipio Sifontes, donde hay pueblos mineros como Las Claritas y
        Tumeremo, tiene el índice más alto de malaria en el país.
        No es una coincidencia que el paludismo ande campante en zonas de
        minería ilegal, cuando se sabe, además, que{" "}
        <ExternalLink
          language="en"
          href="https://www.researchgate.net/publication/314122136_Anthropogenic_forest_loss_and_malaria_prevalence_a_comparative_examination_of_the_causes_and_disease_consequences_of_deforestation_in_developing_nations"
        >
          la enfermedad está relacionada con la deforestación
        </ExternalLink>. El investigador, quien pidió resguardar su nombre por
        temor a represalias, explica que los bosques deforestados y los fosos
        llenos de agua estancada crean las condiciones ideales para una
        epidemia. El sol calienta rápidamente el agua y ya que no hay sombra de
        los árboles, se acelera el desarrollo de las larvas.
      </Paragraph>
      <Paragraph>
        Muchos mineros ilegales se quedan en{" "}
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
          campos improvisados
        </StoryMedia>{" "}
        e incluso duermen en hamacas, bastante cerca de las minas. La falta de
        prevención y cercanía con las lagunas mineras, alimenta los criaderos de
        mosquitos de malaria y los hace más vulnerables a la infección.
      </Paragraph>
      <Paragraph>
        La malaria es una enfermedad infecciosa causada por un parásito que
        ocasiona severas fiebres, dolores de cabeza y musculares y
        potencialmente puede resultar en la muerte. Sólo en el estado Bolívar,
        habitado por 2,1 millones de personas, unas 206 mil personas se
        infectaron de paludismo en los primeros diez meses de 2017. Amazonas, un
        estado de 180 mil habitantes, registró 42 mil casos de infección hasta
        septiembre de 2017, de acuerdo con una doctora en una clínica local.
        Ella también habló con nosotros bajo la condición de anonimato prefiere
        no ser citada por su nombre por temor a que la despidan, como ya ocurrió
        con colegas trabajadores de salud.
      </Paragraph>
      <Paragraph>
        “Si no tenemos más medicinas a tiempo, esto se saldrá de las manos. Hay
        alrededor de 27 mil casos más que el año pasado”, explicó la doctora
        cuando la visitamos en noviembre. Cada día entre 150 y 200 personas{" "}
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
          se hacen la prueba en Puerto Ayacucho
        </StoryMedia>. La mitad de la gente resulta positivo por lo general.
        Según la doctora, hacen falta más instalaciones para realizar las
        pruebas, más folletos de medicamentos en la región y en especial, en
        zonas lejanas.
      </Paragraph>
      <Paragraph>
        Municipios selváticos en Amazonas, como Río Negro y Manapiare, están
        plagados de minería ilegal y de malaria. Es ahora una crisis de salud
        pública. El transporte desde la capital del estado, Puerto Ayacucho,
        puede tomar entre cinco y diez días de barco. “No hay medicinas en zonas
        mineras”, relata. La gente que consigue los medicamentos, muchas veces
        los vende de nuevo por dosis, aun cuando ellos mismos tienen malaria.
        Una sola dosis no cura, se necesita terminar el tratamiento completo,
        pero de acuerdo con la doctora la gente está desesperada por el dinero
        efectivo y abusa de la ignorancia de otros.
      </Paragraph>
      <Paragraph>
        En el vecino estado Bolívar, los mineros indican que las medicinas son
        vendidas en el mercado negro a un equivalente de uno o dos gramas de oro
        por dosis.
      </Paragraph>
      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/mVmoH/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>
      <Paragraph>
        En estos cuatro años, el número de pacientes con paludismo ha aumentado
        15 veces. En los últimos tres años, el ministro de Salud falló para
        contener cinco epidemias: dengue, chikungunya, zika, difteria y malaria
        – y millones de venezolanos fueron infectados.
      </Paragraph>
      <Quote author="Carlos Chancellor, ex alcalde de Sifontes, Bolívar">
        Este gobierno es tan irresponsable que no les importa ni siquiera las
        víctimas de paludismo
      </Quote>
      <Paragraph>
        El ex alcalde de Sifontes, Carlos Chancellor, ya ha tenido suficiente de
        las políticas gubernamentales deficientes. “Este gobierno es tan
        irresponsable que no les importa ni siquiera las víctimas de paludismo”,
        refunfuña Chancellor. El aún estaba en el cargo cuando le visitamos, en
        noviembre de 2017, firmando papeles y teniendo reunión con dos padres
        intentaban convencer a él de arreglar una visita de emergencia con un
        hijo que fue arrestado recientemente en una protesta contra el gobierno.
      </Paragraph>
      <Paragraph>
        En su estrecho despacho sin ventanas en Tumeremo, el alcalde intenta
        trabajar debajo de un tubo titilante fluorescente. Mientras las personas
        siguen caminando a su oficina, Chancellor dice que cerca de 80 mil
        personas están directa e indirectamente involucradas en la minería
        ilegal de su municipio. “Son gente respetable, trabajadores”, pero ve
        este sector y su daño colateral, como la epidemia de malaria, como un
        gran problema.
      </Paragraph>
      <Paragraph>
        “¡Hoy me hice la prueba y ya no tengo malaria por primera vez!”, dice
        aliviado{" "}
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
        </StoryMedia>, frente a una clínica en Tumeremo, en Bolívar. Este minero
        ilegal se ha hecho la prueba de paludismo siete veces en los últimos
        18 meses, en seis de las cuales ha recibido un resultado “positivo”.
      </Paragraph>
      <Paragraph>
        La mayoría de los mineros no tienen la suerte de Eduardo Rodríguez,
        pues sufren de continuas recaídas, incapaces de combatir el
        parásito. “Ya tuve malaria unas 50 veces”, dice un minero en El Callao.
        “Fue como orinar Coca-Cola”. Su cuerpo tembloroso permanece de pie
        frente a una choza en la selva, hecha de palos de madera y de lona de
        plástico que sirve de techo. Solo diez metros de distancia de su
        alojamiento, otros mineros riegan una pendiente fangosa con una manguera
        para seguir procesando los sedimentos de oro.
      </Paragraph>
      <Paragraph>
        “La frontera entre el mosquito y el hombre ya no existe”, explica un
        médico local. “Nuestra gente está entrenada y dispuesta a trabajar en el
        problema”, sostiene, pero la falta de medicinas son el inconveniente
        principal.
      </Paragraph>
      <Paragraph>
        Zonas mineras remotas en los estados Amazonas y Bolívar viven problemas
        similares. “La muerte llega porque las personas viven muy lejos”,
        explica el médico. “Primero, necesitan cruzar el río, luego esperar el
        bote, luego por una mula y después un jeep Toyota los transporta a
        nosotros. Esto puede tardar hasta tres o cuatro días en los que la
        condición de salud de alguien puede complicarse realmente”.
      </Paragraph>
      <Paragraph>
        Para hacer dinero extra, este médico también trabajó en las minas en su
        tiempo libre. “Con un golpe de suerte se puede hacer en dos semanas lo
        que obtengo en seis semanas en el hospital”, sonríe, pero este año
        probablemente no regrese a las minas. La violencia y el riesgo de
        malaria son demasiado.
      </Paragraph>
      <Paragraph>
        “Hay un auge extraordinario de migrantes mineros de diferentes estados
        hacia Amazonas y Bolívar, así como personas colaterales como
        prostitutas, mercaderes, etc.”, explica el doctor Oscar Noya, director
        del Centro de Estudios sobre Malaria e investigador del Instituto de
        Medicina Tropical en la Universidad Central de Venezuela, en Caracas.
      </Paragraph>
      <Quote author="Dr Oscar Noya, Centro de Estudios sobre Malaria">
        El aumento de casos tiene que ver con la escasez de antimaláricos y se
        agrava con la situación regional
      </Quote>
      <Paragraph>
        “Las recaídas no se incluyen en las estadísticas, así que el número
        actual, vinculado a un aumento de portadores asintomáticos, es el número
        real y estimamos que en 2016 superaron el millón”.
      </Paragraph>
      <Paragraph>
        Los expertos dicen que los peores días de la epidemia aún están por
        llegar. Los mineros migrantes, con exposición creciente a malaria,
        pueden ayudar a esparcir la enfermedad. Trabajadores de la salud en las
        zonas fronterizas de países como Brasil y Colombia están alertas. En
        Colombia, de las 965 personas infectadas con malaria que cruzaron la
        frontera en 2017,{" "}
        <FileLink
          format="pdf"
          size="1.5MB"
          href={require("documents/2017BoletinEpidemiologico52_INS.pdf")}
        >
          92 por ciento llegaron desde Venezuela
        </FileLink>. “De la nada, un solo caso de malaria puede ocasionar una
        epidemia dentro de seis meses”, advierte un de los trabajadores de la
        salud en el estado Bolívar.
      </Paragraph>
    </Container>
  </article>
);
