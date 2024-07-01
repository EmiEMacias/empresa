//instanciar la libreria mongoose
const mongoose = require('mongoose');
//se decalra la url de la base de datos
const url_db = 'mongodb://localhost:27017/Base3';
//se conecta a la base de datos
mongoose.connect(url_db)
//se usa una promesa para saber si funciona con .then se usa saber si funciona
.then(() =>{
    console.log("si jalo")
})
//el .catch es el que detecta un error y avisa con el console.log 
.catch((err)=> {
    console.log("no jalo")
})
//se declaran los atributos de la base de datos
const libros = new mongoose.Schema({
    name:{
        type:String
    },
    creador:{
        type:String
    },
    fecha:{
        type:String
    },
    productos:{
        type:String
    },
    empleados:{
        type:Number
    },
    paisesdondeseencuentra:{
        type:String
    },
    especialidad:{
        type:String
    }
})
//se declara la cleccion del esquema
const model_student  = new mongoose.model('Informacion',schema_students)
//Se ingresaran datos al modelo
model_student.create({
    name:"Google",
    autor:"Larry page",
    fecha:"4 de septiembre de 1998",
    productos:"Paginas web",
    empleados:1592,
    paisesdondeseencuentra:"Todos",
    especialidad: "paginas web"
})