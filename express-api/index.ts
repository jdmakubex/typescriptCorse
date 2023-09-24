/**
 * TypeScript, no viene originalmente para trabajar con node, para hacer la integración
 * npm init
 * node index
 * npm install express
 * tsc --init
 * agregarmos una carpeta llamada dist al proyecto
 * en el tsconfig.json desconemtamos "outDir": "./dist",    y agregamos dist al path
 * 
 * Para eliminar los errores, se requiere una importación de express y también
 * la intalación de los archivos de declación de definiciones de express de modo 
 * de desarrollo, Podemos tener ayuda con control + . o poniendo en consola: 
 * npm i --save-dev @types/express 
 */


import express from 'express';
//const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.status(401).json({
        ok: false,
        msg: 'No hay token en la petición'

    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})