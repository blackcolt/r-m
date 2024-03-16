class Location {
  url: string;
  name: string;

  constructor(name: string, url: string) {
    this.url = url;
    this.name = name;
  }
}

export class Character {
  id: number;
  url: string;
  type: string;
  name: string;
  image: string;
  gender: string;
  status: string;
  created: string;
  species: string;
  origin: Location;
  location: Location;

  constructor(
    id: number,
    url: string,
    type: string,
    name: string,
    image: string,
    status: string,
    gender: string,
    created: string,
    species: string,
    origin: Location,
    location: Location
  ) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.type = type;
    this.image = image;
    this.status = status;
    this.gender = gender;
    this.origin = origin;
    this.created = created;
    this.species = species;
    this.location = location;
  }
}
