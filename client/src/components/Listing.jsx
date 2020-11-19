/* eslint-disable */
import React from 'react';
import Place from './Place.jsx';
import styles from './Listing.module.css';
const axios = require('axios');

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
    }

    this.getListing = this.getListing.bind(this);
    // this.handleLike = this.handleLike.bind(this);
  }

  // get data from db on page load
  componentDidMount() {
    window.addEventListener('load', this.getListing(window.location.pathname));
  }

  getListing(path) {
    console.log(path);
    axios.get(`${path}places`)
    // axios.get('/rooms/12')
    .then((res) => {
      console.log(res);
      this.setState({ // this triggers a re-render
        listing: res.data[0],
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // a method to set liked to true and to be passed to Place component
  // takes in an event and an index
  // handleLike(index, event) {
  //   const liked = this.state.listing.morePlacesID[index].liked;
  //   this.setState({
  //     liked: !liked
  //   });
  // }

  render() {
    // const liked = this.state.listing.morePlacesID[index].liked;
    // const style = {
    //   fill: liked ? 'red' : 'none'
    // }
    const places = this.state.listing.morePlacesID;
    // console.log(places);
    // If there is nothing in this.state (because API call has not gone through),
    // do not render
    if (!places) {
      return null;
    }
    return (
      <div >
        <div className={styles.sliderContainerWrapper}>
          <div className={styles.sliderContainer}>
            <div className={styles.sliderContainerTop}>
              <div className={styles.sliderContainerTop_left1}>
                <div className={styles.sliderContainerTop_left1_1}>
                  <section>
                    <h2 className={styles.sliderContainerTop_left1_1_1}>
                      More places to stay
                    </h2>
                  </section>
                </div>
              </div>
              <div className={styles.sliderContainerTop_right}>
                <div className={styles.leftArrowContainerWrapper}>
                  <button className={styles.leftArrowContainer} type='button'>
                    <span>
                      <svg viewBox="0 0 18 18" className={styles.leftArrow}>
                        <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z">
                        </path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className={styles.rightArrowContainerWrapper}>
                  <button className={styles.rightArrowContainer} type='button'>
                    <span>
                      <svg viewBox="0 0 18 18" className={styles.rightArrow}>
                        <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z">
                        </path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.sliderContainerBottom}>
              <ul className={styles.slider}>
                {places.map((place, index) => {
                  return (
                    <Place
                    key={place.listingID}
                    index={index}
                    place={place}
                    // handleLike={this.handleLike}
                    // style={style}
                    />
                  )
                })}
              </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Listing;