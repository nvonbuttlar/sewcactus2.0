import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import PhotoGallery from "react-photo-gallery";
import Lightbox from "react-images";

import "../styles/Gallery.css";

import { GALLERY_IMAGES } from "../utils/gallery-utils";

const photos = [
  {
    src: GALLERY_IMAGES[0].src,
    width: 3,
    height: 3
  },
  {
    src: GALLERY_IMAGES[1].src,
    width: 1,
    height: 1
  },
  {
    src: GALLERY_IMAGES[2].src,
    width: 3,
    height: 4
  },
  {
    src: GALLERY_IMAGES[3].src,
    width: 3,
    height: 4
  },
  {
    src: GALLERY_IMAGES[4].src,
    width: 3,
    height: 4
  },
  {
    src: GALLERY_IMAGES[5].src,
    width: 4,
    height: 3
  },
  {
    src: GALLERY_IMAGES[6].src,
    width: 3,
    height: 4
  },
  {
    src: GALLERY_IMAGES[7].src,
    width: 4,
    height: 3
  },
  {
    src: GALLERY_IMAGES[8].src,
    width: 4,
    height: 3
  },
  {
    src: GALLERY_IMAGES[9].src,
    width: 4,
    height: 3
  },
  {
    src: GALLERY_IMAGES[10].src,
    width: 4,
    height: 3
  },
  {
    src: GALLERY_IMAGES[11].src,
    width: 4,
    height: 3
  },
  {
    src: GALLERY_IMAGES[12].src,
    width: 4,
    height: 3
  },
  {
    src: GALLERY_IMAGES[13].src,
    width: 1,
    height: 1
  },
  {
    src: GALLERY_IMAGES[14].src,
    width: 3,
    height: 4
  }
];

class Gallery extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div id="gallery" style={props} className="gallery">
            <PhotoGallery
              key={photos.id}
              photos={photos}
              onClick={this.openLightbox}
            />
            <Lightbox
              key={photos.id}
              images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </div>
        )}
      </Spring>
    );
  }
}

export default Gallery;
