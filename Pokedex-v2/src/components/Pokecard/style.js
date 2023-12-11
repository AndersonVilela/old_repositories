import styled from "styled-components";

export const Container = styled.div`

  width: 20rem;
  height: 11rem;
  background: /* #4BCFB0 */ /* #A9A9A9 */ #87CEEB;

  border: none;
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SecLeft = styled.section`
  
  display: flex;
  flex-direction: column;
`;

export const PokeType = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 15px 2px 8px 0;
`;

export const SecRight = styled.section`

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeAvatar = styled.img`
  position: absolute;
  z-index:1;
  height  4rem;
  width: 4rem;
  margin-top: 15px;
  margin-right: 15px;
`;

export const PokeName = styled.span`
  font-size: 20px;
`;

export const TypePoke = styled.img`
  width: 85px;
  height: 30px;
  padding: 3px;
  border-radius: 10px;
  margin: 3.5px 0;

`;

