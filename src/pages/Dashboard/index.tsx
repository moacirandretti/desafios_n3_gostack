import React, { useState, FormEvent } from 'react'
import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi'
import { Title, Form, Repository, Error } from './style'

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
	const [inputError, setIputError] = useState('')

	async function handleAddRespository(
		event: FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault()

		if (!newRepo) {
			setIputError('Digite autor/nome do repositório!')
			return
		}
		try {
			const response = await api.get<Repository>(`repos/${newRepo}`)
			console.log(response.data)

			const repository = response.data
			setRepositories([...repositories, repository])
			setNewRepo('')
			setIputError('')
		} catch (err) {
			setIputError('Erro ao buscar repositório! Verifique o nome insetido.')
		}
	}

	return (
		<>
			<img src={logoImg} alt="GitHub Explorer" />
			<Title>Explore repositórios no GitHub</Title>

			<Form hasError={!!inputError} onSubmit={handleAddRespository}>
				<input
					value={newRepo}
					placeholder="Digite o nome do repositório"
					onChange={(e) => setNewRepo(e.target.value)}
				/>
				<button type="submit">Pesquisar</button>
			</Form>
			{inputError && <Error>{inputError}</Error>}
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
