import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'; //action creator

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);

//Всегда импортируем connect, и всегда его экспортируем с аргументами:
//1-арг. - mapStateToProps(всегда передаем ей стейт и возвращаем пропс)
//2-арг. - наш компонент

// {selectSong: selectSong} - этот объект передаем в connect, вместе с mapStateToProps
// таким образом action creator связывается с компонентом - через пропс
