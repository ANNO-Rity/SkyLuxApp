import React from 'react';
import { StyledBody, HomeOvertureImage, MainHeading, Container, Row, Column, OvertureImage, VisionSectionHeading, VisionSectionList, VisionSectionListItem, Container2, Row2, Column3, Column3Heading, Column3Paragraph, Column4, Column4Image } from './StyledHome';
import Hero from './img/home-overture.jpg';
import World from './img/world.png';
import logo from './img/logo.svg';

function Home() {
  return (
    <StyledBody>
      <HomeOvertureImage src={Hero} alt="Home Overture"/>
      <MainHeading>
        ENJOY YOUR LUXURY FLIGHT WITH US
      </MainHeading>
      <Container>
        <Row>
          <Column>
            <OvertureImage src={World} alt="World" />
          </Column>
          <Column>
            <VisionSectionHeading>
              OUR VISION
            </VisionSectionHeading>
            <VisionSectionList>
              <VisionSectionListItem>
                Lorem, ipsum.
              </VisionSectionListItem>
              <VisionSectionListItem>
                Lorem, ipsum dolor.
              </VisionSectionListItem>
              <VisionSectionListItem>
                Lorem ipsum dolor sit.
              </VisionSectionListItem>
            </VisionSectionList>
          </Column>
        </Row>
        <Container2>
          <Row2>
            <Column3>
              <Column3Heading>
                OUR MISSION
              </Column3Heading>
              <Column3Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum praesentium recusandae libero aliquam quis impedit! Necessitatibus, modi consequatur iusto quisquam labore quo, dolorem, earum ad vitae nostrum id obcaecati tenetur.
              </Column3Paragraph>
            </Column3>
            <Column4>
              <Column4Image src={logo} alt="plane svg" />
            </Column4>
          </Row2>
        </Container2>
      </Container>
    </StyledBody>
  );
}

export default Home;
