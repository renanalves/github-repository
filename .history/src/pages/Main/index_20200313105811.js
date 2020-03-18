import React from 'react';

import { FaGithubAlt } from 'react-icons/fa';

import { Container, Form } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>
      <Form onSubmit={() => { }}>
        <input type="text" placeholder="Adicionar repositório" />
      </Form>
    </Container>
  );
}
