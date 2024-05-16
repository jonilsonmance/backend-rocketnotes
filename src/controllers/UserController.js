const AppError = require("../utils/AppError")

class UserController{ // Atraves dessa classe posso  er varias funções
/*
Função que uma coontroller pode ter:

-index -> GET para listar varios registros.
-show -> GET para exibir um registro especifico
-create -> POST  para criar um registro
-update -> PUT para atualizar um registro.
-delete -> DELETE para remover um registro.

No maximo um controller vai ter esses metodos.

*/

create(request, response){
  const {name, email, password} = request.body

  if(!name){
    throw new AppError("Nome é Obrigatório") // erro do lado do cliente, AppError foi criado para lidar com o erro de forma mais limpa
  }

  response.status(201).json({name, email, password})
}



}

module.exports = UserController;