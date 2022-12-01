FROM node:18

WORKDIR /app

ADD package.json package-lock.json /app/

RUN npm install

COPY . .

ENTRYPOINT npm start


# rodar esse comando no terminal = docker build -t eccom/account .
# docker image ls / pegar o id da image
# docker run id da image