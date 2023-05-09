// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {listItem: 0}

  moveLeft = () => {
    const {listItem} = this.state
    if (listItem > 0) {
      this.setState(prevState => ({
        listItem: prevState.listItem - 1,
      }))
    }
  }

  moveRight = () => {
    const {listItem} = this.state
    console.log(listItem)

    if (listItem < 3) {
      this.setState(prevState => ({
        listItem: prevState.listItem + 1,
      }))
    }
  }

  render() {
    const {listItem} = this.state
    const {reviewsList} = this.props
    const item = reviewsList[listItem]
    const {username, imgUrl, companyName, description} = item

    return (
      <div className="mainDiv">
        <h1>Reviews</h1>
        <div className="arrowDiv">
          <button type="button" data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
              onClick={this.moveLeft}
            />
          </button>
          <div className="personDiv">
            <img src={imgUrl} alt="username" />
            <p className="userH">{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button type="button" data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              onClick={this.moveRight}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
