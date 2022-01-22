import React from 'react';

import SearchBar from '../SearchBar/searchbar';
import SearchResults from '../SearchResults/searchresults';
import Playlist from '../Playlist/playlist';
import Spotify from '../../util/Spotify.js';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      searchResults: [],
      playlistName: '',
      playlistTracks: [] 
    }

      this.search = this.search.bind(this);
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
  }

  search(term){
    // console.log(searchTerm);
    Spotify.search(term).then(searchResults => 
      this.setState({searchResults:searchResults}));
  }

  addTrack(track){
    let playlistTracks = this.state.playlistTracks;
        if (playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
          return;
        }
        playlistTracks.push(track);
        this.setState({playlistTracks: playlistTracks});
  }

  removeTrack(track){
    let playlistTracks = this.state.playlistTracks;
    playlistTracks = playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
    this.setState({playlistTracks: playlistTracks})
  }

  updatePlaylistName(name){
    this.setState({ playlistName:name });
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);

    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({
      playlistName: 'New PLaylist',
      playlistTracks : []
    });
    document.querySelectorAll('input')[1].value = 'New Playlist';
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} />
            <Playlist 
              playlistName={this.state.playlistName} 
              onNameChange={this.updatePlaylistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

