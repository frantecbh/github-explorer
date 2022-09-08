import React, { useEffect, useState, FormEvent } from "react";
import { Form, Repositories, Title, Error } from "./styles";

import logoImg from '../../assets/logo.svg'
import { FiChevronRight } from "react-icons/fi";
import { api } from "../../services/api";


interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }

}


export function Dashboard() {

    const [newRepo, setNewRepo] = useState('')
    const [inputError, setInputError] = useState('')
    const [repositories, setRepositories] = useState<Repository[]>([])


    async function handelAddRepository(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!newRepo) {
            setInputError("Favor informar autor/nome do repositório")
            return
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`)
            const repository = response.data;
            setRepositories(state => [...state, repository])

            setNewRepo('')
            setInputError('')
        } catch (error) {
            setInputError('Erro na busca por este repositório')
            setNewRepo('')
        }

    }


    return (
        <>
            <img src={logoImg} />
            <Title>Explore repositórios no GitHub</Title>
            <Form hasError={!!inputError} onSubmit={handelAddRepository}>
                <input
                    placeholder="Digite autor/nome do repositório"
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                />
                <button type="submit">Pesquisar</button>

            </Form>


            {inputError && <Error>{inputError}</Error>}

            <Repositories>

                {
                    repositories.map(repository => (
                        <a key={repository.full_name} href="teste">
                            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description === null ? 'No description' : repository.description}</p>
                            </div>
                            <FiChevronRight size={20} />
                        </a>

                    ))
                }



            </Repositories>
        </>
    )
}