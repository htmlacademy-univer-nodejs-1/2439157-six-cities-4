import {City} from './city.enum.js';
import {HousingType} from './housing-type.enum.js';
import {Facility} from './facility-type.enum.js';
import {User} from './user.type.js';
import {Coordinates} from './coordinates.type.js';

export type Offer = {
  title: string;
  description: string;
  createdDate: Date;
  city: City;
  preview: string;
  photos: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  housingType: HousingType;
  roomsCount: number;
  guestsCount: number;
  rentalCost: number;
  facilities: Facility[];
  author: User;
  commentsCount: number;
  coordinates: Coordinates;
}
