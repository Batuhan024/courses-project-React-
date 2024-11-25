import React from 'react'

function Course({course}) {
    const{id, title, desc, price, link,image} = course;

  return (
    <div className='course'>
        <div>
            <img src={image} width={430} height={280}/>
            <h4 className='course-title'>{title}</h4>
            <p className='course-desc'>{desc}</p>
            <h3 className='course-price'>{price}₺</h3>
            <div className='course-link'><a href={link} style={{textDecoration: 'none'}}>Satın almak için</a></div>
        </div>
    </div>
  )
}

export default Course