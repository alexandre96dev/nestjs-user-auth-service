import { randomInt } from "node:crypto";

export class UserEntity {
    id?: number
    nome: string;
    email: string;
    senha: string;
    data_criacao?: Date;
    data_atualizacao?: Date;

    constructor(nome: string, email: string, senha: string) {
        this.id = randomInt(99999);
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.data_criacao = new Date();
        this.data_atualizacao = new Date();
    }
}