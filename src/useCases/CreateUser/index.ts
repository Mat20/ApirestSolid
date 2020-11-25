import { PostegresUserRepository } from "../../repositories/implementations/PostegresUserRepository";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider()
const postegresUserRepository =  new PostegresUserRepository()


const createUserUseCase = new CreateUserUseCase(
  postegresUserRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }