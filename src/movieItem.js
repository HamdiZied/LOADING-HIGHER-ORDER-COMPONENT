import React from 'react'
import Rating from './reting'

const Items =(props)=>{
    const {movie={}}=props
        const {
              titre='',
              ans='',
              image='https://www.perigord.com/wp-content/plugins/sirtaqui-agenda/images/event_no_image.png',
              Rate=2
          }=movie

    return(
        <div className="movie-card">
             <div className="movie-rating"><Rating nbr={Rate} /></div>
             <div
                  className="movie-image"
                  style={{
                    backgroundImage:
                      `url('${image}')`
                  }}
                />
              <div className="movie-description">{titre} - {ans}</div>
      </div>
    )
}
export default Items