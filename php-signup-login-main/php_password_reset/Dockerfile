FROM php:7.4.30-apache-buster

# Instalar dependências
RUN apt-get update && apt-get install -y \
    git \
    unzip

# Instalar o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instalar o PHPMailer com o Composer
RUN composer require phpmailer/phpmailer

# Instalar extensões PHP necessárias
RUN docker-php-ext-install pdo_mysql mysqli

# Copiar os arquivos do seu projeto para o diretório raiz do Apache
COPY ./ /var/www/html/

# Dar permissões adequadas aos arquivos
RUN chmod -R 777 /var/www/html/

# Habilitar o módulo headers_module do Apache
RUN a2enmod headers

# Definir a configuração do PHP para exibir erros no navegador
RUN echo "display_errors = On" >> /usr/local/etc/php/php.ini

# Configurar o Apache para permitir a reescrita de URLs
RUN a2enmod rewrite
