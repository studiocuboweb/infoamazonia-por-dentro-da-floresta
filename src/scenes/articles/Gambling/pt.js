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
      <title>Apostando contra o ambiente | Explorando o Arco Mineiro</title>
    </Helmet>
    <Container>
      <Title as="h2">Apostando contra o ambiente</Title>
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
          Os fortes ruídos dos geradores acompanham o duro trabalho dos mineiros
          ilegais a apenas um quilômetro da vila de El Callao
        </StoryMedia>. Coberto de lama, eles se alternam entre poços mineiros
        enquanto fazem uma varredura por ouro, cavam mais buracos ou usam as
        máquinas ruidosas no entorno dos poços de mineração para encher grandes
        sacos com quantidades de lama contendo ouro que irá depois será
        processada com mercúrio. Neste mesmo lugar havia uma floresta, mas
        muitas camadas de vegetação já foram removidas pela mineração.
      </Paragraph>
      <Paragraph>
        Se há um motivo para não continuar com o Arco Minero é o meio-ambiente,
        de acordo com Edgar Yerena, um biólogo da Universidade Simón Bolívar
        (USB), em Caracas. “É uma ideia muito ruim. É a pior ideia. Não há pior
        uso que você pode pensar, na minha opinião, para o{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/pt/embed/?map_only=1&map_id=17453"
            }
          }}
        >
          Escudo das Guianas
        </StoryMedia>”.
      </Paragraph>
      <Paragraph>
        Na Venezuela, o Escudo das Guianas se sobrepõe ao estado de Bolívar por
        inteiro e também inclui os estados do Amazonas e Delta Amacuro. A região
        é, de acordo com especialistas ambientais, de extrema importância para a
        geração de água e de conservação de espécies, mas deve ser evitado para
        a mineração. “Do ponto de vista ecológico [a área] funciona como um
        sistema diferente do resto do país. É muito delicada porque os solos
        gerados são muito lixiviados e bastante molhados. Eles têm bem poucos
        nutrientes, é muito arenoso e a recuperação ambiental de qualquer
        impacto no Escudo das Guianas é muito lenta, senão irreversível”,
        explica Yerena.
      </Paragraph>
      <Paragraph>
        As observações de Yerena são apoiadas por outro especialista ambiental
        venezuelano. “Os solos são muito finos e, quando removidos, será muito
        difícil de recuperar”, diz Juan Carlos Sánchez, co-ganhador do Prêmio
        Nobel da Paz em 2007 e um perito do Painel Intergovernamental das Nações
        Unidas sobre Mudanças Climáticas. O laureado também alerta que as
        florestas do Escudo das Guianas são habitat de espécies endêmicas que
        serão severamente impactadas. Existem{" "}
        <ExternalLink
          language="en"
          href="http://www.worldcat.org/title/flora-of-the-venezuelan-guayana/oclc/31938617"
        >
          9.411 espécies de flora, das quais 2.136 são endêmicas
        </ExternalLink>.
      </Paragraph>
      <Paragraph>
        Não há convivência possível entre mineração e florestas no Escudo das
        Guianas, diz Sánchez. “<StoryMedia
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
          Todas as terras dedicadas à mineração, e em particular à mineração de
          superfície
        </StoryMedia>, serão terrenos nos quais as florestas serão sacrificadas
        porque a mineração requer a remoção de grandes quantidades de terra.
        Este sacrifício das florestas representa uma perda irreparável do
        capital natural.”
      </Paragraph>
      <FeaturedText>
        Cerca de 75 por cento das terras no estado de Bolívar são ambientalmente
        protegidas, mas não contra o Arco Minero.
      </FeaturedText>
      <Paragraph>
        Estas terras exuberantes estão declaradas como parques nacionais,
        monumentos naturais, zonas protegidas, florestas e reservas florestais.
        O Parque Nacional Canaima foi até mesmo reconhecido como um Patrimônio
        Mundial da Unesco. Tudo isso parece não importar. Estas reservas
        florestais vão sofrer mais com as consequências imediatas de extração
        mineral no Arco Minero.
      </Paragraph>
      <Paragraph>
        Além disso, o impacto sobre as fontes de água será severo. O estado de
        Bolívar basicamente funciona como uma fábrica de água para o país e
        possui a décima maior reserva de água no mundo. A bacia do rio Caroní,
        por exemplo, gera energia hidrelétrica a 65 por cento do território da
        Venezuela, que é gerada na represa Guri, a principal fonte de energia da
        Venezuela.
      </Paragraph>
      <Paragraph>
        De acordo com Yerena, “a mineração prejudica a qualidade da água
        disponível. O tema do potencial hidrelétrico nas Guianas não só depende
        da quantidade de água, mas também na qualidade. Ele requer água com
        pouco sedimento”, explica ele ao se referir ao rio Caroní, que margeia a
        região de mineração e se torna cada vez mais sedimentado.
      </Paragraph>
      <Quote author="Edgar Yerena, biólogo">
        O Estado venezuelano tem uma história de não saber como administrar a
        mineração. Por que eles saberiam fazê-lo agora?
      </Quote>
      <Paragraph>
        O impacto ambiental pode ser irreversível. Especialistas explicam que, a
        longo prazo, os danos ambientais podem superar as receitas do setor de
        mineração. Yerena acrescenta: “O Estado venezuelano tem uma história de
        não saber como administrar a mineração. Por que eles saberiam fazê-lo
        agora?”.
      </Paragraph>
      <Paragraph>
        O desconhecimento também é um problema para os movimentos de justiça
        ambiental que têm pouco de pesquisa e dados disponíveis para argumentar.
        “É complicado porque, até agora, a defesa está baseada no conceito do
        projeto, e a maneira sobre a qual eles estão tentando implementar o
        projeto”, explica Yerena.
      </Paragraph>
      <Paragraph>
        “Mas ainda não há uma avaliação ambiental estratégica. Não há e
        informações públicas deveriam ser fornecidas para que os setores
        acadêmico e ambiental pudessem revisar adequadamente. Até agora, só
        temos informações fracionadas, pontuais e não oficiais. Não existem
        mecanismos claros para a obtenção de informação oficial para as pessoas
        curiosas em saber o que está acontecendo com o projeto.”
      </Paragraph>
      <FeaturedText>
        Dois riscos ainda não debatidos de mineração são o
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/pt/embed/?map_only=1&map_id=17456"
            }
          }}
        >
          desmatamento
        </StoryMedia>
        e contaminação por mercúrio.
      </FeaturedText>
      <Paragraph>
        “No meu entendimento, de acordo com as normas ambientais da Venezuela,
        isso não deveria ter acontecido. Isto é construído sobre uma base de
        ilegalidade na qual o estudo de avaliação ambiental sobre todo o projeto
        não foi conduzido”, diz Yerena.
      </Paragraph>
      <Paragraph>
        Alexander Luzardo, o ex-senador que escreveu as normas ambientais para
        constituição atual da Venezuela, duvida que a mineração compense o dano
        em troca dos benefícios econômicos. Nunca houve qualquer prova
        certificada de que o país possui quantidades de ouro e coltan tão grande
        quanto afirma ter.
      </Paragraph>
      <Quote author="Alexander Luzardo, former senator">
        A mineração está ligada a negócios ilícitos e atividades ilegais
        financeiras ligadas à lavagem de dinheiro.
      </Quote>
      <Paragraph>
        O professor diz que pode ser um mito, uma estratégia para o
        desenvolvimento de projetos, a fim de lavar o dinheiro. “A criação de
        empresas fantasmas, sem qualquer experiência, sem conhecimento, eles
        jogam o jogo de elevação [especulação de mercado] e lavagem de
        dinheiro”, diz ele. “A mineração está ligada a negócios ilícitos e
        atividades ilegais financeiras ligadas à lavagem de dinheiro.” Segundo
        ele, estas empresas vão comprar e trocar os minerais de mineração ilegal
        ou tentar especular e vender seu projeto para quem der o maior lance.
      </Paragraph>
      <Paragraph>
        O “show de boas notícias” do governo sobre depósitos minerais
        monstruosos é, de acordo com Luzardo, uma oferta enganosa para o país.
        “É para dar a eles a esperança de uma loteria”, ele ri. “É a loteria da
        mineração. Sempre apostando tudo. ‘Nós temos as maiores reservas do
        mundo'.” A distração da crise econômica e política ignora questões mais
        importantes em jogo. “Não é sobre o trabalho, nem sobre educação,
        organização ou a diversificação energética e tampouco sobre assumir os
        grandes desafios”, ironiza.
      </Paragraph>
      <Paragraph>
        O nome Arco Minero também é incômodo para Luzardo. Ele argumenta que o
        termo é um reducionismo linguístico. “Você reduz tudo a Arco Minero”,
        explica ele. “Já com o nome se cede o território [à mineração]”.
        Argumenta que um <em>Arco da Biodiversidade</em> caberia melhor e faria
        mais justiça, em papel, às áreas ambientais protegidas.
      </Paragraph>
      <Paragraph>
        Há esperança, no entanto, de acordo com Luzardo. O professor refere-se a
        uma{" "}
        <FileLink
          format="pdf"
          size="0.2MB"
          href={require("documents/AsambleaNacionalVenezuela_CancelamientoArcoMinero.pdf")}
        >
          decisão da Assembleia Nacional venezuelana que cancelou o decreto do
          Arco Minero
        </FileLink>{" "}
        no dia 14 de junho de 2016. “Você não pode legalizar um crime
        ambiental”, ele resmunga, mas a decisão da Assembleia não foi
        reconhecido pela Suprema Corte da Venezuela que{" "}
        <ExternalLink
          language="es"
          href="http://runrun.es/nacional/292903/tsj-declaro-nulas-las-sesiones-del-5-y-el-9-de-enero-de-la-asamblea-nacional.html"
        >
          deixou de lado a Assembleia Nacional
        </ExternalLink>{" "}
        e todas as suas decisões a partir do dia 11 de janeiro de 2017.
      </Paragraph>
      <Paragraph>
        Enquanto isso, a crise política e econômica da Venezuela continua
        levando mais venezuelanos desesperados e desempregados à região mineira.
        Eles continuam a cavar nas lamas valiosas de El Callao e muitas outras
        áreas no sul do país. Por agora, a oposição política contra o Arco
        Minero é deixada sem armas legais. Desmatamento acelerado e uma
        fronteira de mineração em expansão são as consequências inegáveis ​​da
        crise no país, que parece longe de terminar.
      </Paragraph>
    </Container>
  </article>
);
