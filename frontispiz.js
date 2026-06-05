  const wordList = [
    ['JavaScript', 30],
    ['HTML', 25],
    ['CSS', 20],
    ['Vanilla', 15],
    ['Frontend', 12],
    ['Canvas', 8]
  ];
/*let artists=[{"artist":"Kajagoogoo","artist_score":5496.3},{"artist":"Yes","artist_score":4197.82},{"artist":"Franco Battiato","artist_score":4089.76},{"artist":"Van Der Graaf G.","artist_score":3913.97},{"artist":"King Crimson","artist_score":2246.73},{"artist":"Premiata Forneria Marconi","artist_score":2027.02},{"artist":"New Order","artist_score":1991.58},{"artist":"Depeche Mode","artist_score":1349.78},{"artist":"The Dandy Warhols","artist_score":1050.46},{"artist":"Banco Del Mutuo Soccorso","artist_score":1039.86},{"artist":"Gary Numan","artist_score":898.22},{"artist":"The Rolling Stones","artist_score":776.17},{"artist":"Mezquita","artist_score":557.66},{"artist":"NEU!","artist_score":445.78},{"artist":"Fleetwood Mac","artist_score":393.46},{"artist":"Kaja","artist_score":372.79},{"artist":"Talking Heads","artist_score":357.52},{"artist":"Genesis","artist_score":350.73}].slice(0,20).map((item)=>[item["artist"],Math.max(Math.ceil(item["artist_score"]/90),15)]);;
*///document.write(artists[0][1]);
let artists=["Al Di Meola","Allman Brothers Band","Archie Shepp","Kajagoogoo","New Order","Depeche Mode","Gary Numan","Arlo Guthrie","Aphrodite's Child","Banco Del Mutuo Soccorso","Van Der Graaf Generator",
"Bill Frisell","Bob Dylan","Anouar Brahem","Buffalo Springfield","Camel","CAN","Chick Corea","Climax Blues Band","Claude Debussy","Elliot Smith","Eric Clapton","Embryo","Eric Dolphy","Fleetwood Mac","Focus","Franco Battiato","Free","Frank Zappa","Genesis","Golden Earring","Grateful Dead","Grobschnitt","Hank Mobley","Herbie Hancock","Horace Silver","Howlin' Wolf","Igor Stravinsky","Il Balletto di Bronzo","Jack DeJohnette","Jackson Browne","Cream","Creedence Clearwater Revival","Deep Purple","Curved Air","Crosby, Stills, Nash & Young","Dream Theater","Duke Ellington","J.J.Cale","Gianna Nannini","Jethro Tull","Jimi Hendrix","Jimmy Smith","John Coltrane","John Lennon","John Mayall","Judas Priest","King Crimson","Koenjihyakkei","Kraan","La coscienza di Zeno","Le Orme","Led Zeppelin","Leo Kottke","Lee Morgan","Leon Russell","Lucio Battisti","Magma","Mahavishnu Orchestra","Maurice Ravel","Myrath"
];

let arr=[];
for(let i=0;i<30;i++){
  let rnd=Math.floor(Math.random()*artists.length);
if(!arr.includes(artists[rnd])){arr.push(artists[rnd]);}
}
let arr2=arr.map((item)=>[item,15]);
  // Target the canvas element
  const canvas = document.getElementById('my-word-cloud');

  // Render the word cloud
  WordCloud(canvas, {
    list: arr2,
    gridSize: 10,       // Size of the grid in pixels
    weightFactor: 1,    // Muliplier for word sizes
    fontFamily: 'Arial, sans-serif',
    color: 'random-dark', // Color scheme
    backgroundColor: '#f4f4f4',
    rotateRatio: 0.5,   // Probability a word will rotate (0 to 1)
    rotationSteps: 2,
  });
