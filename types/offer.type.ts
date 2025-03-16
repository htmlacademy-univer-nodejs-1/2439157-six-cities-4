import {City} from './city.enum';
import {HousingType} from './housing-type.enum';
import {Facility} from './facility-type.enum';
import {User} from './user.type';
import {Coordinates} from './coordinates.type';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
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
