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
import RelatedNews from "components/RelatedNews";
import Note from "components/blocks/Note";

export default () => (
  <article>
      <div className='foreground'>
        <Helmet>
          <title>Rodovia BR-319: De atoleiro à rondonização</title>
        </Helmet>
        <Container>
        <div className='background-color pointer-events-none end-of-content margin-bottom-photo-gallery'>
      		<Note>
            <p>
            Viajamos pela BR-319 por seis dias no mês de agosto, de Porto Velho
            a Manaus. No caminho, entrevistamos moradores, madeireiros,
            agricultores, caminhoneiros, autoridades e ativistas. Depois de duas
            décadas praticamente fechada, a rodovia está transitável.
            </p>
      		</Note>
        <Title as="h2">
        Chegando à Vila de Realidade
        </Title>
        <Paragraph>
         Quando o “seu” Cuiabano e a “vovó” Nilza chegaram em Realidade, não
         havia nada. Quer dizer, quase nada, quase ninguém. Era o fim dos anos
         60 e só estavam ali os trabalhadores da empreiteira que construía a
         estrada, a BR-319. Obra da ditadura militar iniciada em 1968.
        </Paragraph>
        <Paragraph>
         Até poucos anos, as coisas não tinham mudado muito. A Vila de
         Realidade não passava de meia dúzia de casas.{" "}
          <StoryMedia
           media={{
             id: "image-1",
             type: "image",
             data: {
               credits: "Marcio Isensee e Sá/Amazônia Real",
               src: require("photos/br319_3.jpg")
             }
           }}
         	>
          No inverno – a temporada de chuvas –, carro nenhum passava. Para chegar
          a Humaitá (AM), apenas a 120 km ao sul, podia se levar um, dois dias
          </StoryMedia>.
        </Paragraph>
        </div>
        <div className='background-color pointer-events-none end-of-content margin-bottom-photo-gallery'>
        <Paragraph>
         O casal vinha num caminhão de Arenapólis, Mato Grosso, fugindo do
         garimpo, expulsos por fazendeiros. Com os seis filhos,
         passaram dias dormindo na rodoviária de Porto Velho.
         . Até que um ônibus os levou para
         Humaitá. Ali, acamparam em frente ao quartel (ainda em
         obras) do 5º Batalhão de Engenharia de Construção do Exército. De
         carona com um soldado (em um fusca) foram levados ao igarapé
         Realidade, onde novas terras eram oferecidas pelo governo.
        </Paragraph>
        <FeaturedText>
        Na margem direita da nova rodovia, se estabeleceu um assentamento
        da reforma agrária chamado Realidade, com 42,0 mil hectares.
        </FeaturedText>
        <Paragraph>
          <StoryMedia
           media={{
             id: "image-3",
             type: "image",
             data: {
               credits: "Marcio Isensee e Sá/Amazônia Real",
               src: require("photos/br319_2.jpg")
             }
           }}
         >
         Aos 79 anos, Nilza Francisca Santana, trabalha na venda que está na
         frente de sua casa, cuida do neto de 15 anos que vive com ela, faz
         refeições para vender a quem chega na Realidade
          </StoryMedia>.
         Ela vê com bons olhos a chegada de novos moradores e os negócios novos
         que abrem na Vila.
        </Paragraph>
        </div>
        <div className='background-color pointer-events-none end-of-content margin-bottom-map'>
        <Paragraph>
         Os migrantes chegam animados com a  manutenção na
         BR-319, algo que não ocorria há duas décadas. Pela primeira vez,
         desde os anos 80, a rodovia está transitável tanto no período da seca
         como no período das chuvas. O verão e o inverno.
        </Paragraph>
        <Paragraph>
         Já são cerca de sete mil habitantes, incluindo quem vive em numerosas
         vicinais. Na região, desde 2000, abriu-se em média de 17 km de
         estradas ‘não oficiais’ por ano. É o que indica um novo{" "}
         <FileLink
          href="https://idesam.org/publicacao/analise-municipios-br319.pdf"
          format="pdf"
          size="8.1MB"
        >
        estudo do Instituto de Conservação Desenvolvimento Sustentável do
        Amazonas (Idesam)
        </FileLink>.
         </Paragraph>
         <Paragraph>
         <StoryMedia
           icon="map"
           media={{
             id: "map-1",
             type: "mapbox",
             data: {
               layerId: "",
               sourceOptionType: "vector",
               sourceOptionUrl: "",
               coordinates: [-60.546,-7.036],
               style: "mapbox://styles/infoamazonia/cjmgv2m1s2q942spqd4naf2ke",
               sourceId: "source1",
               layerType: "fill",
               sourceLayer: "",
               layoutData: {"visibility":""},
               paintData: {"fill-color":"#ea1f1f"},
               zoomNumber: [5.11],
             }
           }}
         >
				 	Estradas que servem para puxar madeira de dentro da mata para pelo
				 	menos quatro serrarias que funcionam na Vila
         </StoryMedia>.
        </Paragraph>
        </div>
        <div className='background-color pointer-events-all end-of-content margin-bottom-video'>
        <Paragraph>
          Seu esposo, João Ferreira Santana, o Cuiabano, é um homem baixo, de
          pele bronzeada e cabelos brancos. Com 87 anos, ele perdeu a vista de
          um dos olhos e caminha com dificuldade. O terreno em que viveram por
          décadas foi vendido para uma serraria. No local, tinham roça e criação
          de animais, o que precisavam para alimentar os filhos. {" "}
          </Paragraph>
          <Paragraph>
            Ele, como muitos pioneiros, acredita no potencial da estrada.{" "}
          <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
          		id: "E0zZg7LZZd8"
          				}
          			}}
            >
            “Se conservar esta estrada ninguém passa mais fome aqui não”, diz
          </StoryMedia>.
          </Paragraph>
          </div>
          <div className='background-color pointer-events-none end-of-content margin-bottom-photo-gallery'>
          <Paragraph>
          	Caminhando mais um pouco na Vila da Realidade, encontramos outro
          	pioneiro, Vasco Antônio da Silva, o Vasco da Sorveteria. Acabara de
          	chover e um silêncio pairava sobre a pequena cidade.  Na frente de
          	sua sorveteria, ele estava descascando alho. Dente por dente com uma
          	paciência que parecia não ser de hoje.  Contou do tempo em que não
          	havia ônibus, ou qualquer transporte público que permitisse viajar
          	até a Realidade.
          </Paragraph>

          <Quote author="Vasco Antônio da Silva, mestre de obras">
          Aqui melhorou muito.
          </Quote>

          <Paragraph>
            Quando ele chegou ali em 2004 com outros dois empreendedores,
            vinha de Ariquemes, Rondônia. Seus colegas dedicavam-se a prospectar
            áreas para extração de madeira, terras que futuramente também
            poderiam se transformam em pastos. Ele, mestre de obras, ajudou a
            construir a escola de Realidade.
          </Paragraph>
          <Paragraph>
            Há poucos anos ele vendeu por $100.000 reais um lote que havia comprado
            por $5000 reais. “Com terra eu não mexo mais não”, desabafa. Sua
            preocupação é com o futuro de Realidade, a maioria dos habitantes
            ocupa terras griladas. Embora do lado direito da rodovia esteja o
            assentamento do Incra, na parte esquerda, as terras são particulares.
          </Paragraph>
          <Paragraph>
            Embora relativamente menor que o desmatamento em outras áreas de
            fronteira no sul do Amazonas, a devastação das florestas sob zona de
            influência de Realidade cresceu 62% entre 2000 e 2016. Os dados
            do Instituto Nacional de Pesquisas Espaciais (INPE) foram computados pelo Idesam.
          </Paragraph>
          <Paragraph>
            Empresários madeireiros começaram a chegar na última década.{" "}
            <StoryMedia
              media={{
                id: "galery-1",
                type: "gallery",
                data: {
                  items: [
                    {
                      src: require("photos/galeria/br319_1.jpg")
                    },
                    {
                      src: require("photos/galeria/br319_5.jpg")
                    },
                    {
                      src: require("photos/galeria/br319_6.jpg")
                    },
                    {
                      src: require("photos/galeria/br319_7.jpg")
                    }
                  ]
                }
              }}
            >
            Há em Realidade oito serrarias instaladas. Elas não funcionam
            simultaneamente. Quando estivemos ali, metade delas estavam em
            atividade
            </StoryMedia>
          </Paragraph>
         	</div>
         	<div className='background-color pointer-events-none end-of-content margin-bottom-video'>
           <Paragraph>
             Uma interpretação comum é a da migração da atividade econômica,
             da BR-230 - a Transamazônica - para o eixo da BR-319.
             É o caso de Santo Antônio do Matupi, ou o “Cento-e-Oitenta”, como é conhecido o
             distrito localizado a 180 quilômetros de Humaitá.
           </Paragraph>
           <Paragraph>
	           Escutamos mais de uma vez que a Vila de Realidade era um
	           “rebatimento do 180”. Buscando novas oportunidade,
	           trabalhadores, posseiros, pecuaristas de Santo Antônio do Matupi
	           começaram a migrar para as beiras da BR-319.
           </Paragraph>
           <FeaturedText>
           As coisas parecem
           mesmo interligadas. Muitos que chegam a Realidade vêm no ônibus da
           viação Matupi.
           </FeaturedText>
           <Paragraph>
	           Wagner Reinoso, 24 anos, é um dos que chegaram à vila atraídos
	           pela chance de um emprego e escaldados pelas mudanças no eixo da
	           Transamazônica. Professor da escola de Realidade, ele conta que no
	           Matupi a atividade econômica decaiu após uma série de ações do Ibama
	           que fizeram com que as serrarias fechassem. “Minha mãe e
	           meu irmão trabalhavam na serraria. Depois que o Ibama passou por
	           lá, ficou difícil.”
           </Paragraph>
           <Paragraph>
	           Hugo Loss é chefe Técnico-Ambiental do Ibama - Amazonas e coordena as
	           fiscalizações. Em sua sala em Manaus, tenso, com dois celulares sobre a mesa
             e imagens de satélite abertas no computador, ele nos concedeu a entrevista.
             Explicou que as ações de combate ao desmatamento no
	           sul do Amazonas são frequentes.
            </Paragraph>
            <Paragraph>
             O foco principal da repressão às
	           atividades ilegais ainda se concentra nas cidades, distritos e vilas
	           ao longo da Transamazônica,incluindo o Cento-e-Oitenta. Ele indica
	           também que há uma pressão de desmatamento na região de Realidade.
	           Ações de fiscalização já foram intensificadas. “Há um aquecimento
	           daquela economia, com a abertura de novas serrarias e migração de
	           pessoas.”
           </Paragraph>
	         <Title as="h2">
	           A Rondonização
	         </Title>
					 <Paragraph>
            Previsão feita há dez anos, a chegada de uma nova frente de
            ocupação e desmatamento da Amazônia através da rodovia que liga
            Porto Velho a Manaus está enfim se concretizando. Há quatro anos, a
            BR-319 se tornou trafegável, ainda que sem asfalto por 405 km. Ela
            atrai migrantes de todo o Brasil, mas especialmente de Rondônia.
					 </Paragraph>
					 <Paragraph>
            Temerosos do efeito desta nova fronteira sobre as matas amazônicas,
            em especial o impacto nas unidades de conservação, ambientalistas e
            estudiosos da região alertam para a “rondonização” do Amazonas. Uma
            referência ao modelo baseado em grandes desmatamentos no estado
            vizinho.
					 </Paragraph>
					 <Paragraph>
            Uma das ambientalistas mais atuantes e vocais do estado de Rondônia,
            Ivaneide Bandeira, fundadora da{" "}
            <ExternalLink
              href="http://kaninde.org.br/"
              language="pt"
            >
            ONG Kanindé
            </ExternalLink>, afirma que a
            pavimentação da rodovia atende aos interesses de grupos econômicos
            do estado. “Tudo vai dançar”, diz Neidinha, como é conhecida.{" "}
            <StoryMedia
	            media={{
	            id: "video-2",
	            type: "youtube",
	            data: {
	              id: "rTQRPmLq41o"
	            }
	            }}
	            >
            	Como se exauriu o recurso natural em Rondônia, ela diz, os
            	empresários madeireiros e pecuaristas migram o para o sul do
            	Amazonas, abrindo novas áreas na floresta
            </StoryMedia>.
           </Paragraph>
           </div>
           <div className='background-color pointer-events-all end-of-content margin-bottom-photo-gallery'>
           <Paragraph>
            É curioso escutar ao madeireiro Sidney Poletini, ele mesmo vindo de
            Rondônia, concordar com o que diz Neidinha. Com palavras diferentes
            eles têm previsões semelhantes para o futuro desta parte da Amazônia.
            “Um dia isso tudo aqui vai acabar“, diz Sidney, que é proprietário
            da Amazonas Madeiras, cerca do KM 250 da BR-319, na Vila de Realidade.
           </Paragraph>
					 <Paragraph>
            O desmatamento desenfreado já é uma tendência no sul do
            Amazonas, principalmente quando se olha para os municípios de Lábrea
            e Apuí, ambos sobre a Transamazônica. Os dois sempre estão na lista
            dos 10 municípios mais desmatados da Amazônia.
            </Paragraph>
            <FeaturedText>
            Comparado ao Mato Grosso ou Pará, o Amazonas, maior estado
            da região, representa pouco no desmatamento total, apenas 2,8% das
            áreas derrubadas.
            </FeaturedText>
					 <Paragraph>
            Mas é a taxa de crescimento que salta aos olhos. No biênio
            2015/2016, o Amazonas apresentou a maior taxa de crescimento do
            desmatamento de toda a Amazônia: 59% comparado ao período anterior.
            E apesar de ter havido uma redução de 11% no biênio 2016/2017, o
            total derrubado foi o dobro do que ocorrera somente há três anos, em
            2014.
           </Paragraph>
           <Title as="h2">
            Conservação pela metade
           </Title>
					 <Paragraph>
						Viajando cerca de 200 km ao norte de Realidade, cruzamos o grande
						mosaico de unidades de conservação que rodeia praticamente toda a
						rodovia.
            </Paragraph>
            <Paragraph>
            <StoryMedia
               media={{
                 id: "image-5",
                 type: "image",
                 data: {
                   credits: "Marcio Insensee e Sá/Amazônia Real",
                   src: require("photos/br319_4.jpg")
                 }
               }}
             > Neste trecho está o único parque nacional da região, o
             Nascentes do Lago Jari, um gigante com 812,4 mil hectares
 						localizado à esquerda de quem viaja para Manaus
             </StoryMedia>.
			      </Paragraph>
            </div>
 					  <div className='background-color pointer-events-all end-of-content margin-bottom-video'>
            <Paragraph>
              A invasão das unidades de conservação por grileiros e a pressão sobre terras
              indígenas é uma das principais preocupações neste momento em que o
              asfaltamento da BR-319 é dado como certo.
            </Paragraph>
            <FeaturedText>
              Ao todo são 11 áreas
              protegidas e seis terras indígenas com influência direta da
              rodovia.
            </FeaturedText>
            <Paragraph>
            A informação de que invasões
            ocorrem e, na verdade, se intensificam foi mencionada por algumas
            fontes durante o percurso. Ouvimos de um funcionário da{" "}
              <ExternalLink
              href="http://www.cmmconstrutora.com.br/"
              language="pt"
            > construtora CMM,
            </ExternalLink>{" "}
            cujo acampamento está bem em frente ao Parque Nacional,
              que todos os meses há grupos de invasores que entram com equipamentos
              de topografia na mata protegida. A CMM é uma das duas companhias
              que atualmente fazem a manutenção da rodovia.
            </Paragraph>
            <Paragraph>
              O Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio),
              órgão federal responsável pela gestão das áreas protegidas,
              não tem funcionários dentro da unidade.
            </Paragraph>
            <Paragraph>
              Toda a gestão antes era feita
              através da base em Humaitá.{" "}
              <ExternalLink
              href="http://amazoniareal.com.br/prefeito-de-humaita-e-vereadores-sao-presos-por-envolvimento-em-ataque-a-predios-do-ibama-e-icmbio/"
              language="pt"
              > Por conta de um ataque
              sofrido no final do ano passado,
              </ExternalLink>{" "} quando a sede do instituto foi queimada,
              os gestores foram transferidos
              para Porto Velho.
              </Paragraph>
              <Paragraph>
              Em entrevista no escritório do ICMBio em Porto Velho,
              o chefe do parque, Rafael Pereira,
              afirmou que as ações de fiscalização permanecem no mesmo ritmo que
              antes. Ele também apontou um avanço: o Plano de Manejo do parque
              foi recentemente aprovado, em 22 de maio. Porém ainda não está publicado no
              site do órgão. O plano é o documento base que define áreas que
              poderão ser visitadas pelo público e outras prioritárias à conservação.
            </Paragraph>
            <Paragraph>
              A falta da implementação das unidades de conservação pelo órgão
              federal gerou uma{" "}
              <FileLink
              href={require("documents/mpfacaoicmbio.pdf")}
              format="pdf"
              size="126KB"
            >
              uma ação civil pelo Ministério Público Federal.
            </FileLink>{" "}
            No processo, o procurados da República Rafael Rocha requer
            ao ICMBio que estabeleça prazos para
              a implementação de conselhos gestores e planos de manejo para as
              unidades de conservação federais ao longo da BR-319.
            </Paragraph>

            <Quote author="Trecho da ação do MPF">
            Trata-se de ação civil pública (...) para
            obrigar o ICMBio a implementar as 11 (onze) unidades de conservação federais
            criadas ao longo do traçado da BR-319 (Manaus/AM – Porto Velho/RO), com a
            finalidade de “blindar” as margens da estrada contra a ocupação desordenada e
            o efeito “espinha de peixe”, causado pela abertura de ramais clandestinos ao
            longo do eixo principal.
            </Quote>

           <Paragraph>
            Mais à frente, já a pouco menos de 300 km de Manaus, chegamos
            à Reserva de Desenvolvimento Sustentável
            do Igapó Açu. A área conserva o rio que, como diz o próprio nome,
            alaga uma grande extensão com suas águas negras.
            A reserva estadual, com seus vastos 400 mil
            hectares, é a única unidade de  conservação por onde passa a rodovia.
            </Paragraph>
            <Paragraph>
            Já há cinco anos, a reserva do Igapó-Açu tem um conselho gestor bastante
            atuante. Seu plano de gestão, aprovado e publicado, desde 2014. Por
            ali, estivemos com Jorge Nildo, membro do conselho gestor e um guia
            para pesca e turismo na região. Dormimos em sua casa e na manhã de
            um domingo, ele nos levou para conhecer os famosos igapós.{" "}
            <StoryMedia
              media={{
              id: "video-3",
              type: "youtube",
              data: {
                id: "Qojupw2hVhU"
              }
              }}
              >
              Ali, ele nos contou sobre os benefícios que a criação da área
              protegida. A caça e a pesca melhoraram, por exemplo.
              Mas acima de tudo, ele acredita que existe um
              grande potencial para o turismo
              </StoryMedia>.
            </Paragraph>
            </div>
            <div className='background-color pointer-events-none end-of-content margin-bottom-map'>
            <Title as="h2">
              Caminho sem volta
            </Title>
						<Paragraph>
              Desde que foi inaugurada em 1976 pelo general Ernesto Geisel, a
              BR-319 se tornou a única ligação por terra de Manaus com o resto
              do Brasil. Mas ainda que tenha sido inicialmente asfaltada, a
              falta de manutenção levou à rápida deterioração e, em pouco mais
              de dez anos, em 1988, ela foi fechada.
            </Paragraph>
            <Paragraph>
              Com o tráfego de veículos interrompido, a rodovia deixou de ser
              foco de atenção dos governo federal. Isso durou até os governos
              de Fernando Henrique Cardoso e Lula. Ambos criaram planos de
              investimento em infraestrutura em que a recuperação da BR-319 era
              citada como prioridade.
            </Paragraph>
            <Paragraph>
            Mas a ligação de Porto Velho a Manaus sempre foi temida por seu potencial
          destrutivo. Por conta das dificuldades de acesso,
          ela é uma das poucas, se não a única rodovia amazônica
          onde o padrão espinha de peixe não está consolidado.
          </Paragraph>
          <Paragraph>
          Por esta razão, a estratégia adotada foi
              a criação de áreas protegidas para evitar a grilagem de terras e
              invasões no momento do anúncio das obras.
              Coordenou-se, portanto, o
              asfaltamento com a implementação de medidas de conservação.
            </Paragraph>
            <Paragraph>
              Em 2008 e 2009, o Ministério do Meio Ambiente, então sob o comando
              de Carlos Minc, e a Secretária Estadual de Meio Ambiente do
              Amazonas, na gestão do governador Eduardo Braga (PMDB), anunciaram a criação
              de 8,4 milhões de hectares de unidades de conservação.{" "}
              <StoryMedia
                  icon="map"
                  media={{
                    id: "map-3",
                    type: "mapbox",

                    data: {
                      layerId: "Assentamentos_incra-2wyd2b2",
                      sourceOptionType: "vector",
                      sourceOptionUrl: "mapbox://infoamazonia.1kti1hxh",
                      coordinates: [-60.546,-6.343],
                      style: "mapbox://styles/infoamazonia/cjmh38rfkgtzc2rp0tir972ag",
                      sourceId: "source3",
                      layerType: "fill",
                      sourceLayer: "Assentamentos_incra-2wyd2b",
                      layoutData: {"visibility":"visible"},
                      paintData: {"fill-color":"hsla(250, 47%, 33%, 0.27)"},
                      zoomNumber: "7",
                    }
                  }}
                >
                	A área total equivale a três vezes e meia o território do
                	estado de Alagoas
                </StoryMedia>.
              </Paragraph>
							</div>
            	<div className='background-color end-of-content'>
              <Paragraph>
                Aos olhos da população local e dos empreendedores, a criação de
                parques e reservas já teria sido suficiente para liberar as
                obras. Mas desde que a decisão da reabertura foi tomada durante
                o governo Lula, ficou acordado com organizações da sociedade
                civil que haveria o licenciamento ambiental da obra.
              </Paragraph>
              <Paragraph>
                O Departamento Nacional de Infraestrutura de transportes, o
                DNIT, autarquia do governo federal, é o empreendedor
                responsável. Dois estudos anteriores sequer foram analisados
                pelo Ibama devido à qualidade dos documentos.
              </Paragraph>
              <Paragraph>
                Agora, segundo a superintendente de Meio Ambiente do DNIT,
                Angela Parente, o Estudo de Impacto Ambiental das obras de
                reconstrução do pavimento da BR-319 entre trecho do km 250 ao km
                655,7 no Amazonas tem previsão de ser entregue ao Ibama no
                primeiro semestre de 2019.
              <FeaturedText>
                Para a conclusão e entrega
                do Estudo de Impacto Ambiental faltam apenas consultas às
                populações indígenas.
              </FeaturedText>
              </Paragraph>
              <Paragraph>
              	A diferença com os anos anteriores é que a manutenção da rodovia
              	indica que a pavimentação é um caminho sem volta. Polêmicas
              	entre os órgão de controle ambiental, as obras paliativas são
              	vistas como uma estratégia de fato consumado, ou ainda em um
              	aspecto legal, o fracionamento do licenciamento.
              </Paragraph>
              <Paragraph>
                O Ministério Público Federal, através de sua câmara de meio
                ambiente, se opõe a mais de uma licença ao empreendimento. Mas a
                pressão pela trafegabilidade na estrada parece maior.
              </Paragraph>
              <Paragraph>
                Dioneia Ferreira, ex-gestora
                da reserva do Igapó Açu e fundadora de uma rede de organizações
                trabalhando no territórios sobre influência da BR-319, não
                demonstra otimismo. Nativa de Humaitá, ela relata ter visto
                a súbida gradual do modelo destrutivo de Rondônia em direção ao
                Sul da Amazonas. A verdade é que existe um dragão de boca
                aberta subindo a BR-319 e quem está lá na frente não vai ser
                poupado.
                </Paragraph>

	            <RelatedNews
	              sectionTitle={"Assista também: "}
	              title={"Bem-vindo a Realidade"}
	              subtitle={"Uma vila localizada na estrada mais erma do Brasil – a rodovia que liga Porto Velho a Manaus – se torna a nova fronteira para madeireiros de Rondônia." }
	              imageUrl={require("images/realidade.jpg")}
	              href={"https://realidade.amazoniareal.com.br/"}
	            />
          	</div>
          </Container>
      </div>
  </article>
);
