import path from 'path';

//definir una ruta de archivo de ejemplo 
const filePath = './data/example.text';

//obetener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

//Obterner el nombre del archivo sin extension
const baseName = path.basename(filePath, '.txt');
console.log('Extencion del archivo', baseName);

//obtener la extencion del archivo 
const extName = path.extname(filePath);
console.log('Extencion del archivo:', extName)
//Crear una ruta unida

const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath);
