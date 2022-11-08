import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// const GROCERY_CATEGORIES = ['Vegetables', 'Fruits', 'Cereals'];

export default class StoreRoute extends Route {
  @service store;

  // if (GROCERY_CATEGORIES.includes(attributes.category)) {
  //   type = 'Grocery';
  // } else {
  //   type = 'All';
  // }

  async model(params) {
    return this.store.findRecord('store', params.store_id);
  }
}
