FROM node:14-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine AS production

COPY --from=development /usr/src/app/dist /usr/share/nginx/html
