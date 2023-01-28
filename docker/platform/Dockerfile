FROM node:16.14.2-alpine3.15
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S api-user
COPY . /opt/app
RUN npm install
RUN chown -R api-user /opt/app
USER api-user
EXPOSE 4200
CMD ["npm", "start"]
