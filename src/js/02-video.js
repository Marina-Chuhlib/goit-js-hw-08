import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

const STORAGE_KEY = 'videoplayer-current-time';

const saveCurrentTime = e => {
  localStorage.setItem(STORAGE_KEY, e.seconds);
};

const getLocalStorageValue = localStorage.getItem(STORAGE_KEY) || 0;

player.on('timeupdate', throttle(saveCurrentTime, 500));

player.setCurrentTime(getLocalStorageValue);
