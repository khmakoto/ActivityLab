import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from 'react-youtube';

class CustomizedYouTube extends React.Component {

	constructor(props) {
		super(props);
		this.onReady = this._onReady.bind(this)
	}
	_onReady(event) {
		event.target.mute();
		this.props.onYouTubeReady(event.target);
  }

  render() {
		const prop = this.props
		const youtube_opts = {
			height: '300',
			playerVars: { // https://developers.google.com/youtube/player_parameters
				autoplay: 1,
				showinfo: 0,
				loop: 1,
				modestbranding: 1,
				autohide: 0
			}
		};
    return (
							<YouTube
								className="embed-responsive-item"
								videoId={prop.videoId}
								opts={youtube_opts}
								onReady={this.onReady}
							/>
					 );
  }
}
export default CustomizedYouTube;
