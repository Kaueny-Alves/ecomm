let contas = []

let dataAtualFormatada = new Date().toISOString().substring(0,10)

export function creatUserUseCase(nome, email, senha) {

const usuario = {
    id: contas.length + 1,
    name: nome,
    email: email,
    password: senha,
    createdDate: dataAtualFormatada
  }

   contas.push(usuario)

   return console.log("usuario:", usuario)
}



