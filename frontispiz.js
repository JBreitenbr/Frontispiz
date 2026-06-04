  const wordList = [
    ['JavaScript', 30],
    ['HTML', 25],
    ['CSS', 20],
    ['Vanilla', 15],
    ['Frontend', 12],
    ['Canvas', 8]
  ];
let artists=[{"artist":"Kajagoogoo","artist_score":5496.3},{"artist":"Yes","artist_score":4197.82},{"artist":"Franco Battiato","artist_score":4089.76},{"artist":"Van Der Graaf G.","artist_score":3913.97},{"artist":"King Crimson","artist_score":2246.73},{"artist":"Premiata Forneria Marconi","artist_score":2027.02},{"artist":"New Order","artist_score":1991.58},{"artist":"Depeche Mode","artist_score":1349.78},{"artist":"The Dandy Warhols","artist_score":1050.46},{"artist":"Banco Del Mutuo Soccorso","artist_score":1039.86},{"artist":"Gary Numan","artist_score":898.22},{"artist":"The Rolling Stones","artist_score":776.17},{"artist":"Mezquita","artist_score":557.66},{"artist":"NEU!","artist_score":445.78},{"artist":"Fleetwood Mac","artist_score":393.46},{"artist":"Kaja","artist_score":372.79},{"artist":"Talking Heads","artist_score":357.52},{"artist":"Genesis","artist_score":350.73}].slice(0,20).map((item)=>[item["artist"],Math.ceil(item["artist_score"]/100)]);;
//document.write(artists[0][1]);
  // Target the canvas element
  const canvas = document.getElementById('my-word-cloud');

  // Render the word cloud
  WordCloud(canvas, {
    list: artists,
    gridSize: 10,       // Size of the grid in pixels
    weightFactor: 1,    // Muliplier for word sizes
    fontFamily: 'Arial, sans-serif',
    color: 'random-dark', // Color scheme
    backgroundColor: '#f4f4f4',
    rotateRatio: 0.5,   // Probability a word will rotate (0 to 1)
    rotationSteps: 2,
  });
