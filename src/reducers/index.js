import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No crubs', durations: '4:05' },
    { title: 'No Macarena', durations: '2:30' },
    { title: 'All Stars', durations: '3:15' },
    { title: 'I want it my way', durations: '1:45' }
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
