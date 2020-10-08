import React from 'react'

function PageTitle(props){
    const {title, date} = props
    return(
        <div>
            <h1>Title: {title}</h1>
            <h2>Publish Date: {date}</h2>
        </div>
    )
}

export default PageTitle