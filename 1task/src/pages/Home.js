import Banner from '../components/banner';
import Header from '../components/Header';
import React from 'react';
import NewsFeed from '../components/newsfeed';

function Home() {
    return (
      <>
      <div style={{ backgroundColor : "#f8f8fb"}}>
      <Header></Header>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Banner/>
          </div>
        </div>
        <div className='row'> 
            <NewsFeed/>
        </div>
      </div>
      </div>
      </>
    );
  }
  
  export default Home;
  