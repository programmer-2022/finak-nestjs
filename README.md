## Instalación

1. Instalaremos el gestor de depend1encias **pnpm**
   mediante el siguiente comando.

```bash
> npm install -g pnpm
```

2. Se debe instalar las dependencias del proyecto
   ejecutando el siguiente comando.

```bash
> pnpm install
```

## Ejecutar aplicación

Antes de ejecutar nuestro proyecto
debemos tener **docker** instalado
para levantar los servicios de base de datos.

Si estamos en Linux ejecutaremos en una terminal el script que esta en la raiz del proyecto denominado **docker-up.sh** el cuál se encargará de crear los servicios necesarios para el correcto funcionamiento del proyecto.

```bash
> ./docker-up.sh
```

Otra forma de levantar los servicios es con el siguiente comando.

```bash
> docker-compose -f ./docker-compose-local.yml up -d
```

```bash
> pnpm run start
```

Podemos acceder al API haciendo click [aquí](http://localhost/api/docs) ó ingresando
al navegador web y tipar en la URL **http://localhost/api/docs**
