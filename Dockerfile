# Reference: https://blog.codeexpertslearning.com.br/dockerizando-uma-aplica%C3%A7%C3%A3o-react-js-f6a22e93bc5d


FROM node:12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN rm -rf node_modules
COPY package.json /app/package.json
RUN npm install

CMD ["npm", "start"]