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
      <title>
        Amazonas y el oeste de Bolívar: en manos de la guerrilla | Explorando el
        Arco Minero
      </title>
    </Helmet>
    <Container>
      <Title as="h2">
        Amazonas y el oeste de Bolívar: en manos de la guerrilla
      </Title>
      <Paragraph>
        Los que llevan la peor parte de la bonanza minera son las{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/es/embed/?map_only=1&map_id=17467"
            }
          }}
        >
          comunidades nativas de los estados Amazonas y Bolívar
        </StoryMedia>{" "}
        a quienes se les viene usurpando las ganancias de economía minera tanto
        legal como ilícita. Grupos guerrilleros colombianos – referidos por los
        locales como <em>patagomas</em> – están expandiendo sus operaciones
        mineras en el occidente de Venezuela y recientemente anunciaron sus
        primeros proyectos mineros en territorios indígenas.
      </Paragraph>
      <Quote author="Liborio Guarulla, exgobernador del estado Amazonas">
        La forma indígena de vivir se ha visto afectada por la presencia de
        mineros y grupos ilegales y armados
      </Quote>
      <Paragraph>
        En Puerto Ayacucho, Liborio Guarulla, quien gobernó el estado de
        Amazonas de 2001 a 2017 y un indígena Baniva, se sienta a su escritorio
        con una pintura grande del libertador Simón Bolívar, detrás de su
        espalda.{" "}
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "b0MjlZWd4Tk"
            }
          }}
        >
          Explica
        </StoryMedia>: “La forma indígena de vivir se ha visto afectada por la
        presencia de mineros y grupos ilegales y armados. Y se han insertado en
        las economías mineras”.
      </Paragraph>
      <Paragraph>
        La gravedad de la situación es patente{" "}
        <ExternalLink
          language="en"
          href="https://uk.reuters.com/article/us-venezuela-amazon/illegal-miners-infest-venezuelas-amazon-idUKBRE9B205S20131203"
        >
          shoulders in the Amazonas state
        </ExternalLink>{" "}
        con casos de grupos indígenas esclavizados que tienen números tatuados
        en sus espaldas u hombros. “Cuando recibimos la denuncia que habían
        matado a unos [indígenas] Yanomami, fui a la zona del Alto Orinoco, que
        es un municipio muy extenso”, dice el mayor general retirado del
        ejército, Clíver Alcalá Cordones. En 2012, el ejército comenzó una
        operación de tres semanas después de recibir la queja de que indígenas
        Yanomami estaban siendo asesinados alrededor de proyectos de minería
        ilegal. “Yo vi a algunos yanomamis que estaban marcados”.
      </Paragraph>

      <Paragraph>
        Alcalá explica que varios indígenas fueron marcados por mineros
        invasores brasileños, llamados <em>garimpeiros</em>, que esclavizaron a
        los nativos en las minas. “Así, ellos pueden decir ‘este indígena es
        mío’”. No solo han sido esclavizados los indígenas, las jóvenes también
        han sido{" "}
        <FileLink
          format="pdf"
          size="0.4MB"
          href={require("documents/AliciaMoncadaAcosta_Violencia-Mujeres-Indigenas-Mineros-Amazonia-Colombia-Venezoela.pdf")}
        >
          forzadas en prostitución
        </FileLink>{" "}
        dentro y alrededor de las minas. “Las chicas ‘bonitas’ no pueden
        marcharse, las dejan allí”, explica Henelda Rodríguez, de la ONG
        Organización De Mujeres Indígenas Amazónicas Wanaaleru. “Las chicas que
        quieren escapar desaparecen”.
      </Paragraph>
      <Paragraph>
        Amazonas no es oficialmente parte del Arco Minero, pero Guarulla teme
        que es cuestión de tiempo antes de que los proyectos infractores se
        expandan a lo largo de la frontera estadal. Más de la mitad de las
        tierras del Amazonas están con protección ambiental, pero vienen siendo
        invadidas por la minería ilegal y por hombres armados.
      </Paragraph>
      <Paragraph>
        Alrededor de 25 por ciento de las tierras venezolanas pertenecen a
        pueblos indígenas.{" "}
        <FileLink
          format="pdf"
          size="0.3MB"
          href={require("documents/PROVEA_Derechos-Pueblos-Indigenas_2016.pdf")}
        >
          198 comunidades indígenas habitan dentro del Arco Minero
        </FileLink>, pero la mayoría de los territorios ancestrales no cuentan
        con límites legales ni protección. La constitución requirió protección
        legal para las tierras indígenas desde 1999, pero apenas{" "}
        <FileLink
          format="pdf"
          size="0.4MB"
          href={require("documents/PROVEA_Derechos-Pueblos-Indigenas_2014.pdf")}
        >
          12,4 por ciento de sus territorios han sido demarcados
        </FileLink>.
      </Paragraph>
      <Paragraph>
        Comunidades indígenas que se encuentran en la vía de proyectos de
        prospección minera, un sector etiquetado como uno de los motores de
        economía nacional, ahora son un obstáculo inconveniente – o peor, mano
        de obra barata.
      </Paragraph>
      <Quote author="Liborio Guarulla, exgobernador del estado Amazonas">
        Prácticamente, es la guerrilla quien ejerce el control aquí. La
        guerrilla con la ayuda de las Fuerzas Armadas venezolanas. Ellos reciben
        parte de las acciones
      </Quote>
      <Paragraph>
        Guarulla argumenta que su estado ha sido invadido: “Prácticamente, es la
        guerrilla quien ejerce el control aquí. La guerrilla con la ayuda de las
        Fuerzas Armadas venezolanas. Ellos reciben parte de las acciones”. Según
        el ex-gobernador, la guerrilla soborna al ejército para fungir como
        autoridad que controla las operaciones mineras: “Así pueden funcionar en
        la zona”.
      </Paragraph>
      <Paragraph>
        El estado Amazonas comparte una frontera extensa con Colombia al oeste y
        conecta con Bolívar en el este. De acuerdo con Guarulla, hay alrededor
        de 4 a 4,5 mil guerrilleros colombianos en Amazonas. La mayoría de ellos
        son de los grupos disidentes del Ejército de Liberación Nacional (ELN) o
        de las Fuerzas Armadas Revolucionarias de Colombia (FARC).
        Organizaciones indígenas piensan que el número puede ser mucho más alto.
      </Paragraph>
      <Paragraph>
        Cuando las FARC todavía estaba de armas, el ELN ha sido el segundo grupo
        guerrillero más grande de Colombia y ahora negocia en Ecuador{" "}
        <ExternalLink
          language="es"
          href="http://www.altocomisionadoparalapaz.gov.co/dialagos-eln/Paginas/Noticias/octubre/Titulares.aspx"
        >
          un acuerdo de paz
        </ExternalLink>{" "}
        con el gobierno de Colombia. Mientras tanto, el ELN ha intensificado su
        presencia en Venezuela. Aquí, las guerrillas colombianas han sido
        bienvenidas por más de una década. Desde 2002,{" "}
        <FileLink
          format="pdf"
          size="0.2MB"
          href={require("documents/FriedrichEbertStiftung_Farc-Venezuela-Huesped-Incomodo.pdf")}
        >
          rebeldes de las FARC empezaron a usar Venezuela
        </FileLink>{" "}
        como refugio seguro y nueva área estratégica – para movilizar a
        combatientes, armas y víctimas de secuestro – mientras el ejército de
        Colombia aumenta sus esfuerzos para combatir la guerrilla en su
        territorio nacional.
      </Paragraph>
      <Paragraph>
        Según Alcalá, el mayor general retirado del ejército venezolano, grupos
        disidentes de las FARC que no querían participar en procesos de paz
        vinieron a Venezuela. Ellos están involucrados en economías ilícitas y
        en lavado de dinero por droga a través de actividades de minería ilegal
        envolviendo la población local. “La guerrilla fuerza a los indígenas a
        trabajar en sus minas”, explica Alcalá.
      </Paragraph>
      <Paragraph>
        Tanto las FARC – cuando todavía eran un movimiento guerrillero – como el
        ELN financiaron operaciones con{" "}
        <ExternalLink
          language="en"
          href="https://www.insightcrime.org/news/brief/colombia-captures-czar-of-coltan-with-farc-eln-ties/"
        >
          minerales ilegalmente explotados
        </ExternalLink>, entre otros flujos de ingresos. La guerrilla no podría
        haber escogido un mejor lugar como el subsuelo para esconder una
        variedad de los recursos más buscados del mundo como el oro, los
        diamantes y el coltán. Incluso depósitos de uranio se han reportado y
        han llamado la atención del gobierno iraní, aunque un{" "}
        <ExternalLink
          language="en"
          href="https://search.wikileaks.org/plusd/cables/09CARACAS1296_a.html"
        >
          documento filtrado
        </ExternalLink>{" "}
        le quitó importancia a la viabilidad de su explotación.
      </Paragraph>
      <Paragraph>
        Los depósitos de coltán están dentro de un fácil alcance cuando se cruza
        la frontera venezolana desde Colombia. El mineral de coltán consta de
        dos minerales, columbita y tantalita – los dos son cada vez más usados
        en electrónica moderna.
      </Paragraph>
      <Paragraph>
        Unos pocos países tienen depósito de coltán, pero de acuerdo con Roland
        Chavasse, director del Centro de Estudio Internacional del
        Tantalio-Niobio: “Se sabe que el{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-2",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/es/embed/?map_only=1&map_id=17453"
            }
          }}
        >
          Escudo Guayanés
        </StoryMedia>{" "}
        es muy, muy rico, posiblemente, el yacimiento más rico y más grande de
        coltán en el mundo”. Sin embargo, no hay números oficiales de las
        reservas de coltán en Venezuela.
      </Paragraph>
      <Paragraph>
        La escasez y la demanda de coltán caracteriza la importancia del
        mineral. La mayoría de las personas en todo el mundo tienen equipos
        modernos (computadoras, tabletas, teléfonos celulares) que contienen
        coltán. Además, el tantalio (el elemento más importante de la tantalita)
        se usa para aplicaciones militares como los sistemas antitanques, bombas
        inteligentes, drones y robots, haciéndolo mineral estratégico y de alto
        valor.{" "}
        <FileLink
          format="pdf"
          size="2.3MB"
          href={require("documents/DepartmentDefenseUS_Strategic-Critical-Materials-2015-Stockpile-Requirements.pdf")}
        >
          El Departamento de Defensa norteamericano recomendó almacenar coltán
          en 2015
        </FileLink>, elevando el mineral a una cuestión de seguridad nacional.
      </Paragraph>
      <Paragraph>
        Ya en la década de los 1970,{" "}
        <FileLink
          format="pdf"
          size="2.3MB"
          href={require("documents/TIC_Bulletin67.pdf")}
        >
          el Instituto Nacional de Geología y Minería de Venezuela identificó
          una vasta reserva de tantalio en Venezuela
        </FileLink>. Un área habitada por los indígenas Piaroa fue investigada
        en 1989 y 1990 y recibió particular atención por sus depósitos
        minerales. Estos depósitos se ubican en casi todo el occidente del
        estado Bolívar, en los linderos de Parguaza y del río Orinoco.
      </Paragraph>
    </Container>
  </article>
);
