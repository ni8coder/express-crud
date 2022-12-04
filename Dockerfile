FROM node:16.15.1-alpine3.16

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
WORKDIR /app
COPY --chown=app:app . .

COPY package*.json ./
RUN npm install
COPY . .

ENV NODE_ENV=development PORT=3001
EXPOSE 3001

CMD ["npm", "run", "dev"]