import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'MBS Wep App',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Joint Web App',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Films 101',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Hello world',
    desc:
      'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Hello world',
    desc:
      'Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world.',
    img: ProjectImg,
  },
];

export default projects;
