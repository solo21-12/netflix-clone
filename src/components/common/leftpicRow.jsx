import React from 'react'
import '../../style/main.css'
const RowLeft = (props) => {
  const {h1,h3,image,haveImage} = props
  return ( 
  <div className='container-fluid second-wrapper bg-dark-1'>
  <div className='row'>
  <div className='col-sm-12 col-md-6'>
      {haveImage&&<img className='img-fluid' src={image} alt="Tv logo" />}
    </div>
    <div className='col-sm-12 col-md-6 pt-5 text-center'>
      <h1>{h1}</h1>
      <h3>{h3}</h3>
    </div>
  </div>
</div> );
}
 
export default RowLeft;