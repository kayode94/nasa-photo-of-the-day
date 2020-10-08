import React from 'react'

function NasaPictures(props){
const {url} = props
return(
    <div>
        <img src = {url} alt = {'Feature Nasa Picutre'}/>
    </div>
)
}

export default NasaPictures