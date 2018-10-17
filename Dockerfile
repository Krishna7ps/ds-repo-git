FROM centos
RUN yum update -y && yum install httpd -y
EXPOSE 80
COPY html/index.html /var/www/html/
CMD [ "systemctl","start", "httpd" ]
