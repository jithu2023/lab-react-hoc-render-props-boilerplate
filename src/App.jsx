import './App.css';
import LikeImage from './components/Normal/LikeImage';
import LikePost from './components/Normal/LikePost';

import LikeImageHOC from './components/UsingHOC/LikeImageHOC';
import LikePostHOC from './components/UsingHOC/LikePostHOC';

import LikeImageProps from './components/UsingProps/LikeImageProps';
import LikePostProps from './components/UsingProps/LikePostProps';

function App() {
  return (


    <div className='main'>
      <div className="box">
        <h3>Normal Blog</h3>
        <div className='buttons'>
          <LikePost />
          <LikeImage />
        </div></div>
        
      <div className="box"><h3>HOC Blog</h3>
        <div className='buttons'>
          <LikeImageHOC />
          <LikePostHOC />
        </div>
      </div>

      <div className="box"><h3>Props Blog</h3>
        <div className='buttons'>
          <LikeImageProps />
          <LikePostProps />
        </div></div>


    </div>
  );
}

export default App;