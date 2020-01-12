FROM nginx:1.17.7-alpine

COPY ./data/nginx/app.conf /etc/nginx/conf.d
COPY ./src /var/www/jessereitz.com
