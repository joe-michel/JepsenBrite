import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default class CarouselAction extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
const { index, direction } = this.state;
const { events } = this.props

return (
	<React.Fragment>
		<Carousel
		activeIndex={index}
		direction={direction}
		onSelect={this.handleSelect}
		className="carousel"
		>
		{events.map(events => (
		<Carousel.Item key={events.title}>
<<<<<<< HEAD

		<Link to="/event">
				<div className="carouselMask">
					<p className="carouselTitle text-center">{events.title}</p>
					<p className="carouselTitle text-center">{events.begin_time}</p>
				</div>
=======
		<Link to={"/event-"+events.id}>

		<div className="carouselMask">
			<p className="carouselTitle text-center">{events.title}</p>
			<p className="carouselTitle text-center">{events.begin_time}</p>
	    </div>
>>>>>>> 6b33f5aa13a5f57ef4276c9323a2316f408a3a2d
				<img
					className="carouselImg d-block w-100 ofc"
					src={"data:image;base64,"+events.image}
					alt={events.title}
				/>
				<Carousel.Caption>
					
				
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
		))}

		</Carousel>
	</React.Fragment>
    );
  }
}
