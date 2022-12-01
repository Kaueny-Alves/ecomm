
import { createUserUseCase } from "../src/use-case/createUserAccount.js";

const user = await createUserUseCase("kau", 'ka@gmail.com', '123456')

console.log(user)