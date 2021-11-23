FROM node:alpine


WORKDIR /shopping-app-client/src
ENV PATH /shopping-app-client/node_modules/.bin

COPY --from=build /shopping-app-client .
COPY package.json ./
COPY package-lock.json ./
RUN yarn start
RUN npm start react-scripts@3.4.1 -g --silent

COPY . ./
CMD ["yarn", "start"]