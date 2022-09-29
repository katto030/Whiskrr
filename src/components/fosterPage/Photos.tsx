import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

interface Props {
  foster: {[key:string]:any};
}

const Photos:React.FC<Props>= ({ foster }) => {
  const [scrollAmount, setScroll] = useState(0)
  const [index, setIndex] = useState(0);
  const displayLimit = 4;


  useEffect(() => {
    setScroll(0);
    setIndex(0);
  }, [])

  const leftClick = () => {
    setIndex(index - 1);
    if (index  === (foster.photos.length - displayLimit + 1)) {
      // setScroll(scrollAmount + (6.25 * window.innerWidth / 100))
    } else {
      setScroll(scrollAmount + (14 * window.innerWidth / 100))
    }
  }

  const rightClick = () => {
    setIndex(index + 1);
    if (index  === (foster.photos.length - displayLimit)) {
      // setScroll(scrollAmount - (6.25 * window.innerWidth / 100))
    } else {
      setScroll(scrollAmount - (14 * window.innerWidth / 100))
    }
  }

  const scrollCSS = {
    transform: `translateX(${scrollAmount}px)`
  }

  return (
    <div className="photos-card-carousel">
      <div className="photos-arrow-div">{index === 0 ? null : <span onClick={() => leftClick()} ><FaChevronLeft className="photos-left" size={30}/></span>}</div>
      <div className="photos-carousel-view">
        <div className="photos-cards" style={scrollCSS}>
          {
            foster.photos.length ?
              foster.photos.map((photo:string) =>
                <div className="photo-card">
                  <img src={photo} alt="foster" />
                </div>
              )
            : <div>No pictures just yet ...</div>
          }
        </div>
      </div>
      <div className="photos-arrow-div">{index < foster.photos.length - displayLimit ? <span onClick={() => rightClick()} ><FaChevronRight className="photos-right" size={30} /></span> : null}</div>
    </div>
  )
}

export default Photos;