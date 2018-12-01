import mongo from '../assets/technologies/mongo.jpg'
import nodejs from '../assets/technologies/nodejs.png'
import reactNative from '../assets/technologies/react-native.png'
import react from '../assets/technologies/react.png'
import angular from '../assets/technologies/angular.png'
import ionic from '../assets/technologies/ionic.png'
import firebase from '../assets/technologies/firebase.png'
import java from '../assets/technologies/java.png'
import vue from '../assets/technologies/vue.png'


export const COMPANYS = [
   {
      id: 1,
      name: 'Freelo',
      image: 'https://firebasestorage.googleapis.com/v0/b/freelo-desarrollo.appspot.com/o/icon.png?alt=media&token=e1f545d0-0c8a-4210-93dc-1fb038e75a5c',
      technologies: [{
         name: 'React Native',
         image: reactNative
      }, {
         name: 'React',
         image: react
      }, {
         name: 'Node.js',
         image: nodejs
      }, {
         name: 'MongoDB',
         image: mongo
      }],
      year: 2018,
      role: 'Mobile developer',
      show: true,
      description: 'I create all the arquitecture of the app Freelo with technologies like React Native, Node.js and MongoDB, actually the app is published in each store of the platforms (iOS, Android). Also create a Dashboard to keep control of the app and i used React to create it.'
   },
   {
      id: 2,
      name: 'Xtreme Visual',
      image: 'https://firebasestorage.googleapis.com/v0/b/xtream-visual.appspot.com/o/logo.jpg?alt=media&token=6b9531ec-c378-4c83-8933-5250ec58aea8',
      technologies: [{
         name: 'React',
         image: react
      }, {
         name: 'Node.js',
         image: nodejs
      }, {
         name: 'Firebase',
         image: firebase
      }],
      year: 2018,
      role: 'Web developer',
      show: false,
      description: `I create a dashboard to show metrics of the Samsung's products which were taken from API that was consume by sensors placed on each of the products.`
   },
   {
      id: 3,
      name: 'Pappcorn',
      image: 'https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/13873029_493037040893422_5371367608999183650_n.jpg?_nc_cat=108&_nc_ht=scontent.fbog2-2.fna&oh=a7f41520cbf120c19a03367b1c5948b1&oe=5C653468',
      technologies: [{
         name: 'Angular',
         image: angular,
      },
      {
         name: 'Ionic',
         image: ionic
      },
      {
         name: 'Firebase',
         image: firebase
      },
      {
         name: 'Node.js',
         image: nodejs
      }],
      year: 2017,
      role: 'Mobile and Web developer',
      show: false,
      description: `Develop web applications and mobile applications that use web technologies, for the different partners associated with Pappcorn, participating in the development of applications currently in production as:
      
      VAKI - Web app
      
      TREPSI - Mobile app
      
      SIEMPRE AGUA - Web app / Mobile app`
   },
   {
      id: 4,
      name: 'Publicar',
      image: 'https://scontent.fbog2-1.fna.fbcdn.net/v/t31.0-8/22860026_1698487010196629_7384143273874005392_o.png?_nc_cat=102&_nc_ht=scontent.fbog2-1.fna&oh=8b2d52cfe23ebb887c67c810fcfaa507&oe=5C6E6022',
      technologies: [{
         name: 'Angular.js',
         image: angular
      },
      {
         name: 'Vue.js',
         image: vue
      },
      {
         name: 'Java',
         image: java
      }],
      year: 2016,
      role: 'Web developer',
      show: false,
      description: 'Create web applications with Java, Angulara and Vue for Salesforce platform which is where Publicar keeps its business'
   },
]