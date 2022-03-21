import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const db = firebase.firestore()

// Set Movies
db.collection('movies').doc('batman').set({
  title: 'Batman',
  bannerURL: 'https://i.imgur.com/6e0zWZE.jpg',
  posterURL: 'https://i.imgur.com/kichELC.jpg',
  ar: '14',
  genres: ['AÇÃO'],
  length: 176,
  director: 'Matt Reeves',
  cast: 'Robert Pattinson, Zoë Kravitz, Paul Dano',
  distribuitor: 'Warner Bros. Pictures',
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
  ar: '12',
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

db.collection('movies').doc('morbius').set({
  title: 'Morbius',
  bannerURL: 'https://i.imgur.com/pkZ31xZ.jpg',
  posterURL: 'https://i.imgur.com/F8T8MB9.jpg',
  ar: '16',
  genres: ['AVENTURA'],
  length: 108,
  director: 'Daniel Espinosa',
  cast: 'Jared Leto, Michael Keaton, Adria Arjona',
  distribuitor: 'Sony Pictures',
  synopsis: 'O bioquímico Michael Morbius tenta curar-se de uma doença rara no sangue, mas sem perceber, ele fica infectado com uma forma de vampirismo.',
  trailerURL: 'https://www.youtube.com/embed/9QJn_zhnrVk'
})
.catch((err) => {
    console.log(err)
})

db.collection('movies').doc('fantastic-beasts-the-secrets-of-dumbledore').set({
  title: 'Animais Fantásticos: Os Segredos de Dumbledore',
  bannerURL: 'https://i.imgur.com/xsdQU1j.jpg',
  posterURL: 'https://i.imgur.com/QpL884R.jpg',
  ar: 'l',
  genres: ['FANTASIA'],
  length: 180,
  director: 'David Yates',
  cast: 'Mads Mikkelsen, 	Ezra Miller, Katherine Waterston',
  distribuitor: 'Warner Bros. Pictures',
  synopsis: 'The third installment of the "Fantastic Beasts and Where to Find Them" series which follows the adventures of Newt Scamander.',
  trailerURL: 'https://www.youtube.com/embed/LcCrLZceCmg'
})
.catch((err) => {
    console.log(err)
})

db.collection('movies').doc('the-northman').set({
  title: 'The Northman',
  bannerURL: 'https://i.imgur.com/I8pLpw8.jpg',
  posterURL: 'https://i.imgur.com/QC5zPpf.jpg',
  ar: '18',
  genres: ['AÇÃO'],
  length: 180,
  director: 'David Yates',
  cast: 'Alexander Skarsgård, Nicole Kidman, Claes Bang',
  distribuitor: 'Warner Bros. Pictures',
  synopsis: 'Depois de testemunhar o assassinato do pai pelas mãos do seu tio Fjölnir, e ver sua mãe e reino tomados pelo assassino, o jovem Príncipe Amleth foge para retornar anos depois, já adulto, determinado a fazer justiça.',
  trailerURL: 'https://www.youtube.com/embed/LcCrLZceCmg'
})
.catch((err) => {
    console.log(err)
})