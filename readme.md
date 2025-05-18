# Home Server Files

This is a collection of docker compose files for my home server. You can see the list of apps that I use in the apps section below.

I prefered dockge because it is easy-to-use, you can deploy any preconfigured apps with one click. Or you can use any other app like portainer to manage and deploy your containerized apps, or you can use docker cli directly.

I put .env files in the stacks folder for each app. You can change all the variables like ports, usernames etc. in the .env file for all apps including dockge. 

I put a data folder on the root. And configured that folder path in the .env file for all apps. This means you can copy this folder and run the apps on any machine in the state where you left.

## usage
- clone this repo
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
- [postgres](https://www.postgresql.org/) [pgadmin](https://www.pgadmin.org/) is a database server
- [mysql](https://www.mysql.com/) [phpmyadmin](https://www.phpmyadmin.net/) is a database server
- [mssql](https://www.microsoft.com/en-us/sql-server) is a database server
- [adminer](https://www.adminer.org/) is a database manager


## License
MIT
