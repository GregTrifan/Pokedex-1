import React from 'react'
import pokemonData from "../data.json"
import {Grid,PokemonCard,BodyCard,Wrapper,PokemonImg,HeadingCard} from "../wrapperStyles";

function cards() {
  return (
    <div>
        
        <Grid>
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
                              <div style={{margin:"2px", backgroundColor:"green",borderRadius:"12px",padding:"4px"}}>{pokemonClass.type.name}</div>
                            )
                          })}</div>
                          </BodyCard>
                        </PokemonCard>
                </Wrapper>
              </div>
            )
        })}
        </Grid>
        
    </div>
  )
}

export default cards