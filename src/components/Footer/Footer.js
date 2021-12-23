import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
         <LinkTitle>Phone Number</LinkTitle>
         <LinkItem href="tel:647-710-6512">647-710-6512</LinkItem>
        </LinkColumn>
        <LinkColumn>
         <LinkTitle>Email</LinkTitle>
         <LinkItem href="mailto:fyaazbobat@hotmail.com">fyaazbobat@hotmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Created By Fyaaz</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href = "https://github.com/fyaazbobat">
        <AiFillGithub size = "3rem" />
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/in/fyaaz-bobat-7b93471b4/">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
