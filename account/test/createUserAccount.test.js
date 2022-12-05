
import { createUserUseCase } from "../src/use-case/createUserAccount.js";

    console.log('Creating account ======= ')
    const account = await createUserUseCase('ka', 'email@email.com', '123456');
    console.log("account: ", account)