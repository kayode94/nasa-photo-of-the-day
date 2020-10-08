import React from 'react'

function NasaInfo(props){
    const{explanation} = props
    return(
        <div>
            <p>{explanation}</p>
        </div>
    )
}

export default NasaInfo