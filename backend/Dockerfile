FROM node:14-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:14-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY --from=development /usr/src/app/dist ./dist

CMD ["npm", "run", "start:prod"]
