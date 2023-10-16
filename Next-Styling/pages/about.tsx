// import styles from "../styles/About.module.css";
import Header from "@/Components/Header";
import styles from "../styles/About.module.scss";
import styled from "styled-components";
import type { ReactNode, ComponentType } from "react";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors?.primary};
`;

const About = () => {
  return (
    <div className='mt-10'>
      <Title>Styled Component</Title>
      <h2 className='text-3xl font-bold underline'>About</h2>
      {/* <div className={styles.highlight}>0112345678</div> */}
      <div className={styles.highlightScss}>0112345678</div>
    </div>
  );
};
export default About;

// Removing footer only fot this page
About.getLayout = (page: ComponentType): ReactNode => {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
