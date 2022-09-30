import faker from 'faker';
import { Mappable } from './CustomMap';

// By using implements, TS can tell us we are missing something
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent() {
    return `
      <div>
        <h1>User name: ${this.name}</h1>
      </div>
    `
  }
}