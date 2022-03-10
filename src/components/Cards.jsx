import React from 'react'
import pokemonData from "../data.json"
import styled from "styled-components"

function cards() {
  return (
    <div>
        
        {pokemonData.map(pData => {
            return(
              <div>
                <Wrapper>
                        <PokemonCard>
                          <HeadingCard>{ pData.name }{ pData.id }</HeadingCard>
                          <BodyCard>
                          <PokemonImg src={ pData.sprites.other.official_artwork.front_default } alt= { pData.name }/>
                          <div>{ pData.types.map(pokemonClass => {
                            return(
                              <div>{pokemonClass.type.name}</div>
                            )
                          })}</div>
                          </BodyCard>
                        </PokemonCard>
                </Wrapper>
              </div>
            )
        })}
        
    </div>
  )
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;

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

const PokemonCard = styled.div`
  align-items: center;
    border-radius: 15px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    width: 275px;
    background-color: aqua;
`
const PokemonImg = styled.img`
  max-height: 130px;
  max-width: 130px;
`

const HeadingCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 85%;
`

const BodyCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 90%;
`

export default cards