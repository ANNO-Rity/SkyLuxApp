import styled from 'styled-components';

// General styling
export const StyledBody = styled.body`
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: #f4f4f4;
`;

// Header image styling
export const HomeOvertureImage = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 100%;
  height: auto;
  display: block;
`;

// Main heading styling
export const MainHeading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 42px; // Consolidated the font-size property
  margin: 0;
  text-align: center;
  color: white;
`;

// Container styling
export const Container = styled.div`
  border-radius: 10px;
  max-width: 1200px;
  margin: auto;
  padding: 60px;
  margin: 30px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.568);
`;

// Row styling
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

// Column styling
export const Column = styled.div`
  flex-basis: 48%;
  margin-bottom: 20px;
`;

// World image styling
export const OvertureImage = styled.img`
  margin-top: -70px;
  width: 100%;
  height: auto;
`;

// Vision section styling
export const VisionSectionHeading = styled.h2`
  color: #555;
  margin-bottom: 10px;
`;

export const VisionSectionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const VisionSectionListItem = styled.li`
  background: #eee;
  margin-bottom: 5px;
  padding: 10px;
  border-left: 5px solid #333;
`;

// Container2
export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Row2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const Column3 = styled.div`
  flex: 1;
  padding: 15px;
  min-width: 300px;
`;

export const Column3Heading = styled.h2`
  margin-bottom: 10px;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

export const Column3Paragraph = styled.p`
  color: #666;
  line-height: 1.6;
`;

export const Column4 = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
`;

export const Column4Image = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
`;
