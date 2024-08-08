import styled from "styled-components";
import { DivScreenProps, TextScreenProps } from "./StyleInterfacer";

export const CommonText = styled.span<TextScreenProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};

  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ${(props) => props.textOverflow};

  font-family: "NotoSansKR";

  text-decoration: ${(props) => props.textDecorationLine};
  z-index: ${(props) => props.zIndex};
  @media screen and (min-width: 1920px) {
    font-size: ${(props) => props.maxFontSize};
    line-height: ${(props) => props.maxLineHeight};
    padding: ${(props) => props.maxPadding};
  }
`;

export const PublicImageBox = styled.div<DivScreenProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  cursor: pointer;
`;

export const CommonButton = styled.div<DivScreenProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};

  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.backGround};

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const AutoInputBox = styled.div<DivScreenProps>`
  width: ${(props) => props.width};
`;
