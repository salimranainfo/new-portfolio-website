# Stage 1 - the build process
FROM node:18.17.0 as build-stage

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN yarn install

# Bundle app source
COPY . .

RUN yarn generate


# Stage 2 - the production environment
FROM nginx:1.21.1-alpine as production-stage

COPY --from=build-stage /usr/src/app/.output /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

