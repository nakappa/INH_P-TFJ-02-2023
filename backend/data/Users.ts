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
				classDone: 'act',
				description: 'Testando o projeto',
				title: 'Teste'
			},
			{
				id: 1,
				classDone: '',
				description: 'Testando',
				title: 'Tarefa'
			},
		]
	}
];