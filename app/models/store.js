import Model, { attr } from '@ember-data/model';

export default class StoreModel extends Model {
  @attr title;
  @attr homedelivery;
  @attr city;
  @attr rating;
  @attr stock;
  @attr location;
  @attr category;
  @attr image;
  @attr description;
}
