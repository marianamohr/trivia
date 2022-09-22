FROM node:16
WORKDIR /app
EXPOSE 3000
ADD node_modules.tar.gz .
COPY . .
ENTRYPOINT [ "npm" ]
CMD [ "start" ]