import { User } from '../types/User';

export const users: Array<User> = [
	{
		id: 0,
		name: 'Inhangá Silveira',
		cpf: 29109875077,
		password: '123123',
		tasks: [
			{
				id: 0,
				act: true,
				description: 'Testando o projeto',
				title: 'Teste'
			},
			{
				id: 1,
				act: false,
				description: 'Testando',
				title: 'Tarefa'
			},
		]
	}
];