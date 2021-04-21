FROM node:15-alpine3.10 as build-stage

EXPOSE $PORT
# $PORT

WORKDIR /app/

COPY package*.json ./

RUN npm install -g npm@7.10.0
RUN npm install
# RUN npm install -g serve

COPY . .

RUN npm run build

# CMD ["serve", "-p", "$PORT", "-s", "build"]

FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
