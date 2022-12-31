server {
        root /var/www/dev.bryanwnonni.com/build;
        index index.html index.htm index.nginx-debian.html;
        server_name dev.bryanwnonni.com;

        location / {
                try_files $uri $uri/ =404;
        }

        listen 443 ssl; # managed by Certbot
        ssl_certificate /etc/letsencrypt/live/dev.bryanwnonni.com/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/dev.bryanwnonni.com/privkey.pem; # managed by Certbot
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}


server {
        if ($host = dev.bryanwnonni.com) {
                return 301 https://$host$request_uri;
        } # managed by Certbot

        server_name dev.bryanwnonni.com;
        listen 80;
        return 404; # managed by Certbot
}

server {

        root /var/www/bryanwnonni.com/build;
        server_name nonni.dev *.nonni.dev;
        index index.html index.htm index.nginx-debian.html;

       location / {
               try_files $uri $uri/ =404;
       }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/nonni.dev/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/nonni.dev/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = nonni.dev) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = *.nonni.dev) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    server_name nonni.dev;
    listen 80;
    return 404; # managed by Certbot

}
