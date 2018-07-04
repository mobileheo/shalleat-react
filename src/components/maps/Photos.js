import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 1"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 2"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 3"
  }
];

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
    const slides = photoUrls.map((url, i) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={url}
        >
          <img
            src={url}
            className="rounded"
            alt={`${i}th photo`}
            style={{
              height: "250px",
              width: "100%"
            }}
            onClick={e => {
              console.log(e);
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
