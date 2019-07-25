db.apartments.insertMany([
  {
    name: 'The Bast apartment in Tel-Aviv',
    price: 70,
    type: 'apartment',
    rooms: 3,
    amenities: ['dishwasher', 'cables'],
    pictureURL:
      'https://static.dezeen.com/uploads/2016/08/space-for-four-dalit-lilienthal-tel-aviv-israel-residential-interior_dezeen_2364_ss_3-852x609.jpg'
  },
  {
    name: 'Quiet Living',
    price: 100,
    type: 'villa',
    rooms: 5,
    amenities: ['washing machine', 'wi-fi'],
    pictureURL:
      'https://cdn.archilovers.com/projects/b_730_2d5d3e52-6e81-44e4-8dd3-b53392944035.jpg'
  }
]);
