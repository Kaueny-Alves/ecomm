let contas = []

export function creatUserUseCase(nome, email, senha) {

const user = {
    id: contas.length + 1,
    name: nome,
    email: email,
    password: senha,
    createdDate: new Date()
  }

   contas.push(user)
   return  user
}

creatUserUseCase("kaueny", 'ka@gmail.com', '123456')
creatUserUseCase("rafael", 'rafa@gmail.com', '123456')

console.log("contas:", contas)