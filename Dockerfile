#FROM node:current-slim@sha256:b71737516643fa2c1df6d5a76ab5d4e7e959b3c40e494ff2b9587be2af9efd55 as web-app-builder
FROM node:12.7-alpine AS build
RUN mkdir -p /app
WORKDIR /app

COPY ./package-lock.json package.json ./
RUN npm i
COPY . /app

RUN npm run build:docker





#FROM bitnami/nginx@sha256:9ade29ac69417074d836fe4ef23bc3885afffe06f6212e5204c94f1efba19752

#COPY ./nginx/ /opt/bitnami/nginx/conf/

# Copy built app from prior stage
#COPY --from=web-app-builder /app/dist/angular-starter-project /var/www

#EXPOSE 8080
#EXPOSE 8443

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/angular-starter-project /usr/share/nginx/html
