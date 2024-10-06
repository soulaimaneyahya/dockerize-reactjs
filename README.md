# dockerize-react-app

## Docker run

### Running node-api

```sh
$docker build -t xnode:v1 .
```

```sh
$docker run --name xxnode_c -p 4000:4000 -d  xnode:v1
```

### Running react-app

```sh
$docker build -t xreact:v1 .
```

```sh
$docker run --name xxreact_c -p 3000:3000 -d  xreact:v1
```

## Docker compose run

```sh
$docker-compose run
```

## Docker down

```sh
$docker-compose down --rmi all -v
```
