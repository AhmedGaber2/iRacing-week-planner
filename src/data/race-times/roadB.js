import { duration } from 'moment';

export default [
  {
    // Blancpain Sprint
    seriesId: 228,
    everyTime: duration(2, 'hours'),
    offset: duration(0, 'minutes'),
  },
  {
    // Lotus 79
    seriesId: 65,
    everyTime: duration(2, 'hours'),
    offset: duration(30, 'minutes'),
  },
  {
    // IMSA
    seriesId: 227,
    everyTime: duration(2, 'hours'),
    offset: duration(45, 'minutes'),
  },
];
