export interface CharactersInterface {
  created: Date;
  episode: string[];
  gender: Gender;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species: Species;
  status: Status;
  type: string;
  url: string;
}

enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

interface Location {
  name: string;
  url: string;
}

enum Species {
  Alien = "Alien",
  Human = "Human",
}

enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}