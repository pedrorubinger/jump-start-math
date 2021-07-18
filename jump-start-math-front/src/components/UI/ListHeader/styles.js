import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-right: 8px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #424040;
  padding: 0;
  margin-bottom: 5px;
`;

export const Message = styled.h3`
  font-size: 16px;
  font-weight: 300;
  color: #424040;
  padding: 0;
  margin: 0;
`;

export const AddButton = styled.button`
  background-color: #01823b;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  color: #FFF;
`;