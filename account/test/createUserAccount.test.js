
import { createUserUseCase } from "../src/use-case/createUserAccount.js";

    console.log('Creating account ======= ')
    const account = await createUserUseCase('kaueny', 'kaueny@email.com', '123456');
    console.log("account: ", account)