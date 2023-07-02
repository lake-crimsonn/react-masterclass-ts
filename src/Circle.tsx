import styled from "styled-components";

interface ContainerProps {
  bgcolor: string;
  bordercolor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgcolor};
  border-radius: 100px;
  border: 2px solid ${(props) => props.bordercolor};
`;

interface CircleProps {
  bgcolor: string;
  bordercolor?: string;
  text?: string;
}
function Circle({ bgcolor, bordercolor, text = "default text" }: CircleProps) {
  //   const [value, useValue] = useState<number | string>("");
  return (
    <Container bgcolor={bgcolor} bordercolor={bordercolor ?? bgcolor}>
      {text}
    </Container>
  );
}

export default Circle;
