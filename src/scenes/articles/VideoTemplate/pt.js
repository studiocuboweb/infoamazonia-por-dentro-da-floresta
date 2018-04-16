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
      <title>Introdução | Explorando o Arco Mineiro</title>
    </Helmet>
    <Container>
      <Note>
        <p>
          Durante três meses, nosso repórter percorreu as áreas de mineração
          disputadas da Venezuela, onde foi confrontado com grupos armados
          ilegais, comunidades indígenas reprimidas por guerrilheiros
          colombianos e enclaves de mineiros informais atormentados pela
          malária. Uma detenção ilegal pela Guarda Nacional quase terminou
          prematuramente esta investigação.
        </p>
        <p>
          Nesta jornada, conversamos com mineiros, empresas, acadêmicos,
          indígenas, políticos e ativistas e reunimos material exclusivo sobre o
          conflito por recursos naturais menos reportado da América Latina.
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
          <strong>Com suas mãos cheias de barro</strong>, um mineiro lança
          rochas ricas em minerais em um moinho mecânico giratório que esmaga as
          pedras para serem processadas com mercúrio
        </StoryMedia>. A uma pequena distância, alguns soldados nos esperam. Os
        militares nos escoltaram durante a nossa visita às colinas verdes
        próximo de El Callao, um dos muitos pontos de mineração fortemente
        contestados na Venezuela. “Um tiroteio ou um massacre poderiam acontecer
        a qualquer momento, todos os dias eram assim”, outro mineiro fala
        entusiasticamente sobre o comportamento violento aplicado por grupos
        armados que lutaram pelo acesso a esta mesma mina.
      </Paragraph>

      <Paragraph>
        O ouro que é extraído acabará no mercado mundial sob a forma de joias,
        trancado em um banco ou usado em eletrônicos, mas poucas pessoas saberão
        sobre sua origem. “Eles trabalham como os <em>Rangers</em> [tropa de
        elite do exército dos Estados Unidos]”, o mineiro continua sobre os
        tiroteios noturnos nas colinas que cercam a vila, onde as balas são
        disparadas ante qualquer faixa de luz, pois um toque de recolher é
        imposto pelas gangues ativas. A maioria dos mineiros prefere não se
        identificar por temer respostas das pessoas armadas da região.
      </Paragraph>

      <Paragraph>
        Os militares venezuelanos também participam da violência e por vezes
        estão envolvidos na mineração através de gangues associadas e suas
        próprias operações. As forças armadas da Venezuela ganharam poder
        durante a presidência do falecido Hugo Chávez. Clíver Alcalá Cordones,
        um apoiador de Chávez que se aposentou em 2013, era um major general que
        comandava as regiões mineiras. Em reunião em um lobby de hotel em
        Bogotá, na Colômbia, ele explica que Maduro está entregando cada vez
        mais poder aos setores militares e governamentais, que agora participam
        do chamado “desastre e apropriação”.
      </Paragraph>

      <FeaturedText>
        A busca de minerais pelas forças armadas resulta em uma visível
        militarização das áreas de mineração.
      </FeaturedText>

      <Paragraph>
        Uma viagem ao sul da Venezuela, perto de muitas minas de ouro ilegais,
        dá a impressão de que a região está bem controlada. Ao dirigir pelas
        estradas principais,{" "}
        <StoryMedia
          media={{
            id: "video-2",
            type: "youtube",
            data: {
              id: "mmdFX5EyunU"
            }
          }}
        >
          somos interrompidos a cada 30 minutos nos postos de controle por
          Guardas Nacionais armadas
        </StoryMedia>, que são encarregados de manter a ordem pública interna –
        mas quando nos aproximamos das minas, são as forças armadas que dominam
        a cena.
      </Paragraph>

      <Paragraph>
        Pouco importa se o ouro tem uma origem legal ou ilegal, se é extraído
        por empresas ou gangues. Quatro áreas no estado de Bolívar,{" "}
        <FileLink
          href={require("documents/GacetaOficial_40855.pdf")}
          format="pdf"
          size="13.3MB"
        >
          decretado em 2016
        </FileLink>{" "}
        como uma imensa zona de mineração e nomeada como{" "}
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
        (espanhol para “Arco Mineiro do Orinoco”), representam uma simbiose
        sombria de ambos os mundos.
      </Paragraph>

      <Paragraph>
        O que mais importa é o impacto que o Arco Minero cria na região. As
        quatro áreas se sobrepõem a muitas terras ambientais e indígenas
        legalmente protegidas, o que provavelmente levará à sua destruição. Os
        mineiros arriscam suas saúdes e vidas, já que as condições de trabalho
        são inseguras e as áreas de mineração são violentamente disputadas. Os
        danos ao meio ambiente não são levados em conta pelos enclaves de
        subsistência dos mineiros e as forças brutais que as controlam. Além
        disso, o ambiente não é considerado importante pelo governo que criou o
        quadro legal que sanciona todas as atividades de extração.
      </Paragraph>

      <Paragraph>
        Alexander Luzardo, ex-senador com doutorado em direito político e
        ambiental, esteve envolvido pessoalmente na legislação ambiental da
        Venezuela. Ele escreveu os padrões ambientais para a constituição atual,
        em vigor desde 1999. Com estes denominadores, ressaltou o quão
        importante é para a Venezuela proteger{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-2",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/pt/embed/?map_only=1&map_id=17467"
            }
          }}
        >
          regiões ambientalmente vitais
        </StoryMedia>. No entanto, em 2016, ele viu o Arco Minero fazer cair por
        terra a legislação que havia criado. “O Arco Minero é ilegal. Nega a
        existência e criação de áreas protegidas por decreto”, diz Luzardo em
        uma entrevista em um pequeno café no campus da Universidade Central da
        Venezuela (UCV), em Caracas, onde atualmente é professor.
      </Paragraph>

      <Quote author="Alexander Luzardo, ex-senador">
        Esta é a estrada mais fácil para a destruição ambiental na Venezuela. A
        grande contribuição da Venezuela para a destruição do planeta
      </Quote>

      <Paragraph>
        O docente tem uma previsão muito sombria para o país. “Esta é a estrada
        mais fácil para a destruição ambiental na Venezuela. A grande
        contribuição da Venezuela para a destruição do planeta”, diz Luzardo. O
        professor acrescenta que a Venezuela fez alguns progressos
        impressionantes em termos de proteção ambiental e teme que o Arco Minero
        desfaça tudo: “Este projeto é a pior resposta para a crise e a negação
        de todo a perspectiva ambiental”.
      </Paragraph>

      <Paragraph>
        Não se sabe muito sobre mineração em um país que construiu toda a sua
        economia sobre sua indústria nacionalizada de petróleo. Agora, o governo
        está explorando outro recurso finito, porque a Venezuela não só possui o
        maior estoque de petróleo do mundo, mas também afirma ter a segunda
        maior reserva de ouro. Se a Venezuela for capaz de certificar os
        depósitos, sem dúvida será uma novidade bem-vinda durante a hora mais
        sombria do país.
      </Paragraph>

      <Paragraph>
        O país já esteve sob turbulências financeiras e políticas, mas os atuais
        níveis de hiperinflação e escassez de produtos básicos estão
        direcionando a economia para bem fundo. O governo precisa de soluções
        concretas, daí o anúncio de que uma parte significativa do país será
        aberta para um novo motor de desenvolvimento econômico: mineração.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/Ir8qx/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Os bilhões de dólares gerados pelas explorações de petróleo e gás
        financiaram os programas sociais do presidente Chávez de 1999 até sua
        morte em 2013. Infelizmente, essas receitas secaram após o{" "}
        <ExternalLink
          href="https://www.nytimes.com/2017/05/06/world/americas/venezuela-unrest-protests.html"
          language="en"
        >
          autoenriquecimento das elites do país
        </ExternalLink>{" "}
        e a queda dos preços do petróleo após 2014.
      </Paragraph>

      <FeaturedText>
        Em uma última tentativa de injetar capital estrangeiro na economia
        quebrada, o Presidente Maduro abriu até doze por cento do território
        nacional para futuras operações de mineração em larga escala.
      </FeaturedText>

      <Paragraph>
        “É uma jogada desesperada do governo Maduro para conseguir dinheiro”,
        diz David Smilde, professor de sociologia da Universidade de Tulane e
        membro titular no Washington Office on Latin America. “Existe um perigo
        muito real que levará operações de mineração ecologicamente destrutivas
        em um território com{" "}
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
          incrível biodiversidade e populações indígenas protegidas
        </StoryMedia>.” Ele está convencido de que a Venezuela destruirá um
        recurso importante, em termos de bacias hidrográficas e turismo
        potencial, para ganhos de curto prazo.
      </Paragraph>

      <Quote author="David Smilde, sociology professor">
        Os problemas atuais da Venezuela têm menos a ver com o declínio do preço
        do petróleo e mais com políticas econômicas insustentáveis.
      </Quote>

      <Paragraph>
        Economias que se baseiam apenas no que está debaixo do solo não
        significam necessariamente problemas, financeiramente falando. “Na
        verdade, tenho uma visão um tanto diferente de muitos estudiosos e acho
        que uma economia rentista não é o problema básico, políticas ruins é que
        são”, diz Smilde. “Eu acho que os problemas atuais da Venezuela têm
        menos a ver com o declínio do preço do petróleo e mais com políticas
        econômicas insustentáveis. Lembre-se de que o{" "}
        <ExternalLink
          href="http://www.bbc.com/news/world-latin-america-26335287"
          language="en"
        >
          ciclo de protesto de 2014
        </ExternalLink>{" "}
        foi em parte motivado por escassez, inflação e desemprego, e que o
        petróleo era de quase US$ 100 por barril. O modelo já era insustentável,
        a queda nos preços do petróleo acabou apenas acelerando o declínio”.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/RGFvJ/1/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        Enquanto os credores internacionais tentam desesperadamente tomar de
        volta seu dinheiro da Venezuela, que está à beira da falência, há alguém
        que está feliz com o Arco Minero. É o presidente Maduro. Com um sorriso
        curioso sob seu característico bigode, ele mostra uma barra de ouro para
        a imprensa venezuelana. O ouro pertence a um dos primeiros lotes vindos
        do Arco Minero,{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-3",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/pt/embed/?map_only=1&map_id=17449"
            }
          }}
        >
          uma área não inferior a 112 mil quilômetros quadrados que faz
          fronteira com o lado sul do rio Orinoco
        </StoryMedia>, principal fonte de água para a Venezuela e o terceiro rio
        mais importante da América Latina.
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
        Em agosto de 2016, Maduro anunciou oficialmente: “<ExternalLink
          href="http://globovision.com/article/ministerios-presentaran-a-maduro-el-plan-de-inversiones-del-arco-minero"
          language="es"
        >
          O Arco Minero é agora uma realidade
        </ExternalLink>”. De acordo com o governo, 150 empresas de 35 países
        estavam dispostas a investir na mineração, mas após o grande anúncio,
        projetos concretos de mineração permanecem ausentes.
      </Paragraph>

      <Paragraph>
        Houve uma agenda midiática grande e até um novo Ministério da Mineração
        foi criado. Uma joint venture com a Endiama, uma empresa pública de
        mineração da Angola, foi{" "}
        <ExternalLink
          href="https://www.telesurtv.net/news/Venezuela-firma-acuerdo-con-empresa-de-diamantes-de-Angola-20170720-0055.html"
          language="es"
        >
          assinada para explorar diamentes
        </ExternalLink>{" "}
        e um{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/empresas-palestinas-y-autoridades-mineras-revisaron-acuerdos-para-explotacion-de-coltan/"
          language="es"
        >
          aperto de mão com o embaixador palestino
        </ExternalLink>, revelou que duas corporações palestinas querem explorar
        coltan. Os aliados usuais, a{" "}
        <ExternalLink
          href="https://www.telesurtv.net/news/Venezuela-y-China-firman-acuerdo-para-actividades-mineras-20170721-0060.html"
          language="es"
        >
          China
        </ExternalLink>{" "}
        e a{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/venezuela-establecio-con-rusia-lineas-de-investigacion-e-inversion-mineras/"
          language="es"
        >
          Rússia
        </ExternalLink>, querem um pedaço de bolo de minerais da Venezuela em
        seus pratos, principalmente para a gestão da dívida com ambos os países,
        que facilitou empréstimos. No total, a Venezuela tem uma dívida de US$
        150 bilhões para pagar a uma longa lista de credores.
      </Paragraph>

      <FeaturedText>
        Até agora, empresas reconhecidas no setor de mineração permanecem
        ausentes na Venezuela.
      </FeaturedText>

      <Paragraph>
        A Barrick Gold, maior empresa de mineração de ouro do mundo, respondeu
        às nossas perguntas explicando: “Enquanto a Barrick participou de uma
        revisão de projetos de mineração no país, a empresa não está buscando
        projetos ou investimentos na Venezuela”. Maduro, no entanto, afirmou ter{" "}
        <ExternalLink
          href="https://www.reuters.com/article/us-venezuela-mining/venezuela-says-signs-5-5-bln-mining-deals-with-companies-idUSKCN1112BR"
          language="en"
        >
          assinado um contrato com a Barrick Gold
        </ExternalLink>{" "}
        em agosto de 2016.
      </Paragraph>

      <Paragraph>
        Mais de um ano após os anúncios de Maduro, falar sobre quem realmente
        controla a mineração no país em crise continua sendo um tabu. “Por trás
        da mineração na Venezuela, sempre houve a opacidade de elementos
        militares",{" "}
        <StoryMedia
          media={{
            id: "video-3",
            type: "youtube",
            data: {
              id: "NQyPITnr8QE"
            }
          }}
        >
          diz Américo de Grazia
        </StoryMedia>, que pertence à oposição política e é deputado no
        parlamento deixado de lado pelo governo. De Grazia representa Bolívar, o
        estado onde a maioria das reservas de ouro estão escondidas. “A
        mineração [ilícita] foi criminalizada para a opinião pública, mas sua
        própria clandestinidade é permitida. Aqui, o operador máximo [os
        responsáveis] são as forças públicas, e o operador prático [o executor]
        é crime organizado”, diz ele.
      </Paragraph>

      <Paragraph>
        A Venezuela tem um número impressionante de generais –{" "}
        <ExternalLink
          href="https://www.nytimes.com/2017/08/08/world/americas/nicolas-maduro-venezuela-military.html"
          language="en"
        >
          cerca de 2 mil
        </ExternalLink>{" "}
        – e as forças armadas dominam o Arco Minero, o que é sublinhado por De
        Grazia e Luzardo, que argumentam que o domínio militar se estende para a
        maioria do setor de mineração. Eles extorquem as gangues que operam as
        minas ilegais e controlam as rotas de exportação. A mineração é uma
        máquina de dinheiro que lentamente está se tornando institucionalizada.
        No ano passado, foi criada a Companhia Anônima Militar de Indústrias
        Minerais, Petrolíferas e de Gás (Camimpeg){" "}
        <ExternalLink
          href="http://efectococuyo.com/economia/fanb-firme-con-la-logistica-de-seguridad-en-el-arcominero"
          language="es"
        >
          ao lado de uma “Zona Econômica Militar”
        </ExternalLink>. Militares ativos ou aposentados{" "}
        <ExternalLink
          href="https://transparencia.org.ve/project/informe-general-2016-2017/"
          language="es"
        >
          estão presentes em cerca de 30% das empresas estatais
        </ExternalLink>{" "}
        com conselhos de administração públicos. Sabendo que o Arco Minero será
        explorado por joint ventures nas quais as empresas estatais terão
        participação majoritária, é muito provável que os militares permaneçam
        no comando.
      </Paragraph>

      <Paragraph>
        De Grazia diz que os generais são frequentemente mudados, assim como o
        pessoal militar nos conselhos de empresas: “Todo militar que chega quer
        ser rico da noite para o dia, o que o torna mais cruel, mais violento e
        suas normas serão mais desumanas porque ele sabe que o caminho para
        enriquecer é este e que ele tem um ou dois meses, talvez um ano para o
        fazer”.
      </Paragraph>

      <FeaturedText>
        As gangues armadas pagam aos militares para continuar com as operações
        de mineração ilegal.
      </FeaturedText>

      <Paragraph>
        “Quando destruímos algumas atividades de mineração ilegais, os mineiros
        reclamaram porque eles já haviam pago às forças armadas”,{" "}
        <StoryMedia
          media={{
            id: "video-4",
            type: "youtube",
            data: {
              id: "aPtRA5nM_ow"
            }
          }}
        >
          diz Alcalá, o general aposentado que ocupou o comando das regiões
          mineiras
        </StoryMedia>. Ele menciona que muitos aviões exportam ilegalmente a
        maioria de ouro da Venezuela para as Ilhas do Caribe. Os militares estão
        envolvidos: “Eles colocam [o avião] fora do radar para que não se saiba
        onde estão”.
      </Paragraph>

      <Paragraph>
        Alcalá confirma que o exército recebe benefícios significativos da
        mineração ilegal, enquanto as gangues que operam as minas usam violência
        para manter o controle. “Há um ano houve massacres executados pelo
        exército em algumas áreas porque há ouro”.
      </Paragraph>

      <Paragraph>
        Uma análise dos relatórios de imprensa do Observatório de Violência e
        Crime no estado de Bolívar mostra que, nos primeiros dez meses de 2017,
        ao menos 1.415 pessoas foram assassinadas na região, muitas delas em
        áreas de mineração. Uma estimativa precisa das pessoas mortas em
        confrontos entre gangues violentas e tiroteios com o exército é
        impossível de obter, já que não é incomum que os mineiros migrantes, que
        não são da própria região, acabem em sepulturas clandestinas após serem
        assassinados em áreas remotas.
      </Paragraph>

      <Paragraph>
        Embora o conflito mineiro descontrolado da Venezuela não seja nada novo,
        a{" "}
        <ExternalLink
          language="es"
          href="http://www.correodelcaroni.com/index.php/sucesos/violencia-minera-en-guayana/item/54546-vecinos-de-tumeremo-se-mantienen-asediados-por-control-de-bandas-criminales-y-militarizacion"
        >
          verdadeira batalha pelo acesso aos recursos minerais
        </ExternalLink>{" "}
        parece apenas ter começado. O roubo legalizado não só afeta diretamente
        a Venezuela e suas áreas fronteiriças, mas também a demanda global por
        minerais e as numerosas redes internacionais de traficantes de recursos
        no exterior. Portanto, o dano causado a um dos ecossistemas mais
        importantes, a Amazônia, faz do Arco Minero uma questão de interesse
        internacional.
      </Paragraph>
    </Container>
  </article>
);
