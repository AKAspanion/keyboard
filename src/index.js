const whiteKeys = document.querySelectorAll('.keyboard__key__white');
const blackKeys = document.querySelectorAll(
  '.keyboard__key__black.keyboard__key__black--real'
);

const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
const blackNotes = ['C', 'D', 'F', 'G', 'A', 'C', 'D', 'F', 'G', 'A'];

const metaData = {
  white: {},
  black: {},
};
whiteNotes.forEach((note, index) => {
  key = `key${index}`;
  file = `./notes/piano-${note.toLowerCase()}.wav`;

  metaData['white'][key] = { file, note, index };
});

blackNotes.forEach((note, index) => {
  key = `key${index}`;
  file = `./notes/piano-${note.toLowerCase()}-sharp.wav`;

  metaData['black'][key] = { file, note, index };
});

const clickKeyBoard = (type, num) => {
  const { file } = metaData[type][`key${num}`];
  const audio = new Audio(file);
  audio.play();
};

whiteKeys.forEach((key, index) => {
  key.addEventListener('click', () => clickKeyBoard('white', index));
});

blackKeys.forEach((key, index) => {
  key.addEventListener('click', () => clickKeyBoard('black', index));
});
