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

export default () => (
  <article>
      <div className='foreground'>
        <Helmet>
          <title>De atoleiro à rondonização</title>
        </Helmet>
        <Container>
        <div className='background-color pointer-events-none end-of-content margin-bottom-photo-gallery'
          <Title as="h2">
          <StoryMedia
           media={{
             id: "image-2",
             type: "image",
             data: {
               credits: "Marcio Isensee e Sá/Amazônia Real",
               src: require("photo/br319_3.jpg")
             }
           }}
         >
            A Vila de Realidade
              </StoryMedia>{" "}
              </Title>
          <div className='background-color pointer-events-none end-of-content margin-bottom-map'>
          <Paragraph>
          Quando o “seu” Cuiabano e a “vovó” Nilza chegaram em Realidade, não havia nada. Quer dizer, quase nada, quase ninguém. Era o fim dos anos 60 e só estavam ali os trabalhadores da empreiteira que construía a estrada - a BR-319. Obra da ditadura militar.
          </Paragraph>
          <Paragraph>
          Até poucos anos atrás, as coisas não tinham mudado muito. A Vila de Realidade não passava de meia dúzia de casas.{" "}
            <StoryMedia
              icon="map"
              media={{
                id: "map-1",
                type: "mapbox",
                backgroundAlternative: require("images/bg-mapbox-placeholder-1.png"),
                data: {
                  layerId: "Assentamentos_incra-2wyd2b",
                  sourceOptionType: "vector",
                  sourceOptionUrl: "mapbox://infoamazonia.1kti1hxh",
                  coordinates: [-62.355,-5.6],
                  style: "mapbox://styles/infoamazonia/cjlf77k1x01k82slobkyq10bq",
                  sourceId: "source1",
                  layerType: "fill",
                  sourceLayer: "Assentamentos_incra-2wyd2b",
                  layoutData: {"visibility":""},
                  paintData: {"fill-color":"#ea1f1f"}
                }
              }}
            >
             No inverno - a temporada de chuvas - carro nenhum passava. Para chegar à Humaitá, apenas 120 km ao sul, podia se levar um, dois dias.
            </StoryMedia>{" "}
                </Paragraph>
                  </div>
            <div className='background-color pointer-events-none end-of-content margin-bottom-photo-gallery'>
            <Paragraph>
            O casal vinha num caminhão de Arenapólis, Mato Grosso, fugindo do garimpo, expulsos por fazendeiros. Com seis filhos, passaram dias dormindo na rodoviária de Porto Velho, até que um ônibus os levou para Humaitá (AM). Ali, acamparam em frente ao quartel (ainda em construção) do 5º Batalhão de Engenharia do Exército. De carona com um soldado (em um fusca) foram levados ao igarapé Realidade, onde novas terras eram oferecidas pelo governo.  Na margem direita da nova rodovia, estabeleceu-se um assentamento da reforma agrária.
            </Paragraph>
            <Paragraph>
              A chegada de novos migrantes tem relação com a atual manutenção feita na BR-319, que não ocorria há duas  décadas. Pela primeira vez, desde os anos 80, a rodovia está transitável tanto no período da seca como no período das chuvas.
              <StoryMedia
               media={{
                 id: "image-2",
                 type: "image",
                 data: {
                   credits: "Marcio Isensee e Sá/Amazônia Real",
                   src: require("photos/br319_2.jpg")
                 }
               }}
             >
             Aos 79 anos, Nilza Francisca Santana, trabalha na venda que está na frente de sua casa, cuida do neto de 15 anos que vive com ela, faz refeições para vender a quem chega na Realidade.
             </StoryMedia>{" "}
            Ela vê com bons olhos a chegada de novos moradores e os novos negócios que abrem na Vila.
             </Paragraph>
            </div>
         <div className='background-color pointer-events-none end-of-content margin-bottom-map'>
         <Paragraph>
         Agora, já são cerca de sete mil habitantes, incluindo quem vive nas estradas vicinais. Na região, desde 2000, foram abertos 17 km de estradas não oficiais a cada ano, indica um novo estudo. Estradas que servem para puxar madeira de dentro da mata para pelo menos quatro serrarias que funcionam na Vila.
        </Paragraph>
           <Paragraph>
           Seu esposo, João Ferreira Santana, o Cuiabano, é um homem baixo, de pele bronzeada e cabelos brancos. Com 87 anos, ele perdeu a vista de um dos olhos e caminha com dificuldade. O terreno em que viveram por décadas foi vendido para uma serraria. No local, tinham roça e criação de animais, o que precisavam para alimentar os filhos. {" "}
           <StoryMedia
            media={{
              id: "video-1",
              type: "youtube",
              data: {
           id: "E0zZg7LZZd8"
          }
          }}
             >
               Ele, como muitos pioneiros, não perdem esperança no potencial da estrada. “Se conservar esta estrada ninguém passa mais fome aqui não”, diz.
             </StoryMedia>{" "}
             </Paragraph>
             </div>
          <div className='background-color pointer-events-none end-of-content margin-bottom-photo-gallery'>
            <Paragraph>
          Caminhando mais um pouco na Vila da Realidade, encontramos outro pioneiro, Vasco Antônio da Silva, o Vasco da Sorveteria. Acabara de chover e um silêncio pairava sobre a pequena cidade.  Na frente de sua sorveteria, ele estava descascando alho. Dente por dente com uma paciência que parecia não ser de hoje.  Contou do tempo em que não havia ônibus, ou qualquer transporte público que permitisse viajar até a Realidade.
            </Paragraph>
            <Paragraph>
            “Aqui melhorou muito”, disse com a fala pausada e o sotaque sertanejo, ele vindo de Colniza, norte do Mato Grosso.
            </Paragraph>
            <Paragraph>
            Mas quando ele chegou ali em 2004 com outros dois empreendedores, vinha de Ariquemes, Rondônia. Seus colegas dedicavam-se a prospectar áreas para extração de madeira, terras que futuramente também poderiam se transformam em pastos. Ele, mestre de obras, ajudou a construir a escola de Realidade.
            </Paragraph>
            <Paragraph>
            Há poucos anos ele vendeu por R$ 100 mil um lote que havia comprado por R$ 5 mil. “Com terra eu não mexo mais não”, desabafa. Sua preocupação é com o futuro dos moradores de Realidade, a maioria são ocupantes de terras griladas.
            </Paragraph>
            <Paragraph>
            Embora relativamente menor que o desmatamento em outras áreas de fronteira no sul do Amazonas, a devastação das florestas sob zona de influência de Realidade cresceu 62% entre 2000 e 2016, segundo dados do Instituto Nacional de Pesquisas Espaciais (INPE) analisados pela ONG Idesam em seu estudo recém lançado.
            </Paragraph>
            <Paragraph>
            Empresários madeireiros começaram a chegar na última década.{" "}
            <StoryMedia
               media={{
                 id: "image-2",
                 type: "image",
                 data: {
                   credits: "Marcio Insensee e Sá/Amazônia Real",
                   src: require("photos/br319_1.jpg")
                 }
               }}
             >
             Há em Realidade oito serrarias instaladas. Elas não funcionam simultaneamente. Quando estivemos ali, metade delas estavam em atividade.
             </StoryMedia>.
             </Paragraph>
         </div>
         <div className='background-color pointer-events-none end-of-content margin-bottom-map'>
           <Paragraph>
             Uma interpretação comum  é a da migração da atividade econômica, geralmente ilegal, que ocorre ao longo da BR 230, a Transamazônica para o eixo da BR 319.{" "}
             <StoryMedia
               icon="map"
               media={{
                 id: "map-3",
                 type: "mapbox",
                 backgroundAlternative: require("images/bg-mapbox-placeholder-3.png"),
                 data: {
                   layerId: "Assentamentos_incra-2wyd2b2",
                   sourceOptionType: "vector",
                   sourceOptionUrl: "mapbox://infoamazonia.1kti1hxh",
                   coordinates: [-54.372,-5.636],
                   style: "mapbox://styles/infoamazonia/civwnqdp7000q2jltj0lq1nkp",
                   sourceId: "source3",
                   layerType: "fill",
                   sourceLayer: "Assentamentos_incra-2wyd2b",
                   layoutData: {"visibility":""},
                   paintData: {"fill-color":"hsla(250, 47%, 33%, 0.27)"}
                 }
               }}
             >
             É o caso de Santo Antônio do Matupi, ou o “180”, como é conhecido o distrito localizado a 180 quilômetros de Humaitá. Uma ocupação explosiva
             </StoryMedia>{" "}
           </Paragraph>
           <Paragraph>
           Escutamos mais de uma vez que a Vila de Realidade era um “rebatimento do 180”. Ou seja, buscando novas oportunidade, trabalhadores, posseiros, pecuaristas de Santo Antônio do Matupi começaram a migrar para as beiras da BR 319.  As coisas parecem mesmo interligadas. Muitos que chegam à Realidade vem no ônibus da viação Matupi .
           </Paragraph>
           <Paragraph>
           Wagner Reinoso, 24 anos anos, é um dos que chegaram à vila atraídos pela chance de um emprego e escaldados pelas mudanças no eixo da Transamazônica. Professor da escola de Realidade, ele conta que no Matupi a atividade econômica decaiu após um série de ações do Ibama que fizeram com que as serrarias fechassem no Matupi. “Minha mãe e meu irmão trabalhavam na serraria. Depois que o Ibama passou por lá, ficou difícil.”
           </Paragraph>
           <Paragraph>
           Hugo Loss, chefe Técnico-Ambiental do Ibama, que coordena as fiscalizações, explicou que as ações de combate ao desmatamento no sul do Amazonas são frequentes. O foco principal da repressão às atividades ilegais ainda se concentra nas cidades, distritos e vilas ao longo da Transamazônica,incluindo o distrito do 180. Ele indica também que há uma pressão de desmatamento na região de Realidade. Ações de fiscalização já foram intensificadas. “Há um aquecimento daquela economia, com a abertura de novas serrarias e migração de pessoas.”
           </Paragraph>
         </div>
         <Title as="h2">
           A Rondonização
         </Title>
        <div className='background-color pointer-events-all end-of-content margin-bottom-video'>
            <Paragraph>
            Previsão feita há dez anos,  a chegada de uma nova frente de ocupação e desmatamento da Amazônia através da rodovia que liga Porto Velho a Manaus está enfim se concretizando. Há quatro anos, a BR 319 se tornou trafegável, ainda que sem asfalto por 405 km . Ela atrai migrantes de todo o Brasil, mas especialmente de Rondônia.
            </Paragraph>
            <Paragraph>
            Temerosos do efeito desta nova fronteira sobre as matas amazônicas, em especial o impacto nas unidades de conservação, ambientalistas e estudiosos da região alertam para a “rondonização” do Amazonas. Uma referência ao modelo baseado em grandes desmatamentos no estado vizinho.
            </Paragraph>
            <Paragraph>
            Uma das ambientalistas mais atuantes e vocais do estado de Rondônia, Ivaneide Bandeira, fundadora da ONG Kanindé afirma que a pavimentação da rodovia atende aos interesses de grupos econômicos de estado. “Tudo vai dançar”, diz Neidinha, como é conhecida.{" "}
              <StoryMedia
            media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "rTQRPmLq41o"
            }
            }}
            >
            Como se exauriu o recurso natural em Rondônia, ela diz, os empresários madeireiros e pecuaristas migram o para o sul do Amazonas, abrindo novas áreas na floresta.
            </StoryMedia>.
            </Paragraph>
          </div>
          <div className='background-color pointer-events-all end-of-content margin-bottom-video'>
              <Paragraph>
              É curioso escutar o madeireiro Sidney Poletini, ele mesmo vindo de Rondônia, concordar com o que diz Neidinha. Com palavras diferentes eles têm previsões semelhantes para o futuro desta parte da Amazônia “Um dia isso tudo aqui vai acabar“, diz Sidney, que é proprietário da Amazonas Madeiras, ao longo da BR 319, na Vila de Realidade.
              </Paragraph>
              <Paragraph>
            O desmatamento desenfreado já é uma tendência consolidada do sul do Amazonas, principalmente quando se olha para os municípios de Lábrea e Apuí, dois que listam sempre na lista dos 10 mais desmatados de toda a Amazônia. Em relação ao Mato Grosso e o Pará, o maior estado da região amazônica ainda representa pouco no total, apenas 2,6% da extensão do desmatamento.               </Paragraph>
              <Paragraph>
              Mas é a taxa de crescimento que tem chamado atenção. No biênio 2015/2016, o Amazonas apresentou a maior taxa de crescimento do desmatamento de toda a Amazônia, 59% comparado ao período anterior. E apesar de ter havido uma redução de 11% no biênio 2016/2017, o total desmatado foi o dobro do que ocorrera somente há três anos, em 2014. {" "}
                <StoryMedia
              media={{
              id: "video-1",
              type: "youtube",
              data: {
                id: "rTQRPmLq41o"
              }
              }}
              >
              E apesar de ter havido uma redução de 11% no biênio 2016/2017, o total desmatado foi o dobro do que ocorrera somente há três anos, em 2014.
              </StoryMedia>.
              </Paragraph>
            </div>
            <div className='background-color pointer-events-none end-of-content margin-bottom-photo-gallery'>
            <Title as="h2">
              <StoryMedia
                 media={{
                   id: "image-2",
                   type: "image",
                   data: {
                     credits: "Marcio Insensee e Sá/Amazônia Real",
                     src: require("photos/br319_3(3).jpg")
                   }
                 }}
               >
              Conservação pela metade
               </StoryMedia>.
               </Title>
           </div>

            <div className='background-color pointer-events-all end-of-content margin-bottom-video'>
                <Paragraph>
                Viajando cerca de 200 km ao norte de Realidade, cruzamos o grande mosaico de unidades de conservação que rodeia praticamente toda a rodovia. Neste trecho está o único parque nacional da região, o Nascentes do Lago Jari, um gigante com mais de 800 mil hectares localizado à esquerda de quem viaja para Manaus.
                </Paragraph>
                <Paragraph>
                Mais a frente encontra-se a Reserva de Desenvolvimento Sustentável do Igapó Açu, onde Jorge Nildo, membro do conselho gestor da Unidade de Conservação, nos contou sobre os benefícios que a criação da área protegida. A caça e a pesca melhoraram. {" "}
                  <StoryMedia
                media={{
                id: "video-1",
                type: "youtube",
                data: {
                  id: "Qojupw2hVhU"
                }
                }}
                >
                Ele também acredita que existe um grande potencial para o turismo na região
                </StoryMedia>{" "}
                </Paragraph>
              </div>
              <div className='background-color pointer-events-all end-of-content margin-bottom-video'>
                  <Paragraph>
                  A invasão das unidades de conservação e pressão sobre terras indígenas é uma das principais preocupações neste momento em que o asfaltamento da BR-319 é dado como certo. (Quantas terras são e quais são?). Ouvimos de um funcionário da construtora CMM, cujo o acampamento está bem em frente, que todos os meses, há grupos de invasores que entram com equipamentos de topografia dentro do parque.
                  </Paragraph>
                  <Paragraph>
                  O Instituto Chico Mendes de Conservação da Biodiversidade (ICMBIO) não tem funcionários dentro da unidade. Toda a gestão era feita através da base em Humaitá. Mas com o ataque de garimpeiros sofrido no final do ano passado, os gestores foram transferidos para Porto Velho. Em entrevista, o chefe do parque Rafael Pereira, afirmou que as ações de fiscalização permanecem no mesmo ritmo que anteriormente.
                  </Paragraph>
                  <Paragraph>
                  A falta da implementação das unidades de conservação pelo órgão federal gerou uma ação cívil pelo Ministério Público Federal. No processo, os promotores pedem ao ICMBio que estabeleça prazos para a implementação de conselhos gestores e {" "}
                    <StoryMedia
                  media={{
                  id: "video-1",
                  type: "youtube",
                  data: {
                    id: "Qojupw2hVhU"
                  }
                  }}
                  >
                  planos de manejo para as UCs federais ao longo da BR-319.
                  </StoryMedia>{" "}
                  </Paragraph>
                </div>
                <Title as="h2">
                  Caminho sem volta
                </Title>
                <div className='background-color pointer-events-all end-of-content margin-bottom-video'>
                    <Paragraph>
                    Desde que foi inaugurada em 1976 pelo general Ernesto Geisel, a BR 319 se tornou a única ligação por terra de Manaus com o resto do Brasil. Mas ainda que tenha sido inicialmente asfaltada, a falta de manutenção levou à rápida deterioração e em pouco mais de dez anos, em 1988, ela foi fechada.
                    </Paragraph>
                    <Paragraph>
                    Com o tráfego de veículos interrompido, a rodovia deixou de ser foco de atenção dos governo federal. Isso durou até o início dos anos 2000, quando Lula, então recém eleito indicou como ministro dos Transportes o político amazonense Alfredo Nascimento. A BR-319 entrou como prioridade das obras de infraestrutura do novo governo. Passou a fazer parte do PAC, o programa de aceleração de crescimento, plano de governo que alçou a então ministra da Casa Civil Dilma Rousseff na corrida à Presidência.
                    </Paragraph>
                    <Paragraph>
                    Assim como o BR-163, outra rodovia cujo asfaltamento era cobrado por ligar a região produtora de grãos do Mato Grosso ao porto fluvial de Santarém, a BR 319 sempre foi temida por seu potencial de vetor de desmatamento. Por esta razão, a estratégia adotada foi a criação de áreas protegidas para evitar a grilagem de terras e invasões no momento do anúncio das obras. Coordenou-se portanto o asfaltamento com a implementação de medidas de conservação.
                    </Paragraph>
                    <Paragraph>
                    Em 2008 e 2009, o Ministério do Meio Ambiente, então sob o comando de Carlos Minc, e a Secretária Estadual de Meio Ambiente do Amazonas, na gestão de Eduardo Braga (PMDB), anunciaram a criação de 8,4 milhões de hectares de unidades de conservação.{""}
                    <StoryMedia
                      icon="map"
                      media={{
                        id: "map-3",
                        type: "mapbox",
                        backgroundAlternative: require("images/bg-mapbox-placeholder-3.png"),
                        data: {
                          layerId: "Assentamentos_incra-2wyd2b2",
                          sourceOptionType: "vector",
                          sourceOptionUrl: "mapbox://infoamazonia.1kti1hxh",
                          coordinates: [-54.372,-2.636],
                          style: "mapbox://styles/infoamazonia/ciqwmpsz1000cbgno5jpumkcw",
                          sourceId: "source3",
                          layerType: "fill",
                          sourceLayer: "Assentamentos_incra-2wyd2b",
                          layoutData: {"visibility":"visible"},
                          paintData: {"fill-color":"hsla(250, 47%, 33%, 0.27)"}
                        }
                      }}
                    >
                    A área total equivale a três vezes e meia o território do estado de Alagoas
                    </StoryMedia>{" "}
                    </Paragraph>
                    <Paragraph>
                    Aos olhos da população local e dos empreendedores, a criação de parques e reservas já teria sido suficiente para liberar as obras. Mas desde que a decisão da reabertura foi tomada durante o governo Lula, ficou acordado com organizações da sociedade civil de que haveria o licenciamento ambiental da obra.
                    </Paragraph>
                    <Paragraph>
                    O Departamento Nacional de Infraestrutura de transportes, o DNIT, autarquia do governo federal, é o empreendedor responsável. Dois estudos anteriores, um no ano de xx e outro no ano de xx, sequer foram analisados pelo Ibama devido a qualidade.
                    </Paragraph>
                    <Paragraph>
                    Agora, segundo a superintendente de Meio Ambiente do DNIT, Angela Parente, o Estudo de Impacto Ambiental das obras de reconstrução do pavimento da BR-319 entre trecho do Km 250 ao km 655,7 no Amazonas tem previsão de ser entregue ao IBAMA no primeiro semestre de 2019.
                    </Paragraph>
                    <Paragraph>
                    A diferença com os anos anteriores é que a manutenção da rodovia indica que a pavimentação é um caminho sem volta. Polêmicas entre os órgão de controle ambiental, as obras paliativas são vistas como uma estratégia de fato consumado, ou ainda em um aspecto legal, o fracionamento do licenciamento.
                    </Paragraph>
                    <Paragraph>
                    O Ministério Público Federal, através de sua câmara de meio ambiente, se opõe a mais de uma licença ao empreendimento. Mas a pressão pela trafegabilidade na estrada parece maior.
                    </Paragraph>
                    <Paragraph>
                    Os serviços de manutenção estão respaldados pela Licença de Instalação – LI nº 1.111/2016 (Renovada) emitida pelo IBAMA em 12/05/2017, com validade de 24 meses. Para a conclusão e entrega do Estudo de Impacto Ambiental faltam apenas consultas às populações indígenas.
                    </Paragraph>
                    <Paragraph>
                    “O asfaltamento da BR 319 são favas contadas”, é um comentário comum por aqueles que vem trabalhando na região.  Dioneia Ferreira, nativa de Humaitá, a cidade polo no Sul do Amazonas, no entroncamento da BR 319 com a Transamazônica, é uma das ativistas mais vocais  “A verdade é que existe um dragão de boca aberta subindo a BR , Quem está lá na frente não vai ser poupado.”, ela alerta.
                    </Paragraph>
                  </div>
            <div className='background-color end-of-content'>
            <RelatedNews
              sectionTitle={"Assista também: "}
              title={"Bem-vindo a Realidade"}
              subtitle={"Uma vila localizada na estrada mais erma do Brasil - a rodovia que liga Porto Velho a Manaus - se torna a nova fronteira para madeireiros de Rondônia." }
              imageUrl={require("images/realidade.jpg")}
              href={"//realidade.amazoniareal.com.br/"}
            />
          </div>
          </Container>
      </div>
  </article>
);
