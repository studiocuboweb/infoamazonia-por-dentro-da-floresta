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
        Malestar en la cuna de las minas de oro de Venezuela | Explorando el Arco
        Minero
      </title>
    </Helmet>
    <Container>
      <Title as="h2">Malestar en la cuna de las minas de oro de Venezuela</Title>

      <Paragraph>
        Venezuela no tiene un elaborado histórico de minería, a diferencia de
        sus vecinos Colombia y de Brasil. Pero si hay un lugar en el país que
        respira tradición minera, ese es El Callao. La cara de este pueblo villa
        en el estado Bolívar cambió para siempre cuando en 1853 fue descubierto
        el oro, convirtiendolo en el{" "}
        <ExternalLink
          href="https://www.britannica.com/place/El-Callao"
          language="en"
        >
          principal mundial de este rublo en 1885
        </ExternalLink>. Varias empresas extranjeras operaron en minas de la
        zona, pero es Minerven, una compañía fundada en 1970 y nacionalizada
        cuatro años después, la que ha explotado más el oro de El Callao.
      </Paragraph>

      <Paragraph> Mineros locales afirman que trabajar para Minerven daba
      estatus y que empleados usaban con honor el uniforme de la compañía, pero
      las cosas han cambiado en los años recientes. Minerven se ha venido
      abajo.{" "}
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              src: require("photos/El Callao-55.jpg")
            }
          }}
        >
          Las plantas de producción han sido desmanteladas
        </StoryMedia>{" "}
        y no se alcanzan las metas anuales de producción, ni de cerca. Mientras
        tanto, muchos grupos armados comenzaron a tomar el control en minas más
        grandes que rodean el pueblo. Hace un año, el ejército venezolano
        reforzó su presencia en la zona – para su propio beneficio, según muchos
        alegan – y no se ha detenido en combatir las bandas armadas y en matar a
        sus miembros desde entonces.
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
          La minería en El Callao pertenece al proyecto del Arco Minero
        </StoryMedia>. Unas cuatro empresas mixtas reclaman su parte, pero una
        visita a El Callao basta para entender que la minería legal y la ilegal
        van de la mano.
      </Paragraph>

      <Paragraph>
        No solo es que la mayoría de la población la que está involucrada
        directa o indirectamente con el proceso rudimentario de extracción de
        oro, sino que la minería y la vida del pueblo están estrechamente
        vinculadas. En cualquier parte de El Callao, probablemente no se consiga
        caminar más de un minuto sin encontrar a un comerciante de oro, pero sí
        encontrar una panadería o un supermercado.
      </Paragraph>

      <Paragraph>
        En las noches, cuando la mayoría del comercio cierra y cuando muchos
        mineros se dedican a su actividad favorita, beber, se verán personas
        barriendo el piso frente a las{" "}
        <StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              src: require("photos/IMG_4420.jpg")
            }
          }}
        >
          tiendas de oro
        </StoryMedia>, no solo para limpiar, sino para encontrar oro. Trozos de
        oro pueden caer por accidente por un vendedor descuidado y pequeñas
        virutas se pierden al quemar la amalgama de mercurio, que es una
        actividad que se prefiere hacer frente a la tienda para que el humo
        tóxico del mercurio no quede puertas adentro.
      </Paragraph>

      <Paragraph>
        En 2017, el{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/motor-minero-cierra-2017-victorioso-con-la-entrega-de-85-toneladas-de-oro-al-bcv/"
          language="es"
        >
          Banco Central de Venezuela (BCV) recibió 8,5 toneladas de oro
        </ExternalLink>, todos de Minerven. “El Callao está manteniendo a
        Venezuela”, comenta el dueño de empeño de oro en la plaza central del
        pueblo. Sin embargo, de acuerdo con varios mineros y personal de
        Minerven entrevistados para este reportaje, el oro no proviene
        originalmente de Minerven, sino de minas ilegales y de pequeña escala.
      </Paragraph>

      <Quote author="fuente en Minerven">
        Estamos autorizados para comprar de 17 a 18 asociaciones de productores
        artesanales de oro, pero sabemos que se lo compran a mineros ilegales
      </Quote>

      <Paragraph>
        “No puedo afirmar que Minerven lo compra de las minas ilegales, porque
        en papel no es así”, afirma una fuente en Minerven. “Estamos autorizados
        para comprar de 17 a 18 asociaciones de productores artesanales de oro,
        pero sabemos que se lo compran a mineros ilegales. Así es como se
        trabaja ahora. Todos los días las personas buscan tener negocios con
        nosotros para convertirse en legales”.
      </Paragraph>

      <Paragraph>
        Los mineros explican que solo una menor parte de la producción de oro
        de Venezuela termina en las arcas del BCV. La mayoría es traficada para
        el extranjero por el ejército y por el crimen organizado. “Ocho mil
        kilos no son nada”, afirma el general retirado Clíver Alcalá Cordones.
        “Se va a Aruba y a Curazao”. Cerca de 80 por ciento del oro de Venezuela
        se va ilegalmente del país en aviones de contrabando, de acuerdo con
        Alcalá.
      </Paragraph>

      <Paragraph>
        Desde el siglo XIX, varias compañías internacionales de Francia, Reino
        Unido y Rusia entraron en la región para minar las vetas ricas en oro
        que no solo circundan al pueblo, sino que están justo debajo de él.
        Ahora,{" "}
        <StoryMedia
          media={{
            id: "image-4",
            type: "image",
            data: {
              src: require("photos/El Callao-57.jpg")
            }
          }}
        >
          los vecindarios cerca del centro se han convertido en minas
        </StoryMedia>.
      </Paragraph>

      <Paragraph>
        Es común que una casa tenga unos pocos molinos en su patio, cerca de
        hoyos en el suelo.{" "}
        <StoryMedia
          media={{
            id: "image-5",
            type: "image",
            data: {
              src: require("photos/El Callao-22.jpg")
            }
          }}
        >
          Estos hoyos
        </StoryMedia>{" "}
        no deben entenderse como un mal sistema de aguas residuales – son
        túneles que conducen a varias galerías horizontales de minas.
      </Paragraph>

      <Paragraph>
        “Por dos años ha habido confrontaciones, estas ocurren porque hay muchas
        zonas mineras”, dice un minero local de El Callao. “Muchas zonas son
        grandes, son vecindades con minería. Si una comunidad tiene mucho oro,
        otra querrá entrar en ella no solo para trabajar, sino a robar con armas
        en mano y deshacerse de la gente que tiene el oro y que ellos quieren
        llevarse”.
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
          Los pueblos se convierten en minas y las minas se convierten en
          pueblos
        </StoryMedia>. Áreas mineras a El Callao son llamados Colombia, Perú,
        Chile, entre otros nombres dados por compañías mineras presentes en el
        pasado. De momento, estas minas son operadas por mineros ilegales de
        pequeña escala. Trabajan bajo presión de bandas armadas locales que
        colaboran con el ejército. Mientras tanto, intrusos desconocidos que se
        pelean por años por las minas de oro han manchado de sangre a El Callao.
      </Paragraph>

      <Paragraph>
        “Estos grupos armados son llamados <em>bases</em> aquí. Antes había
        tres, ahora hay solo una [a cargo]”, explica un minero de El Callao.
        Varias zonas están llenas de recuerdos de otras bandas armadas.
        “Pequeñas bases todavía están activas entre la gente”. De acuerdo con el
        minero, las que están en El Perú son las más terribles. Los choques
        violentos ocurren con frecuencia. En septiembre, antes de nuestra visita
        a El Perú, un sector que está bajo el dominio del criminal conocido como
        “el Toto” –{" "}
        <ExternalLink
          href="http://www.eluniversal.com/noticias/sucesos/mueren-personas-durante-incursion-del-ejercito-mina-bolivar_669537"
          language="es"
        >
          ocho personas murieron
        </ExternalLink>{" "}
        en un enfrentamiento con el ejército.
      </Paragraph>

      <Paragraph>
        Nuestra camioneta pick-up es conducida por el personal de Minerven y
        deja El Callao para visitar las minas – no las controladas por Minerven,{" "}
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
          sino las ilegales
        </StoryMedia>, cerca del pueblo. Aquí, las plantas de extracción mineral
        basadas en el{" "}
        <FileLink
          href={require("documents/GacetaOficial_40960.pdf")}
          format="pdf"
          size="10.5MB"
        >
          uso prohibido de mercurio
        </FileLink>{" "}
        producen oro que venden a la estatal.
      </Paragraph>

      <Paragraph>
        “Venga con nosotros”, grita nuestro conductor a un comandante del
        ejército, quien ya espera por nosotros en el jeep negro. Manda a un
        soldado armado en la parte trasera de la camioneta y nos escolta.
        Pasamos varias alcabalas antes de entrar en El Perú. El área está
        completamente militarizada, pero el peligro viene de las colinas donde
        las bandas armadas pueden bajar a tomar control de las minas. Este
        peligro que acecha se hace evidente cuando, en la noche anterior a
        nuestra visita,{" "}
        <ExternalLink
          href="http://www.eluniversal.com/noticias/sucesos/guerra-entre-bandas-sur-bolivar-dejo-seis-muertos_674893"
          language="es"
        >
          seis locales fueron abatidos
        </ExternalLink>{" "}
        en una balacera entre bandas.
      </Paragraph>

      <Paragraph>
        “Si uno se porta bien nada le pasa a uno”. Uno de los mineros que opera
        en un molino pequeño explica que la “vacuna” – un pago de extorsión de
        cuatro o cinco gramas mensuales de oro por cada molino – es pago a una
        de las bandas armadas. Con calma en su cara, añade: “Si no, uno sube [al
        cerro] y ellos prenden la motosierra”. Las historias de horror sobre
        tumbas masivas y desmembramientos son comunes. Las bandas son conocidas
        por bajar al pueblo y desaparecer con personas en los cerros
        circundantes.
      </Paragraph>

      <FeaturedText>
        El personal de Minerven dice que más de 30 mil mineros trabajan en las
        virutas de oro de El Callao y en las áreas adyacentes.
      </FeaturedText>

      <Paragraph>
        Muchos de ellos son trabajadores migrantes que vinieron a la región como
        resultado por la crisis y la falta de oportunidades de empleo en
        cualquier otra parte del país. Uno de esos trabajadores{" "}
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "6L0blKDiaS4"
            }
          }}
        >
          sale trepando de un túnel improvisado, seguido de su sobrino de 15
          años
        </StoryMedia>. “Si no trabajo en las minas no tengo manera de mantener a
        mi familia”, apunta el antiguo carpintero.
      </Paragraph>

      <Paragraph>
        Cerca de él descansa Minorca Maurera, una madre soltera de 23 años que
        trabajó en una panadería antes de venir a El Callao. “El salario mínimo
        no me alcanza. Soy la madre de tres niños. Renuncié [a la panadería] por
        el bajo salario y vine a este lugar. Es un poco duro, pero me ha ido
        bien. Independientemente, ahora, puedo sostener a mis hijos”.
      </Paragraph>

      <Paragraph>
        Vecindarios polvorientos que parecen barrios con chozas de madera
        improvisadas y pequeñas que solo tienen un techo delgado corrugado están
        llenas de migrantes mineros y además de nativos de El Callao. Más de un
        siglo y medio de extracción de oro ha traído a la población local todo,
        menos a ricos, lo que hace que aun un chavista acérrimo desconfíe del
        Arco Minero.
      </Paragraph>

      <Quote author="Darwin Lizardi, coordinador local del partido de el gobierno">
        El Arco Minero prácticamente ha funcionado para cubrir muchas cosas
      </Quote>

      <Paragraph>
        “El Arco Minero prácticamente ha funcionado para cubrir muchas cosas”,
        razona Darwin Lizardi Tabor. A sus 28 años es coordinador local de
        Juventud del Partido Socialista Unido de Venezuela (PSUV), el partido de
        gobierno, y usa una gorra roja de Minerven cuando lo conocemos. “Hombre,
        el Arco Minero como tal no ha funcionado. Te lo digo yo, que soy un
        chavista revolucionario pero hay que decir las cosas como son. Esto es
        un camuflaje. No sé por qué. Porque al final nos daña a los mineros y al
        pueblo”.
      </Paragraph>

      <Paragraph>
        Lizardi es un oriundo orgulloso de El Callao, pero los tiempos han
        cambiado. Él explica que su madre creció en una época más calmada. “Así
        era cuando uno podía dejar la puerta de la casa abierta toda la noche y
        nadie entraba”. La madre de Lizardi, de 66 años, contempla dejar su
        lugar, que ambos llevan en su corazón.
      </Paragraph>

      <Paragraph>
        La violencia y la pobreza hacen de El Callao un lugar difícil para vivir.
        “El minero todavía es un sucio que camina en las calles. Gana 300 mil
        bolívares, bebe cerveza y al próximo día no tiene nada y necesita{" "}
        <StoryMedia
          media={{
            id: "image-6",
            type: "image",
            data: {
              src: require("photos/IMG_4490.jpg")
            }
          }}
        >
          0,3 o 0,4 gramas de oro
        </StoryMedia>{" "}
        para traer comida a su hogar. Un minero no debería vivir así si el Arco
        minero estuviera funcionando”.
      </Paragraph>

      <Paragraph>
        Seguimos hablando en un bar cerrado para foráneos; mineros y alcohol
        pueden ser una combinación muy explosiva. Lizardi ordena más cerveza y
        sigue su discurso sobre la falta de infraestructura estatal y de
        medicinas, todo mientras los locales le entregan su oro al gobierno.
        “Gracias al minero, el que{" "}
        <StoryMedia
          media={{
            id: "video-2",
            type: "youtube",
            data: {
              id: "ogK2c9iuqZA"
            }
          }}
        >
          baja en un túnel de 100-120 metros
        </StoryMedia>
        , gracias a este minero, el Estado tiene cuatro toneladas de oro”.
      </Paragraph>

      <Paragraph>
        El Arco Minero recibió muchísimas críticas en la prensa venezolana, más
        que todo por su impacto ambiental futuro, por involucrar a bandas
        armadas y por su presencia en territorios indígenas. En octubre, el
        ministro para la Información y Comunicación salió al contraataque y
        publicó un artículo en el que{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/criminalizacion-mediatica-deforma-la-verdad-del-arco-minero-del-orinoco/"
          language="es"
        >
          acusa a la prensa de criminalizar a los mineros artesanales
        </ExternalLink>{" "}
        y de pasar por alto que 250 mil personas dependen directa o
        indirectamente del Arco Minero.
      </Paragraph>

      <FeaturedText>
        En El Callao, donde los mineros empiezan a ganar su propio dinero desde
        jóvenes, es difícil apreciar los beneficios del Arco Minero.
      </FeaturedText>

      <Paragraph>
        “Todo el oro sería invertido en trabajo social en el municipio de El
        Callao y, ahora, ni siquiera ha llegado una ambulancia”, explica
        Lizardi, quien sostiene que el Gobierno le ha prometido mucho al pueblo
        de El Callao. “Minerven ya tiene el dinero del estado para comprar el
        oro de los pequeños mineros. Lo que Minerven prácticamente hace es
        recoger el oro y llevarlo al Banco Central de Venezuela. No están
        asumiendo su papel como compañía minera porque todas sus plantas se han
        detenido”.
      </Paragraph>

      <Paragraph>
        Tener el ingreso determinado por la suerte y el trabajo duro en vez de
        solamente trabajar por horas es parte de la cultura minera. “De momento
        nadie recibe un salario. Uno trabaja para conseguir oro y el dinero es
        de uno”, dice Eduardo Gutiérrez, un hombre 43 años de El Callao que
        trabaja en uno de los{" "}
        <StoryMedia
          icon="binoculars"
          media={{
            id: "vr-1",
            type: "embed",
            data: {
              src: "https://roundme.com/embed/222934/625485"
            }
          }}
        >
          molinos en El Perú
        </StoryMedia>.
      </Paragraph>

      <Paragraph>
        Gutiérrez está satisfecho con el precio que ofrece Minerven por su oro y
        aguarda con esperanza que el proyecto del Arco Minero le envíe más
        recursos y equipos, pero él aún siente falta de un ambiente de trabajo
        seguro. Gutiérrez toca{" "}
        <StoryMedia
          media={{
            id: "image-7",
            type: "image",
            data: { src: require("photos/IMG_4489.jpg") }
          }}
        >
          agua mezclada con mercurio
        </StoryMedia>{" "}
        con las manos desnudas, mientras raspa una masa de amalgama de oro de un
        plato. Él entonces calienta los residuos con gas para apartar el oro,
        sin hacer ningún esfuerzo por cubrir su rostro del humo tóxico del
        mercurio.
      </Paragraph>

      <FeaturedText>
        Varios científicos han alertado sobre la contaminación del mercurio en
        El Callao, que le ocasiona{" "}
        <FileLink
          href={require("documents/RedAra_Contaminacion_mercurio_Guayana_Venezoelana.pdf")}
          format="pdf"
          size="4.0MB"
        >
          daños neurológicos a los mineros
        </FileLink>, y que también es la causa principal del{" "}
        <ExternalLink
          href="http://www.autismoava.org/noticias/el-veneno-silencioso-de-el-callao"
          language="es"
        >
          autismo en niños pequeños
        </ExternalLink>.
      </FeaturedText>

      <Paragraph>
        Desórdenes neurológicos y problemas en los riñones, pulmones y en la
        piel son las consecuencias más comunes en la salud, afirma Marianella
        Herrera, directora del Observatorio Venezolano de la Salud, en Caracas.
        “Un problema importante es la exposición al mercurio por parte de las
        mujeres embarazadas en la primera fase de embarazo. Investigadores
        también han vinculado la exposición de metales pesados, como el
        mercurio, al autismo”.
      </Paragraph>

      <Paragraph>
        Un estudio en varias zonas mineras del estado Bolívar halló que
        solamente{" "}
        <ExternalLink
          href="http://www.spda.org.pe/wpfb-file/la-realidad-de-la-mineria-ilegal-en-paises-amazonicos-spda-pdf/"
          language="es"
        >
          32 por ciento de los niños tenían niveles de mercurio debajo del
          límite de seguridad
        </ExternalLink>{" "}
        en su sangre.
      </Paragraph>

      <Quote author="Darwin Lizardi, coordinador local del partido de el gobierno">
        Todo el oro que lleva a Minerven es legal, en papel, aun cuando es
        ilegal
      </Quote>

      <Paragraph>
        Severos problemas de salud, batallas sangrientas entre bandas y áreas
        controladas por los militares. La minería ilegal de oro en El Callao
        contribuyó con circunstancias inseguras e insalubres, pero el Arco
        Minero tiene un interés en todo. “Todo el oro que lleva a Minerven es
        legal, en papel, aun cuando es ilegal”, explica Lizardi.
      </Paragraph>

      <Paragraph>
        <ExternalLink
          language="es"
          href="http://www.correodelcaroni.com/index.php/sucesos/violencia-minera-en-guayana/item/54451-bandas-armadas-atemorizan-a-vecinos-y-comercio-de-tumeremo-en-retaliacion-a-operativos-policiales"
        >
          Bandas armadas y el ejército han dominado el sector
        </ExternalLink>. El oro minado ilegalmente es comprado por compañías
        “mineras” que de hecho no minan, lo que esencialmente significa que
        funcionan más bien como grandes tiendas de empeño. “Aquí en El Callao
        tenemos mucho oro, pero no tenemos máquinas ni los recursos necesarios
        [para poder explotarlo]”, se jacta Darwin.
      </Paragraph>

      <Paragraph>
        La oscura simbiosis entre la minería legal y la ilegal es casi obvia.
        Del otro lado del pueblo, somos llevados a una mina controlada por una
        banda armada llamada “Nacupay”. Antes de entrar, se nos dice que no
        tomemos “fotos de los hombres armados” ni de la maquinaria que usa el
        mercurio. Justo antes de la entrada, una señal dice{" "}
        <StoryMedia
          media={{
            id: "image-8",
            type: "image",
            data: {
              src: require("photos/El Callao-78.jpg")
            }
          }}
        >
          MunSol – “Empresa minera aliada a la patria bolivariana en el Arco
          Minero del Orinoco”
        </StoryMedia>. Detrás de la señal, encontramos docenas de mineros
        informales que trabajan en los embarrados hoyos al aire abierto.
      </Paragraph>

      <Paragraph>
        Solo estamos autorizados para fotografiar a los{" "}
        <StoryMedia
          media={{
            id: "video-5",
            type: "youtube",
            data: {
              id: "HFXKNxumg4I"
            }
          }}
        >
          mineros que laboran con las tablas de lavar, características de la
          minería artesanal
        </StoryMedia>. No quieren que mostremos ni documentemos las
        instalaciones más grandes. Podemos, sin embargo, retratar los
        campamentos donde viven los mineros, cerca de los fosos llenos de agua
        estancada y contaminada.
      </Paragraph>

      <Paragraph>
        La situación en El Callao no es una excepción. Cerca de 91 por ciento
        del oro explotado en Venezuela es ilegal, de acuerdo con una{" "}
        <FileLink
          href={require("documents/GIATOC-OC_Illegally-Mined-Gold-in-Latin-America.pdf")}
          format="pdf"
          size="10.8MB"
        >
          investigación de la Iniciativa Global contra el Crimen Organizado
          Trasnacional
        </FileLink>. Pequeños lotes de oro se vuelven en joyería y luego se
        contrabandean, por ejemplo, para las islas del Caribe. Así como en
        diferentes partes de Venezuela, el ejército corrupto transporta grandes
        lotes a rutas costeras, Colombia y Brasil.
      </Paragraph>

      <Paragraph>
        Apenas una pequeña porción del oro termina en las manos del Estado. Esto
        demuestra, según mencionó Lizardi antes, cómo el Arco Minero funciona
        como una fachada. “Recuerdo cuando el comandante Chávez habló del Arco
        Minero [en 2011] y que el estado Bolívar debía convertirse en una
        potencia en Venezuela. ¡Y así no dependeríamos del petróleo!”, rememora
        el joven – quien está desilusionado del Arco Minero. “Aquí hay cosas que
        están pasando y el Arco Minero ha servido para cubrir la corrupción
        dentro del gobierno”.
      </Paragraph>
    </Container>
  </article>
);
