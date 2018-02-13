FROM node:8.5.0

ENV WORKDIR=/usr/src/app

RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

COPY package.json $WORKDIR
RUN npm install

VOLUME [ "$WORKDIR/node_modules" ]

EXPOSE 4201
CMD npm start