import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No crubs', duration: '4:05' },
    { title: 'No Macarena', duration: '2:30' },
    { title: 'All Stars', duration: '3:15' },
    { title: 'I want it my way', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
