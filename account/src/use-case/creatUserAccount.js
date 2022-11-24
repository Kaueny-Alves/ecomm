let contas = []
let date = new Date().toLocaleString("pt-br").substring(0,10);

export function creatUserUseCase(nome, email, senha) {

const user = {
    id: contas.length + 1,
    name: nome,
    email: email,
    password: senha,
    createdDate: date
  }

   contas.push(user)

   return console.log("contas:", contas)
}



