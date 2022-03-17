import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const db = firebase.firestore()

// Set Movies
db.collection('movies').doc('batman').set({
  title: 'Batman',
  bannerURL: 'https://i.imgur.com/6e0zWZE.jpg',
  posterURL: 'https://i.imgur.com/kichELC.jpg',
  genres: ['AÇÃO'],
  length: 176,
  director: 'Matt Reeves',
  cast: 'Robert Pattinson, Zoë Kravitz, Paul Dano',
  distribuitor: 'Warner Bros.',
  synopsis: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
  trailerURL: 'https://www.youtube.com/embed/ACHhOWRed1s'
})
.catch((err) => {
    console.log(err)
})

db.collection('movies').doc('doctor-strange').set({
  title: 'Doutor Estranho no Universo da Loucura',
  bannerURL: 'https://i.imgur.com/PAMOWpF.png',
  posterURL: 'https://i.imgur.com/7LHIju7.jpg',
  genres: ['AÇÃO'],
  length: 180,
  director: 'Sam Raimi',
  cast: 'Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor',
  distribuitor: 'Walt Disney Studios Motion Pictures',
  synopsis: '"A porta do multiverso, cheia de mistério e loucura, se abre. Agora, que Homem de Ferro e Capitão América partiram, após a batalha de Vingadores: Ultimato, o ex-cirurgião genial deve cumprir um papel central nos Vingadores. Entretanto, usando sua mágica para manipular o tempo e o espaço à vontade com um feitiço proibido e considerado o mais perigoso acabou abrindo as portas para a loucura conhecida como "O Multiverso".',
  trailerURL: 'https://www.youtube.com/embed/X23XCFgdh2M'
})
.catch((err) => {
    console.log(err)
})