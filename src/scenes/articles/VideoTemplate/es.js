import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Paragraph from "components/blocks/Paragraph";
import FullBlock from "components/blocks/Full";
import ImageBlock from "components/blocks/Image";
import Title from "components/blocks/Title";
import Quote from "components/blocks/Quote";
import FeaturedText from "components/blocks/FeaturedText";
import Note from "components/blocks/Note";

export default () => (
  <article>
    <Helmet>
      <title>Introducción | Explorando el Arco Minero</title>
    </Helmet>
    <Container>
      <Note>
        <p>
          Durante tres meses, nuestro reportero viajó por las disputadas áreas
          mineras de Venezuela donde se deparó con grupos armados ilegales,
          comunidades indígenas reprimidas por guerrillas colombianas y enclaves
          de mineros informales atormentados por la malaria. Una detención
          ilegal por la Guardia Nacional casi terminó prematuramente esta
          investigación.
        </p>
        <p>
          En este viaje, hablamos con mineros, empresas, académicos, indígenas,
          políticos y activistas y reunimos material exclusivo sobre el
          conflicto de recursos naturales menos reportado de América Latina.
        </p>
      </Note>
      <Paragraph>
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "6sWVoFaH7Nc"
            }
          }}
        >
          <strong>Con las manos embarradas</strong>, un minero lanza rocas ricas
          en minerales dentro de un molino mecánico que las tritura para ser
          procesadas con mercurio
        </StoryMedia>. A poca distancia, aguardan unos soldados. Los militares
        nos escoltaron durante nuestra visita en los cerros cerca de El Callao,
        uno de los muchos yacimientos más disputados en Venezuela. “En
        cualquier momento, podría ocurrir una balacera o una masacre. Todos los
        días eran así”, cuenta con entusiasmo otro minero sobre el violento
        proceder con el que grupos armados que disputaron esta misma mina.
      </Paragraph>

      <Paragraph>
        El oro que se extrae termina en el mercado mundial en forma de joyas,
        resguardado en un banco o usado en equipos electrónicos, pero poca gente
        sabrá su origen. “Ellos trabajan tipo comando”, continúa el minero sobre
        las balaceras nocturnas en los cerros que circundan el pueblo donde
        tiros son disparados ante cualquier luz de faro como si se tratase de un
        toque de queda impuesto por las bandas armadas. La mayoría de los
        mineros no quieren que sus nombres se mencionen ya que temen las
        reacciones de los actores armados en la región.
      </Paragraph>

      <Paragraph>
        Los militares venezolanos participan también en la violencia que
        frecuentemente resulta de la explotación minera a través de bandas
        armadas y sus propias operaciones. Las Fuerzas Armadas venezolanas
        consiguieron mucho poder durante la presidencia del fallecido Hugo
        Chávez. Clíver Alcalá Cordones, retirado en 2013 y leal a Chávez, fue un
        mayor general que comandó las regiones mineras. En una reunión en el
        lobby de un hotel en Bogotá, Colombia, explicó que Maduro sigue
        entregando poder a los militares y a sectores del gobierno que ahora
        participan en lo que es llamado “desastre y en el botín”.
      </Paragraph>

      <FeaturedText>
        El afán de las fuerzas armadas por los minerales se traduce en una
        visible militarización de las zonas mineras.
      </FeaturedText>

      <Paragraph>
        Un viaje al sur de Venezuela, en la región donde se extrae ilegalmente
        el oro, da la impresión de que está bien controlada. Mientras manejamos
        en las carreteras principales,{" "}
        <StoryMedia
          media={{
            id: "video-2",
            type: "youtube",
            data: {
              id: "mmdFX5EyunU"
            }
          }}
        >
          somos interrumpidos cada 30 minutos por alcabalas, puntos de control de
          la Guardia Nacional
        </StoryMedia>, encargada del orden público – pero entre más cerca de las
        minas, son los militares los que dominan la escena.
      </Paragraph>

      <Paragraph>
        Poco importa realmente si el oro tiene un origen legal o no, si es
        extraído por compañías o por las bandas armadas. Cuatro áreas del estado
        Bolívar,{" "}
        <FileLink
          href={require("documents/GacetaOficial_40855.pdf")}
          format="pdf"
          size="13.3MB"
        >
          decretadas en 2016
        </FileLink>{" "}
        como una inmensa zona minera nombrada como{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/embed/?map_only=1&map_id=17448"
            }
          }}
        >
          <em>Arco Minero del Orinoco</em>
        </StoryMedia>{" "}
        representan una simbiosis oscura de ambos mundos.
      </Paragraph>

      <Paragraph>
        Lo que realmente es significativo es el impacto del Arco Minero en la
        región. Las cuatro áreas coinciden con muchos territorios indígenas y
        ambientales legalmente protegidos y que que probablemente llevarán a su
        destrucción. Los mineros arriesgan su salud y sus vidas trabajando ya en
        condiciones inseguras, ya en áreas de disputas violentas. El daño
        ambiental carece de importancia para los enclaves de subsistencia minera
        y para las brutales fuerzas que operan en estas zonas. Además, el
        medioambiente es considerado nada importante para el gobierno que creó
        un marco legal que sanciona las actividades de explotación mineral.
      </Paragraph>

      <Paragraph>
        Alexander Luzardo, exsenador con un doctorado en Derecho Político y
        Ambiental, ha estado directamente involucrado en la legislación
        ambiental de Venezuela. Él redactó los estándares ambientales para la
        actual Constitución, de 1999. Con estos esquemas, trazó cuán importante
        es para Venezuela proteger{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-2",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/es/embed/?map_only=1&map_id=17467"
            }
          }}
        >
          estas regiones vitales
        </StoryMedia>. Sin embargo, en 2016, vio cómo el Arco Minero echó por
        tierra la legislación que había creado. “El Arco Minero es ilegal.
        Niega, vía decreto, la existencia y la creación de áreas protegidas”,
        expresa Luzardo en una entrevista en un café en el campus de la
        Universidad Central de Venezuela, donde actualmente es docente.
      </Paragraph>

      <Quote author="Alexander Luzardo, exsenador">
        Este es el camino más fácil para la destrucción ambiental en Venezuela.
        La gran contribución de Venezuela a la destrucción del planeta
      </Quote>

      <Paragraph>
        El profesor tiene una predicción muy nefasta para el país. “Este es el
        camino más fácil para la destrucción ambiental en Venezuela. La gran
        contribución de Venezuela a la destrucción del planeta”, afirma Luzardo.
        El profesor añade que el país había alcanzado un progreso impresionante
        en términos de protección ambiental y teme que el Arco Minero lo
        revierta: “Este proyecto es la peor respuesta a la crisis y es una
        negación a toda perspectiva ambiental”.
      </Paragraph>

      <Paragraph>
        No se sabe mucho sobre la minería en un país que ha solidificado toda su
        economía en la industria nacionalizada del petróleo. Ahora, el gobierno
        intenta con otro recurso no renovable, porque Venezuela no solo posee
        las reservas más grandes de petróleo en el mundo, pero también afirma
        tener también la segunda reserva más grande de oro. Si Venezuela es
        capaz de certificar los yacimientos, sería una gran noticia, sobre todo,
        ahora en las horas más oscuras del país.
      </Paragraph>

      <Paragraph>
        El país se encuentra en una gran agitación política y financiera desde
        hace ya varios años, pero actualmente los niveles de hiperinflación y de
        escasez de productos básicos están llevando la economía a tocar fondo.
        El gobierno necesita soluciones concretas, por ello el anuncio de la
        apertura de una parte significativa del país a un nuevo motor de
        desarrollo económico: la minería.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/ufCCG/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Los billones de dólares provenientes del petróleo y del gas financiaron
        los programas sociales del presidente Chávez desde 1999 hasta su muerte
        en 2013. Por desgracia, estos ingresos se agotaron después del{" "}
        <ExternalLink
          href="https://www.nytimes.com/es/2017/05/09/interpreter-venezuela-elites-supervivencia/"
          language="es"
        >
          autoenriquecimiento de las élites del país
        </ExternalLink>{" "}
        y de la caída de los precios del petróleo después de 2014.
      </Paragraph>

      <FeaturedText>
        En un último intento para inyectar capital extranjero a la economía
        destruida, el presidente Maduro abrió 12 por ciento del territorio
        nacional a futuras operaciones mineras de gran escala.
      </FeaturedText>

      <Paragraph>
        “Es una jugada desesperada de Maduro para conseguir liquidez”, mantiene
        David Smilde, profesor de Sociología en la Universidad Tulane y miembro
        titular en el centro de investigación Oficina de Washington para América
        Latina. “Hay un peligro patente que conducirá a operaciones mineras
        ecológicamente destructivas en un territorio con una{" "}
        <StoryMedia
          media={{
            id: "galery-1",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-11.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-12.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-14.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-15.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-16.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-18.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-25.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-28.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-31.jpg")
                }
              ]
            }
          }}
        >
          increíble biodiversidad y con una población protegida por los
          indígenas
        </StoryMedia>.” El docente está convencido de que Venezuela destruirá un
        recurso importante en términos de cuencas y de turismo potencial, a
        cambio de ganancias a corto plazo.
      </Paragraph>

      <Quote author="David Smilde, profesor de Sociología">
        Los problemas actuales de Venezuela poco guardan relación con la caída
        de los precios petroleros y sí con las políticas económicas
        insostenibles
      </Quote>

      <Paragraph>
        Las economías que están basadas únicamente en lo que está oculto en el
        suelo no necesariamente implican problemas, financieramente hablando. “A
        mi modo de ver, a diferencia de otros académicos, considero que una
        economía rentista no es básicamente el problema, sino las malas
        políticas”, argumenta Smilde. “Pienso que los problemas actuales de
        Venezuela poco guardan relación con la caída de los precios petroleros y
        sí con las políticas económicas insostenibles. Hay que recordar que el{" "}
        <ExternalLink
          href="http://www.bbc.com/news/world-latin-america-26335287"
          language="en"
        >
          ciclo de protestas de 2014
        </ExternalLink>{" "}
        estuvo en parte motivado por la escasez, por la inflación y por el
        desempleo, y que el crudo estaba en casi 100 dólares el barril. El
        modelo ya era insostenible, la caída de la cesta petrolera solo ha
        apresurado su decadencia”.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/NEN5F/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Mientras los acreedores internacionales intentan recuperar su dinero de
        Venezuela, que está al borde del impago, hay quien está feliz con el
        Arco Minero. Ese es Maduro. Con una sonrisa curiosa debajo de su bigote
        característico, le muestra un lingote de oro a la prensa venezolana. El
        oro pertenece a uno de los primeros envíos del Arco Minero,{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-3",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/es/embed/?map_only=1&map_id=17449"
            }
          }}
        >
          un área de no menos que los 112 mil kilómetros cuadrados que bordean
          el sur del río Orinoco
        </StoryMedia>, la principal fuente de agua en el país y el tercer río
        más importante en Latinoamérica.
      </Paragraph>

      <FullBlock withMargin>
        <blockquote className="twitter-tweet" data-lang="en">
          <p lang="es" dir="ltr">
            Presidente{" "}
            <a href="https://twitter.com/NicolasMaduro?ref_src=twsrc%5Etfw">
              @NicolasMaduro
            </a>: “Venezuela será la primera o segunda reserva mundial de oro”{" "}
            <a href="https://twitter.com/hashtag/ProduciendoVenceremos?src=hash&amp;ref_src=twsrc%5Etfw">
              #ProduciendoVenceremos
            </a>{" "}
            <a href="https://t.co/xiPZNXSLPE">pic.twitter.com/xiPZNXSLPE</a>
          </p>&mdash; Prensa Presidencial (@PresidencialVen){" "}
          <a href="https://twitter.com/PresidencialVen/status/803362045974421509?ref_src=twsrc%5Etfw">
            November 28, 2016
          </a>
        </blockquote>
      </FullBlock>

      <Paragraph>
        En agosto de 2016, Maduro anunció oficialmente: “<ExternalLink
          href="http://globovision.com/article/ministerios-presentaran-a-maduro-el-plan-de-inversiones-del-arco-minero"
          language="es"
        >
          El Arco Minero es ahora una realidad
        </ExternalLink>”. Según el gobierno, 150 compañías de 35 países desean
        invertir en minería, pero después del gran anuncio, pocos son los
        proyectos concretos en minería.
      </Paragraph>

      <Paragraph>
        Hubo una agenda mediática apretada e incluso se creó un nuevo Ministerio
        para el Desarrollo Minero Ecológico. Se autorizó a una empresa mixta con
        Endiama, una trasnacional minera de Angola, a{" "}
        <ExternalLink
          href="https://www.telesurtv.net/news/Venezuela-firma-acuerdo-con-empresa-de-diamantes-de-Angola-20170720-0055.html"
          language="es"
        >
          explotar diamantes
        </ExternalLink>{" "}
        y{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/empresas-palestinas-y-autoridades-mineras-revisaron-acuerdos-para-explotacion-de-coltan/"
          language="es"
        >
          un estrechón de manos con el embajador de Palestina
        </ExternalLink>, reveló que dos corporaciones palestinas quieren extraer
        coltán. Los aliados usuales,{" "}
        <ExternalLink
          href="https://www.telesurtv.net/news/Venezuela-y-China-firman-acuerdo-para-actividades-mineras-20170721-0060.html"
          language="es"
        >
          China
        </ExternalLink>{" "}
        y{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/venezuela-establecio-con-rusia-lineas-de-investigacion-e-inversion-mineras/"
          language="es"
        >
          Rusia
        </ExternalLink>, quieren su porción de la torta de los minerales en sus
        platos, más que todo por el manejo de deuda con ambos países. En total,
        Venezuela debe 150 mil millones de dólares a una larga lista de
        acreedores.
      </Paragraph>

      <FeaturedText>
        Hasta ahora, compañías reconocidas en el sector minero continúan
        ausentes en Venezuela.
      </FeaturedText>

      <Paragraph>
        La trasnacional minera Barrick Gold respondió a nuestra pregunta,
        explicando que “mientras Barrick participó en la revisión de proyectos
        mineros en el país, la compañía no busca ningún proyecto o inversión en
        Venezuela”. Maduro aseveró, sin embargo, haber{" "}
        <ExternalLink
          href="https://www.reuters.com/article/us-venezuela-mining/venezuela-says-signs-5-5-bln-mining-deals-with-companies-idUSKCN1112BR"
          language="en"
        >
          firmado un contrato con Barrick Gold
        </ExternalLink>{" "}
        en agosto de 2016.
      </Paragraph>

      <Paragraph>
        Más de un año después de los anuncios de Maduro, hablar sobre quién
        realmente controla la minería en el país sumido en crisis sigue siendo
        un tabú. “Detrás de la minería en Venezuela, siempre ha habido la
        opacidad de factores militares”,{" "}
        <StoryMedia
          media={{
            id: "video-3",
            type: "youtube",
            data: {
              id: "NQyPITnr8QE"
            }
          }}
        >
          manifestó Américo de Grazia
        </StoryMedia>, diputado opositor en el Parlamento marginado por el
        Gobierno. De Grazia representa Bolívar, el estado donde la mayoría de
        las reservas del oro están ocultas. “La minería [ilegal] ha sido
        criminalizada por la opinión pública, pero se permite su clandestinidad.
        Aquí, el máximo operador [quienes están a cargo] son las fuerzas
        públicas, y el operador práctico [el ejecutor] es el crimen organizado”,
        dice.
      </Paragraph>

      <Paragraph>
        Venezuela tiene un número increíble de generales –{" "}
        <ExternalLink
          href="https://www.nytimes.com/es/2017/08/08/los-militares-venezolanos-se-dividen-ante-la-crisis-del-poder-chavismo-maduro-padrino/"
          language="es"
        >
          cerca de dos mil
        </ExternalLink>{" "}
        – y las fuerzas armadas controlan el Arco Minero, como resaltan De
        Grazia y Luzardo que argumentan que el domínio militar se extiende a
        la mayoría del sector minero. Ellos extorsionan a las bandas que operan
        las minas ilegales y controlan las rutas de exportación. La minería es
        una caja chica que se está institucionalizando lentamente. El año pasado
        se creó la Compañía Anónima Militar de Industrias Mineras, Petrolíferas
        y de Gas (Camimpeg){" "}
        <ExternalLink
          href="http://efectococuyo.com/economia/fanb-firme-con-la-logistica-de-seguridad-en-el-arcominero"
          language="es"
        >
          junto con una ‘Zona Económica Militar’
        </ExternalLink>. Activos o retirados,{" "}
        <ExternalLink
          href="https://transparencia.org.ve/project/informe-general-2016-2017/"
          language="es"
        >
          los militares están presentes en alrededor de 30 por ciento de las
          compañías estatales
        </ExternalLink>{" "}
        con juntas directivas públicas. Partiendo de que el Arco Minero será
        explotado en empresas mixtas en las que el Estado posee la mayoría
        porcentual de propiedad, es muy posible la presencia militar a cargo.
      </Paragraph>

      <Paragraph>
        De Grazia dice que los generales son cambiados frecuentemente, así como
        el personal militar en las directivas de las compañías: “Cada militar
        que llega quiere enriquecerse de la noche a la mañana, lo que lo hace
        más cruel, más violento y sus normas serán más inhumanas porque él sabe
        que esta es la manera de volverse rico y que solo dispondrá de uno o dos
        meses, quizás un año”.
      </Paragraph>

      <FeaturedText>
        Bandas armadas les pagan a los castrenses para continuar con las
        operaciones ilegales mineras.
      </FeaturedText>

      <Paragraph>
        “Cuando acabamos con algunas de las actividades de minería ilegal, los
        mineros se quejaron, porque les habían pagado a los militares antes”,{" "}
        <StoryMedia
          media={{
            id: "video-4",
            type: "youtube",
            data: {
              id: "aPtRA5nM_ow"
            }
          }}
        >
          dice Alcalá
        </StoryMedia>. Él menciona que muchos aviones sacan ilegalmente la
        mayoría del oro de Venezuela a las islas del Caribe. Los militares están
        involucrados: “Ellos bajan [el avión] de manera que el radar no sepa
        dónde están”.
      </Paragraph>

      <Paragraph>
        Alcalá confirma que el ejército recibe beneficios significativos de la
        minería ilegal, mientras las bandas que operan las minas usan la
        violencia para mantener el control. “Desde hace un año, ha habido
        masacres ejecutadas por el ejército en algunas zonas porque hay oro”.
      </Paragraph>

      <Paragraph>
        Un análisis de informes de prensa por el Observatorio Venezolano de
        Violencia en el estado Bolívar muestra que, en los primeros diez meses
        de 2017, al menos 1.415 personas han sido asesinadas en la región,
        muchos de ellos en zonas mineras. Es imposible estimar un número preciso
        de personas muertas en choques entre bandas armadas y balaceras con el
        ejército; tampoco no es inusual que los migrantes mineros, que no son de
        la región, terminen en tumbas clandestinas tras ser asesinados en áreas
        remotas.
      </Paragraph>

      <Paragraph>
        Aunque el conflicto minero sin control en Venezuela no es nuevo,{" "}
        <ExternalLink
          language="es"
          href="http://www.correodelcaroni.com/index.php/sucesos/violencia-minera-en-guayana/item/54546-vecinos-de-tumeremo-se-mantienen-asediados-por-control-de-bandas-criminales-y-militarizacion"
        >
          la batalla real por el acceso a los recursos minerales
        </ExternalLink>{" "}
        apenas comenzó. El hurto legalizado no solo impacta directamente a
        Venezuela y a sus fronteras, pero también la demanda global por
        minerales y los numerosos nexos internacionales de traficantes
        involucran a muchos actores en el extranjero. Por ello, el daño hecho a
        uno de los ecosistemas más importantes, el Amazonas, hace que el Arco
        Minero sea un asunto de interés internacional.
      </Paragraph>
    </Container>
  </article>
);
