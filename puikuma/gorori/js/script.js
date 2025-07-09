const clickSound1 = document.getElementById('sound1');
const clickSound2 = document.getElementById('sound2');
const clickSound3 = document.getElementById('sound3');
const clickSound4 = document.getElementById('sound4');

document.addEventListener('keydown', function (event) {
  if (event.key === '1') {
    clickSound1.currentTime = 0;
    clickSound1.play();
  }
  if (event.key === 'k') {
    clickSound1.currentTime = 0;
    clickSound1.play();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === '2') {
    clickSound2.currentTime = 0;
    clickSound2.play();
  }
  if (event.key === 'g') {
    clickSound2.currentTime = 0;
    clickSound2.play();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === '3') {
    clickSound3.currentTime = 0;
    clickSound3.play();
  }
  if (event.key === 'h') {
    clickSound3.currentTime = 0;
    clickSound3.play();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === '4') {
    clickSound4.currentTime = 0;
    clickSound4.play();
  }
  if (event.key === 'd') {
    clickSound4.currentTime = 0;
    clickSound4.play();
  }
});
