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
        <div className='background-color pointer-events-none end-of-content margin-bottom-map'>
        </Paragraph>
          <Title as="h2">
            Chegada na Vila de Realidade
          </Title>
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
                  coordinates: [-61.355,-5.494],
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
                <Paragraph>
            O casal vinha num caminhão de Arenapólis, Mato Grosso, fugindo do garimpo, expulsos por fazendeiros. Com seis filhos, passaram dias dormindo na rodoviária de Porto Velho, até que um ônibus os levou para Humaitá (AM). Ali, acamparam em frente ao quartel (ainda em construção) do 5º Batalhão de Engenharia do Exército. De carona com um soldado (em um fusca) foram levados ao igarapé Realidade, onde novas terras eram oferecidas pelo governo.  Na margem direita da nova rodovia, estabeleceu-se um assentamento da reforma agrária.
            </Paragraph>
            </div>
        <div className='background-color pointer-events-none end-of-content margin-bottom-photo-gallery'>
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
             Ela vê com bons olhos a chegada de novos moradores e os novos negócios que abrem na Vila.Agora, já são cerca de sete mil habitantes, incluindo quem vive nas estradas vicinais. Na região, desde 2000, foram abertos 17 km de estradas não oficiais a cada ano, indica um novo estudo. Estradas que servem para puxar madeira de dentro da mata para pelo menos quatro serrarias que funcionam na Vila.

A chegada de novos migrantes tem relação com a atual manutenção feita na BR-319, que não ocorria há duas  décadas. Pela primeira vez, desde os anos 80, a rodovia está transitável tanto no período da seca como no período das chuvas.


Seu esposo, João Ferreira Santana, o Cuiabano, é um homem baixo, de pele bronzeada e cabelos brancos. Com 87 anos, ele perdeu a vista de um dos olhos e caminha com dificuldade. O terreno em que viveram por décadas foi vendido para uma serraria. No local, tinham roça e criação de animais, o que precisavam para alimentar os filhos. Ele, como muitos pioneiros, não perdem esperança no potencial da estrada. “Se conservar esta estrada ninguém passa mais fome aqui não”, diz.

             </StoryMedia>{" "}

           </Paragraph>
         </div>
        <div className='background-color pointer-events-all end-of-content margin-bottom-video'>
            <Paragraph>

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
               Ainda sem o título definitivo, eles enfrentam agora a dificuldade de adesão ao Cadastro Ambiental Rural (CAR), desconfiados de que a exigência da lei ambiental possa trazer novas ameaças aos territórios deixados pelos seus ancestrais. A luta de Mata Cavalo, que fica no município de Nossa Senhora do Livramento, distante a 55 quilômetros de Cuiabá, é a mesma de milhares de outros territórios quilombolas espalhados pelos estados brasileiros, entre eles aqueles que formam a Amazônia Legal.
            </Paragraph>
          </div>
          <div className='background-color pointer-events-none end-of-content margin-bottom-map'>
            <Paragraph>
              The ones bearing the brunt of Venezuela’s mining bonanza are the{" "}
              <StoryMedia
                icon="map"
                media={{
                  id: "map-2",
                  type: "mapbox",
                  backgroundAlternative: require("images/bg-mapbox-placeholder-2.png"),
                  data: {
                    layerId: "Sementes-dbky3y2",
                    sourceOptionType: "vector",
                    sourceOptionUrl: "mapbox://infoamazonia.de1tfaxh",
                    coordinates: [-54.945,-2.800],
                    style: "mapbox://styles/infoamazonia/ciqwmpsz1000cbgno5jpumkcw",
                    sourceId: "source2",
                    layerType: "circle",
                    sourceLayer: "Sementes-dbky3y",
                    layoutData: {"visibility":"visible"},
                    paintData: {"circle-color":"#eb5252","circle-stroke-color":"#000000"}
                  }
                }}
              >
                native communities in Amazonas and Bolívar states
              </StoryMedia>{" "}
              that have been usurped in both legal and illegal mining economies.
              Colombian guerrilla groups – referred to by the locals as{" "}
              <em>patagomas</em> (rubber feet) – are expanding their mining operations
              in western Venezuela, and recently announced their first mining projects
              in indigenous territories.
            </Paragraph>
          </div>
          <div className='background-color pointer-events-none end-of-content margin-bottom-photo-gallery'>
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
          </div>
          <div className='background-color pointer-events-none end-of-content margin-bottom-map'>
            <Paragraph>
              The ones bearing the brunt of Venezuela’s mining bonanza are the{" "}
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
                native communities in Amazonas and Bolívar states
              </StoryMedia>{" "}
              that have been usurped in both legal and illegal mining economies.
              Colombian guerrilla groups – referred to by the locals as{" "}
              <em>patagomas</em> (rubber feet) – are expanding their mining operations
              in western Venezuela, and recently announced their first mining projects
              in indigenous territories.
            </Paragraph>
          </div>
          <div className='background-color end-of-content'>
            <RelatedNews
              sectionTitle={"Assista também: "}
              title={"O Mata Cavalo"}
              subtitle={"Neste documentário da Amazônia Real, os herdeiros dos ancestrais africanos contam histórias da origem do Complexo Territorial Mato Cavalo." }
              imageUrl={require("images/matacavalo_doc.jpg")}
              href={"//documentario.matacavalo.amazoniareal.com.br/"}
            />
          </div>
          </Container>
      </div>
  </article>
);
