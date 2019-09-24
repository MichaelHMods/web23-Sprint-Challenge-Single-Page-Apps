import react from 'react';
import styled from 'styled-components';



const CharaterCard = styled.div `
    border: 2px solid black;
    justify-content: center;
    width: 45%;
`

const CharCardBox = styled.div `
display:flex;
align-content: space-around;

`
const ImageCard = styled.img    `
width:100%
`

export {CharaterCard, CharCardBox, ImageCard}