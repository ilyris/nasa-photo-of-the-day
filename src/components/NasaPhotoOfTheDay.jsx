import React,{useState, useEffect} from 'react';
import axios from 'axios';
import S from 'styled-components';


const NasaPhotoOfTheDay = () => {
    // Create our state that we will need.   
    // Data will be the Data our API call delivers to us.
    
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    } 
    if (mm < 10) {
        mm = '0' + mm;
    } 
    today =  yyyy + '-' +   mm + '-' + dd ;
    
    const [data, setData] = useState([]);
    // The dateValue will be the date that we recieve from the date input.
    const [dateValue, setDateValue] = useState(today);

    // the handleDate function will set the dateValue based on what the user selects.
    const handleDate = event => {
        setDateValue(event.target.value);
    }
  
  useEffect(() => {
    const handleAPICall = dateValue => {
      axios.get(`https://api.nasa.gov/planetary/apod?date=${dateValue}&api_key=l160LWWTharY8cE8YDVDhY1S5ub7qAuSerze4Xu3`)
      .then( response => setData(response.data))
      .catch( error => console.log(error)
      );
    }
    handleAPICall(dateValue);
  },[dateValue]);



    return(
        <StyledDiv>
            <RenderedState>This is to make sure my date renders since hooks are Async: {dateValue}</RenderedState>
            <DateList type="date" onChange={handleDate} defaultValue={today} min="2019-01-01" max="2019-12-31"></DateList>
            <NasaTitle >{data.title}</NasaTitle>
            <NasaImage src={data.hdurl}></NasaImage>
            <NasaDescription>{data.explanation}</NasaDescription>
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
    color: ${props => props.primary ? '#ffffff' : '#000'};
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

const RenderedState = S.p`
    font-size: 20px;
    color: #000;
`;
