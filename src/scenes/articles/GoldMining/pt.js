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
        Mal-estar no berço da mineração de ouro da Venezuela | Explorando o Arco
        Mineiro
      </title>
    </Helmet>
    <Container>
      <Title as="h2">
        Mal-estar no berço da mineração de ouro da Venezuela
      </Title>

      <Paragraph>
        A Venezuela não tem um histórico de mineração elaborado como seus
        vizinhos Colômbia e Brasil, mas, se existe um lugar no país que
        tradicionalmente respira mineração, é El Callao. A cara da vila no
        estado de Bolívar mudou para sempre quando o ouro foi descoberto lá em
        1853, até se tornar o{" "}
        <ExternalLink
          href="https://www.britannica.com/place/El-Callao"
          language="en"
        >
          principal produtor de ouro do mundo em 1885
        </ExternalLink>. Várias companhias estrangeiras operaram minas na área,
        mas é a Minerven, uma empresa criada em 1970 e nacionalizada quatro anos
        depois, que explorou a maior parte do ouro proveniente de El Callao.
      </Paragraph>

      <Paragraph>
        Mineiros locais dizem que trabalhar para Minerven costumava significar
        status e que os empregados usavam uniformes de empresa com honra, mas as
        coisas mudaram nos últimos anos. A Minerven entrou em decadência.{" "}
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              src: require("photos/El Callao-55.jpg")
            }
          }}
        >
          As plantas de produção foram desativadas
        </StoryMedia>{" "}
        e os objetivos de produção anual não são alcançados, de longe. Enquanto
        isso, muitos grupos armados começaram a tomar as minas maiores que
        cercam a vila. Cerca de um ano atrás, o exército venezuelano aumentou
        sua presença na área – para seu próprio ganho, muitos dizem – e, desde
        então, não parou de lutar com gangues e matar seus membros.
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
          A mineração em El Callao pertence ao projeto Arco Minero
        </StoryMedia>. Cerca de quatro empresas de capital misto afirmam fazer
        parte dele, mas uma visita a El Callao é mais do que suficiente para
        entender que mineração ilegal e legal vão de mãos dadas.
      </Paragraph>

      <Paragraph>
        Não somente a maior parte da população está envolvida direta ou
        indiretamente na extração rudimentar de ouro, mas a mineração e a vida
        da vila estão também estreitamente vinculadas. Onde quer que esteja em
        El Callao, você provavelmente não terá que caminhar mais de um minuto
        para encontrar um comerciante de ouro e encontrar uma padaria ou um
        supermercado é uma tarefa bem mais difícil.
      </Paragraph>

      <Paragraph>
        À noite, quando a maioria das lojas fecha e a maioria dos mineiros se
        dedica à sua atividade favorita – beber – você verá pessoas varrendo o
        chão em frente às{" "}
        <StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              src: require("photos/IMG_4420.jpg")
            }
          }}
        >
          lojas de ouro
        </StoryMedia>, não apenas para limpar, mas para encontrar ouro. Flocos
        de ouro podem ser acidentalmente derrubados por um vendedor descuidado e
        pequenas raspas de ouro se perdem enquanto se queima o amálgama de
        mercúrio, que é uma atividade que se prefere fazer na frente da loja
        para que as fumaças tóxicas de mercúrio não permaneçam nas áreas
        internas.
      </Paragraph>

      <Paragraph>
        Em 2017, o{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/motor-minero-cierra-2017-victorioso-con-la-entrega-de-85-toneladas-de-oro-al-bcv/"
          language="es"
        >
          Banco Central da Venezuela (BCV) recebeu 8,5 toneladas de ouro
        </ExternalLink>, todas da Minerven. “El Callao está sustentando a
        Venezuela”, comenta o proprietário de uma loja de penhores de ouro na
        praça central da vila. No entanto, de acordo com vários mineiros e
        funcionários da Minerven entrevistados para esta reportagem, o ouro não
        vem originalmente de Minerven, mas de minas ilegais de pequena escala.
      </Paragraph>

      <Quote author="fonte da Minerven">
        Estamos autorizados a comprar de 17 ou 18 associações de produtores
        artesanais de ouro, mas sabemos que eles compram de mineiros ilegais
      </Quote>

      <Paragraph>
        “Não posso afirmar que a Minerven compra de minas ilegais, porque no
        papel não é assim”, diz uma fonte da Minerven. “Estamos autorizados a
        comprar de 17 ou 18 associações de produtores artesanais de ouro, mas
        sabemos que eles compram de mineiros ilegais. É assim que funciona
        agora. Todos os dias pessoas comuns nos buscam para fazer negócios
        conosco e se tornarem legais”.
      </Paragraph>

      <Paragraph>
        Os mineiros explicam que apenas uma pequena parcela da produção de ouro
        da Venezuela termina no BCV. A maior parte é contrabandeada pelo
        exército e pelo crime organizado. “Oito mil quilos não são nada”, diz o
        general aposentado Clíver Alcalá Cordones. “Ele vai para Aruba e
        Curaçao”. Cerca de 80 por cento do ouro da Venezuela deixa o país
        ilegalmente por aviões que transportam contrabando, de acordo com
        Alcalá.
      </Paragraph>

      <Paragraph>
        Desde o século XIX, várias empresas internacionais da França, Reino
        Unido e Rússia entraram na região para minerar ouro dos ricos veios que
        não só cercam a vila, mas correm bem debaixo dela.{" "}
        <StoryMedia
          media={{
            id: "image-4",
            type: "image",
            data: {
              src: require("photos/El Callao-57.jpg")
            }
          }}
        >
          A vizinhança ao redor do centro lentamente se transforma em minas
        </StoryMedia>.
      </Paragraph>

      <Paragraph>
        Não é incomum que uma casa tenha alguns moinhos de processamento no
        quintal próximo a vários buracos no chão.{" "}
        <StoryMedia
          media={{
            id: "image-5",
            type: "image",
            data: {
              src: require("photos/El Callao-22.jpg")
            }
          }}
        >
          Estes buracos
        </StoryMedia>{" "}
        não devem ser confundidos com um sistema ruim de esgoto – são túneis que
        levam a várias galerias de mineração horizontais.
      </Paragraph>

      <Paragraph>
        “Confrontos já vêm ocorrendo há dois anos porque há muitas zonas de
        mineração aqui”, diz um mineiro local de El Callao. “As zonas de
        mineração são grandes, são vizinhanças com mineração. Se uma comunidade
        tem muito ouro, outra quer entrar nela. Não só para trabalhar, mas
        também para roubar com armas em suas mãos e para se livrar das pessoas
        que têm o ouro que querem tomar”.
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
          As vilas se tornam minas, e as minas se tornam vilas
        </StoryMedia>. As áreas de mineração em torno de El Callao são chamadas
        de Colômbia, Peru e Chile, juntamente com outros nomes que foram dados
        por empresas de mineração estrangeiras presentes no passado. No momento,
        estas minas são trabalhadas por mineiros ilegais de pequena escala. Eles
        operam sob pressão das gangues locais que colaboram com o exército.
        Enquanto isso, intrusos desconhecidos que lutaram há anos sobre as minas
        de ouro já mancharam El Callao com sangue.
      </Paragraph>

      <Paragraph>
        “Estas gangues são chamadas de <em>bases</em> aqui no município. Antes
        havia três gangues, agora há apenas uma [no comando]”, explica o mineiro
        de El Callao. Ainda assim, várias áreas estão repletas de reminiscências
        de antigas gangues. “Pequenas bases ainda estão ativas entre as
        pessoas”. De acordo com o mineiro, os de El Perú são os mais horríveis.
        Confrontos violentos ocorrem com frequência. Em setembro, antes da nossa
        visita a El Perú – em um setor sob o comando de um criminoso conhecido
        como “el Toto” –{" "}
        <ExternalLink
          href="http://www.eluniversal.com/noticias/sucesos/mueren-personas-durante-incursion-del-ejercito-mina-bolivar_669537"
          language="es"
        >
          oito pessoas morreram
        </ExternalLink>{" "}
        em confronto com o exército.
      </Paragraph>

      <Paragraph>
        Nossa caminhonete pick-up é conduzida pelo pessoal da Minerven e deixa
        El Callao para visitar as minas, não as controladas pela Minerven, mas
        as{" "}
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
          ilegais ao redor da vila
        </StoryMedia>. Aqui, plantas de extração de minerais baseadas no{" "}
        <FileLink
          href={require("documents/GacetaOficial_40960.pdf")}
          format="pdf"
          size="10.5MB"
        >
          uso proibido de mercúrio
        </FileLink>{" "}
        produzem ouro para vender à empresa estatal.
      </Paragraph>

      <Paragraph>
        “Venha conosco”, grita nosso motorista a um comandante local do
        exército, que já está nos esperando em um jipe ​​preto. Ele coloca um
        soldado armado na parte de trás da nossa caminhonete e nos acompanha com
        seu próprio veículo. Passamos vários pontos de controle militar antes de
        entrar em El Perú. A área é completamente militarizada, mas o perigo vem
        dos topos das colinas de onde as gangues podem descer para dominar as
        minas. Este perigo à espreita tornou-se evidente após{" "}
        <ExternalLink
          href="http://www.eluniversal.com/noticias/sucesos/guerra-entre-bandas-sur-bolivar-dejo-seis-muertos_674893"
          language="es"
        >
          seis moradores locais serem mortos
        </ExternalLink>{" "}
        em um tiroteio de gangues na noite seguinte à nossa visita.
      </Paragraph>

      <Paragraph>
        “Se você se comportar bem, nada acontecerá com você”. Um mineiro, que
        opera uma pequena usina de processamento de ouro, explica que uma
        “vacina” – uma taxa de extorsão de quatro ou cinco gramas de ouro por
        mês para cada usina – é paga para uma das gangues. Com uma expressão
        calma no rosto, ele acrescenta: “Senão, você vai subir [para as colinas]
        e eles vão ligar a motosserra”. Histórias de terror sobre valas comuns e
        desmembramento de corpos são recorrentes. As gangues são conhecidas por
        chegarem à vila e desaparecerem com pessoas nas colinas circundantes.
      </Paragraph>

      <FeaturedText>
        O pessoal da Minerven diz que mais de 30 mil mineiros trabalham nas
        veias douradas de El Callao e áreas próximas.
      </FeaturedText>

      <Paragraph>
        Muitos deles são trabalhadores migrantes que foram para a região como
        resultado da crise e da falta de oportunidades de trabalho em outros
        locais do país. Um destes trabalhadores{" "}
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "6L0blKDiaS4"
            }
          }}
        >
          sai rastejando de um túnel improvisado, seguido por seu sobrinho de 15
          anos de idade
        </StoryMedia>. “Se eu não trabalhar nas minas, não tenho como manter
        minha família”, diz o ex-carpinteiro.
      </Paragraph>

      <Paragraph>
        Perto dele descansa Minorca Maurera, uma mãe solteira de 23 anos que
        trabalhava em uma padaria antes de chegar a El Callao. “O salário mínimo
        simplesmente não é o suficiente para mim. Sou mãe solteira de três
        filhos. Eu me demiti [da padaria] por causa do salário baixo e cheguei a
        este lugar. É um pouco difícil, mas tenho conseguido ir muito bem. De
        forma independente, agora posso manter meus filhos".
      </Paragraph>

      <Paragraph>
        Sujos, os bairros parecidos com favelas de pequenos barracos dispersos e
        improvisados de madeira de apenas um telhado ondulado fino são ocupados
        por migrantes mineiros, mas também por nativos do El Callao. Mais de um
        século e meio da extração de ouro deixou a população local tudo, menos
        ricos, o que até faz com que até um chavista incondicional seja
        cauteloso com o Arco Minero.
      </Paragraph>

      <Quote author="Darwin Lizardi, coordenador local do partido do governo">
        Na prática, o Arco Minero tem funcionado para encobrir muitas coisas
      </Quote>

      <Paragraph>
        “Na prática, o Arco Minero tem funcionado para encobrir muitas coisas”,
        diz Darwin Lizardi Tabor. O jovem de 28 anos é o coordenador local da
        filial juvenil do Partido Socialista Unido da Venezuela (PSUV), o
        partido do governo, e usava um boné vermelho da Minerven quando nos
        encontramos. “O Arco Minero como tal não funcionou, cara. Eu te digo que
        sou um chavista revolucionário, mas você precisa dizer as coisas como
        elas são. Isso aqui é camuflagem. Não sei por quê. Porque, no final,
        está nos machucando aos mineiros e à vila”.
      </Paragraph>

      <Paragraph>
        Lizardi é um nativo orgulhoso de El Callao, mas os tempos mudaram. Ele
        explica que sua mãe cresceu em tempos mais tranquilos. “Era quando você
        podia deixar a porta da sua casa aberta a noite toda, ninguém entrava”.
        A mãe de Lizardi, de 66 anos, agora considera deixar o lugar que ambos
        carregam no coração.
      </Paragraph>

      <Paragraph>
        A violência e a pobreza fazem de El Callao um lugar difícil para se
        viver. “O mineiro ainda é o cara sujo que caminha na rua. Ele ganha 300
        mil bolívares, bebe uma cerveja e, no dia seguinte, não tem nada e
        precisa encontrar{" "}
        <StoryMedia
          media={{
            id: "image-6",
            type: "image",
            data: {
              src: require("photos/IMG_4490.jpg")
            }
          }}
        >
          0,3 ou 0,4 gramas de ouro
        </StoryMedia>{" "}
        para levar comida de volta para sua casa. Um mineiro não viveria assim
        se o Arco Minero realmente estivesse funcionando”.
      </Paragraph>

      <Paragraph>
        Continuamos a falar em um bar fechado para pessoas de fora, já que
        mineiros e álcool podem ser uma combinação muito explosiva. Lizardi pede
        novas cervejas enquanto continua seu discurso sobre a falta de
        infraestrutura e medicamentos do Estado, enquanto os habitantes locais
        entregam seu ouro ao governo. "Graças ao mineiro, aquele que{" "}
        <StoryMedia
          media={{
            id: "video-2",
            type: "youtube",
            data: {
              id: "ogK2c9iuqZA"
            }
          }}
        >
          desce por um túnel de 100-120 metros
        </StoryMedia>
        , graças a este mineiro, o estado tem quatro toneladas de ouro".
      </Paragraph>

      <Paragraph>
        O Arco Minero recebeu muitas críticas na imprensa venezuelana,
        principalmente devido ao seu futuro impacto ambiental, envolvimento de
        gangues e sua presença em territórios indígenas. Em outubro, o
        Ministério da Informação do país foi ao contra-ataque e publicou um
        artigo no qual{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/criminalizacion-mediatica-deforma-la-verdad-del-arco-minero-del-orinoco/"
          language="es"
        >
          acusa a imprensa de criminalizar os mineiros de pequena escala
        </ExternalLink>{" "}
        e ignorar o fato de que 250 mil pessoas dependem direta ou indiretamente
        do Arco Minero.
      </Paragraph>

      <FeaturedText>
        Em El Callao, onde os mineiros começam a ganhar seu próprio dinheiro
        ainda jovens, os benefícios do Arco Minero são difíceis de se perceber.
      </FeaturedText>

      <Paragraph>
        “Todo o ouro seria investido em trabalhos sociais no município de El
        Callao e agora, nem mesmo uma ambulância chegou”, explica Lizardi, que
        diz que o governo prometeu muito ao povo de El Callao. “A Minerven já
        tem o dinheiro do estado para comprar o ouro dos pequenos mineiros. O
        que a Minerven faz na prática é pegar o ouro e levá-lo para o Banco
        Central da Venezuela. Eles não estão assumindo seu papel como uma
        empresa de mineração porque todas as suas plantas estão interrompidas”.
      </Paragraph>

      <Paragraph>
        Ter sua renda determinada pela sorte e trabalho duro em vez de apenas
        horas de trabalho é parte integrante da cultura mineira. “No momento,
        ninguém recebe um salário. Você trabalha para obter o ouro e o dinheiro
        é seu”, diz Eduardo Gutiérrez, um homem de 43 anos de idade de El Callao
        que trabalha em uma das{" "}
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
          usinas de processamento em El Perú
        </StoryMedia>.
      </Paragraph>

      <Paragraph>
        Gutiérrez está satisfeito com o preço que a empresa estatal Minerven
        paga pelo seu ouro e espera que o projeto Arco Minero lhe envie mais
        recursos e equipamentos, mas ele ainda não possui um ambiente de
        trabalho seguro. Gutiérrez toca{" "}
        <StoryMedia
          media={{
            id: "image-7",
            type: "image",
            data: { src: require("photos/IMG_4489.jpg") }
          }}
        >
          água misturada com mercúrio
        </StoryMedia>{" "}
        com as mãos nuas enquanto ele arranha uma massa de amálgama de ouro de
        um prato. Ele então aquece o resíduo com um queimador de gás para isolar
        o ouro, mas não faz nenhum esforço para cobrir o rosto da fumaça tóxica
        de mercúrio.
      </Paragraph>

      <FeaturedText>
        Vários cientistas têm alertado sobre a poluição por mercúrio em El
        Callao, que causa{" "}
        <FileLink
          href={require("documents/RedAra_Contaminacion_mercurio_Guayana_Venezoelana.pdf")}
          format="pdf"
          size="4.0MB"
        >
          problemas neurológicos para os mineiros
        </FileLink>, além de levar a casos de{" "}
        <ExternalLink
          href="http://www.autismoava.org/noticias/el-veneno-silencioso-de-el-callao"
          language="es"
        >
          autismo em crianças pequenas
        </ExternalLink>.
      </FeaturedText>

      <Paragraph>
        Distúrbios neurológicos, problemas nos rins, pulmões e pele são as
        consequências mais comuns para a saúde da contaminação por mercúrio, diz
        Marianella Herrera, diretora do Observatório Venezuelano da Saúde em
        Caracas. “Um problema importante é a exposição ao mercúrio para mulheres
        grávidas nos primeiros estágios da vida. Além disso, os pesquisadores
        ligaram a exposição aos metais pesados, como o mercúrio, ao autismo”.
      </Paragraph>

      <Paragraph>
        Um estudo realizado em várias áreas de mineração no estado de Bolívar
        descobriu que apenas{" "}
        <ExternalLink
          href="http://www.spda.org.pe/wpfb-file/la-realidad-de-la-mineria-ilegal-en-paises-amazonicos-spda-pdf/"
          language="es"
        >
          32 por cento das crianças tinham níveis de mercúrio abaixo do limite
          de segurança
        </ExternalLink>{" "}
        em seu sangue.
      </Paragraph>

      <Quote author="Darwin Lizardi, coordenador local do partido do governo">
        Todo o ouro que chega na Minerven é legal, no papel, mesmo que seja
        ilegal
      </Quote>

      <Paragraph>
        Problemas de saúde graves, sangrentas batalhas de gangues e áreas
        controladas pelos militares. A mineração ilegal de ouro em El Callao tem
        contribuído para circunstâncias inseguras e pouco saudáveis, mas o Arco
        Minero tem uma participação em tudo isso. “Todo o ouro que chega na
        Minerven é legal, no papel, mesmo que seja ilegal”, explica Lizardi.
      </Paragraph>

      <Paragraph>
        <ExternalLink
          language="es"
          href="http://www.correodelcaroni.com/index.php/sucesos/violencia-minera-en-guayana/item/54451-bandas-armadas-atemorizan-a-vecinos-y-comercio-de-tumeremo-en-retaliacion-a-operativos-policiales"
        >
          O setor foi tomado pelas gangues e pelo exército
        </ExternalLink>. O ouro extraído ilegalmente é comprado por empresas
        legais de “mineração” que, na verdade, não estão extraindo o ouro, o que
        essencialmente significa que elas funcionam como uma grande loja de
        penhores de ouro. “Aqui em El Callao temos muito ouro, mas não temos as
        máquinas nem os recursos necessários para realmente poder [extrair
        tudo]”, se orgulha Darwin.
      </Paragraph>

      <Paragraph>
        A obscura simbiose entre mineração legal e ilegal é quase óbvia. Do
        outro lado da vila, somos levados a uma mina controlada por uma gangue
        chamada “Nacupay”. Antes de entrar na área, somos informados para “não
        tirar fotos de homens armados”, nem de máquinas de mineração que
        utilizam mercúrio. Pouco antes da entrada, um outdoor diz:{" "}
        <StoryMedia
          media={{
            id: "image-8",
            type: "image",
            data: {
              src: require("photos/El Callao-78.jpg")
            }
          }}
        >
          MunSol – “Empresa de mineração aliada à pátria bolivariana no{" "}
          <em>Arco Minero del Orinoco</em>”
        </StoryMedia>. Atrás do outdoor, encontramos dezenas de mineiros
        informais que trabalham em poços de areia ao ar livre.
      </Paragraph>

      <Paragraph>
        Só podemos tirar fotos de{" "}
        <StoryMedia
          media={{
            id: "video-5",
            type: "youtube",
            data: {
              id: "HFXKNxumg4I"
            }
          }}
        >
          mineiros que trabalham com as placas de lavagem, características para
          operações de mineração artesanal
        </StoryMedia>. Eles não querem que mostremos nem documentemos as
        instalações maiores. Ainda podemos fotografar os acampamentos em que
        vivem os mineiros, ao lado dos poços de mineração cheios de água parada
        e contaminada.
      </Paragraph>

      <Paragraph>
        A situação em El Callao não é uma exceção. Cerca de 91 por cento do ouro
        extraído na Venezuela é ilegal, de acordo com uma{" "}
        <FileLink
          href={require("documents/GIATOC-OC_Illegally-Mined-Gold-in-Latin-America.pdf")}
          format="pdf"
          size="10.8MB"
        >
          pesquisa da Iniciativa Global contra o Crime Organizado Transnacional
        </FileLink>. Pequenos lotes de ouro são transformados em joias e depois
        contrabandeados para, por exemplo, as Ilhas do Caribe. Assim como em
        diferentes partes da Venezuela, o exército corrupto transporta lotes
        maiores para rotas costeiras, Colômbia e Brasil.
      </Paragraph>

      <Paragraph>
        Apenas uma pequena parcela do ouro termina nas mãos do estado. Isso
        mostra, como Lizardi mencionou anteriormente, que o Arco Minero até
        agora funciona como uma fachada. “Lembro-me quando o Comandante Chávez
        falou sobre o Arco Minero [em 2011] e o estado de Bolívar deveria se
        tornar uma potência na Venezuela. Não dependeríamos do petróleo!”, diz o
        jovem, que ficou desiludido com o Arco Minero. “Aqui, coisas estão
        acontecendo e o Arco Minero tem funcionado para encobrir a corrupção
        dentro do governo”.
      </Paragraph>
    </Container>
  </article>
);
