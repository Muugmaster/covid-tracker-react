FROM node:15-alpine3.10

EXPOSE $PORT

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install -g npm@7.10.0
RUN npm install
RUN npm install -g serve

COPY . .

RUN npm run build

CMD ["CMD" "serve" "-p" "$PORT" "-s" "build"]
