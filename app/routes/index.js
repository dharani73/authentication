import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// const GROCERY_CATEGORIES = ['Vegetables', 'Fruits', 'Cereals'];

export default class IndexRoute extends Route {
  @service store;

  // if (GROCERY_CATEGORIES.includes(attributes.category)) {
  //   type = 'Grocery';
  // } else {
  //   type = 'All';
  // }

  async model() {
    return this.store.findAll('store');
  }
}
