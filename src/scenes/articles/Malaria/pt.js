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
        A malária está mordendo pelas áreas de mineração da Venezuela |
        Explorando o Arco Mineiro
      </title>
    </Helmet>
    <Container>
      <Title as="h2">
        A malária está mordendo pelas áreas de mineração da Venezuela
      </Title>
      <Paragraph>
        Um grupo de jovens com armas de fogo a tiracolo esperam em frente a uma{" "}
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              src: require("photos/IMG_4452.jpg")
            }
          }}
        >
          arena de briga de galos
        </StoryMedia>{" "}
        enquanto os habitantes locais os visitam para pedir pequenas
        contribuições financeiras, mediação para resolver conflitos ou apenas
        para socializar. Em Las Claritas, no estado de Bolívar, a gangue armada
        que atende pelo nome de pranes não somente controla a vida diária, mas
        também é responsável por extensas minas de ouro ilegais ao redor da
        vila. Muitos dos habitantes locais que visitam a arena de briga de galos
        a deixam de mãos abanando diante de uma placa na parede que diz: “<StoryMedia
          media={{
            id: "image-2",
            type: "image",
            data: {
              src: require("photos/IMG_4480.jpg")
            }
          }}
        >
          Contribuições [financeiras] suspensas até novo aviso
        </StoryMedia>.”
      </Paragraph>
      <Paragraph>
        Também aguardamos, torcendo para saber do pran, quem comanda todas as
        operações. Ele decide se podemos fazer uma visita às suas minas. “Você
        tem um pouco de água para mim?” Um dos membros de gangues nos pede.
        “Tenho que me manter bebendo água.” Ele tem a malária; nem mesmo
        criminosos não são poupados da epidemia e da falta de medicamentos que
        complica as regiões mineiras da Venezuela.
      </Paragraph>
      <Paragraph>
        Depois de uma longa espera, nos é dito que não poderemos visitar as
        minas naquele dia por uma variedade de motivos pouco claros. Nós
        decidimos verificar a clínica local em Las Claritas e perguntas sobre a
        malária, mas só estamos autorizados a fazer perguntas e tirar
        fotografias se levarmos um dos membros da gangue conosco em nosso carro.
        A indiferença que o jovem criminoso tem com o nosso trabalho – “Vocês
        estão prontos? Eu estou com fome” – permite-nos tomar distância enquanto
        ele espera no estacionamento. Conseguimos falar com alguns mineiros de
        rosto pálido, tremendo, que estão aguardando em frente à clínica local.
        A maioria deles têm tido muitas recaídas e Precisam de medicamentos
        antimaláricos. Na entrada da clínica um aviso diz: “<StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              src: require("photos/IMG_4458.jpg")
            }
          }}
        >
          Não há tratamento contra malária até novo aviso
        </StoryMedia>.”
      </Paragraph>
      <FeaturedText>
        Em 1961, a Venezuela foi homenageado pela Organização Mundial de Saúde
        por ter sido o{" "}
        <ExternalLink
          language="en"
          href="https://www.nytimes.com/2016/08/15/world/venezuela-malaria-mines.html"
        >
          primeiro país a erradicar a malária
        </ExternalLink>{" "}
        em áreas densamente povoadas.
      </FeaturedText>
      <Paragraph>
        Infelizmente, essa honra pertence ao passado. Ainda que a Venezuela
        tenha mostrado que a malária possa ser prevenida e tratada com sucesso,
        poucas tentativas têm sido feitas pelo atual governo para combater a
        epidemia atual.
      </Paragraph>
      <Paragraph>
        “Cuidado! Há um mosquito atrás de você”, brinca um pesquisador médico de
        uma clínica diferente que não pode ser identificada no estado de
        Bolívar. “Mas também poderia ser chikungunya.” Ele explica que o governo
        perdeu completamente o controle sobre as epidemias.
      </Paragraph>
      <Paragraph>
        O município de Sifontes, no qual povoados mineiros como Las Claritas e
        Tumeremo estão situados, tem a maior taxa de malária do país. Não é
        coincidência que a malária é galopante nas áreas de mineração ilegal, já
        que a doença{" "}
        <ExternalLink
          language="en"
          href="https://www.researchgate.net/publication/314122136_Anthropogenic_forest_loss_and_malaria_prevalence_a_comparative_examination_of_the_causes_and_disease_consequences_of_deforestation_in_developing_nations"
        >
          é conhecido por estar relacionado ao desmatamento
        </ExternalLink>. O pesquisador, que pediu para permanecer anônimo por
        medo de represálias, explica que florestas desmatadas e poços de
        mineração cheios de água parada criam as condições ideais para uma
        epidemia. O sol aquece rapidamente a água pois não há cobertura de
        árvores para proporcionar sombra, o que acelera o desenvolvimento das
        larvas.
      </Paragraph>
      <Paragraph>
        Muitos mineiros ilegais ficam em{" "}
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
          campos de mineração improvisados
        </StoryMedia>{" "}
        e às vezes até dormem em redes junto às minas. A falta de prevenção
        deles e a proximidade com as lagoas da mineração, os criadouros de
        mosquitos da malária, os torna mais vulneráveis à infecção.
      </Paragraph>
      <Paragraph>
        A malária é uma doença infecciosa causada por um parasita que leva a
        febres graves, dores de cabeça e musculares e pode resultar na morte. No
        estado de Bolívar somente, lar de 2,1 milhões de pessoas, cerca de 206
        mil pessoas foram infectadas com malária nos dez primeiros meses de
        2017. No Amazonas, um estado com uma população de 180 mil pessoas, foram
        42 mil casos de infecção até setembro de 2017, de acordo com a médica de
        uma clínica de saúde local. Ela também falou conosco na condição de
        anonimato já que colegas trabalhadores de saúde já foram demitidos por
        falar com a imprensa.
      </Paragraph>
      <Paragraph>
        “Se nós não obtivermos mais medicamentos a tempo, a situação vai sair do
        controle. Já existem 27 mil mais casos do que no ano passado”, explicou
        a médico quando a visitamos em novembro. A cada dia, cerca de 150-200
        pessoas{" "}
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
          são testadas em Puerto Ayacucho
        </StoryMedia>. Metade delas geralmente têm resultado “positivo”. De
        acordo com a médica, são necessárias ainda mais instalações para
        diagnóstico e panfletos de medicamentos na região, especialmente em
        áreas remotas.
      </Paragraph>
      <Paragraph>
        Municípios da selva no Amazonas, como Rio Negro e Manapiare, estão
        atormentados pela mineração ilegal e malária. Agora é uma crise de saúde
        pública. O transporte de Puerto Ayacucho, a capital do estado, a esta
        região remota pode levar de cinco a dez dias de barco. “Não existem
        medicamentos em áreas de mineração”, diz ela. Pessoas que obtêm
        medicamentos, por vezes, os revendem por dose, mesmo quando eles mesmos
        têm malária. Uma dose não vai curá-lo, no entanto, e você precisa
        terminar todo o tratamento, mas, de acordo com ela, as pessoas estão
        desesperadas por dinheiro e abusam da ignorância dos outros.
      </Paragraph>
      <Paragraph>
        No vizinho estado de Bolívar, mineiros dizem que medicamentos são
        vendidos no mercado negro a uma taxa de um ou dois gramas de ouro por
        dose.
      </Paragraph>
      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/kCqxt/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>
      <Paragraph>
        Nestes quatro anos, o número de pacientes com malária aumentou quinze
        vezes. Nos últimos três anos, o Ministério da Saúde não conseguiu conter
        cinco epidemias: dengue, chikungunya, zika, difteria e malária – e
        milhões de venezuelanos foram infectados.
      </Paragraph>
      <Quote author="Carlos Chancellor, ex-prefeito de Sifontes, Bolívar">
        Este governo é tão irresponsável que eles não estão sequer cuidando de
        suas vítimas da malária
      </Quote>
      <Paragraph>
        O ex-prefeito de Sifontes, Carlos Chancellor, já se cansou das políticas
        de governo deficientes. “Este governo é tão irresponsável que eles não
        estão sequer cuidando de suas vítimas da malária”, resmunga Chancellor.
        Ele ainda estava no cargo quando o visitamos, em novembro de 2017,
        assinando papéis e em reunião com dois emotivos pais que tentavam
        convencê-lo a organizar uma visita de emergência a seu filho, que foi
        preso recentemente durante um protesto contra o governo.
      </Paragraph>
      <Paragraph>
        Em seu apertado escritório sem janelas em Tumeremo, o prefeito tenta
        trabalhar sob um tubo fluorescente piscando. Enquanto as pessoas
        continuam entrando em seu escritório, Chancellor diz que cerca de 80 mil
        pessoas estão direta ou indiretamente envolvidos nas muitas minas
        ilegais de seu município. “Elas são pessoas respeitáveis,
        trabalhadores”, mas ele vê o setor e seus danos colaterais, como a
        epidemia de malária, como um grande problema.
      </Paragraph>
      <Paragraph>
        “Hoje eu fiz o diagnóstico e estou livre pela primeira vez da malária!”,
        diz o aliviado{" "}
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
        </StoryMedia>{" "}
        em frente a uma clínica em Tumeremo, em Bolívar. O mineiro ilegal foi
        testado sete vezes nos últimos 18 meses e em seis delas recebeu um
        resultado “positivo”.
      </Paragraph>
      <Paragraph>
        A maioria dos mineiros não tem a sorte de Eduardo Rodríguez, então eles
        sofrem recaídas contínuas, incapazes de combater o parasita. “Eu já tive
        malária umas 50 vezes”, diz um mineiro em El Callao. “Era como se eu
        estava urinando Coca-Cola”. Seu corpo treme em frente a um barraco na
        floresta, feito a partir de pedaços de madeira e algumas lonas plásticas
        que funcionam como um telhado. Apenas dez metros de seu abrigo
        improvisado, outros mineiros jogam água em uma encosta lamacenta com uma
        mangueira para seguir trabalhando nos sedimentos em busca de ouro.
      </Paragraph>
      <Paragraph>
        “A fronteira entre o mosquito e o homem não existe mais”, explica um
        médico local. “Nossa equipe está treinada e disponível para trabalhar
        neste problema”, diz ele, mas a falta de medicamentos é o problema
        fundamental.
      </Paragraph>
      <Paragraph>
        Áreas de mineração remotas nos estados de Bolívar e Amazonas passam por
        problemas semelhantes. “A morte chega porque as pessoas vivem muito
        longe”, diz o médico. “Primeiro, eles precisam atravessar um rio,
        esperar por um barco, depois por uma mula e, em seguida, um jipe
        ​​Toyota os traz até nós. Isto pode levar até três ou quatro dias nos
        quais a situação da saúde de alguém pode ficar muito complicada.”
      </Paragraph>
      <Paragraph>
        Para ganhar dinheiro extra, este médico também trabalhou nas minas nas
        horas vagas. “Com um golpe de sorte, você pode ganhar tanto em duas
        semanas como em seis semanas no hospital”, ele sorri, mas neste ano
        provavelmente não vai voltar para as minas. A violência e risco de
        malária ficaram grandes demais.
      </Paragraph>
      <Paragraph>
        “Há um aumento extraordinário de mineiros migrantes de diferentes
        estados até o Amazonas e Bolívar, assim como as pessoas colaterais, como
        prostitutas, comerciantes, etecetera”, explica o Dr. Oscar Noya, diretor
        do Centro de Estudos sobre Malária e pesquisador do Instituto de
        Medicina Tropical da Universidade Central da Venezuela, em Caracas.
      </Paragraph>
      <Quote author="Dr Oscar Noya, Centro de Estudos sobre Malaria">
        O aumento dos casos tem a ver com a escassez de antimaláricos e agrava a
        situação regional
      </Quote>
      <Paragraph>
        “Recaídas não estão incluídas nas estatísticas, de modo que o número
        atual, associado a um aumento em portadores assintomáticos, é o número
        real e estimamos que os casos de 2016 ultrapassaram um milhão.”
      </Paragraph>
      <Paragraph>
        Especialistas dizem que os piores dias da epidemia ainda estão por vir.
        Os mineiros migrantes, com a exposição crescente à malária, podem ajudar
        a espalhar a doença. Os profissionais de saúde nas zonas fronteiriças
        com países vizinhos, como Brasil e Colômbia, foram colocadas em alerta.
        Na Colômbia, das 965 pessoas infectadas com a malária que atravessaram a
        fronteira em 2017,{" "}
        <FileLink
          format="pdf"
          size="1.5MB"
          href={require("documents/2017BoletinEpidemiologico52_INS.pdf")}
        >
          92 por cento veio da Venezuela
        </FileLink>. “Do nada, um caso de malária pode causar uma epidemia em
        seis meses”, adverte um dos trabalhadores de saúde no estado de Bolívar.
      </Paragraph>
    </Container>
  </article>
);
