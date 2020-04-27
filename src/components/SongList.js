import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);

//Всегда импортируем connect, и всегда его экспортируем с аргументами:
//1-арг. - mapStateToProps(всегда передаем ей стейт и возвращаем пропс)
//2-арг. - наш компонент
