import React, { FC } from 'react';
import './css/Home.css'

const Homepage: FC = () => {
  return(
    <section className="section">
<div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h3 className="text">Welcome 
      To My Dropbox Clone</h3>
      <p className='paragraf'>This project about famous cloud Dropbox I created Dropbox clone with React.js</p>
      <h5></h5>
      {/* <h3 className="icon-drop"></h3> */}
    </div>
  </div>
</div>
    </section>
  );
}

export default Homepage;