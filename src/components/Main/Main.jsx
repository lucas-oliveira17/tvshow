import React, { useEffect, useState, Fragment } from 'react'
import getShows from '../../service/getShows'
import genres from '../../utils/genres'
import './Main.css'

const Main = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const getFirstShows = async () => {
            const ret = await getShows();
            console.log(ret)
            setShows(ret)
        }

        getFirstShows();
    }, []);

    return (
        <Fragment>
            <nav className="navbar">
                <div className="logo"></div>
            </nav>
            <nav className="mobile__navbar">
                <div className="navbar__item navbar__active">
                    <div className="item__logo logo__home"></div>
                    <span className="item__name">Home</span>
                </div>
                <div className="navbar__item">
                    <div className="item__logo logo__calendar"></div>
                    <span className="item__name">Schedule</span>
                </div>
            </nav>
            <header className="header">
                <div className="logo"></div>
            </header>
            <div className="main" section="main">
            {genres.map(genre =>
                <div className="main__carousel">
                    <span className="carousel__name">{genre}</span>
                    <div className="carousel__shows">
                        {shows.map(show =>
                            show.genres.includes(genre) ?
                                <div key={show.id} className="show">
                                    <div className ="show__image" 
                                        style={ {background: `url(${show.image.original}) center center / cover`}} alt="">
                                        <div className="show__name">{show.name}</div>
                                    </div>
                                </div> : <Fragment></Fragment>
                        )}
                    </div>
                </div>
            ) 
            }
            </div>
        </Fragment>
    )
}

export default Main