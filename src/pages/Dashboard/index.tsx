import React from 'react'
import logoImg from '../../assets/logo.svg'
import { Title, Form, Repository } from './style'
import { FiChevronRight } from 'react-icons/fi'

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logoImg} alt="GitHub Explorer" />
			<Title>Explore repositórios no GitHub</Title>

			<Form>
				<input placeholder="Digite o nome do repositório" />
				<button type="submit">Pesquisar</button>
			</Form>

			<Repository>
				<a href="#">
					<img
						src="https://avatars1.githubusercontent.com/u/61529411?s=460&u=16cf6d51da44c338f89183b7d97e72a10fffa15a&v=4"
						alt="Alt"
					/>

					<div>
						<strong>Login System Address</strong>
						<p>Simple CRUD system with JS, React JS and JSON Server</p>
					</div>

					<FiChevronRight size={20} />
				</a>

				<a href="#">
					<img
						src="https://avatars1.githubusercontent.com/u/61529411?s=460&u=16cf6d51da44c338f89183b7d97e72a10fffa15a&v=4"
						alt="Alt"
					/>

					<div>
						<strong>Login System Address</strong>
						<p>Simple CRUD system with JS, React JS and JSON Server</p>
					</div>

					<FiChevronRight size={20} />
				</a>

				<a href="#">
					<img
						src="https://avatars1.githubusercontent.com/u/61529411?s=460&u=16cf6d51da44c338f89183b7d97e72a10fffa15a&v=4"
						alt="Alt"
					/>

					<div>
						<strong>Login System Address</strong>
						<p>Simple CRUD system with JS, React JS and JSON Server</p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repository>
		</>
	)
}

export default Dashboard
