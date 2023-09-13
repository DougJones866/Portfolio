import "./Projects.css";
import expense from './assets/expense.png'
import music from './assets/music.png'

export const projects = [
  {
    title: "Music Player",
    image: music,
    description:
      "Music player application made using VueJs. Allows users to create accounts in order to upload and play music. They are also able to leave comments, upload and edit song information on their uploads. Data stored using firebase.",
    url: "https://github.com/DougJones866/music-player",
  },
  {
    title: "Expense Form",
    image: expense,
    description:
      "Expense form created using React",
    url: "https://github.com/DougJones866/expense-form",
  },
  {
    title: "Tic Tac Toe",
    // image: eventsImage,
    description:
      "Tic Tac Toe game created using Javascript",
    url: "https://github.com/DougJones866/tic-tac-toe",
  },
];

