FROM nginx:alpine

COPY ./data/nginx/app.conf /etc/nginx/conf.d
COPY . /var/www/jessereitz.com
