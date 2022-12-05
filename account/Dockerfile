FROM node:18

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

ENTRYPOINT npm start


# rodar esse comando no terminal = docker build -t eccom/account .
# docker image ls / pegar o id da image
# docker run id da image