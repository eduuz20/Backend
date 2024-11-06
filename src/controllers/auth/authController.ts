import { FastifyReply, FastifyRequest } from "fastify";
import { authService } from ''

import { loginValidation } from "./validation/"

class AuthController {
  async login(request: FastifyRequest, reply: FastifyReply) {
    const res = await loginValidation(request);
    
  }
}