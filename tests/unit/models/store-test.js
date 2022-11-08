import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | store', function (hooks) {
  setupTest(hooks);

  test('it has the right type', function (assert) {
    let store = this.owner.lookup('service:store');

    let Store = store.createRecord('Store', {
      id: 1,
      title: 'Fresh Vegetables',
      homedelivery: 'Available',
      city: 'hyderabad',
      rating: '5 star',
      stock: 'Available',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: 'Vegetables',
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
      description:
        'These are organic vegetables also fresh and easy to buy now from our app.',
    });
    assert.equal(Store.title, 'Fresh Vegetables');

    Store.title = 'Fresh Vegetables';
  });
});
