
    FROM php:8.0-fpm
    
    # RUN apt-get update && apt-get install -y 
    RUN apt-get update && \
         apt-get install -y \
             libzip-dev \
             && docker-php-ext-install zip
    RUN docker-php-ext-install mysqli pdo pdo_mysql
    #         curl \
    #         wget \
    #         libfreetype6-dev \
    #         libjpeg62-turbo-dev \
    #         libmcrypt-dev \
    #     && pecl install mcrypt-1.0.1 \
    #     && docker-php-ext-install -j$(nproc) iconv mbstring mysqli pdo_mysql zip \
    #     && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    #     && docker-php-ext-install -j$(nproc) gd \
    #     && docker-php-ext-enable mcrypt
    
    ADD php.ini /usr/local/etc/php/conf.d/40-custom.ini
    
    WORKDIR /var/www
    
    CMD ["php-fpm"]
