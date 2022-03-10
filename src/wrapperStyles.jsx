import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
`;
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
`

export const PokemonCard = styled.div`
  align-items: center;
    border-radius: 15px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    width: 300px;
    background-color: aqua;
`
export const PokemonImg = styled.img`
  max-height: 130px;
  max-width: 130px;
`

export const HeadingCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 85%;
`

export const BodyCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 90%;
`
