import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
	font-size: 48px;
	margin-top: 80px;
	max-width: 450px;
	line-height: 76px;
`

export const Form = styled.form`
	margin-top: 40px;
	max-width: 700px;
	display: flex;

	input {
		flex: 1;
		height: 70px;
		padding: 0 24px;
		border: 0;
		border-radius: 5px 0 0 5px;
		color: #3a3a3a;

		&::placeholder {
			color: #a8a8b3;
		}

		&:focus {
			outline: none;
		}
	}

	button {
		width: 210px;
		height: 70px;
		border-radius: 0 5px 5px 0;
		background: #04d361;
		border: 0;
		color: #fff;
		font-weight: 700;
		transition: background-color 0.6s;

		&:hover {
			background: ${shade(0.2, '#04d361')};
		}
	}
`
