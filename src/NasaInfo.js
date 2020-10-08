import React from 'react'
import styled from 'styled-components'

const MainTextStyles = styled.div`
p{
    width:70%;
    margin-left:20%;
    font-weight:bold;
    border: solid gold; 
    background-color: green;
}


`
function NasaInfo(props){
    const{explanation} = props
    return(
        <MainTextStyles>
        <div>
            <p>{explanation}</p>
        </div>
        </MainTextStyles>
    )
}

export default NasaInfo