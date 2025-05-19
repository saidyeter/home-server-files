# Home Server Files

This is a collection of docker compose files for my home server. You can see the list of apps that I use in the apps section below.

I prefered dockge because it is easy-to-use, you can deploy any preconfigured apps with one click. Or you can use any other app like portainer to manage and deploy your containerized apps, or you can use docker cli directly.

I put .env files in the stacks folder for each app. You can change all the variables like ports, usernames etc. in the .env file for all apps including dockge. 

I put a data folder on the root. And configured that folder path in the .env file for all apps. This means you can copy this folder and run the apps on any machine in the state where you left.

## requirements
- node.js for the configuring script
- docker and docker-compose to deploy the apps

## usage
- clone this repo
- open the configurer.js file and change the user name and email
- run `node configurer.js` from terminal in the root folder, this will update the .env files by changing the variables, like usernames, data folders etc and generating passwords
- cd into the repo/stacks/dockge folder
- run `docker-compose up -d`, this will start the dockge container 
- go to http://localhost:5001 to see the dockge dashboard and then you can deploy any other apps

## apps
- [dockge](https://github.com/louislam/dockge) is a docker compose.yaml oriented container manager
- [portainer](https://www.portainer.io/) is a docker container manager
- [nginx-proxy-manager](https://nginxproxymanager.com/guide/) is a reverse proxy manager
- [uptime-kuma](https://github.com/louislam/uptime-kuma) is a monitoring tool
- [minio](https://min.io/docs/minio/container/index.html) is a object storage server
- [rabbitmq](https://www.rabbitmq.com/) is a message broker 
- [postgres](https://www.postgresql.org/) [pgadmin](https://www.pgadmin.org/) is a database server and a database manager
- [mysql](https://www.mysql.com/) [phpmyadmin](https://www.phpmyadmin.net/) is a database server and a database manager
- [mssql](https://www.microsoft.com/en-us/sql-server) is a database server
- [adminer](https://www.adminer.org/) is a database manager

## useful links
- [configureing ssl for a domaing with nginx-proxy-manager and cloudflare](https://medium.com/@life-is-short-so-enjoy-it/homelab-nginx-proxy-manager-setup-ssl-certificate-with-domain-name-in-cloudflare-dns-732af64ddc0b)
- [setting cloudflare tunnels](https://www.youtube.com/watch?v=ey4u7OUAF3c)
- [backup your devices to home server using syncthing](https://www.youtube.com/watch?v=PSx-BkMOPF4&t=259s)

## contributing
If you want to add new app;

- fork this repo
- create a new folder in the stacks folder
- create a compose.yaml file in the new folder
- extract all the variables from compose.yaml file like ports, credentials, backup directories and put them in .env file in the new folder
- use $USER_NAME, $GENERATE_PASSWORD etc in .env files to replace the variable vaules
- do not forget to add the data/backup directories to compose.yaml file as volumes and .env file
- add the app to the apps section in the readme.md file
- create a pull request 

> if I dont answer your pull request somehow, you can reach me with the contact details in my github profile

## License
MIT
