# Step 1

FROM node:10-alpine as build-step
RUN mkdir /app

COPY package.json /app

WORKDIR /app

RUN yarn install

COPY . /app

RUN yarn build


# Step 2

FROM node:10-alpine as serve-step

RUN yarn global add serve

WORKDIR /app

COPY --from=build-step /app/build .

CMD ["serve", "-p", "3000", "-s", "."]
