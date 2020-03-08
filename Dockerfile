FROM nginx:1.17.7-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./data/nginx/app.conf /etc/nginx/conf.d
COPY ./src /var/www/jessereitz.com

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
