import Component from '@glimmer/component';

export default class StoresFilterComponent extends Component {
  get results() {
    let { stores, query } = this.args;

    if (query) {
      stores = stores.filter((store) => store.title.includes(query));
    }

    return stores;
  }
}
