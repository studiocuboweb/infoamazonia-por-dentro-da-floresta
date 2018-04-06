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
      <title>Apostando contra el ambiente | Explorando el Arco Minero</title>
    </Helmet>
    <Container>
      <Title as="h2">Apostando contra el ambiente</Title>
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
          Los fuertes ruidos de los generadores vibrantes acompañan el trabajo
          duro de los mineros ilegales, a solamente un kilómetro fuera del
          pueblo de El Callao
        </StoryMedia>. Cubiertos de lodo, se deslizan en los fosos mineros
        mientras hacen un barrido de oro, cavan más buracos o usan las máquinas
        ruidosas en los bordes del pozo minero para llenar sacos grandes con
        cantidades del lodo con oro que será más tarde procesado con mercurio.
        En ese mismo lugar, solía haber un bosque, pero muchas capas de
        vegetación han sido devastadas por la minería.
      </Paragraph>
      <Paragraph>
        Si hay una razón para no avanzar con el Arco Minero es el ambiente, de
        acuerdo con Edgar Yerena, un biólogo de la Universidad Simón Bolívar
        (USB), en Caracas. “Es una muy mala idea. Es la peor idea. No hay peor
        uso en el que pensar, en mi opinión, para el{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/es/embed/?map_only=1&map_id=17453"
            }
          }}
        >
          Escudo Guayanés
        </StoryMedia>”.
      </Paragraph>
      <Paragraph>
        En Venezuela, el Escudo Guayanés coincide por completo con el estado
        Bolívar y también incluye los estados Amazonas y Delta Amacuro. La
        región es, según expertos ambientales, de suma importancia para la
        generación de agua y para la conservación de especies, pero deberían
        evitar la minería. “Desde una perspectiva ecológica, [el área] funciona
        como un sistema diferente al resto del país. Es muy delicado porque los
        suelos generados están muy lixiviados y muy lavados. Tiene pocos
        nutrientes, es muy arenoso y la recuperación ambiental de cualquier
        impacto en el Escudo Guayanés es muy lento, si no irreversible”, explica
        Yerena.
      </Paragraph>
      <Paragraph>
        Las observaciones de Yerena están respaldadas por otro especialista
        ambiental venezolano. “Los suelos son muy finos y cuando son removidos
        será muy difícil restaurar”, asevera Juan Carlos Sánchez, coganador del
        Premio Nobel de Paz en 2007 y experto en el Grupo Intergubernamental de
        Expertos sobre el Cambio Climático de las Naciones Unidas. El laureado
        también advierte que los bosques del Escudo Guayanés funcionan un
        hábitat para especies endémicas que se verán severamente impactadas.{" "}
        <ExternalLink
          language="en"
          href="http://www.worldcat.org/title/flora-of-the-venezuelan-guayana/oclc/31938617"
        >
          Hay 9.411 especies de flora, de los cuales 2.136 son endémicas
        </ExternalLink>.
      </Paragraph>
      <Paragraph>
        No es posible la coexistencia entre la minería y los bosques en el
        Escudo Guayanés, dice Sánchez. “<StoryMedia
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
          Todas las tierras dedicadas a la minería, y en particular a la minería
          de superficie
        </StoryMedia>, será un terreno donde los bosques resultan sacrificados
        porque requiere la remoción de grandes cantidades de tierra. Este
        sacrificio de los bosques representa una pérdida irreparable del capital
        natural”.
      </Paragraph>
      <FeaturedText>
        Cerca de 75 por ciento del territorio en Bolívar está ambientalmente
        protegido, pero no contra el Arco Minero.
      </FeaturedText>
      <Paragraph>
        Estas tierras exuberantes están declaradas como parques nacionales,
        monumentos naturales, zonas protegidas y reservas forestales. El Parque
        Nacional Canaima incluso ha sido reconocido por la Unesco como
        patrimonio mundial. Todo esto parece no importar. Estas reservas
        forestales sufrirán especialmente de las consecuencias inmediatas de la
        extracción mineral en el Arco Minero.
      </Paragraph>
      <Paragraph>
        Adicionalmente, el impacto en las fuentes de agua será severo. El estado
        Bolívar opera básicamente como una factoría de agua para el país y posee
        la undécima reserva más grande de agua en el mundo. Por ejemplo, la
        cuenca del río Caroní genera energía hidroeléctrica para 65 por ciento
        del país, lo cual se genera en la represa Guri, el principal proveedor
        de energía de Venezuela.
      </Paragraph>
      <Paragraph>
        Según Yerena, “La minería daña la calidad del agua. El tema del
        potencial hidroeléctrico en Guayana no solo depende de la cantidad, sino
        también de la calidad del agua. Requiere agua con poco sedimento”,
        explica mientras refiere que el Caroní que bordea la región minera se ha
        sedimentado.
      </Paragraph>
      <Quote author="Edgar Yerena, biólogo">
        El estado venezolano tiene una historia de no saber cómo administrar la
        minería. ¿Por qué sabrían cómo hacerlo ahora?”
      </Quote>
      <Paragraph>
        El impacto ambiental puede ser irreversible. Expertos explican que, a
        largo plazo, los daños ambientales pueden sobrepasar de lejos las
        ganancias del sector minero. Yerena añade: “El estado venezolano tiene
        una historia de no saber cómo administrar la minería. ¿Por qué sabrían
        cómo hacerlo ahora?”.
      </Paragraph>
      <Paragraph>
        El desconocimiento también representa un problema para movimientos de
        justicia ambiental que tienen poca investigación y hechos disponibles
        para argumentar. “Es complicado porque hasta ahora, la defensa se ha
        basado en el concepto del proyecto y la forma de cómo han intentado
        implementarlo”, explica Yerena.
      </Paragraph>
      <Paragraph>
        “Pero aún no hay una evaluación ambiental estratégica. No hay y debería
        haber información pública para que la academia y el sector ambiental
        pudiesen revisar adecuadamente. Hasta ahora, solo hemos fraccionado
        información no oficial muy puntual. No hay mecanismos claros para
        obtener información oficial por personas curiosas por saber qué ocurre
        con el proyecto”.
      </Paragraph>
      <FeaturedText>
        Dos riesgos que aún no se debaten sobre la minería son la
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/es/embed/?map_only=1&map_id=17456"
            }
          }}
        >
          deforestación
        </StoryMedia>
        y la contaminación por mercurio.
      </FeaturedText>
      <Paragraph>
        “Como yo lo interpreto, según la normativa ambiental venezolana, no
        debería estar pasando. Esto se fundamenta en la ilegalidad de que todo
        el proyecto no ha emprendido un estudio sobre la evaluación ambiental”,
        dice Yerena.
      </Paragraph>
      <Paragraph>
        Alexander Luzardo, exsenador que redactó los estándares ambientales en
        la actual constitución de Venezuela, duda que la minería valga la pena a
        cambio de beneficios económicos. Nunca ha habido una prueba certificada
        de que el país posea las cantidades de oro y de coltán tan grandes como
        las que dice tener.
      </Paragraph>
      <Quote author="Alexander Luzardo, exsenador">
        La minería es vinculada a negocios ilícitos y a actividades financieras
        ilegales ligadas al lavado de dinero
      </Quote>
      <Paragraph>
        El profesor dice que puede tratarse de un mito, una estrategia para
        desarrollar proyectos destinado al lavado de dinero. “La creación de
        empresas fantasmas, sin ninguna experiencia, sin conocimiento, se
        prestan al juego de la elevación [mercado de especulación] y al lavado
        de dinero”, afirma. “La minería es vinculada a negocios ilícitos y a
        actividades financieras ilegales ligadas al lavado de dinero”. Según él,
        estas compañías comprarán y comerciarán minerales de la minería ilegal,
        o tratarán de especular y vender su proyecto al mejor postor.
      </Paragraph>
      <Paragraph>
        El “show de buenas noticias” del gobierno sobre depósitos minerales
        enormes es, según Luzardo, una oferta engañosa para el país. “Es darles
        la esperanza de la lotería”, se ríe. “Es la lotería de la minería.
        Apostarlo siempre a todo: ‘Tenemos las reservas más grandes del mundo’”.
        La distracción de la crisis económica y política ignora asuntos más
        importantes que están en riesgo. “No es sobre el trabajo, ni la
        educación, la organización o la diversificación energética y tampoco
        sobre asumir grandes riesgos”, ironiza.
      </Paragraph>
      <Paragraph>
        Su nombre, el Arco Minero, resulta molesto para Luzardo. Argumenta que
        el término es un reduccionismo lingüístico. “Uno reduce todo al Arco
        Minero”, explica. “Ya con el nombre se cede el territorio [a la
        minería]”. Plantea que un <em>Arco de Biodiversidad</em> encajaría mejor
        y haría más justicia, en papel, a las áreas protegidas ambientales.
      </Paragraph>
      <Paragraph>
        De acuerdo con Luzardo, todavía hay esperanza. El profesor refiere a una{" "}
        <FileLink
          format="pdf"
          size="0.2MB"
          href={require("documents/AsambleaNacionalVenezuela_CancelamientoArcoMinero.pdf")}
        >
          decisión de la Asamblea Nacional de Venezuela que anuló el decreto del
          Arco Minero el 14 de junio de 2016
        </FileLink>. “Se no puede legalizar un crimen ambiental”, gruñe el
        profesor, pero el Tribunal Supremo de Justicia no reconoce la decisión
        del Parlamento{" "}
        <ExternalLink
          language="es"
          href="http://runrun.es/nacional/292903/tsj-declaro-nulas-las-sesiones-del-5-y-el-9-de-enero-de-la-asamblea-nacional.html"
        >
          ni ninguna otra acción de la marginada Asamblea Nacional
        </ExternalLink>{" "}
        desde el 11 de enero de 2017.
      </Paragraph>
      <Paragraph>
        Mientras tanto, continúa la crisis política y económica de Venezuela,
        llevando a más venezolanos desesperados y desempleados a las zonas
        mineras. Continúan cavando en lodo valioso de El Callao y de muchas
        otras áreas en el sur del país. Por ahora, a la oposición política
        contra el Arco Minero no le quedan armas legales. La deforestación
        acelerada y una frontera minera expandida son las consecuencias
        innegables de la crisis en el país, que luce muy lejos de llegar a su
        fin.
      </Paragraph>
    </Container>
  </article>
);
