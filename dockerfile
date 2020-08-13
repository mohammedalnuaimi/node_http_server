FROM node
COPY . /home
WORKDIR /home
RUN npm install
CMD node http_server.js