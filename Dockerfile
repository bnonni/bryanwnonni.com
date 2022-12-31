FROM node:18-alpine 

ENV NODE_ENV development
ENV PORT 8081

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8081

CMD [ "yarn", "run", "dev" ]