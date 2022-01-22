
const clientId = 'f903e50ed50045df91a3838360acde45';
const redirectURI = 'http://localhost:3000/';

let accessToken;

const Spotify = {
	getAccessToken(){
		if(accessToken){
			return accessToken;
		}

		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiryMatch = window.location.href.match(/expires_in=([^&]*)/);

		if (accessTokenMatch && expiryMatch){ 
			accessToken = accessTokenMatch[1];
			const expiresIn = Number(expiryMatch[1]);

			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
			return accessToken;
		} else {
			const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
			window.location = accessURL;
		}
	},

	search(term){
		const accessToken = Spotify.getAccessToken();
		const headers = {Authorization: `Bearer ${accessToken}`};

		return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {headers:headers}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if(!jsonResponse.tracks){
				return [];
			}
			return jsonResponse.tracks.items.map(track => {
				return {
					id: track.id,
					name: track.name,
					artist: track.artists[0].name,
					album: track.album.name,
					uri: track.uri
				}
			});
		});
	},

	savePlaylist(name, trackURIs) {
		if(!name || trackURIs.length){
			return;
		}

		const accessToken = Spotify.getAccessToken();
		const headers = {Authorization: `Bearer ${accessToken}`};
		let userId;

		return fetch('https://api.spotify.com/v1/me', {headers:headers}).then(response => { 
				return response.json(); 
			}).then(jsonResponse => {
				const playlistId = jsonResponse.id;
				return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, { 
					headers: headers,
					method: 'POST',
					body: JSON.stringify({uris: trackURIs}),
				});
		});
	}
}

export default Spotify;