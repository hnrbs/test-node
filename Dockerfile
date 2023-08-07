# ---- Base Node ----
FROM node:20-alpine AS base

# set working directory
WORKDIR /app

# copy project file
COPY package.json .
COPY index.js index.js

RUN npm install --only=production 

RUN ls

CMD npm start