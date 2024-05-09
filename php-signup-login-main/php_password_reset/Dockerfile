FROM php:7.4.30-apache-buster

RUN docker-php-ext-install pdo_mysql

COPY ./ /var/www/html/

RUN chmod -R 777 /var/www/html/

# Habilitar o módulo headers_module do Apache
RUN a2enmod headers

RUN docker-php-ext-install mysqli

# Definir a configuração do PHP para exibir erros no navegador
RUN echo "display_errors = On" >> /usr/local/etc/php/php.ini

# Configurar o Apache para permitir a reescrita de URLs
RUN a2enmod rewrite