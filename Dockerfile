FROM node:15-alpine3.10 as build-stage

WORKDIR /app/

COPY package*.json ./

RUN npm install -g npm@7.10.0
RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
