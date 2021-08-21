# angular_postgres

Running postgresql in docker container
-------
:white_check_mark: `docker container ls` ( -a - include stopped containers )

:white_check_mark: `docker container run -d --name=pg -p 5431:5432 -e POSTGRES_PASSWORD=secret -e PGDATA=/pgdata -v /Users/alexeyivanov/Work/Test/postgres_docker/pgdata:/pgdata postgres` (-p <host machine free port>:<container port>)
  
===> pgdata folder contains postgres files
  
:white_check_mark: `psql -h localhost -p 5431 -U postgres` (password would be 'secret', note the port 5431, not 5432)
  
:white_check_mark: `update config to contain 5431 port`
  
:white_check_mark: `npm run db:create` ==> create a database inside container
  
:white_check_mark: `nmp run db:migrate` ==> create tables inside container
  
:white_check_mark: `docker container stop pg` ==> stops postgres
  
:white_check_mark: `docker container start pg` ===> starts pg (note that the data still exists)
  
  

