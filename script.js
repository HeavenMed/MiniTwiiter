// npm install -g nodemon -> Instale o nodemon também!
// para usar o nodemon, escreva no terminal -> nodemon nomearquivo.js
// a Seguir vamos importar o módulo ExpressJS do nodeJS através do npm
// Para isso, use : npm install express
// MySQL -> para baixar -> npm install --save sequelize
// Mas para usar precisamente com o MySQL, é necessário baixar um módulo específico do Sequelize
// esse módulo extra é o npm install --save mysql2
// Instale o handlebars na versão express -> npm install express-handlebars
// instalar o bootstrap npm i bootstrap@5.3.0-alpha1
//---------------------------------------Express---------------------------------------------------------------
const express = require('express')
const app = express()
//----------------------------------------'path' p/ express------------------------------------------------------
const path = require('path')
//---------------------------------------BodyParser-------------------------------------------------------------
const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({extend: false}))
    app.use(bodyParser.json())
//---------------------------------------Handlebars------------------------------------------------------------
const handlebars = require('express-handlebars')
    app.engine('handlebars' , handlebars.engine({defaultLayout : 'main'}))
    app.set('view engine' , 'handlebars')
//---------------------------------------------------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "public"))) // o path é necessário importar , se não, não funcionará

// Rotas // Para chamar Rotas de outros arquivos, crie primeiro uma constante com o nome do arquivo
const admin = require('./rotes/admin')
app.use('/admin' , admin)

app.get('/' , (req , res)=>{
})









const Port = 3001
app.listen(Port , ()=>{
    console.log("Servidor Rodando na porta :" + Port)
})









