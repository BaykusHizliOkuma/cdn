
################################################################################
# Add Nginx server block
################################################################################
rm -rf /etc/nginx/sites-enabled/cdn.baykushizliokuma.com
nginx -s reload
nginx -t
cat > /etc/nginx/sites-enabled/cdn.baykushizliokuma.com <<- EOM
server{
  listen 80;
  listen [::]:80;

  root /root/BaykusHizliOkuma/cdn;

  index index.html index.htm index.nginx-debian.html;
  
  server_name cdn.baykushizliokuma.com;

  add_header Access-Control-Allow-Origin '*';

}
EOM
nginx -t
nginx -s reload

gpasswd -a www-data $USER
chmod g+x $HOME/
chmod g+x $HOME/BaykusHizliOkuma/
chmod g+x $HOME/BaykusHizliOkuma/cdn/
nginx -s reload

sudo certbot --nginx -d cdn.baykushizliokuma.com
nginx -s reload


