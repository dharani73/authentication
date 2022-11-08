import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stores', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      stores: [
        {
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
          image:
            'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
          description:
            'These are organic vegetables also fresh and easy to buy now from our app.',
        },
        {
          id: 2,
          title: 'Fresh Fruits',
          homedelivery: 'Available',
          city: 'hyderabad',
          rating: '5 star',
          stock: 'Available',
          location: {
            lat: 37.7749,
            lng: -122.4194,
          },
          category: 'Fruits',
          image:
            'https://media.istockphoto.com/photos/assortment-of-colorful-ripe-tropical-fruits-top-view-picture-id995518546?k=20&m=995518546&s=612x612&w=0&h=yPdMHr-CL9JD8eLnyBr2_hFpx6l3jUBU9UEwwdnNfAU=',
          description:
            'These are organic fruits also fresh and easy to buy now from our app.',
        },
        {
          id: 3,
          title: 'Cereals',
          homedelivery: 'Available',
          city: 'hyderabad',
          rating: '5 star',
          stock: 'Available',
          location: {
            lat: 37.7749,
            lng: -122.4194,
          },
          category: 'Cereals',
          image:
            'https://media.istockphoto.com/photos/set-of-different-cereals-with-milk-on-a-white-background-picture-id1064268580?k=20&m=1064268580&s=612x612&w=0&h=didQN0_50lsR08tJRgQfq9YCXALfVzSNPxza557HO7Q=',
          description:
            'These are organic Cereals also fresh and easy to buy now from our app.',
        },
      ],
    });
  });

  test('it renders all given groceries by default', async function (assert) {
    await render(hbs`<Stores @stores={{this.stores}} />`);

    assert.dom('.stores').exists();
    assert.dom('.stores input').exists();

    assert.dom('.stores .results').exists();
    assert.dom('.stores .results li').exists({ count: 3 });

    assert
      .dom('.stores .results li:nth-of-type(1)')
      .containsText('Fresh Vegetables');

    assert
      .dom('.stores .results li:nth-of-type(2)')
      .containsText('Fresh Fruits');

    assert.dom('.stores .results li:nth-of-type(3)').containsText('Cereals');
  });
  test('it updates the results according to the search query', async function (assert) {
    await render(hbs`<Stores @stores={{this.stores}} />`);

    assert.dom('.stores').exists();
    assert.dom('.stores input').exists();

    await fillIn('.stores input', 'Cere');

    assert.dom('.stores .results').exists();
    assert.dom('.stores .results li').exists({ count: 1 });
    assert.dom('.stores .results li').containsText('Cereals');

    await fillIn('.stores input', 'Vegetables');

    assert.dom('.stores .results').exists();
    assert.dom('.stores .results li').exists({ count: 1 });
    assert.dom('.stores .results li').containsText('Fresh Vegetables');
  });
});
