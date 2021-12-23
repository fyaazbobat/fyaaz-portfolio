import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List } from './TechnologiesStyles';
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiJava} from "react-icons/di";
import { SiAmazonaws, SiMysql, SiCsharp } from "react-icons/si";
const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Here you can find technologies I have worked in and had exposure to!
    </SectionText>
    <List>
       <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>

    </List>
  </Section>
);

export default Technologies;
