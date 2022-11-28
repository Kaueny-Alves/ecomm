let contas = []

export function creatUserUseCase(nome, email, senha) {
  const dataAtualFormatada = new Date().toISOString().substring(0, 10)
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



