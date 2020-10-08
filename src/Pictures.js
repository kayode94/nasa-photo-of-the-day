import React from 'react'
import styled from 'styled-components'


const PictureStyles = styled.div`
img{
    width:700px;
    height:700px;
    border: dashed royalblue;
    background-color: green;

}
`

function NasaPictures(props){
const {url} = props
return(
    <PictureStyles>
        <div>        
            <img src = {url} alt = {'Feature Nasa Picutre'}/>
        </div>
    </PictureStyles>
    
    )
}

export default NasaPictures