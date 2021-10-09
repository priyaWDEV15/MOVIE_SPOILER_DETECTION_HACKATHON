import {
    Facebook,
    Instagram,
    Pinterest,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
  const Container = styled.div`
    display: flex;
   
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Movies</Logo>
          <Desc>
           This is a hub for all the movies around the world, you could find the genre, plot, etc. Anything about any movie is dispalyed in a well curated manner that the viewer can get a thorough idea about their favorite movies.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
      </Container>
    );
  };
  
  export default Footer;