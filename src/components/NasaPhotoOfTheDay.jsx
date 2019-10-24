import React,{useState, useEffect} from 'react';
import axios from 'axios';
import S from 'styled-components';


const NasaPhotoOfTheDay = () => {
    // Create todays date, dynamically so we can always have todays date be rendered.
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

    // Create our state that we will need.   
    // Data will be the Data our API call delivers to us.
    const [data, setData] = useState([]);
    // The dateValue will be the date that we recieve from the date input.
    const [dateValue, setDateValue] = useState(today);

    // the handleDate function will set the dateValue based on what the user selects.
    const handleDate = event => setDateValue(event.target.value);
  
  useEffect(() => {
    const handleAPICall = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?date=${dateValue}&api_key=l160LWWTharY8cE8YDVDhY1S5ub7qAuSerze4Xu3`)
      .then( response => setData(response.data))
      .catch( error => console.log(error)
      );
    }
    handleAPICall();
  },[dateValue]);

    return(
        <StyledDiv>
            <RenderedState>This is to make sure my date renders since hooks are Async: {dateValue}</RenderedState>
            <TitleAndDateContainer>
                <DateList type="date" onChange={handleDate} defaultValue={today} min="2019-01-01" max="2019-12-31"></DateList>
                <NasaTitle primary >{data.title}</NasaTitle>
            </TitleAndDateContainer>
            <NasaImage src={data.hdurl}></NasaImage>
            <NasaDescription>{data.explanation}</NasaDescription>
        </StyledDiv>
    );
}

export default NasaPhotoOfTheDay;

const StyledDiv = S.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
`;
const NasaTitle = S.h1`
    font-size: 70px;
    color: ${props => props.primary ? '#ffffff' : '#000'};
    z-index: 10;
    letter-spacing: 2px;
    text-align: right;
    margin: 0;
`;
const NasaDescription = S.p`
    font-size: 24px;
    color: #fff;
    z-index: 10;
    position: relative;
    bottom: 0;
    margin: 0 auto;
    width: 80%;
    padding-bottm: 20px;
    letter-spacing: 2px;
`;
const TitleAndDateContainer = S.div`
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    justify-content: space-around;
`;
const NasaImage = S.img`
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
`;
const DateList = S.input`
    width: 225px;
    z-index: 10;
    font-size: 22px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 20px;
`;

const RenderedState = S.p`
    font-size: 24px;
    color: #fff;
    z-index: 10;
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
`;
