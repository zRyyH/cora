FROM nginx:alpine

ARG SITE_DIR
COPY ${SITE_DIR}/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
