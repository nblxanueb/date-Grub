import React, { Component } from 'react';
import Header from './header.js';
import Footer from "./footer.js";
import image from './image.png';
import coffee from './coffee.png';
import drinks from "./drinks.png";
import dinner from "./dinner.png";
import search from "./search.png";
import star from "./star.png";
import yelp from "./yelp.png";
import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from "./MapContainer";
import Restaurant from './Restaurant';
import Popup from "reactjs-popup";
import { SocialIcon } from 'react-social-icons';
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
      search: "",
      restaurants: [],
      location: "",
      price: "",
      type: "",
      active: 0
    };
    // this.apiData = this.apiData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(evt) {
    const search = evt.target.value;
    this.setState({ search });
  }

  onSubmit(evt) {
    evt.preventDefault();
        fetch(`/yelp-proxy.json?limit=3&location=${this.state.location}&term=${this.state.search}&categories=${this.state.type}&price=${this.state.price}&sort_by=rating`)
        // &radius=4500
      .then(response => response.json())
      .then(restaurants => {
        this.setState({
          restaurants: restaurants
        });
      });
  }

 setLocation(location) {
    this.setState({location})
 }

setType(type) {
    this.setState({type})
 }


setDinner = () => {
  this.setState({
    search: this.state.search = "dinner"
    })
}

setCoffee = () => {
  this.setState({
    search: this.state.search = "coffee"
    })
}

changeActiveType(num){
  this.setState({
    active: num
  });
}

setDrinks = () => {
  this.setState({
    search: this.state.search = "drinks"
    })
}

set1 = () => {
  this.setState({
    price: this.state.price = "1"
    })
}

set2 = () => {
  this.setState({
    price: this.state.price = "1,2"
    })
}

set3 = () => {
  this.setState({
    price: this.state.price = "1,2,3"
    })
}

set4 = () => {
  this.setState({
    price: this.state.price = "1,2,3,4"
    })
}

  render() {
    return (
      <div className="App">
      <Header />
      <main>
        <div className="search-options">
        <div className="type">
          <button className={`restaurant-type ${this.state.active === 1 ? 'active' : ''}`} onClick={() => {
            this.setCoffee;
            this.changeActiveType(1);
            }}><img src={coffee} className='coffee' alt="coffee"/> </button>
          <button className={`restaurant-type ${this.state.active === 2 ? 'active' : ''}`} onClick={() => {
            this.setDrinks;
            this.changeActiveType(2);
            }}><img src={drinks} className="drinks" alt="drinks"/></button>
          <button className={`restaurant-type ${this.state.active === 3 ? 'active' : ''}`} onClick={() => {
            this.setDinner;
            this.changeActiveType(3);
            }}><img src={dinner} className="dinner" alt="dinner"/></button>
        </div>
        <br></br>
        <div className="options">
        <div className="price-range">
          <button className="dollar-sign1" onClick={this.set1}>$</button>
          <button className="dollar-sign2" onClick={this.set2}>$$</button>
          <button className="dollar-sign3" onClick={this.set3}>$$$</button>
          <button className="dollar-sign4" onClick={this.set4}>$$$$</button>
        </div>
        <br></br>
        <select className="food-type" value={this.state.type} onChange={event => this.setType(event.target.value)} placeholder="type of food">
            <option value=""></option>
            <option>african</option>
            <option>american</option>
            <option>australian</option>
            <option>breakfast</option>
            <option>burgers</option>
            <option>cafes</option>
            <option>caribbean</option>
            <option>comfort food</option>
            <option>chinese</option>
            <option>cuban</option>
            <option>dominican</option>
            <option>french</option>
            <option>german</option>
            <option>greek</option>
            <option>indian</option>
            <option>italian</option>
            <option>japanese</option>
            <option>korean</option>
            <option>kosher</option>
            <option>mediterranean</option>
            <option>mexican</option>
            <option>moroccan</option>
            <option>pizza</option>
            <option>portuguese</option>
            <option>russian</option>
            <option>seafood</option>
            <option>soul food</option>
            <option>southern</option>
            <option>vegetarian</option>
            <option>vietnamese</option>
        </select>
        <br></br>
        <input className="location" type="text" value={this.state.location} onChange={event => this.setLocation(event.target.value)} placeholder="City or ZIP"/>
        </div>
        <br></br>
        <button className="search" onClick={this.onSubmit}>
        <img src={search} className="loupe" alt="search"/></button>
        </div>

  {this.state.restaurants.map(restaurant => {
    return <div>
        <Popup trigger={<button className="result-button">
              {restaurant.name} {restaurant.rating}
              <img src={star} className="star" alt="star" />
            </button>} modal>
          {close => <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="content">
                <div className="heading">
                  {restaurant.name} {restaurant.price}
                </div>
                <br />
                {restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}
                <br />
                {restaurant.display_phone}
                <br />
                <div className="search-result">
                  <div>
                    <img src={restaurant.image_url} className="restaurant-image" alt="" />
                  </div>
                  <br />
                  <div className="item-map">
                    <MapContainer google={this.props.google} lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} />
                  </div>
                </div>
              </div>
              <div className="more-details">
                <a href={restaurant.url} target="_blank">
                  <img src={yelp} className="yelp" alt="read more" />
                </a>
                <SocialIcon url={`https://www.facebook.com/dialog/share?app_id=80401312489&href=${restaurant.url}`} />
                <SocialIcon className="twitter" url={`https://twitter.com/intent/tweet?url=${restaurant.url}`} />
              </div>
            </div>}
        </Popup>
      </div>;
        })}
      </main>
      <Footer />
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyCeTdCRweKINV2rVaMeM8LSSFMewLhUAXI')
  })(App);

