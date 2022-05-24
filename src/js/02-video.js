import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const storageKey = 'videoplayer-current-time';

player.on('play', onPlay);

function onPlay() {
  player.on('timeupdate', throttle(saveTimeToStorage, 1000));
}
function saveTimeToStorage(event) {
  // console.log(event.seconds);
  localStorage.setItem(storageKey, event.seconds);
}

function getTimeFromStorage() {
  const currentTime = localStorage.getItem(storageKey);
  //   console.log(currentTime);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}

getTimeFromStorage();

// =========================================================================

// function findCurrentTime(e) {
//   console.log(e.seconds);
//   localStorage.setItem(storageKey, e.seconds);
// }

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// const onPlay = function (data) {
//   console.log(data);
//   const { seconds } = data;
//   console.log(seconds);
//   localStorage.setItem(storageKey, seconds);
//   sss(data);

//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// console.log(localStorage.getItem(storageKey));
// currentTime = localStorage.getItem(storageKey);

// function sss(e) {
//   console.log('eto secund', e.seconds);
// }

// player
//   .setCurrentTime(currentTime)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
