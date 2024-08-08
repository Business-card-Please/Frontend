import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background: #fff;
`;

export const SignUpBox = styled.div`
  width: 100%;
  max-width: 1280px;
  min-width: 350px;
  height: calc(100% - 40px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpInput = styled.input`
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  background: #fff;
  border-bottom: 1px solid #343a40;

  font-family: "NotoSansKR";
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;

  padding-left: 16px;
  margin-top: 10px;
`;
