/**
 * PARA LA DEPURACIÓN
 * generalmente para la deputación usamos el console.log
 * Este recursos muestra los errores de archivo javascript
 * para que se muestren los resultados y los errores del archivo ts
 * debemos desconentar: "sourceMap": true,
 * en el archivo tsconfig.json
 */

/**
 * PARA ELIMINAR COMENTARIOS DEL ARCHIVO JS
 * para hacerlo en el archivo tsconfig.json vamos a descomentar
 *     "removeComments": true,  
 */

/**
 * INCLUIR Y EXCLUIR ARCHIVOS Y CARPETAS
 * Por default se excluye de la transpilación la carpeta node_modules
 * para hacerlo vamos al archivo tsconfig.json y en la ultima parte del json
 * agregarmos las siguientes lineas:
 *   
 *},
 * "exclude": [
  *  "seccion6/*.ts"
 * ]
 * 
 * Para este ejemplo ecluímos todos los archivos ts de la carpeta seccion6
 * para que no entren en el proceos de transpilación
 * 
 * para incluir carpertas específicas en el proceso de transpilación
 * agregamos las siguientes lineas  al archivo tsconfig.json
 * 
 *  "exclude": [
 *  "seccion6/*.ts"
 *  ],
 * "include": [
 *   "funciones"
 *  ]
 * 
 * NOTA: hay que tener cuidado con esto por que, en el archivo
 * de salida, solo saldrá la transpilación del contenido de las
 * carpetas declaradas en el include
 */


/**
 * ARCHIVO DE SALIDA
 * Es una buena práctica que todo el cófigo se concentre
 * en un solo archivo de salida, cuando se utilizan frameworks
 * esta tarea ya está automatizada, pero en este caso debemos
 * configurar el archivo tsconfig.json para generar el archivo.
 * 
 *  y descomentamos y agregamos el nombre del archivo a la siguiente
 * linea:
 * "outFile": "./main.js",  
 * si aparece un error puedes cambiar al valor "amd" 
 * la siguiente linea: 
 * "module": "commonjs",  quedaría así: "module": "amd", 
 */