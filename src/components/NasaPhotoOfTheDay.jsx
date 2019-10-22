import React,{useState} from 'react';
import S from 'styled-components';


const NasaPhotoOfTheDay = ({nasaData,handleDate, dateValue}) => {


    
    return(
        <StyledDiv>
            <DateList onChange={handleDate} type="date" value={dateValue} min="2019-01-01" max="2019-12-31"></DateList>
            <NasaTitle>{nasaData.title}</NasaTitle>
            <NasaImage src={nasaData.hdurl}></NasaImage>
            <NasaDescription>{nasaData.explanation}</NasaDescription>
        </StyledDiv>
    );
}

export default NasaPhotoOfTheDay;

const StyledDiv = S.div`
    width: 500px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #a7a7a7;
    padding: 20px;
    border-radius: 20px;
`;
const NasaTitle = S.h1`
    font-size: 24px;
    color: #fff;
`;
const NasaDescription = S.p`
    font-size: 18px;
    color: #000;
`;

const NasaImage = S.img`
    width: 500px;
    height: auto;
`;
const DateList = S.input`
    width: 150px;
`;
