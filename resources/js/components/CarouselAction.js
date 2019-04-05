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
		<Link to={"/event-"+events.id}>

		<div className="carouselMask">
			<p className="carouselTitle text-center">{events.title}</p>
			<p className="carouselTitle text-center">{events.begin_time}</p>
	    </div>
				<img
					className="carouselImg d-block w-100 ofc"
					src={"data:image;base64,"+events.image}
					alt={events.title}
				/>
				<Carousel.Caption>
					
				
				</Carousel.Caption>
			</Link>
>>>>>>> 7d1a67e1919f41e1bade9c9d0f7a604ff3cc79d1
		</Carousel.Item>
		))}

		</Carousel>
	</React.Fragment>
    );
  }
}
