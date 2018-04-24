FROM node:9.11-slim

COPY package.json /opt/api-proxy/
COPY server.js /opt/api-proxy/
RUN cd /opt/api-proxy; npm install

EXPOSE 8010
WORKDIR /opt/api-proxy
ENTRYPOINT node server.js
