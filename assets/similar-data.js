/* Mockup data — real Marshall Goldman inventory, pulled 2026-10-06.
 * Production replaces this with the similar-vehicles query. */
window.MG_MOCK = {
  // In-stock VDP: 2019 Acura NSX, $152,990 -> price band +/-20% ($122,392 - $183,588)
  instock: [
    { name: '2025 Porsche 911 Carrera', price: '$147,990', mileage: '3,520', location: 'Maryland',
      href: '/used-vehicle-2025-porsche-911-carrera-premium-package-rs-spyder-wheels-low-miles-c-4266/',
      img: 'https://www.marshallgoldman.com/imagetag/4266/2/f/Used-2025-Porsche-911-Carrera-Premium-Package-RS-Spyder-Wheels-Low-Miles-1789057183.jpg',
      title: '2025 Porsche 911 Carrera -Premium Package, RS Spyder Wheels, Low Miles', exterior: 'Black', interior: 'Black', stock: 'M07554', phone: '443-583-3500' },
    { name: '2020 McLaren 570S Spider', price: '$164,990', mileage: '13,967', location: 'Cleveland',
      href: '/used-vehicle-2020-mclaren-570s-spider-low-miles-bowers-and-wilkins-audio-carbon-fiber-interior-trim-c-5664/',
      img: 'https://www.marshallgoldman.com/imagetag/5664/2/f/Used-2020-McLaren-570S-Spider-Low-Miles-Bowers-and-Wilkins-Audio-Carbon-Fiber-Interior-Trim-1787089177.jpg',
      title: '2020 McLaren 570S Spider -Low Miles, Bowers and Wilkins Audio, Carbon Fiber Interior Trim', exterior: 'Onyx Black', interior: 'Black', stock: 'W09011', phone: '216-358-6575' },
    { name: '2015 McLaren 650S Spyder', price: '$145,900', mileage: '18,496', location: 'Cleveland',
      href: '/used-vehicle-2015-mclaren-650s-spyder-carbon-fiber-exterior-pack-low-miles-c-5937/',
      img: 'https://www.marshallgoldman.com/imagetag/5937/2/f/Used-2015-McLaren-650S-Spyder-Carbon-Fiber-Exterior-Pack-Low-Miles-1790194219.jpg',
      title: '2015 McLaren 650S Spyder -Carbon Fiber Exterior Pack, Low Miles', exterior: 'Volcano Yellow', interior: 'Carbon Black', stock: 'W05117', phone: '216-358-6575' },
    { name: '2025 Porsche 911 Carrera Cabriolet', price: '$154,990', mileage: '12,411', location: 'Cleveland',
      href: '/used-vehicle-2025-porsche-911-carrera-cabriolet-sport-exhaust-rs-spyder-wheels-premium-package-c-5912/',
      img: 'https://www.marshallgoldman.com/imagetag/5912/2/f/Used-2025-Porsche-911-Carrera-Cabriolet-Sport-Exhaust-RS-Spyder-Wheels-Premium-Package-1786030643.jpg',
      title: '2025 Porsche 911 Carrera Cabriolet -Sport Exhaust, RS Spyder Wheels, Premium Package', exterior: 'Slate Grey Neo', interior: 'Slate Grey/Chalk', stock: 'W36454', phone: '216-358-6575' },
    { name: '2020 Porsche 718 Cayman GT4', price: '$139,900', mileage: '11,930', location: 'Maryland',
      href: '/used-vehicle-2020-porsche-718-cayman-gt4-6-speed-manual-satin-aurum-wheels-c-5999/',
      img: 'https://www.marshallgoldman.com/imagetag/5999/2/f/Used-2020-Porsche-718-Cayman-GT4-6-Speed-Manual-Satin-Aurum-Wheels-1788453022.jpg',
      title: '2020 Porsche 718 Cayman GT4 -6 Speed Manual, Satin Aurum Wheels', exterior: 'Guards Red', interior: 'Black', stock: 'MP10024', phone: '443-583-3500' },
    { name: '2023 Porsche 718 Cayman GTS 4.0', price: '$122,900', mileage: '9,063', location: 'Newport Beach',
      href: '/used-vehicle-2023-porsche-718-cayman-gts-4.0-six-speed-manual-adaptive-sports-seats-c-6057/',
      img: 'https://www.marshallgoldman.com/imagetag/6057/2/f/Used-2023-Porsche-718-Cayman-GTS-40-Six-Speed-Manual-Adaptive-Sports-Seats-1790180522.jpg',
      title: '2023 Porsche 718 Cayman GTS -4.0, Six Speed Manual, Adaptive Sports Seats', exterior: 'Racing Yellow', interior: 'Black', stock: 'NP10088', phone: '949-627-0003' }
  ],
  // Sold VDP: 1992 Ferrari F40 -> same make, in stock
  sold: [
    { name: '2019 Ferrari 488 GTB', price: '$369,900', mileage: '7,216', location: 'Beverly Hills',
      href: '/used-vehicle-2019-ferrari-488-gtb-low-miles-carbon-buckets-carbon-driving-zone-c-6066/',
      img: 'https://www.marshallgoldman.com/imagetag/6066/2/f/Used-2019-Ferrari-488-GTB-Low-Miles-Carbon-Buckets-Carbon-Driving-Zone-1790697844.jpg' },
    { name: '1985 Ferrari 308 GTS Quattrovalvole', price: '$195,900', mileage: '7,714', location: 'Cleveland',
      href: '/used-vehicle-1985-ferrari-308-gts-quattrovalvole-very-low-miles-major-service-2022-extremely-nice-c-2771/',
      img: 'https://www.marshallgoldman.com/imagetag/2771/2/f/Used-1985-Ferrari-308-GTS-Quattrovalvole-VERY-Low-Miles-Major-Service-2022-Extremely-Nice!-1786040162.jpg' },
    { name: '1998 Ferrari 550 Maranello', price: '$469,900', mileage: '13,510', location: 'Beverly Hills',
      href: '/used-vehicle-1998-ferrari-550-maranello-6-speed-manual-low-miles-c-5800/',
      img: 'https://www.marshallgoldman.com/imagetag/5800/2/f/Used-1998-Ferrari-550-Maranello-6-Speed-Manual-Low-Miles-1783364215.jpg' },
    { name: '2018 Ferrari 488 Spider', price: '$369,990', mileage: '15,278', location: 'Beverly Hills',
      href: '/used-vehicle-2018-ferrari-488-spider-carbon-fiber-steering-wheel-w-leds-daytona-seats-c-5844/',
      img: 'https://www.marshallgoldman.com/imagetag/5844/2/f/Used-2018-Ferrari-488-Spider-Carbon-Fiber-Steering-Wheel-wLEDs-Daytona-Seats-1784734540.jpg' },
    { name: '2024 Ferrari 296 GTS', price: '$398,900', mileage: '1,770', location: 'Cleveland',
      href: '/used-vehicle-2024-ferrari-296-gts-atelier-design-build-historical-color-c-4509/',
      img: 'https://www.marshallgoldman.com/imagetag/4509/2/f/Used-2024-Ferrari-296-GTS-Atelier-Design-Build-Historical-Color-1790348113.jpg' },
    { name: '2015 Ferrari 458 Spider', price: '$339,990', mileage: '31,908', location: 'Cleveland',
      href: '/used-vehicle-2015-ferrari-458-spider-daytona-seats-forged-wheels-sport-exhaust-c-5798/',
      img: 'https://www.marshallgoldman.com/imagetag/5798/2/f/Used-2015-Ferrari-458-Spider-Daytona-Seats-Forged-Wheels-Sport-Exhaust-1785432423.jpg' },
    { name: '2017 Ferrari 488 Spider', price: '$354,950', mileage: '17,605', location: 'Newport Beach',
      href: '/used-vehicle-2017-ferrari-488-spider-ferrari-historical-color-sport-exhaust-daytona-seats-c-4989/',
      img: 'https://www.marshallgoldman.com/imagetag/4989/2/f/Used-2017-Ferrari-488-Spider-Ferrari-Historical-Color-Sport-Exhaust-Daytona-Seats-1785259274.jpg' },
    { name: '2014 Ferrari 458 Spider', price: '$448,900', mileage: '14,939', location: 'Cleveland',
      href: '/used-vehicle-2014-ferrari-458-spider-low-miles-carbon-leather-steering-wheel-with-leds-c-6015/',
      img: 'https://www.marshallgoldman.com/imagetag/6015/2/f/Used-2014-Ferrari-458-Spider-Low-Miles-CarbonLeather-Steering-Wheel-with-LEDs-1788900457.jpg' }
  ]
};
