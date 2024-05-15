import React, { useState, useRef, } from "react";
import axios from "axios";
import Avatar from '../../assents/avatar.svg';
import Arrow from '../../assents/arrow.svg';

import {
    
    Container,
    H1,
    Image,
    ContainerItens,
    InputLabel,
    Input,
    Button,
    
} from "./styles";
//import { toHaveAccessibleErrorMessage } from '@testing-library/jest-dom/matchers';


function App() {
    const [users, setUsers] = useState([]);
    const inputName = useRef();
    const inputAge = useRef();

    async function addNewUser() {

        const { data: newUser } = await axios.post("http://localhost:3001/users", {
            name: inputName.current.value,
            age: inputAge.current.value,
        });

        setUsers([...users, newUser]);

    }

      return (
        <Container>
            <Image alt='logo-imagem' src={Avatar} />
            <ContainerItens>
                <H1>Olá!</H1>

                <InputLabel>Nome</InputLabel>
                <Input ref={inputName} placeholder='Nome' />

                <InputLabel>Idade</InputLabel>
                <Input ref={inputAge} placeholder='Idade' />


                <Button onClick={addNewUser}>
                    Cadastrar<img alt='seta' src={Arrow} />
                </Button>

              </ContainerItens>
        </Container>
    );

}
export default App;