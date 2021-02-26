// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

    
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }
    
    handleBitrate = () => {
       this.setState({
           settings: {
               ...this.state.settings, 
               bitrate: 12
           }
       }) 
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })        
    }
    
    render(){
        return(
        <div>
            <p><strong>Bitrate: {this.state.settings.bitrate}</strong></p>
            <button onClick={this.handleBitrate} className='bitrate'>bitrate</button>
            <p><strong>Resolution: {this.state.settings.video.resolution}</strong></p>
            <button onClick={this.handleResolution} className='resolution'>resolution</button>
        </div>
        )
    }
}