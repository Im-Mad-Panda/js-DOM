class Slider {
  constructor(images, index = 0) {
    this._images = images;
    this._currentIndex = index;
  }

  get images() {
    return this._images;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  set currentIndex(v) {
    if (typeof v !== "number") {
      throw new TypeError("Slider index must be a numbers");
    }
    this._currentIndex = v;
  }

  get currentSlide() {
    return this.images[this.currentIndex];
  }

  next() {
    return (this.currentIndex + 1) % this.images.length;
  }
  prev() {
    return (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
