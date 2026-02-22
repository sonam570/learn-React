import React from 'react'

const Card = (props) => {

    console.log(props)

  return (
   /*  <div>
       <div className="card">
              <img src="https://rukminim2.flixcart.com/image/480/640/kq8dua80/poster/c/k/3/small-poster-scenery-of-tiger-painting-3d-digital-print-original-imag4ac4mk4kp452.jpeg?q=90" alt="" />
              <h1>{props.user}, {props.age}</h1>
              <p>Lorem ipsum quo accusamus. Assumenda similique sed exercitationem consequatur.</p>
              <button>VIEW</button>
        </div>
    </div>*/
        <div>
            <div className='card'>
                <img src={props.img}/>
                <h1>{props.user}{props.age}</h1>
            </div>
        </div>
  )
}

export default Card
