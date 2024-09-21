/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';
import { UserEntity } from '../../entity/user.entity';

describe('UserEntity', () => {
    it('deve criar um usuário com nome, email, senha, data_criacao e data_atualizacao', () => {
        const usuario =  new UserEntity('Ana', 'ana@example.com', 'iuewyeiqwuqiwyeiquwyqw')
        expect(usuario.nome).toBe('Ana')
        expect(usuario.email).toBe('ana@example.com')
    });
});
