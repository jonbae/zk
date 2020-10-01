FROM node
WORKDIR /app/zk_frontend
COPY package.json /app/zk_frontend
RUN npm install
COPY . /app/
EXPOSE 3000
CMD ["npm", "start"]