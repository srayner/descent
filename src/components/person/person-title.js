import React from "react";
import styled from "styled-components";
import { fullName, dateAsText } from "../../library/person";
import { ThemeProvider } from "styled-components";
import theme from "../../data/theme";

const Container = styled.div`
  height: 100px;
  background-color: ${props => props.theme.carbon};
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const FullName = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #f0f0f0;
  padding: 0 15px 10px 15px;
`;

const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #f0f0f0;
  padding: 5px 15px;
`;

const PersonTitle = props => {
  const img = props.person.gender === "male" ? "/male.png" : "/female.png";
  const fullname = fullName(props.person);
  const birth = dateAsText(props.person.birth);
  const death = dateAsText(props.person.death);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <img alt="person" src={img} />
        <div>
          <FullName>{fullname}</FullName>
          <Date>BIRTH {birth}</Date>
          <Date>DEATH {death}</Date>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default PersonTitle;
