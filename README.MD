# **CURSO DE TYPESCRIPT DE DEVTELLES**

## **CREANDO EL ENTORNO DEL CURSO**

```text
mkdir TypeScript
cd TypeScript
mkdir bases 
cd bases
```

## **Instalaciones necesarias**

```text
Debemos instalar:
- Node
- NPM
Instalamos un módulo de NPM de forma global, para que nos ayude a las transpilación de de tyscript a código javascript
Fuente: https://www.typescriptlang.org/download

Para comprobar si ya lo tenemos instalado hacemos:
```

```bash
node --version
```

```text
También hacemos la instalación del módulo typescript:
```

```bash
npm install -g typescript
```

```text
 y comprobamos que se haya instalado correctamente: 
 ```

 ```bash
  tsc --version
```

## **Crear archivo config**

```text
Lo siguiente nos crear un archivo config, donde más adelante podemos personalizar qué tan estricto será tyscrip para trabajar 
```

```bash
tsc --init
```

## **Crear un archvo index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bases de TypeScript</title>
</head>
<body>
<script src="app.js"></script>
</body>
</html>
```

## **Crear archivo app.ts**

```text
El contenido del archivo, a manera del siguiente será el que se muestra a continuación
```

```typescript
const msg: string = 'Hola mundo';
console.log(msg);
```

## **Transpilación de archivos"

```text
La transpilación es un proceso de traducción de  lenguaje: de typescript a javascritp.

Para hacer la transpilación de un archivo en específico, nos ubicaremos en donde se encuentra el archivo, y a continuación  
ejecutaremos tsc + el nombre del archivo, tal como se ejecuta en el siguiente ejemplo: 
```

```bash
tsc app.ts
```

```text
 y eso genera o actualiza un un archivo app.js el cual es el que está vinculado a nuestro index.html y en la consola podemos ver el console.log

 El contenido de app.js es el siguiente:
```

```javascript
var msg = 'Hola mundo';
console.log(msg);
```

```text
Para automatizar el proceso, y que cada cambio de typescript se vaya transpilando automaticamente a su archivo javascript debemos dejecutar el siguiente comando con consola:
```

```bash
tsc -w
```

```text
Typescript en modo observador, sirve para activar que todo cambio en algún archivo TypeScript, genere o actualice automáticamente su archivo js, y esto evita el trabajo manual de hacerlo para cada caso.
```
