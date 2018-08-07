import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Paragraph from "components/blocks/Paragraph";
import Subtitle from "components/blocks/Subtitle";
import FullBlock from "components/blocks/Full";
import ImageBlock from "components/blocks/Image";
import Title from "components/blocks/Title";
import Quote from "components/blocks/Quote";
import FeaturedText from "components/blocks/FeaturedText";
import Note from "components/blocks/Note";
import RelatedNews from "components/RelatedNews";
import Tableau from "react-tableau-report";

export default () => (
  <article>
    <Helmet>
      <title>A luta dos herdeiros de Mata Cavalo pelo título do quilombo</title>
    </Helmet>
    <Container>
      <Note>
        <p>
                <StoryMedia
        media={{
          id: "galery-1",
          type: "gallery",
          data: {
            credits: "Bruno Kelly/Amazônia Real",
            items: [
              {
                src: require("photos/galeria/galeria_1.jpg")
              },
              {
                src: require("photos/galeria/galeria_2.jpg")
              },
              {
                src: require("photos/galeria/galeria_3.jpg")
              },
              {
                src: require("photos/galeria/galeria_4.jpg")
              },
              {
                src: require("photos/galeria/galeria_5.jpg")
              },
              {
                src: require("photos/galeria/galeria_6.jpg")
              },
              {
                src: require("photos/galeria/galeria_7.jpg")
              },
              {
                src: require("photos/galeria/galeria_8.jpg")
              },
              {
                src: require("photos/galeria/galeria_9.jpg")
              },
              {
                src: require("photos/galeria/galeria_10.jpg")
              },
              {
                src: require("photos/galeria/galeria_11.jpg")
              },
              {
                src: require("photos/galeria/galeria_12.jpg")
              },
              {
                src: require("photos/galeria/galeria_13.jpg")
              }
            ]
          }
        }}
        >
        No Complexo Territorial Mata Cavalo, no Mato Grosso, comunidades remanescentes de quilombolas lutam pela garantia da área a que têm direito
        </StoryMedia>.
           Ainda sem o título definitivo, eles enfrentam agora a dificuldade de adesão ao Cadastro Ambiental Rural (CAR), desconfiados de que a exigência da lei ambiental possa trazer novas ameaças aos territórios deixados pelos seus ancestrais. A luta de Mata Cavalo, que fica no município de Nossa Senhora do Livramento, distante a 55 quilômetros de Cuiabá, é a mesma de milhares de outros territórios quilombolas espalhados pelos estados brasileiros, entre eles aqueles que formam a Amazônia Legal.
        </p>
      </Note>

      <Paragraph>
        Mata Cavalo é um complexo territorial onde <StoryMedia
          media={{
            id: "image-2",
            type: "image",
            data: {
              credits: "Bruno Kelly/Amazônia Real",
              src: require("photos/matacavalo_2.jpg")
            }
          }}
        >
          homens e mulheres remanescentes de quilombolas conseguiram resistir por mais de um século ao assédio de fazendeiros e invasores nos sertões do Mato Grosso
        </StoryMedia>. Embora os limites do território já tenham sido reconhecidos pelo Instituto Nacional de Colonização e Reforma Agrária (Incra), as comunidades, reconhecidas pela Fundação Cultural Palmares, ainda não receberam o título para registro em cartório.
      </Paragraph>

      <Paragraph>
        Oficialmente, vivem nas comunidades quilombolas de Mato Cavalo 418 famílias. Mas na realidade esse número vem aumentando. Elas estão distribuídas pelos 14,7 mil hectares reconhecidos como território quilombola, formado a partir de diferentes histórias, que compartilham a origem dos negros que compraram ou ganharam essas terras no período em que o Brasil finalmente dava fim à escravidão no país.
      </Paragraph>

      <Paragraph>
        Várias histórias se unem da definição do Complexo Territorial do Mata-Cavalo. As dos patriarcas, homens escravizados que tiveram de pagar pela própria liberdade e conseguiram se tornar donos de terras, e de tantos outros, que receberam seu quinhão do território, após anos de trabalho árduo para fazendeiros locais.
      </Paragraph>

      <Paragraph>
        “Aqui é herança”, começa a contar Manuel Domingos Lúcio, o seu Neto, um dos líderes das comunidades. “Marcelino Paes de Barros foi um negro que comprou sua alforria e depois uma propriedade aqui no Mata Cavalo. O segundo que adquiriu terras aqui foi o Graciliano da Silva Tavares. A terceira parte é a terra doada a eles pela senhoria, a dona Ana da Silva Tavares”.
      </Paragraph>

      <Paragraph>
        Ao longo do século 20, o território foi sendo moldado pelos que trabalharam nessas terras e por outros que chegavam. Muitos lotes foram vendidos pelos próprios remanescentes para fazendeiros, de forma pacífica ou sob pressão. Outros, simplesmente foram invadidos. Fazendeiros fizeram pasto e cercaram a área. Jagunços circulavam pela região para evitar a entrada dos moradores locais na fazenda. Época em que muitos deixaram a região.
      </Paragraph>

      <Paragraph>
        “Meus pais contavam que essas terras aqui foram de briga, uma herança do nosso tataravô, Marcelino Paes de Barros”, conta dona Zulmira Maria Lúcio, mulher de seu Neto.
      </Paragraph>

      <Quote author="Ana da Silva Tavares">
        Dessa terra, eles não abriam mão e deixavam para todos os netos, bisnetos e tataranetos tomarem conta. Eles queriam que nós estudássemos para tomar conta
      </Quote>

      <Paragraph>
        Em 2018, os moradores de Mata Cavalo comemoraram uma vitória no Supremo Tribunal Federal (STF). Os ministros validaram o Decreto 4.887/2003, que reconheceu o direito de remanescentes quilombolas ao território tradicional, e negou a definição de um marco temporal para a regularização das terras.
      </Paragraph>

      <Paragraph>
      <StoryMedia
        media={{
          id: "image-7",
          type: "image",
          data: {
            credits: "Bruno Kelly/Amazônia Real",
            src: require("photos/matacavalo_2-1.jpg")
          }
        }}
      >
        “Tirou o medo das pessoas”, comemora dona Zulmira Maria Lúcio, 64 anos, casada com Manoel Domingos Lucio, 67 anos</StoryMedia>. “Agora com certeza nós já somos vitoriosos. O que impedia era esse julgamento. Hoje, graças a Deus, os fazendeiros perderam, mais uma vez. E agora só falta eles voltarem de novo. Tinha que correr atrás de documento mais em ordem e o restante, pronto.”
      </Paragraph>

      <Paragraph>
        O “documento mais em ordem” a que ela se refere é o título das terras, um direito confirmado pelos ministros do Supremo aguardado há muito tempo pelos quilombolas de Mata Cavalo. O documento chegou a ser emitido pela Fundação Cultural Palmares, vinculada ao Ministério da Cultura, mas depois foi cancelado. E desde 2004 o processo se arrasta nos corredores do Instituto Nacional de Colonização e Reforma Agrária (Incra). Enquanto isso, as terras são invadidas por fazendeiros, trabalhadores sem-terra e garimpeiros.
      </Paragraph>

      <Paragraph>
        “Essa questão da regularização fundiária aqui do território do Mata Cavalo, na verdade, é um sonho que vem se arrastando há anos e anos desde que a gente se identificou como quilombolas”, lamenta Laura Ferreira da Silva, uma das líderes da comunidade Mutuca. “A gente vê que falta um pouco no sentido dos poderes políticos de solucionar a regularização fundiária. Eles alegam o tempo todo que é falta de recursos para fazer a devida desapropriação, para fazer as indenizações.”
      </Paragraph>

      <Subtitle>
        Sobreposição é ameaça ao território
      </Subtitle>

      <Paragraph>
        <Tableau url='https://public.tableau.com/shared/JCJJFWFW2' />
      </Paragraph>

      <Paragraph>
        Um levantamento realizado pela reportagem encontrou 171 Cadastros Ambientais Rurais sobrepostos ao Complexo Mata Cavalo. Eles cobrem mais de metade do território tradicional. Embora não seja possível identificar se os dados se referem a fazendas ou lotes de remanescentes quilombolas que tenham optado por fazer o cadastramento individual de lotes.
      </Paragraph>

      <Paragraph>
        “A sobreposição é uma ameaça”, afirma o coordenador nacional da Coordenação Nacional de Articulação das Comunidades Negras Rurais Quilombolas (Conaq), Denildo Rodrigues de Moraes. “Até o momento, os fazendeiros continuam demarcando terras sobre os nossos territórios e quando a gente corre para fazer o cadastro, já tem um feito”, denúncia.
      </Paragraph>

      <Paragraph>
        Para fazer o levantamento, a reportagem utilizou mapas e dados disponibilizados pelo Incra na internet, onde já constam limites de territórios titulados ou que já tiveram seus limites identificados no processo de titulação. As informações sobre território quilombolas foram cruzadas aos dados do CAR, que também são públicos e estão disponíveis na internet, em um software de georreferenciamento.
      </Paragraph>

      <Paragraph>
        Foram identificados e mapeados territórios quilombolas em sete dos nove estados que compõem a Amazônia Legal. Acre e Roraima foram as duas exceções. Dos dados indicam que os limites de 146 comunidades, em 85 municípios já foram identificados pelo Incra. <StoryMedia
                media={{
                  id: "image-8",
                  type: "image",
                  data: {
                    credits: "Bruno Kelly/Amazônia Real",
                    src: require("photos/matacavalo_2-2.jpg")
                  }
                }}
              >
                Apenas 79 comunidades já receberam o título do território expedido pelo Incra</StoryMedia>.
      </Paragraph>

      <Paragraph>
        No total, foram encontrados 1284 CARs sobrepostos a territórios quilombolas com limites já identificados pelo Incra. Mais de 287 deles, sobre territórios titulados.
      </Paragraph>

      <Paragraph>
        A situação se mostra mais séria se for levado em consideração que os territórios titulados são apenas uma fração do total de remanescentes quilombolas já reconhecidos pela Fundação Cultural Palmares. Só nos estados da Amazônia Legal, existem 1138 comunidades já certificadas pela Fundação, vinculada ao Ministério da Cultura.
      </Paragraph>

      <Paragraph>
        Após o reconhecimento da comunidade pela Fundação Palmares, os territórios ainda precisam ser delimitados pelo Incra, que produz um Relatório Técnico de Identificação e Delimitação (RTID). Esse relatório, após publicado, pode ser questionado em até 90 dias. O processo de identificação termina após a publicação da Portaria nos diários oficiais dos estados e da União. O título pode ser expedido, sem custos para a comunidade, após os processos de desapropriação, se necessários.
      </Paragraph>

      <Subtitle>
        Cadastros devem ser anulados
      </Subtitle>

      <Paragraph>
        O advogado Pedro Martins, da organização Terra de Direitos, é a favor da anulação de cadastros individuais sobrepostos às áreas quilombolas, mesmo que o território ainda não tenha sido titulado. <StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              credits: "Bruno Kelly/Amazônia Real",
              src: require("photos/matacavalo_3.jpg")
            }
          }}
        >
          Ele lembra que o direito ao território coletivo é reconhecido pela Constituição e pelo Decreto 4887, de 2013
        </StoryMedia>.
      </Paragraph>

      <Quote author="Pedro Martins">
        Na hora em que o sistema aponta uma sobreposição, é ideal que os cadastros fiquem pendentes, tanto dos invasores quanto das comunidades quilombolas, mas no momento da análise de validação seja considerado o critério étnico, ou seja, a Comunidade Quilombola não pode ter o seu CAR cancelado por falta de documento de terras
      </Quote>

      <Paragraph>
        No Pará, o Núcleo de Questões Agrárias do Ministério Público do Estado já recomendou à Secretaria de Meio Ambiente e Sustentabilidade (Semas-PA) o cancelamento de 273 cadastros ambientais rurais sobrepostos a 51 territórios quilombolas já titulados. De acordo com a promotora Eliane Cristina Pinto Moreira, da Primeira Região Agrária, a Semas se comprometeu a apresentar um estudo técnico sobre cada um desses cadastros.
      </Paragraph>

      <Paragraph>
        A promotora concorda que mesmo cadastros sobrepostos a territórios não titulados devem ser cancelados. “Juridicamente não existe diferença, não existe uma situação melhor do não titulado para o titulado, o impacto maior é na elaboração da prova, no caso de questionamento jurídico”, explica a promotora.
      </Paragraph>

      <Subtitle>
        Vida e preservação ambiental
      </Subtitle>

      <Paragraph>
        Apesar de três adiamentos e alterações no sistema de registro, o movimento quilombola continuam com dificuldades para o Cadastro Ambiental Rural (CAR) de territórios tradicionais. <StoryMedia
          media={{
            id: "image-4",
            type: "image",
            data: {
              credits: "Bruno Kelly/Amazônia Real",
              src: require("photos/matacavalo_4.jpg")
            }
          }}
        >
          A Conaq aponta como principais problemas enfrentados a sobreposição de declarações de fazendeiros, falta de apoio para comunidades
        </StoryMedia> e não adequação de conceitos presentes no Código Florestal à cultura dos povos tradicionais.
      </Paragraph>

      <Paragraph>
        “Nós usamos o território como um todo, mas dentro do sistema de manejo, de saber relacionar a vida humana com a preservação ambiental”, descreve Denildo de Moraes. “Algo que para alguns ambientalistas, que são ambientalistas de gravata que estão em Brasília, é inconcebível. Eles não entendem a dinâmica de vida que os povos tradicionais têm”.
      </Paragraph>

      <Paragraph>
        O CAR foi instituído pelo governo federal em 2014, como uma ferramenta de fiscalização ambiental e para orientar a manutenção e recuperação das reservas legais, ou seja, área de mata que deve ser preservada, em imóveis rurais. Desde 31 de maio deste ano, o cadastro passou a ser condicionante para acesso a financiamentos e programas de fomento do governo federal. O Sistema é gerenciado pelo Serviço Florestal Brasileiro (SFB), mas a responsabilidade de efetivar o cadastro é de cada estado da federal.
      </Paragraph>

      <Paragraph>
        A exigência da reserva legal, por exemplo, não estaria de acordo com a realidade dessas comunidades e violaria direitos reconhecidos pela Constituição e Acordos Internacionais. Enquanto na maioria das regiões, essa parcela deve ser de pelo menos 20% da propriedade, na Amazônia ela pode chegar a 80% nas áreas de floresta. “O cadastro foi criado a partir de uma demanda do Código Florestal, mas em nenhum momento, esses povos foram levados em consideração”, critica Denildo de Moraes.
      </Paragraph>

      <Paragraph>
        Para o Serviço Florestal Brasileiro (SFB), a reserva legal é uma imposição da lei, que a exige para todo e qualquer imóvel rural, seja particular ou de comunidade tradicional. “Não é uma penalidade para as populações tradicionais, mas um princípio para qualquer proprietário”, defende o diretor geral do SFB, Raimundo Deusdará Filho.  “Não é o CAR que vai pacificar essa situação”, completa.
      </Paragraph>

      <Paragraph>
      <StoryMedia
              media={{
                id: "image-9",
                type: "image",
                data: {
                  credits: "Bruno Kelly/Amazônia Real",
                  src: require("photos/matacavalo_2-3.jpg")
                }
              }}
            >
              Mas os críticos dizem que essa exigência pode criar um problema futuro para as comunidades quilombolas</StoryMedia>, principalmente para aquelas que ainda não tiveram a situação fundiária resolvida.
      </Paragraph>

      <Paragraph>
        “Um território quilombola que tenha 90% da sua área invadida por fazendeiros não vai ter uma reserva verde considerável”, alerta o advogado Pedro Martins, da organização não governamental Terra de Direitos. “Uma área detonada, super impactada pela soja, por exemplo, vai virar um passivo ambiental para a comunidade quilombola”, completa.
      </Paragraph>

      <Paragraph>
      <StoryMedia
              media={{
                id: "image-10",
                type: "image",
                data: {
                  credits: "Bruno Kelly/Amazônia Real",
                  src: require("photos/matacavalo_2-4.jpg")
                }
              }}
            >
              O advogado argumenta ainda que as exigências para a adesão ao CAR atentam contra direitos das comunidades tradicionais garantidos pela Constituição e pela Convenção 169 da Organização Internacional do Trabalho</StoryMedia>, da qual o Brasil é signatário. Pedro Martins sustenta que as comunidades sejam consultadas sobre as exigências. “Se ela é obrigada a declarar a reserva legal, e isso não faz parte do seu sistema de vida, então não estão respeitando o modo de vida das comunidades”, alega o advogado.
      </Paragraph>

      <Paragraph>
        A técnica do Instituto Socioambiental Ivy Wiens trabalha com comunidades quilombolas na região do Vale do Ribeira, em São Paulo, e participou do processo de cadastro de dois territórios na região. Antes do CAR ser efetivado, segundo ela, foram dois anos de oficinas e discussões, para as comunidades decidirem como utilizar o território. Só após a definição, foi possível elaborar o cadastro.
      </Paragraph>

      <Paragraph>
        “O sistema foi pensado para propriedade privada individual e a forma como o território como os povos tradicionais estão organizados é completamente diferente. Se você faz o cadastro individual, você sabe o que você quer da sua propriedade, você faz o seu planejamento. Agora quando você tem 100 ou 150 famílias naquele espaço, você tem que discutir conjuntamente, coletivamente”, completa Ivy.
      </Paragraph>

      <Subtitle>
        A defesa e apoio às comunidades
      </Subtitle>

      <Paragraph>
        Mesmo após o prazo de adesão, o sistema do CAR permanece aberto, conforme lembra Raimundo Deusdará. “O cadastro é de natureza permanente”, esclarece do diretor geral do SFB. “Ele não vai ficar. Esse prazo (31 de maio) é referencial para o cumprimento dos dispositivos do Código Florestal, mas a gente continua dando apoio às comunidades, até porque nós temos uma série de iniciativas planejadas, para continuar apoiando os estados na elaboração na busca ativa dessas populações e comunidades tradicionais”, completa.
      </Paragraph>

      <Paragraph>
        Ele explica ainda que o cadastro pode ser retificado, de modo que mesmo sem todas as informações sobre o território as populações podem fazê-lo e completar em outro momento, sem nenhum prejuízo.
      </Paragraph>

      <Paragraph>
        O Serviço Florestal Brasileiro informou ainda que o sistema tem recebido melhorias para superar as dificuldades apontadas pelos usuários. Desde a implantação, o CAR já previa um módulo exclusivo para povos e comunidades tradicionais, que veio recebendo melhoria desde então. Esse módulo permite a inscrição de territórios coletivos, como é o caso dos quilombolas. Mas em alguns casos, os próprios remanescentes preferiram optar pelo cadastro individual.
      </Paragraph>

      <Paragraph>
        “Já com a primeira versão do módulo, nós cadastramos 83 territórios quilombolas em Pernambuco, todos coletivos, assistindo 12 mil famílias”, conta a gerente de Cadastro de Florestas do SFB, Janaína Rocha. “A gente uma demanda paralela em Alagoas, em que os quilombolas só queriam cadastrar o CAR se pudessem fazer individual, porque muitos já tinha titulação ou recebido de compra e venda da terra”.
      </Paragraph>

      <Paragraph>
        Na versão atual, essa contradição já está resolvida, conforme explica Janaína Rocha. O módulo permite que os cadastros do território coletivo contenham cadastros individuais dos quilombolas. No recebido cadastro, conforme ela explica, está identificada qual é a parcela individual declarada dentro do território coletivo.
      </Paragraph>

      <Paragraph>
        Raimundo Deusdará reforça que o CAR não é a solução ou a causa dos problemas fundiários, mas um grande diagnóstico da situação. <StoryMedia
          media={{
            id: "image-5",
            type: "image",
            data: {
              credits: "Bruno Kelly/Amazônia Real",
              src: require("photos/matacavalo_5.jpg")
            }
          }}
        >
          Para ele, o sistema tem revelado a necessidade de novas políticas públicas adequadas para as populações tradicionais
        </StoryMedia>.
      </Paragraph>

      <Subtitle>
        O temor das invasões
      </Subtitle>

      <Paragraph>
        Na comunidade Mutuca, uma das seis que formam o Complexo Territorial Mata Cavalo, no Mato Grosso, as dificuldades para atender as exigências do cadastro levaram os moradores a apelar, a contragosto, a cadastros individuais. Uma escolha para evitar problemas maiores, como o risco de perder acesso a programas de fomento e até o temor de invasores usarem o CAR como argumento na apropriação do território tradicional.
      </Paragraph>

      <Paragraph>
        “O interessante seria fazer coletivo, mas a gente esbarra em uma burocracia”, acredita Laura, uma das líderes da comunidade do Rio Mutuca.
      </Paragraph>

      <Quote author="Laura Ferreira da Silva">
        Nós não temos o documento da terra, tendo em vista que foram montados outros títulos em cima daqueles documentos antigos dos nossos ancestrais. Então fazer o individual é uma forma de dizer que, se o fazendeiro quiser fazer o cadastro ambiental da área, que nós já fizemos o nosso
      </Quote>

      <Paragraph>
      <StoryMedia
        media={{
          id: "image-6",
          type: "image",
          data: {
            credits: "Bruno Kelly/Amazônia Real",
            src: require("photos/matacavalo_6.jpg")
          }
        }}
      >
        O movimento quilombola destaca que o Estado Brasileiro reconhece o direito coletivo às terras e vê riscos à integridade dos territórios no cadastro individual
      </StoryMedia>. O país, conforme o argumento do coordenador nacional da Conaq, não tem controle sobre a questão fundiária. O CAR, apesar de não ser um documento de posse ou propriedade, poderia ser usado com a apropriação de territórios.
      </Paragraph>

      <Paragraph>
        “Se você colocar lote, um lote para cada família, vão vender”, diz Sizernando do Carmo Santo, o seu Nezinho, um dos líderes da comunidade Mata Cavalo de Cima. “Toda vida, nós moramos em território comum, nunca teve lote. Mesmo assim teve família que vendeu lote. Então a gente está com medo de que vendam para fazendeiros e comece a briga tudo de novo”, teme.
      </Paragraph>

      <Paragraph>
        Ele lembra que a venda de terras pelos próprios remanescentes quilombolas é uma das causas dos problemas fundiários no território. “Eu não sou contra o fazendeiro, nem a favor dele. Ele chegou aqui porque comprou e o dinheiro dele está em jogo”, esclarece.
      </Paragraph>

      <Paragraph>
        Embora seja um instrumento de controle ambiental, existem de fato iniciativas que desvirtuam esse objetivo do CAR. A promotora Eliane Moreira cita o exemplo do Instituto de Terras do Pará, que estaria usando o CAR para regularização fundiária, como desvio da finalidade do sistema. “O CAR em si é um grande um instrumento, mas o desvirtuamento dele para uma finalidade para a qual ele não foi criado”, afirma.
      </Paragraph>

      <Paragraph>
        No Mata Cavalo, os remanescentes quilombolas que já resistiram a invasões por mais de cem anos, continuam com dúvidas quanto às consequências do Cadastro Ambiental Rural sobre a integridade do território. E bastaria uma medida para resolver essa insegurança, a titulação das terras pelo Incra.
      </Paragraph>
      <RelatedNews
        sectionTitle={"Assista também: "}
        title={"O Mata Cavalo"}
        subtitle={"Neste documentário da Amazônia Real, os herdeiros dos ancestrais africanos contam histórias da origem do Complexo Territorial Mato Cavalo." }
        imageUrl={require("images/matacavalo_doc.jpg")}
        href={"//documentario.matacavalo.amazoniareal.com.br/"}
      />
    </Container>
  </article>
);
