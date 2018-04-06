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
      <title>Novos visitantes no país do coltan | Explorando o Arco Mineiro</title>
    </Helmet>
    <Container>
      <Title as="h2">Novos visitantes no país do coltan</Title>
      <Paragraph>
        <strong>Puerto Ayacucho</strong>. São seis da manhã e o calor já é
        familiar, mesmo antes de o sol nascer. Yonnier Rivera, o nosso motorista
        cubano, chega na hora com sua caminhonete pick-up branca e discute a
        logística do dia, enquanto esperamos por nossos outros dois companheiros
        de viagem: Noraima Ángel, coordenadora de Direitos Humanos do Vicariato
        de Puerto Ayacucho, e Pedro Ortiz, um membro indígena da Red de
        Defensores y Defensoras indígenas, uma rede de proteção indígena
        local.{" "}
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "QmOJt-Idd2Q"
            }
          }}
        >
          O plano é visitar duas pequenas comunidades indígenas
        </StoryMedia>{" "}
        chamadas Agua Mena e Tierra Blanca, no estado vizinho de Bolívar. Os
        povos indígenas vivem na proximidade do rio Parguaza que abre caminho
        pelo – o que aprendemos ser – o “país do coltan”.
      </Paragraph>
      <Paragraph>
        O Parguaza é uma das centenas de afluentes do Orinoco, o quarto rio mais
        volumoso do mundo. A região, também chamada Parguaza, tem sido alvo de
        projetos de mineração ilegais e legais. As terras são habitadas pelos
        povos indígenas Piaroa e Penare, que tradicionalmente dependem da
        agricultura e da pesca.
      </Paragraph>
      <Paragraph>
        Nossa jornada é interrompida várias vezes pela Guarda Nacional da
        Venezuela. Em uma ocasião, somos obrigados a abrir nossas malas para os
        homens armados. Carros, caminhões e ônibus que passam por esta região
        são submetidos a verificações frequentes e são interrompidos, em algumas
        ocasiões, a cada 20 quilômetros. Os soldados verificam pertences
        pessoais, assentos de carro, e até mesmo o interior das portas dos
        carros, enquanto procuram por “contrabando”.
      </Paragraph>
      <FeaturedText>
        Produtos escassos, tais como alimentos, medicamentos, pneus de carro, e
        até mesmo combustível são muitas vezes apreendidos.
      </FeaturedText>
      <Paragraph>
        Estas humilhações diárias a que os venezuelanos na estrada são
        submetidos não nos dizem muito respeito já que estamos mais preocupados
        com a presença das guerrilhas na região. À medida que entramos estado de
        Bolívar, deixando o Amazonas ao norte, nosso veículo faz lentamente uma
        curva para o leste entrando região Parguaza. Enquanto dirigimos ao longo
        de uma área chamada Los Gallitos, Ortiz, da rede de defesa local, nos
        diz que este é o lugar de onde o ELN obtém seu coltan.
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
          Nossa primeira parada é Tierra Blanca
        </StoryMedia>. Esperávamos encontrar o cacique, a autoridade indígena na
        região, mas em vez disso fomos recebidos pelo capitão de Tierra Blanca.
        Descobrimos mais tarde que o Cacique viajou para Caracas para uma
        reunião no Ministério de Minas.
      </Paragraph>
      <Paragraph>
        Recebemos poucas respostas porque o cacique não autorizou o seu capitão
        a falar conosco.{" "}
        <StoryMedia
          media={{
            id: "video-2",
            type: "youtube",
            data: { id: "b66GospDYoY" }
          }}
        >
          Os povos indígenas nos levam para o rio Parguaza
        </StoryMedia>. Crianças de comunidades indígenas locais alegremente se
        jogam na água e remam uma canoa pela lento fluxo do rio. O som de golpes
        de roupa molhada em pedras é feito pelas mulheres indígenas enquanto
        elas as lavam nas margens do rio. Poucos homens indígenas são vistos, já
        que caçam ou trabalham a terra longe da aldeia durante o dia. O
        equilíbrio entre a natureza e a civilização ainda não está
        irreversivelmente perturbado, mas novos atores entraram em cena.
      </Paragraph>
      <FeaturedText>
        Pelas entrevistas com os povos indígenas da região de Parguaza
        anteriores à nossa visita de campo, torna-se claro que a guerrilha
        colombiana aumentou a sua presença nos territórios há cerca de três
        anos.
      </FeaturedText>
      <Paragraph>
        Na comunidade de Agua Mena, próxima e semelhante a Tierra Blanca, os
        habitantes estão envolvidos na mineração artesanal de coltan. Pedras são
        recolhida por um intermediário indígena, que posteriormente as vende
        para a guerrilha. O preço é de 80 mil a 100 mil bolívares por quilo, o
        que é menos de um dólar. É uma fração do que é oferecido em mercados
        internacionais de coltan, mas nenhum dos indígenas entrevistados estava
        ciente dos preços usuais para o coltan.
      </Paragraph>
      <Quote author="Juan López, indígena de Agua Mena">
        Nós somos os destruidores da floresta
      </Quote>
      <Paragraph>
        Os poucos dólares pagos às comunidades indígenas para abrir a terra e
        extrair minerais por ganhos financeiros contrasta com suas crenças
        ancestrais. “Éramos reconhecidos como protetores da selva. Isso não é o
        que somos mais. Nós somos os destruidores da floresta”, diz Juan López,
        um indígena que atualmente trabalha como advogado para o vicariato em
        Puerto Ayacucho, Amazonas.
      </Paragraph>
      <Paragraph>
        Os territórios ricos em coltan não são apenas atravessados por
        guerrilheiros colombianos. O decreto do Arco Minero permitiu a formação
        de novas empresas que foram apressadamente criadas e compartilham do
        mesmo motivo que os guerrilheiros armados que operam rotas de exportação
        para a Colômbia.
      </Paragraph>
      <Paragraph>
        No final de 2016, a Empresa Mixta Minera Ecosocialista Parguaza foi
        criado com o objetivo inicial de produzir{" "}
        <ExternalLink
          language="es"
          href="http://avn.info.ve/contenido/20-toneladas-colt%C3%A1n-al-mes-prev%C3%A9-producir-empresa-mixta-parguaza"
        >
          20 toneladas por mês, para ser aumentado a até 50 toneladas mensais
        </ExternalLink>. A empresa é uma joint venture, de propriedade da
        companhia de mineração pública Corporación Venezolana de Minería (CVM) e
        da Corporación Faoz. A <em>joint venture</em> recebeu uma concessão de
        10.201 hectares que contêm, além de coltan, ouro, diamantes, quartzo e
        outros minerais. A empresa está construindo uma mina de coltan
        localizado perto da comunidade de Agua Mena.
      </Paragraph>
      <Paragraph>
        É quase meio-dia quando visitamos Agua Mena. Depois de falar com toda a
        comunidade, ainda há algum tempo para nos apresentarmos no{" "}
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              src: require("photos/Paraguaza-2.jpg")
            }
          }}
        >
          portão da Empresa Mixta Minera Ecosocialista Parguaza
        </StoryMedia>, que é protegido 24 horas por dia pela Guarda Nacional.
        Soldados do Exército também estão presentes no terreno.
      </Paragraph>
      <Paragraph>
        Nos apresentamos em torno das 13 horas e perguntamos sobre investimentos
        sociais nas comunidades indígenas próximas. “Você precisa de uma
        permissão do Ministério de Minas em Caracas para falar conosco”, nos
        responde Luisa Herminia Alcalá Otero, a representante da empresa que nos
        encontra e nos permite entrar no terreno da companhia.
      </Paragraph>

      <Paragraph>
        Logo quando pensamos que seríamos expulsos aos empurrões por fazer
        perguntas, parece que a nossa visita seria prolongada.
      </Paragraph>

      <FeaturedText>
       A Guarda Nacional não nos permite ir embora Depois de algumas horas de
       espera enquanto nossos documentos são inspecionados, entendemos que fomos
       detidos.
      </FeaturedText>

      <Paragraph>
        Já é o fim da tarde, está quase anoitecendo, mas não sabemos ainda
        quanto tempo mais estaremos sob custódia. Os trabalhadores fazem fila
        para pegar o ônibus que os levará de volta para suas comunidades. Antes
        que eles possam sair, suas mochilas são verificadas pela Guarda
        Nacional. Enquanto estamos rodeados por guardas armados, podemos
        observar os trabalhadores vestindo roupas esfarrapadas, réplicas de
        camisas de futebol e botas enlameadas. Muitos indígenas nos veem de
        relance enquanto esperam para ter suas mochilas inspecionadas.
      </Paragraph>
      <Paragraph>
        Os trabalhadores não parecem muito intimidados pelos rifles de assalto
        da Guarda Nacional e não está claro se os homens armados estão presentes
        para evitar que os trabalhadores roubem a empresa ou para proteger o
        projeto contra os guerrilheiros. Um Guarda Nacional que trabalha no
        campo de mineração comenta que há “respeito mútuo” quando se deparam com
        a guerrilha. “Eles não mexem com a gente, e nós não mexemos com eles.”
        Enquanto isso, somos levados para o quartel da Guarda Nacional e
        trancados com guardas armados em frente da porta.
      </Paragraph>

      <Paragraph>
        À uma da madrugada ainda não está claro o que vai acontecer conosco
        enquanto somos interrogados. Não estamos autorizados a fazer quaisquer
        telefonemas, mas somos informados de que estamos sob investigação. Nossa
        detenção foi completamente ilegal e improvisada. Não só fomos trancados
        em uma empresa de mineração, mas nós também não tivemos o direito de
        fazer um telefonema ou falar com um advogado. Entre outras omissões,
        também foram interrogados por um Guarda Nacional que não tinha
        autoridade para fazê-lo. De acordo com a Guarda Nacional, sua suspeita é
        ou de que sejamos um espião estrangeiro, ou um infiltrado da oposição ao
        governo.
      </Paragraph>
      <Paragraph>
        Enquanto a incerteza cresce entre nós, podemos dizer a partir de
        pequenas interações que os jovens da Guarda Nacional têm dificuldades em
        entender a nossa detenção, mas obedecem às ordens da empresa. Às três da
        madrugada somos ordenados a ficar prontos para o transporte. Duas
        caminhonetes pick-up levam nós quatro, vigiada por guardas armados, para
        Caicara del Orinoco, sete horas para além do país do coltan.
      </Paragraph>
      <Paragraph>
        Surpreendentemente, somos libertados 24 horas depois de nossa detenção.
        Dois investigadores da contrainteligência militar em Caicara del Orinoco
        nos sujeitam a um interrogatório, mas parece não haver nenhum alarme
        aceso. Chama a nossa atenção que a Igreja, a Embaixada da Holanda, a
        mídia e a sociedade civil fizeram campanha para nossa libertação.
        Surpreendidos pelo fato de que estávamos apenas apreendidos dentro de
        uma empresa de mineração, enquanto nós só pensávamos que a guerrilha
        poderia nos dar problemas, é difícil imaginar como a empresa estabelece
        um bom relacionamento com seus vizinhos indígenas.
      </Paragraph>
      <Paragraph>
        A Empresa Mixta Minera Ecosocialista Parguaza não é a única{" "}
        <em>joint venture</em> que opera na área. O mesmo município, Cedeño,
        conta com duas outras empresas recém-formadas. Oro Azul, uma{" "}
        <em>joint venture</em> entre a CVM e a Supracal, recebeu uma concessão
        com 8.159 hectares, e a Empresa Mixta Minera Metales del Sur, que tem
        participação da canadense Energold.
      </Paragraph>
      <Paragraph>
        Até agora, as comunidades indígenas da região receberam muitas promessas
        das novas companhias: novas habitações, estradas, eletricidade e
        caminhonetes pick-up. Profissionais de saúde também foram enviados para
        as comunidades atormentadas pela malária. Vários indígenas são
        temporariamente contratados pelo salário mínimo, o que{" "}
        <ExternalLink
          language="es"
          href="http://www.finanzasdigital.com/2017/11/cendas-canasta-alimentaria-familiar-octubre-2017-se-ubico-3-918-34125-bolivares-461/"
        >
          não é suficiente para alimentar uma família
        </ExternalLink>{" "}
        na Venezuela e tem flutuado com frequência. Atualmente, ele é de cerca
        de 350 mil bolívares, o que seria cerca de US$ 3,50 na taxa do mercado
        negro. Eles trabalham como funcionários de segurança privada e
        trabalhadores da construção civil, mas não possuem contratos fixos.
      </Paragraph>
      <FeaturedText>
        As três empresas não têm experiência com extração de coltan e não
        apresentaram os estudos de impacto socioambientais obrigatórios.
      </FeaturedText>
      <Paragraph>
        Indígenas locais consultados dizem que nunca foram informados sobre as
        implicações reais do projeto e foram manipulados com falsas promessas de
        desenvolvimento e informações incorretas.
      </Paragraph>
      <Paragraph>
        A entrada da guerrilha e as novas empresas em Parguaza se devem ao
        cacique, de acordo com Franklin Quiñones, um indígena Piaroa da região
        de 28 anos. “O cacique permitiu a entrada da guerrilha e também a
        instalação do acampamento [da empresa].” De acordo com Quiñones e outras
        fontes anônimas, o cacique foi comprado e uma minoria de lideranças
        indígenas receberam empregos ou benefícios da empresa.
      </Paragraph>
      <Paragraph>
        “Vocês [os líderes] são fantoches, vocês não têm a capacidade de dizer
        isso para a empresa”, diz Quiñones, acrescentando: “Eles se focam no
        ganho individual, são usados”.
      </Paragraph>
      <Paragraph>
        O jovem indígena entende muito bem como as empresas recém-chegadas
        aplicam estratégias para dividir e conquistar as comunidades e como os
        atritos recém-criados causam mal-estar. “Quando você instala uma empresa
        aqui, será o fim da nossa cultura, o fim dos nossos costumes. E, assim,
        uma transculturalização completa. Então, há muitas comunidades
        preocupadas que perguntam: ‘Quem vai nos ajudar?’.”
      </Paragraph>
    </Container>
  </article>
);
