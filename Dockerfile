FROM node:10.16.3-alpine

RUN apk --update add tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata && \
    rm -rf /var/cache/apk/*

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY . /home/node/app
    
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
