import {FileReader} from './file-reader.interface.js';
import {readFileSync} from 'node:fs';
import {City, Facility, HousingType, Offer, UserType} from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, city, preview, photos, isPremium, isFavorite, rating, housingType, roomsCount, guestsCount, rentalCost, facilities, name, password, email, latitude, longitude]) => ({
        title,
        description,
        createdDate: new Date(createdDate),
        city: City[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
        preview,
        photos: photos.split(';'),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: Number.parseFloat(rating),
        housingType: HousingType[housingType as 'apartment' | 'house' | 'room' | 'hotel'],
        roomsCount: Number.parseInt(roomsCount, 10),
        guestsCount: Number.parseInt(guestsCount, 10),
        rentalCost: Number.parseFloat(rentalCost),
        facilities: facilities.split(';')
          .map((facility) => (Facility[facility as 'Breakfast' | 'AirConditioning' | 'Workspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge'])),
        author: { name, password, email, userType: UserType.Free },
        commentsCount: 0,
        coordinates: { latitude: Number.parseFloat(latitude), longitude: Number.parseFloat(longitude) }
      } as Offer));
  }
}
