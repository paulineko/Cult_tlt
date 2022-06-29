import React from 'react'
import Profile from '../image/Профиль.png';
import Level from '../image/Level.png';
import { Row, Container, Col, Image, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Goal1 from '../image/Цель1.png';
import Goal2 from '../image/Цель4.png';
import Goal3 from '../image/Цель6.png';
import Goal4 from '../image/Цель2.png';
import Goal5 from '../image/Цель10.png';
import Goal6 from '../image/Цель9.png';
import Goal7 from '../image/Цель3.png';
import InfiniteCarousel from 'react-leaf-carousel';


export default function Home_account() {
  return (
    <div>    
        <main>
    
      <Row className='row-rast'>
       <Col className='row-col1_profile'>
         <Image className='photo_profile' src={Profile} width="100" height='100' fluid /> 
         <h1 className='user_name'>User name</h1>
         <h3 className='level_text'>10 уровень (Культовед)</h3>
         <Image className='photo_level' src={Level} width="278" height='20' fluid /> 
         <h4 className="colvo_level">5/10</h4>
       </Col>
       <Col className='row-col2_profile'>
         <h1 className='goal_text'>Мои достижения</h1>
  <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src={Goal1}
      />
    </div>
    <div>
      <img
        alt=''
        src={Goal2}
      />
    </div>
    <div>
      <img
        alt=''
        src={Goal3}
      />
    </div>
    <div>
      <img
        alt=''
        src={Goal4}
      />
    </div>
    <div>
      <img
        alt=''
        src={Goal5}
      />
    </div>
    <div>
      <img
        alt=''
        src={Goal6}
      />
    </div>
    <div>
      <img
        alt=''
        src={Goal7}
      />
    </div>
    
  </InfiniteCarousel>
       </Col>
       
      </Row>
    </main>
</div>
  )
}
