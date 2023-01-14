
import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { randomUUID } from 'crypto';

test('Deve retornar um usuario criado', async () => {
    const account = await createUserUseCase('kaueny', 'kaueny@email.com', '123456');
    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0, 10);
    const esperado = {
        id,
        createdDate,
        name: "kaueny",
        email: "kaueny@email.com",
    }
    const retornado = account;
    expect(retornado).toBe(esperado)

    console.log("esperado: ", esperado)
    console.log("retornado: ", retornado)
})

test('Deve retornar um erro se usuario ja estiver criado no banco', async () => {
    const account = await createUserUseCase('kaueny', 'kaueny@email.com', '123456');
    const esperado = "Account already exists kaueny@email.com"
    const retornado = account;
    expect(retornado).toBe(esperado)

    console.log("esperado: ", esperado)
    console.log("retornado: ", retornado)
})
