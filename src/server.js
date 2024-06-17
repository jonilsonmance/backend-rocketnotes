require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations") // coloca em uma variavel para depois fazer a instanciação da função que realiza a coneção com o banco de dados
const AppError = require("./utils/AppError")
const uploadConfig = require("./configs/upload")

const express = require("express")
const routes = require("./routes")

migrationsRun();

const app = express();
app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

app.use((error, request, response, next)=>{ // sempre utilizar esses parametros nessa sequencia para extrair os erros
  if(error instanceof AppError){
    return response.status(error.statusCode).json(({
      status:"error",
      message: error.message
    }))
  }

  console.error(error);

  return response.status(500).json({
    status:"error",
    message: "Internal server error"
  })
})

const PORT = 3333

app.listen(PORT, ()=> console.log(`Server is running on Port ${PORT}`))

