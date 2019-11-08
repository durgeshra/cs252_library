import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [ 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

export const books = [
  {
    title: 'The Hobbit by J.R.R. Tolkien',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyRjNLCYzZ2gbh_xnaAOG8Kf8mzGJHIt879_pcsKuiM_cd1Aqf',
    genre: 'Action and Adventure',
    days,
    
  },
  {
    title: 'To Kill a Mockingbird by Harper Lee',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxPYodbRqrJHPdW-Pyqdc5aKvxt-SvNNxtVMZ6a9PV-M3qbCbA',
    genre: 'Classic',
    days,
    
  },
  {
    title: 'Sherlock Holmes by Arthur Conan Doyle',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrG56EX0Oi7bIcHSYmnBwnRNS6Xyn3XBYl4sX7RLyH-HtwHNL_',
    genre: 'Crime and Detective',
    days,
    
  },
  {
    title: 'Hamlet by William Shakespeare',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRebDIKN2bceDpcqeJ8ttSf7OSIkS6G4KPGhTV2ceWljO8qezYx',
    genre: 'Drama',
    days,
    
  },
  {
    title: 'The Lion And The Mouse by Aesop',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvWy1GAjVvtB0SviYMbV1Mg2c9oYJyOJiWrw8JNnP_0vVefNLk',
    genre: 'Fable',
    days,
    
  },
  {
    title: 'Rapunzel by Brothers Grimm',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTP-O2uFstRwNw9WrzoEVRPDVWtw755gnibHAC74V_8lKZlcB3Q',
    genre: 'Fairy Tale',
    days,
    
  },
  {
    title: 'Fangirl by Rainbow Rowell',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQn3bUM3jqNEQVUMO7-VxRZmyDJmOx9Rjwerv8x71Qj_wtc3zxb',
    genre: 'Fan-fiction',
    days,
    
  },
  {
    title: 'Harry Potter And The Sorcerer’s Stone by J.K. Rowling',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx_r2YEnec7-ER5sICZHSYizLwH38_1VmSHxOO-jsAUffs7VHe',
    genre: 'Fantasy',
    days,
    
  },
  {
    title: 'Gone With The Wind by Margaret Mitchell',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM-Xh31AGg2QecZTwpNT5gx6asZUKyqxhVr9EsnpdUX8NM4ZWI',
    genre: 'Historical Fiction',
    days,
    
  },
  {
    title: 'It by Stephen King',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBS5mdNCNr8_VbECACs_Rz2mGaNvncYFOnUTqQzeYyDWSwathm',
    genre: 'Horror',
    days,
    
  },
  {
    title: 'Good Omens by Neil Gaiman and Terry Pratchett',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6D1omK0Lt53QzuHvSpO_1JO1b9yyFKbG5lymQn5ozs2Kfjeqd',
    genre: 'Humor',
    days,
    
  },
  {
    title: 'The Hollow Hills by Mary Stewart',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDNv32uRNEIuEM4P3hqJYrJaGh2qFxsNbI6MAnjrIU1_6HnS9J',
    genre: 'Legend',
    days,
    
  },
  {
    title: 'The Da Vinci Code by Dan Brown',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGQH6pyMlVrmQT_2eIlW00hsYMd6M31qy3lTE7LKJ1S9KsnuOc',
    genre: 'Mystery',
    days,
    
  },
  {
    title: 'Mythology by Edith Hamilton',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNhklcQE68V48iDxwvLDPc_D8Xse7IelDWaJvrqSHFMChBF-OM',
    genre: 'Mythology',
    days,
    
  },
  {
    title: 'Thirteen Reasons Why by Jay Asher',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2lqtBEkDH6gNraFgK6c4q5zjy2CBVuF08k3TApRVglaXAALEy',
    genre: 'Realistic Fiction',
    days,
    
  },
  {
    title: 'The Notebook by Nicholas Sparks',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIWKcC0axFK01mMSXj9keFSMImuCvV-0K--ulyB0Z5L7sQpS_V',
    genre: 'Romance',
    days,
    
  },
  {
    title: 'Catch-22 by Joseph Heller',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4D8UC-X5lLYSVPa402jIjXs4MhYTRKlxvqlf8KAvvKJsE2VDy',
    genre: 'Satire',
    days,
    
  },
  {
    title: 'Dune by Frank Herbert',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlSu9BJ1XvvBoVk1z2LHJMaU1eHmZ-PtlefR7mFdvZRSBtU8LE',
    genre: 'Science Fiction (Sci-Fi)',
    days,
    
  },
];