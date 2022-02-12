# develop stage
FROM node:alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
RUN yarn global add @quasar/cli
COPY . .

# build stage
FROM develop-stage as build-stage
ARG QENV
RUN set QENV=${QENV} && quasar build

# production stage
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
# RUN echo $(awk '/index.htm/ { print; print "try_files \$uri \$uri/ /index.html;"; next }1' /etc/nginx/conf.d/default.conf) > /etc/nginx/conf.d/default.conf
RUN sed -i.bak '10i\
		try_files \$uri \$uri/ /index.html;\
' /etc/nginx/conf.d/default.conf
EXPOSE 90
CMD ["nginx", "-g", "daemon off;"]