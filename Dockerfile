FROM nginx:alpine

COPY ./data/nginx/app.conf /etc/nginx/conf.d
COPY ./src /var/www/jessereitz.com
