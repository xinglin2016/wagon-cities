export default function(state = null, action) {
  switch(action.type) {
    case 'CITY_SELECTED': {
      state
    }
    default: {
      return [
        { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
        { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
        { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
      ];
    }
  }
}
