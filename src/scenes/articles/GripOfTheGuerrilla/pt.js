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
        Amazonas e oeste de Bolívar: nas mãos da guerrilha | Explorando o Arco
        Mineiro
      </title>
    </Helmet>
    <Container>
      <Title as="h2">Amazonas e oeste de Bolívar: nas mãos da guerrilha</Title>
      <Paragraph>
        Os que ficam com a pior parte da bonança da mineração na Venezuela são
        as{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/pt/embed/?map_only=1&map_id=17467"
            }
          }}
        >
          comunidades nativas dos estados de Amazonas e Bolívar
        </StoryMedia>{" "}
        que têm sido usurpadas da economia mineira legal e ilegal. Grupos de
        guerrilha colombianos – referidos pelos locais como <em>patagomas</em>{" "}
        (pés de borracha) – estão expandindo suas operações de mineração no
        oeste da Venezuela e recentemente anunciaram seus primeiros projetos de
        mineração em territórios indígenas.
      </Paragraph>
      <Quote author="Liborio Guarulla, ex-governador do estado Amazonas">
        O modo de viver indígena foi afetado pela presença de grupos armados
        ilegais e de mineiros
      </Quote>
      <Paragraph>
        Em Puerto Ayacucho, Liborio Guarulla, um indígena Baniva que governou o
        estado do Amazonas de 2001 a 2017, senta-se em sua mesa com uma grande
        pintura do libertador sul-americano Simón Bolívar atrás de suas costas.{" "}
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "b0MjlZWd4Tk"
            }
          }}
        >
          Ele explica
        </StoryMedia>: “O modo de viver indígena foi afetado pela presença de
        grupos armados ilegais e de mineiros. Eles foram inseridos nas economias
        mineradoras”.
      </Paragraph>
      <Paragraph>
        A gravidade da situação torna-se evidente{" "}
        <ExternalLink
          language="en"
          href="https://uk.reuters.com/article/us-venezuela-amazon/illegal-miners-infest-venezuelas-amazon-idUKBRE9B205S20131203"
        >
          no estado do Amazonas
        </ExternalLink>{" "}
        com casos de grupos indígenas escravizados que têm números tatuados nas
        costas ou nos ombros. “Quando recebemos a denúncia de que eles mataram
        alguns [indígenas] Yanomami, fui ao Alto Orinoco, que é um extenso
        município”, diz o major geral aposentado do exército, Clíver Alcalá
        Cordones. Em 2012, o exército começou uma operação de três semanas
        depois de receber uma queixa de que indígenas Yanomami estavam sendo
        assassinados em torno de projetos de mineração ilegal. “Eu vi alguns
        Yanomami que foram marcados”.
      </Paragraph>

      <Paragraph>
        Alcalá explica que vários indígenas foram marcados por garimpeiros
        brasileiros, que os escravizaram nas minas. “Então, eles podem dizer:
        ‘este indígena é meu’”. Não só os indígenas foram escravizados para
        trabalhar, mas jovens meninas indígenas também foram tiradas de suas
        comunidades e{" "}
        <FileLink
          format="pdf"
          size="0.4MB"
          href={require("documents/AliciaMoncadaAcosta_Violencia-Mujeres-Indigenas-Mineros-Amazonia-Colombia-Venezoela.pdf")}
        >
          forçadas à prostituição
        </FileLink>{" "}
        ao redor das minas. “As garotas ‘bonitas’ não podem sair mais, eles as
        mantêm lá”, diz Henelda Rodríguez, da Organização das Mulheres Indígenas
        Amazônicas Wanaaleru. “Meninas que querem escapar desaparecem”.
      </Paragraph>
      <Paragraph>
        O Amazonas não é oficialmente parte do Arco Minero, mas Guarulla teme
        que seja apenas uma questão de tempo até que os projetos infratores se
        expandam através da fronteira estadual. Mais de metade das terras do
        Amazonas estão sob proteção ambiental, mas foram invadidas por
        mineradores ilegais e homens armados.
      </Paragraph>
      <Paragraph>
        Cerca de 25 por cento das terras da Venezuela pertencem a populações
        indígenas. O{" "}
        <FileLink
          format="pdf"
          size="0.3MB"
          href={require("documents/PROVEA_Derechos-Pueblos-Indigenas_2016.pdf")}
        >
          Arco Minero é habitado por 198 comunidades indígenas
        </FileLink>, mas a maioria das terras ancestrais não são reconhecidas
        por delimitações legais, nem recebem proteção. A constituição exige
        proteção legal das terras indígenas desde 1999, mas apenas{" "}
        <FileLink
          format="pdf"
          size="0.4MB"
          href={require("documents/PROVEA_Derechos-Pueblos-Indigenas_2014.pdf")}
        >
          12,4 por cento de seus territórios foram demarcados
        </FileLink>.
      </Paragraph>
      <Paragraph>
        As comunidades indígenas que se encontram no caminho de projetos
        prospectivos de mineração, um setor definido como um dos motores da
        economia nacional, são agora um obstáculo inconveniente – ou pior,
        mão-de-obra barata.
      </Paragraph>
      <Quote author="Liborio Guarulla, ex-governador do estado Amazonas">
        Na prática, é a guerrilha que exerce controle aqui. A guerrilha com a
        ajuda das forças armadas venezuelanas. Eles recebem parte dos valores
      </Quote>
      <Paragraph>
        Guarulla argumenta que seu estado foi invadido: “Na prática, é a
        guerrilha que exerce controle aqui. A guerrilha com a ajuda das forças
        armadas venezuelanas. Eles recebem parte dos valores”. Segundo o
        ex-governador, as forças de guerrilha compram o exército para atuar como
        uma autoridade que controla as operações de mineração “para que possam
        funcionar na zona”.
      </Paragraph>
      <Paragraph>
        O estado do Amazonas compartilha a oeste uma extensa fronteira com a
        Colômbia e se conecta com o estado de Bolívar a leste. De acordo com
        Guarulla, há cerca de 4 a 4,5 mil guerrilheiros colombianos presentes no
        Amazonas. A maioria pertence a grupos dissidentes do Exército de
        Libertação Nacional (ELN) ou das Forças Revolucionárias Armadas da
        Colômbia (FARC). Organizações indígenas pensam que o número pode ser
        muito maior.
      </Paragraph>
      <Paragraph>
        Quando as FARC ainda estavam armadas, o ELN era o segundo maior grupo
        guerrilheiro da Colômbia e agora negocia no Equador{" "}
        <ExternalLink
          language="es"
          href="http://www.altocomisionadoparalapaz.gov.co/dialagos-eln/Paginas/Noticias/octubre/Titulares.aspx"
        >
          um acordo de paz
        </ExternalLink>{" "}
        com o governo colombiano. Enquanto isso, as FARC aumentaram sua presença
        na Venezuela. Aqui os guerrilheiros colombianos são bem recebidos há
        mais de uma década. A partir de 2002,{" "}
        <FileLink
          format="pdf"
          size="0.2MB"
          href={require("documents/FriedrichEbertStiftung_Farc-Venezuela-Huesped-Incomodo.pdf")}
        >
          rebeldes das FARC começaram a usar Venezuela
        </FileLink>{" "}
        como um porto seguro e uma nova área estratégica – para mobilizar
        combatentes, armas e vítimas de sequestro – enquanto o exército da
        Colômbia intensificou os esforços para combater os guerrilheiros dentro
        de suas fronteiras nacionais.
      </Paragraph>
      <Paragraph>
        De acordo com Alcalá, o aposentado major general do exército
        venezuelano, grupos dissidentes das FARC que não querem participar no
        processo de paz vieram à Venezuela. Eles estão envolvidos em economias
        ilícitas e lavagem de dinheiro de drogas por meio de atividades de
        mineração ilegal envolvendo a população local. “As guerrilhas usam os
        povos indígenas para trabalhar nas minas”, explica Alcalá.
      </Paragraph>
      <Paragraph>
        Tanto as FARC, quando ainda era um movimento guerrilheiro ativo, quanto
        o ELN financiaram suas operações com{" "}
        <ExternalLink
          language="en"
          href="https://www.insightcrime.org/news/brief/colombia-captures-czar-of-coltan-with-farc-eln-ties/"
        >
          minerais extraídos ilegalmente
        </ExternalLink>, entre outras fontes de receitas ilícitas. As guerrilhas
        não poderiam ter escolhido um lugar melhor, já que o subsolo esconde uma
        variedade dos minerais mais procurados do mundo, tais como ouro,
        diamantes e coltan. Mesmo depósitos de urânio têm sido reportados e
        chamado a atenção do governo iraniano, apesar de um{" "}
        <ExternalLink
          language="en"
          href="https://search.wikileaks.org/plusd/cables/09CARACAS1296_a.html"
        >
          documento vazado
        </ExternalLink>{" "}
        ter diminuído a viabilidade da sua exploração.
      </Paragraph>
      <Paragraph>
        Os depósitos de coltan são de fácil acesso quando se cruza a fronteira
        com da Colômbia com a Venezuela. O minério de coltan é composto por dois
        minerais, columbita e tantalita – ambos cada vez mais usados em
        equipamentos eletrônicos modernos.
      </Paragraph>
      <Paragraph>
        Poucos países possuem jazidas de coltan, mas, de acordo com Roland
        Chavasse, diretor do Centro de Estudos Internacional de Tântalo-Nióbio:
        “O{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-2",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/pt/embed/?map_only=1&map_id=17453"
            }
          }}
        >
          Escudo das Guianas
        </StoryMedia>{" "}
        é conhecido por nós por ser muito, muito rico, possivelmente o maior
        depósito de coltan do mundo”, ele disse. No entanto, não há números
        oficiais dos depósitos de coltan certificados na Venezuela.
      </Paragraph>
      <Paragraph>
        A escassez e a demanda de coltan caracterizam a importância do mineral.
        A maioria das pessoas em todo o mundo tem dispositivos eletrônicos
        modernos (notebooks, tablets, telefones celulares) que contêm coltan.
        Além disso, o tântalo (elemento mais importante da tantalita) também é
        utilizado para novas aplicações militares, tais como sistemas
        antitanque, bombas inteligentes, drones e robôs, tornando-o um mineral
        estratégico e de alto valor.{" "}
        <FileLink
          format="pdf"
          size="2.3MB"
          href={require("documents/DepartmentDefenseUS_Strategic-Critical-Materials-2015-Stockpile-Requirements.pdf")}
        >
          O Departamento de Defesa dos Estados Unidos recomendou armazenar
          coltan em 2015
        </FileLink>, elevando o mineral a uma questão de segurança nacional.
      </Paragraph>
      <Paragraph>
        Já na década de 1970,{" "}
        <FileLink
          format="pdf"
          size="2.3MB"
          href={require("documents/TIC_Bulletin67.pdf")}
        >
          estudos feitos pela Pesquisa Geológica da Venezuela e pelo Ministério
          de Minas
        </FileLink>{" "}
        identificaram uma vasta reserva de tântalo na Venezuela. Uma área,
        habitada pelos povos indígenas Piaroa, foi investigado em 1989 e 1990 e
        recebeu atenção especial por seus depósitos minerais. Estes depósitos
        estão localizados no ponto mais ocidental do estado de Bolívar, no
        encontro dos rios Parguaza e Orinoco.
      </Paragraph>
    </Container>
  </article>
);
