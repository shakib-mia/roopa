export const WA = 'https://wa.me/910000000000';
export const waLink = (msg) => `${WA}?text=${encodeURIComponent(msg)}`;

export const links = [
  ['/', 'Home'], ['/services', 'Services'], ['/bridal', 'Bridal'], ['/reviews', 'Reviews'], ['/contact', 'Contact'],
];

export const serviceGroups = [
  ['Face and skin', [
    ['Kesar glow facial', 'Saffron and milk cleanse, massage and mask. 60 min', '₹1,800'],
    ['Gold shine facial', 'For dull, tired skin before an event. 75 min', '₹2,600'],
    ['Threading, full face', 'Eyebrows, upper lip, forehead, chin. 20 min', '₹150'],
    ['De-tan clean-up', 'Removes sun tan from face and neck. 40 min', '₹900'],
  ]],
  ['Hair', [
    ['Hair spa and oiling', 'Warm coconut-amla oil, steam, head massage. 75 min', '₹1,200'],
    ['Haircut and blow-dry', 'Consultation, wash, cut and style. 60 min', '₹700'],
    ['Global colour', 'Ammonia-free colour, root to tip. 2 hr', '₹3,500'],
  ]],
  ['Hands, feet and body', [
    ['Manicure and pedicure', 'Soak, scrub, shape and polish. 70 min', '₹1,400'],
    ['Rica waxing, full arms and legs', 'Gentle, low-temperature wax. 45 min', '₹900'],
    ['Body polishing', 'Scrub, wrap and moisturise. 90 min', '₹3,200'],
  ]],
  ['Mehndi', [
    ['Mehndi, one hand', 'Bridal-grade henna, Rajasthani or Arabic. 45 min', '₹500'],
    ['Bridal mehndi, both hands and feet', 'Full coverage, dark stain guaranteed. 4 hr', '₹5,500'],
  ]],
];

export const featured = [serviceGroups[0][1][0], serviceGroups[1][1][0], serviceGroups[2][1][0]];

export const bridal = [
  ['Mehndi night', 'Makeup, hairstyle and draping for one function.', '₹6,500'],
  ['Wedding day', 'HD makeup, hair, saree draping, touch-up kit.', '₹18,000', true],
  ['Full wedding week', 'Pre-bridal facials, mehndi, sangeet and wedding day.', '₹42,000'],
];

export const steps = [
  ['Message us your date', 'Tell us the function, venue and rough timing. We confirm availability the same day.'],
  ['Trial look, two weeks before', 'Free for every bride. Bring your outfit and jewellery photos.'],
  ['Final look on the day', 'We arrive at your venue 3 hours before muhurat with the full kit.'],
];

export const quotes = [
  ['Ananya S.', 'Bride, December', 'My makeup lasted through the pheras, the photos and a 2 a.m. dance floor. Aunties kept asking who did it.'],
  ['Meera K.', 'Regular since 2019', 'The kesar facial is the one thing I book before every festival. Always on time, always clean.'],
  ['Pooja R.', 'Mehndi guest', 'Booked six of us for the same morning. Everyone left with hands we did not want to wash.'],
  ['Kavya N.', 'Bride, February', 'The trial look was exactly what I had in my head. No pressure, no upselling.'],
  ['Sunita D.', 'Hair spa regular', 'My hair feels like it did when my mother used to oil it on Sundays.'],
  ['Ritu M.', 'Sister of the bride', 'Eight people got ready in one room and nobody was rushed. Impressive.'],
];
