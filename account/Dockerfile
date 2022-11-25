FROM node:14

WORKDIR /account

ADD package.json package-lock.json /account/

RUN npm install

COPY . .

ENTRYPOINT npm test


# rodar esse comando no terminal = docker build -t eccom/account .