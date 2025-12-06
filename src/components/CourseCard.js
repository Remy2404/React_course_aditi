import React from 'react'

const CourseCard = (props) => {
    const {cartimg, carttitle, cartdesc} = props;

  return (
    <div className="card mb-3 mx-auto border-primary around-3 border-3 p-3" style={{width: "18rem"}}>
  <img src={cartimg} className="card-img-top" alt="meme cat" />
  <div className="card-body">
    <h5 className="card-title">{carttitle}</h5>
    <p className="card-text">
{cartdesc}</p>
    <a href={cartimg} className="btn btn-primary">meme src link</a>
  </div>
</div>
  ) 
}

export default CourseCard;