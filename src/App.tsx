import React, { useState } from "react";
import Circle from "./Circle";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [name, setName] = useState("");
  const OnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setName(value);
  };
  const OnSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`username: ${name}`);
  };
  return (
    <div>
      <Circle bgcolor="teal" bordercolor="yellow" text="text from App" />
      <Circle bgcolor="tomato" />
      <form onSubmit={OnSubmit}>
        <input
          name={name}
          onChange={OnChange}
          type="text"
          placeholder="username"
        ></input>
        <button>submit</button>
      </form>
      <Container>
        <Title>protected</Title>
      </Container>
    </div>
  );
}

export default App;
