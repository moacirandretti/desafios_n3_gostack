import React, { useState, FormEvent } from 'react'
import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi'
import { Title, Form, Repository } from './style'

interface Repository {
	full_name: string
	description: string
	html_url: string
	owner: {
		login: string
		avatar_url: string
	}
}

const Dashboard: React.FC = () => {
	const [repositories, setRepositories] = useState<Repository[]>([])
	const [newRepo, setNewRepo] = useState('')

	async function handleAddRespository(
		event: FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault()
		const response = await api.get<Repository>(`repos/${newRepo}`)
		console.log(response.data)

		const repository = response.data
		setRepositories([...repositories, repository])
		setNewRepo('')
	}

	return (
		<>
			<img src={logoImg} alt="GitHub Explorer" />
			<Title>Explore repositórios no GitHub</Title>

			<Form onSubmit={handleAddRespository}>
				<input
					value={newRepo}
					placeholder="Digite o nome do repositório"
					onChange={(e) => setNewRepo(e.target.value)}
				/>
				<button type="submit">Pesquisar</button>
			</Form>

			<Repository>
				{repositories.map((repository) => (
					<a
						key={repository.full_name}
						href={`https://github.com/${repository.full_name}`}
					>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>

						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>

						<FiChevronRight size={20} />
					</a>
				))}
			</Repository>
		</>
	)
}

export default Dashboard
