import React from 'react';
import './ProgressBar.css'
const ProgressBar = ({bgcolor, progress, height}) => {
    // if(progress >= 100){
    //     progress = 100;
    // }

      const currentProgress = {
        height: '100%',
        maxWidth: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'center'
      }

    return (
    <div className='progress-bar-container'>
      <div style={currentProgress}>
        <span className='progress-text'>{`${progress}%`}</span>
      </div>
    </div>
    )
}

export default ProgressBar;
