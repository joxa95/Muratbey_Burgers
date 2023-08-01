const fastFoodData = [
  [
    {
      name: "Lavash oddiy",
      ingredients:
        "Mol go'shti 60g, Ketchup, mayonez, sous, pomidor va bodring",
      prise: 20000,
      photoName: "././pictures/lavash/lavashOddiy.png",
      // soldOut: false,
    },
    {
      name: "Lavash sirli",
      ingredients:
        "Mol go'shti 80g, ketchup, mayonez, sous, pomidor, bodring, sir va salat barg ",
      prise: 26000,
      photoName: "././pictures/lavash/lavashSirli.png",
      // soldOut: false,
    },
    {
      name: "Lavash zakaznoy",
      ingredients:
        "Mol go'sht 100g, Ketchup, mayonez, sous, pomidor, bodring, sir va salat barg",
      prise: 30000,
      photoName: "././pictures/lavash/lavashZakaznoy.png",
      soldOut: false,
    },
  ],
  [
    {
      name: "Donar oddiy",
      ingredients:
        "Mol go'shti 80g, salat barg, chips, pomidor, bodring, tomat sousi, ketchup va mayonez",
      prise: 15000,
      photoName: "././pictures/donar/donarOddiy.png",
      // soldOut: false,
    },
    {
      name: "Donar sirli",
      ingredients:
        "Sir, mol go'shti 80g, salat barg, chips, pomidor, bodring, tomat sousi,  ketchup va mayonez",
      prise: 18000,
      photoName: "././pictures/donar/donarSirli.png",
      // soldOut: false,
    },
  ],
  [
    {
      name: "Gamburger 8",
      ingredients:
        "Tovuq go'shtli kotlet, sabzi salat, pomidor, bodring, ketchup, mayonez va sirli sous",
      prise: 8000,
      photoName: "././pictures/gamburger/gamburger8000.png",
      // soldOut: false,
    },
    {
      name: "Gamburger 10",
      ingredients:
        "Tovuq go'shtli kotlet, sabzi salat, pomidor, bodring, ketchup, mayonez, sirli sous, salat barg va chips",
      prise: 10000,
      photoName: "././pictures/gamburger/gamburger10000.png",

      // soldOut: false,
    },
    {
      name: "Gamburger 12",
      ingredients:
        "Mol go'shtili kotlet, sabzi salat, pomidor, bodring, ketchup, mayonez, sirli sous, salat barg va chips",
      prise: 12000,
      photoName: "././pictures/gamburger/gamburger12000.png",

      // soldOut: false,
    },
    {
      name: "Gamburger 18",
      ingredients:
        "2 x mol go'shtili kotlet, salat barg, sir, pomidor, bodring, piyoz, ketchup, mayonez, sirli sous va chips ",
      prise: 18000,
      photoName: "././pictures/gamburger/gamburger18000.png",

      // soldOut: false,
    },
    {
      name: "Cheesburger",
      ingredients:
        "Mol go'shtili kotlet, sabzi salat, pomidor, bodring, ketchup, mayonez, sirli sous, salat barg va chips",
      prise: 20000,
      photoName: "././pictures/gamburger/chizburger.png",

      // soldOut: false,
    },
  ],
  [
    {
      name: "Hot Dog 10",
      ingredients:
        "2 x To'htaniyoz sosiska, sabzi salat, salat barg, pomidor, bodring, sirli sous, chips, ketchup va mayonez",
      prise: 10000,
      photoName: "././pictures/hot-dog/hotdog10000.png",

      // soldOut: false,
    },
    {
      name: "Hot Dog 12",
      ingredients:
        "2 x kanadskaya sosiska, sabzi salat, salat barg, pomidor, bodring, sirli sous, chips, ketchup va mayonez",
      prise: 12000,
      photoName: "././pictures/hot-dog/hotdog12000.png",

      // soldOut: false,
    },
    {
      name: "Hot Dog 15",
      ingredients:
        "2 x Venskaya sosiska, sabzi salat, salat barg, pomidor, bodring, sirli sous, chips, ketchup va mayonez",
      prise: 15000,
      photoName: "././pictures/hot-dog/hotdog15000.png",

      // soldOut: false,
    },
    {
      name: "Hot Dog 18",
      ingredients:
        "Mol go'shti 80g, sabzi salat, salat barg, pomidor, bodring, sirli sous, chips, ketchup va mayonez",
      prise: 18000,
      photoName: "././pictures/hot-dog/hotdog18000.png",

      // soldOut: false,
    },
  ],
  [
    {
      name: "Coca Cola 1,5L",
      // ingredients: "sir pomidor .....",
      prise: 12000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Coca Cola 1L",
      // ingredients: "sir pomidor .....",
      prise: 10000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Coca Cola 0,5L",
      // ingredients: "sir pomidor .....",
      prise: 6000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Pepsi 1,5L",
      // ingredients: "sir pomidor .....",
      prise: 12000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Pepsi 1L",
      // ingredients: "sir pomidor .....",
      prise: 10000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Pepsi 0,5L",
      // ingredients: "sir pomidor .....",
      prise: 6000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Fanta 1,5L",
      // ingredients: "sir pomidor .....",
      prise: 12000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Fanta 1L",
      // ingredients: "sir pomidor .....",
      prise: 10000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Fanta 0,5L",
      // ingredients: "sir pomidor .....",
      prise: 6000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Flash 0,5L ",
      // ingredients: "sir pomidor .....",
      prise: 10000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Flash 3,3ml ",
      // ingredients: "sir pomidor .....",
      prise: 8000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Flash 250ml ",
      // ingredients: "sir pomidor .....",
      prise: 8000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Gazli suv 1L ",
      // ingredients: "sir pomidor .....",
      prise: 3000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Gazli suv 0.5L ",
      // ingredients: "sir pomidor .....",
      prise: 2000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Oddiy suv 1L ",
      // ingredients: "sir pomidor .....",
      prise: 3000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
    {
      name: "Oddiy suv 0.5L ",
      // ingredients: "sir pomidor .....",
      prise: 2000,
      photoName:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
      // soldOut: false,
    },
  ],
];
//
