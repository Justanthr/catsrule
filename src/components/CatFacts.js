import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

const CatFacts = () => {
    const [catsData, setCatsData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://cat-fact.herokuapp.com/facts`);
          const resData = await response.json();
    
          console.log(resData);
          setCatsData(resData);
        }
    
        fetchData();
      }, []);

      const displayFacts = catsData.map((cat, index) => 
      <Carousel.Item key={index}>
          <img 
              className='d-block w-100'
              src={`https://http.cat/10${index}`}
              alt='Grey background'
          />
          <Carousel.Caption>
              <p>{cat.text}</p>
          </Carousel.Caption>
      </Carousel.Item>
    );
  
    
    return (
        <Container id='catFacts' className='facts'>
            <Carousel fade>
                {displayFacts}
            </Carousel>
        </Container>
    )
}

export default CatFacts