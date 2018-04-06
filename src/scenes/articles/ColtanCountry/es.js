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
      <title>Nuevos visitantes en el país del coltán | Explorando el Arco Minero</title>
    </Helmet>
    <Container>
      <Title as="h2">Nuevos visitantes en el país del coltán</Title>
      <Paragraph>
        <strong>Puerto Ayacucho</strong>. Son las seis de la mañana y el calor
        se siente familiar, aun antes de la salida del sol. Yonnier Rivera,
        nuestro conductor cubano, llega a tiempo con su pick-up blanca y discute
        la logística del día mientras esperamos por nuestros otros dos
        acompañantes de viaje: Noraima Ángel, coordinadora de la Oficina de
        Derechos Humanos del Vicariato de Puerto Ayacucho, y Pedro Ortiz, un
        indígena miembro de la organización local Red de Defensores y Defensoras
        Indígenas.{" "}
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "QmOJt-Idd2Q"
            }
          }}
        >
          El plan es visitar a dos comunidades indígenas pequeñas
        </StoryMedia>{" "}
        Agua Mena y Tierra Blanca, en el vecino estado Bolívar. Los indígenas
        viven cerca del río Parguaza que se abre paso – lo que hemos aprendido
        también nosotros – en el “país del coltán”.
      </Paragraph>
      <Paragraph>
        El Parguaza es uno de los cientos de afluentes del Orinoco, el cuarto
        río con más volumen en el mundo. La región, también llamado Parguaza, ha
        sido el blanco tanto para proyectos mineros ilegales como legales. Los
        indígenas Piaroa y los Penare habitan las tierras y tradicionalmente
        dependen de la agricultura y de la pesca.
      </Paragraph>
      <Paragraph>
        Nuestra jornada es interrumpida varias veces por la Guardia Nacional de
        Venezuela. En una oportunidad, somos obligados a abrir nuestras maletas
        a los castrenses. Carros, camionetas y buses que pasan por esta región
        son objeto de frecuentes revisiones y de paros, en ocasiones, cada 20
        kilómetros. Soldados inspeccionan objetos personales, asientos del carro
        e incluso dentro de las puertas para buscar “contrabando”.
      </Paragraph>
      <FeaturedText>
        Los productos escasamente disponibles, como comida, medicinas, cauchos y
        combustible, con frecuencia son incautados.
      </FeaturedText>
      <Paragraph>
        Estas humillaciones diarias a las que son sometidos los venezolanos en
        las vías no nos conciernen tanto ya que estamos más preocupados con la
        presencia guerrillera en la región. Cuando entramos en el estado
        Bolívar, dejando Amazonas por el norte, nuestro vehículo toma una curva
        al este lentamente y nos adentramos en la región de Parguaza. Mientras
        manejamos por una zona llamada Los Gallitos, Ortíz, de la red local de
        defensores indígenas, comenta que el ELN saca el coltán de allí.
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
          Nuestra primera parada es Tierra Blanca
        </StoryMedia>. Esperábamos encontrar el cacique, la autoridad indígena
        en la comunidad, pero nos recibe el capitán de Tierra Blanca. Nos
        informan después que el cacique está de viaje en Caracas en una reunión
        con el ministro de Minas.
      </Paragraph>
      <Paragraph>
        Nos dan pocas respuestas, porque el cacique no autorizó a su capitán
        hablar con nosotros.{" "}
        <StoryMedia
          media={{
            id: "video-2",
            type: "youtube",
            data: { id: "b66GospDYoY" }
          }}
        >
          Los indígenas nos llevan al río Parguaza
        </StoryMedia>. Los niños de las comunidades indígenas locales se lanzan
        alegremente al agua y pasean en canoa en una corriente lenta. El sonido
        de los golpes de la ropa mojada contra las piedras es producido por las
        mujeres indígenas que lavan camisas a las orillas del río. Pocos hombres
        indígenas son vistos ya que ellos cazan o trabajan la tierra lejos de la
        villa durante el día. El equilibrio entre naturaleza y civilización aún
        no es irreversiblemente perturbado, pero nuevos actores han entrado en
        escena.
      </Paragraph>
      <FeaturedText>
        De las entrevistas con indígenas de la región de Parguaza, antes de nuestra
        visita de campo, se hace claro que la guerrilla colombiana ha
        intensificado su presencia en territorios venezolanos desde hace tres
        años.
      </FeaturedText>
      <Paragraph>
        En la comunidad Agua Mena, parecida a y cerca de Tierra Blanca, los
        habitantes están involucrados en la minería artesanal del coltán.
        Piedras son recogidas por un intermediario indígena, que luego vende a
        la guerrilla. El precio oscila entre 80 y 100 mil bolívares el kilo, lo
        cual es menos que un dólar. Una fracción de lo que se ofrece en el
        mercado internacional por el coltán, pero ninguno de los indígenas
        entrevistados estaba consciente de los precios usuales del mineral.
      </Paragraph>
      <Quote author="Juan López, indígena de Agua Mena">
        Somos los destructores de la selva
      </Quote>
      <Paragraph>
        Los pocos dólares que les pagan a las comunidades indígenas para abrir
        la tierra y extraer el mineral para ganancias financieras contrasta con
        sus creencias ancestrales. “Fuimos reconocidos como los protectores de
        la selva. Y ya no es lo que somos. Somos los destructores de la selva”,
        dice Juan López, un indígena que trabaja actualmente como abogado para
        el vicariato en Puerto Ayacucho, capital del estado Amazonas.
      </Paragraph>
      <Paragraph>
        Los territorios ricos en coltán no solo son atravesados por la guerrilla
        colombiana. El decreto del Arco Minero posibilitó la formación de nuevas
        compañías que fueron constituidas rápidamente y comparten el mismo
        motivo que las guerrillas armadas que operan rutas de exportación hacia
        Colombia.
      </Paragraph>
      <Paragraph>
        A finales de 2016, se creó la Empresa Mixta Minera Ecosocialista
        Parguaza con el objetivo inicial de producir{" "}
        <ExternalLink
          language="es"
          href="http://avn.info.ve/contenido/20-toneladas-colt%C3%A1n-al-mes-prev%C3%A9-producir-empresa-mixta-parguaza"
        >
          20 toneladas mensuales y aumentar luego a 50 toneladas mensuales
        </ExternalLink>. Esta compañía es de capital conjunto de la estatal
        Corporación Venezolana de Minería (CVM) y de la privada Corporación
        Faoz. Recibió la concesión de 10.201 hectáreas que además del coltán
        contienen oro, diamantes, cuarzo y otros minerales. La compañía está
        construyendo una mina de coltán, ubicada cerca de la comunidad Agua
        Mena.
      </Paragraph>
      <Paragraph>
        Es cerca del mediodía cuando visitamos Agua Mena. Después de hablar con
        toda la comunidad, queda algo de tiempo para presentarnos a las{" "}
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              src: require("photos/Paraguaza-2.jpg")
            }
          }}
        >
          puertas de la Empresa Mixta Minera Ecosocialista Parguaza
        </StoryMedia>, que son custodiadas por la Guardia Nacional las 24 horas.
        Los castrenses también están presentes en su terreno.
      </Paragraph>
      <Paragraph>
        Nos presentamos alrededor de las 13:00 horas y preguntamos por las
        inversiones sociales en comunidades indígenas aledañas. “Necesitan un
        permiso del Ministerio de Minas, en Caracas, para hablar con nosotros”,
        nos respondió Luisa Herminia Alcalá Otero, la representante de la
        compañía que salió a nuestro encuentro y nos permitió entrar en el
        terreno de la compañía.
      </Paragraph>

      <Paragraph>
        Justo cuando pensábamos que nos iban a sacar a empujones por hacer
        preguntas, nuestra visita parece prolongarse.
      </Paragraph>

      <FeaturedText>
       La Guardia Nacional no nos deja ir. Horas después, tras inspeccionar
       nuestros papeles, entendemos que fuimos detenidos.
      </FeaturedText>

      <Paragraph>
        Al final de la tarde, cerca del anochecer, no sabíamos cuánto más íbamos
        a estar cautivos. Los trabajadores se alineaban para montarse en el
        autobús que los llevará de regreso a sus comunidades. Antes de que se
        vayan, sus bolsos son revisados por los militares. Como estamos rodeados
        por guardias armados, podemos observar a los trabajadores, que usan
        ropas raídas, franelas de equipos de fútbol y botas llenas de lodo.
        Muchos de los indígenas nos dirigen una que otra mirada, mientras
        esperan que sus pertenencias sean requisadas.
      </Paragraph>
      <Paragraph>
        Los trabajadores no parecen estar muy intimidados por los rifles de
        asalto de la Guardia Nacional y es poco claro si los hombres armados
        están allí para prevenir que los trabajadores le roben a la compañía o
        para protegerse de las guerrillas. Uno de los oficiales que trabaja en
        el campamento minero comenta que hay un “respeto mutuo” cuando se cruzan
        con la guerrilla. “Ellos no se meten con nosotros, ni nosotros con
        ellos”. Mientras tanto, nos llevan a las tiendas de la Guardia Nacional
        y somos encerrados con castrenses armados en la entrada de la puerta.
      </Paragraph>

      <Paragraph>
        A la 1:00 de la mañana mientras nos interrogan, aún no está claro qué
        pasará con nosotros. No se nos deja hacer ninguna llamada telefónica,
        pero nos dicen que nos han abierto una investigación. Nuestra detención
        es completamente ilegal e improvisada. No solo estamos encerrados en una
        compañía minera, sino que no se nos deja recibir o hacer llamadas
        telefónicas ni hablar con un abogado. Entre otras omisiones, somos
        cuestionados por un guardia, quien no tiene autoridad ninguna para
        interrogarnos. Según los militares, sospechan que podamos ser espías o
        infiltrados de la oposición al gobierno.
      </Paragraph>
      <Paragraph>
        Mientras la incertidumbre crece en nosotros, vemos que los jóvenes
        oficiales de la Guardia Nacional tampoco entienden nuestra detención,
        pero obedecen órdenes de la compañía. A las 3:00 de la mañana nos piden
        alistarnos para el transporte. Dos camionetas pick-up nos llevarán a los
        cuatro, custodiados por castrenses armados, a Caicara del Orinoco, siete
        horas más lejos en el país del coltán.
      </Paragraph>
      <Paragraph>
        Sorprendentemente, 24 horas después de nuestra detención, nos liberan.
        Dos investigadores de contrainteligencia militar en Caicara del Orinoco
        nos someten a un interrogatorio, pero parece no haber alarmas
        encendidas. Nos llama la atención que la Iglesia, la embajada holandesa,
        los medios y la sociedad civil hicieron campaña por nuestra liberación.
        Asombrados por el hecho de que fuimos detenidos dentro de una compañía
        minera, mientras nosotros solo pensábamos que quienes podían representar
        un problema era la guerrilla, es difícil creer cómo una empresa entabla
        buenas relaciones con sus vecinos indígenas.
      </Paragraph>
      <Paragraph>
        La Empresa Mixta Minera Ecosocialista Parguaza no es la única compañía
        de capital conjunto en la zona. El mismo municipio, Cedeño, cuenta con
        otras dos asociaciones recientemente creadas. Oro Azul, constituida
        entre CVM y Supracal, recibió en concesión 8.159 hectáreas y la Empresa
        Mixta Minera Metales del Sur, en participación con la canadiense
        Energold.
      </Paragraph>
      <Paragraph>
        Hasta aquí, las nuevas empresas les han prometido mucho a las
        comunidades indígenas de la región: nuevas viviendas, vías, electricidad
        y camionetas pick-up. Trabajadores de la salud han sido enviados a las
        comunidades atormentadas por la malaria. Varios indígenas son
        contratados por salario mínimo, lo cual{" "}
        <ExternalLink
          language="es"
          href="http://www.finanzasdigital.com/2017/11/cendas-canasta-alimentaria-familiar-octubre-2017-se-ubico-3-918-34125-bolivares-461/"
        >
          no alcanza para mantener a una familia
        </ExternalLink>{" "}
        en Venezuela y ha estado fluctuante. Actualmente, unos 350 mil bolívares
        serían 3,5 dólares en el mercado paralelo. Ellos se desempeñan como
        personal de seguridad y obreros de construcción, pero no poseen
        contratos fijos.
      </Paragraph>
      <FeaturedText>
        Las tres compañías no tienen experiencia en la extracción de coltán y
        tampoco presentaron los estudios de rigor de impacto socioambiental.
      </FeaturedText>
      <Paragraph>
        Comunidades indígenas locales consultadas afirman que nunca les han
        dicho las implicaciones reales del proyecto y que fueron manipuladas con
        promesas falsas de desarrollo e información equivocada.
      </Paragraph>
      <Paragraph>
        La entrada de la guerrilla y de las nuevas empresas en Parguaza se debe,
        según Franklin Quiñones, un indígena Piaroa, de 28 años, al cacique. “El
        cacique permitió la entrada de la guerrilla y también la instalación del
        campamento [de la empresa]”. Quiñones es de la opinión, así como de
        otras fuentes consultadas, que el cacique fue comprado y que una minoría
        de los líderes indígenas recibió de la compañía puestos de trabajo o
        beneficios.
      </Paragraph>
      <Paragraph>
        “Ustedes [los líderes] son marionetas, no tienen la capacidad de
        decírselo a la empresa”, dice Quiñones y añade: “Se enfocan en el
        beneficio personal, son usados”.
      </Paragraph>
      <Paragraph>
        El joven indígena entiende muy bien cómo las nuevas empresas emplean
        estrategias para dividir y conquistar las comunidades y cómo las
        fricciones recientemente creadas causan malestar. “Cuando instalas una
        compañía, aquí, será el fin de nuestra cultura, el fin de nuestras
        costumbres. Así se completa la transculturización. Por eso hay muchas
        comunidades preocupadas preguntándose: ‘¿Quién podrá ayudarnos?’”.
      </Paragraph>
    </Container>
  </article>
);
