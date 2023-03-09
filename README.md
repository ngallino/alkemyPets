<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Instalar

```bash
TypeORM
mysql
class-validator class-transformer
```

## Modo de uso de la API

```bash
La API esta pensada para una veterinaria.
Para poder utilizarla correctamente se deben crear primero los `usuarios`.
Luego se pueden crear 'cats' a los cuales se les debe especificar id de 'usuario' para relacionarlos.
En caso de borrar el usuario tambien se borran los gatos relacionados.

Los Modulos completos son los de 'Cats' y 'Users'.
```

## Aclaraciones

```bash
Al parecer no hay una forma muy clara de como hacer el repositorio de TypeOrm separado de nuestro serivcio. Aunque tal vez no sea la mejor practica logre hacerlo funcionar que creo era la idea del ejercicio. 
```
