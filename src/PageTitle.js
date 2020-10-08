import React from 'react'
import styled from 'styled-components'

const PageTitleStyles = styled.div`
h1{
    width:100%;
    font-weight:bold;
    border: dotted magenta; 
    background-color: purple;
}
h2{
    width:90%;
    font-weight:bold;
    border: dotted blue;
    background-color: brown;
    &:hover{
        transform:scale(1.5);
        transition: all 1.5s ease-in-out;
    }
}
`

function PageTitle(props){
    const {title, date} = props
    return(
        <PageTitleStyles>
        <div>
            <h1>Title: {title}</h1>
            <h2>Publish Date: {date}</h2>
        </div>
        </PageTitleStyles>
    )
}

export default PageTitle