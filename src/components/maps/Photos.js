import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";
import { POINT_CONVERSION_COMPRESSED } from "constants";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.photoUrls.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.photoUrls.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { photoUrls } = this.props;
    let items = [];
    console.log(photoUrls);
    const slides = photoUrls.map((url, i) => {
      items.push({ src: url });
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={i}
        >
          <img
            src={url}
            className="rounded"
            alt={`${i}th photo`}
            style={{
              height: "250px",
              width: "100%"
            }}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Photos;

// import React from "react";
// import Img from "react-image";
// import Slider from "react-slick";

// // const Photos = ({ photoUrls }) => {
// //   // return photoUrls.map((src, i) => (
// //   //   <Img src={src} key={src + i}/>
// //   // ));
// //   console.log(photoUrls);
// //   return <Img src={photoUrls} />;
// // };

// class Photos extends React.Component {
//   render() {
//     const { photoUrls, placeId } = this.props;
//     return (
//       <div
//         id={`photo-container-${placeId}`}
//         className="carousel slide"
//         data-ride="carousel"
//       >
//         {/* <ol class="carousel-indicators">
//           <li
//             data-target="#carouselExampleIndicators"
//             data-slide-to="0"
//             class="active"
//           />
//           <li data-target="#carouselExampleIndicators" data-slide-to="1" />
//           <li data-target="#carouselExampleIndicators" data-slide-to="2" />
//         </ol> */}
//         <div
//           className="carousel-inner"
//           onClick={e => {
//             console.log(e);
//           }}
//         >
//           {photoUrls.map((src, i) => (
//             <div
//               className={i === 0 ? "carousel-item active" : "carousel-item"}
//               key={`${src}-${i}`}
//             >
//               <img
//                 className="d-block w-100"
//                 src={src}
//                 alt={`${i + 1}th slide`}
//               />
//             </div>
//           ))}
//         </div>
//         <a
//           className="carousel-control-prev"
//           href={`#photo-container-${placeId}`}
//           role="button"
//           data-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true" />
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href={`#photo-container-${placeId}`}
//           role="button"
//           data-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true" />
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     );
//   }
// }

// export default Photos;
