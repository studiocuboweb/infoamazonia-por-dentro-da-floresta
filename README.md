# infoamazonia-por-dentro-da-floresta
Especial: Olhando por dentro da floresta (Série de reportagens em REACT)

# PRÉ REQUISITOS
- Instalar o docker: https://docs.docker.com/install/
- Instalar o git: https://git-scm.com/downloads

# INSTALAÇÃO DO SITE

- CLONANDO O SITE DO GITHUB
git clone https://github.com/studiocuboweb/infoamazonia-por-dentro-da-floresta.git

- INSTALANDO O NPM E AS DEPENDENCIAS
docker run -v "$PWD":/usr/src/app -w /usr/src/app node:8 yarn install

- FAZENDO O BUILD
docker-comose build


# LIGANDO O DOCKER
docker-compose up (com visualização de log)
docker-compose up -d (rodar em background)

# DESLIGANDO O DOCKER
docker-compose down


# HEROKU DEPLOY
https://blog.heroku.com/deploying-react-with-zero-configuration

# INSTALAR HEROKU:
https://devcenter.heroku.com/articles/heroku-cli

- Logar no heroku com o login e senha cadastrados no site
heroku login

- verificando APP atual
heroku apps:info

# DEPLOY EM infoam-template-video
https://infoam-template-video.herokuapp.com/

heroku git:remote -a infoam-template-multimedia
git checkout related-news
git push heroku master

# DEPLOY EM infoam-template-multimedia
https://infoam-template-multimedia.herokuapp.com/

heroku git:remote -a infoam-template-video
git checkout template-video
git push heroku master

# OUTROS PROCEDIMENTOS:
- Apagando o local Storage do browser:
Abrir o console dev do browser e rodar:
localStorage.clear()
localStorage.removeItem('elapsed-time')

#BUILD EM PRODUCAO SEM DOCKER
1- Instalar o yarn (falei node, mas estamos utilizando o yarn)
https://yarnpkg.com/lang/en/docs/install/#debian-stable

2- Instalar as dependências
Na raiz do projeto onde está o package.json rodar o comando:

yarn install

Vai instalar as dependencias na pasta node_modules 

3- Fazer o build
na raiz do projeto rodar o comando:

npm run build
