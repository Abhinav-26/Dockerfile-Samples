#Base Image
From node:12.18.1

#Seeting up env as production
ENV NODE_ENV=production

#Making /app dir as working dir
WORKDIR /app

#Adding complete files and dirs in app dir in container
ADD . /app/

#Installing dependencies
RUN npm install --production

#Starting Server
CMD [ "node", "src/index.js" ]

