FROM node
COPY . /home
WORKDIR /home
RUN npm install
EXPOSE 80:80
CMD node http_server.js
