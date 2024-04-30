# Usar a imagem oficial do PHP com Apache como base
FROM php:7.4.30-apache-buster

# Copiar os arquivos do sistema para o diretório raiz do Apache
COPY . /var/www/html/

# Habilitar o módulo headers_module do Apache
RUN a2enmod headers

# Definir a configuração do PHP para exibir erros no navegador
RUN echo "display_errors = On" >> /usr/local/etc/php/php.ini

# Configurar o Apache para permitir a reescrita de URLs
RUN a2enmod rewrite
