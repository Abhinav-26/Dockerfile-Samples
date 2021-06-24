#Base Image
From node:12.18.1

#Making /app dir as working dir
WORKDIR /app

#Adding complete files and dirs in app dir in container
ADD . /app/

#Installing dependencies
RUN npm install 

#Starting Server
CMD [ "yarn", "start" ]