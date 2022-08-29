export class Good {

  constructor(params) {
      this.id = params.id;
      this.name = params.name;
      this.description = params.description;
      this.sizes = params.sizes;
      this.price = params.price;
      this.available = params.available;
  }

  setAvailable = (isAvailable) => {
    this.available = isAvailable;
  }
}
