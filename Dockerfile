FROM node:14-alpine as trivia
EXPOSE 3000
WORKDIR /app
COPY . .
CMD ["npm", "start"]