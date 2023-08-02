import React from 'react';
import { useHistory } from 'react-router-dom';
import Nav from './Home';


const Watch = () => {

    const history = useHistory();

  const handlePlayClick = (viewMovie) => {
    // Use the 'viewMovie' data received from the 'Modal'
    // Perform any necessary actions with the data
    console.log(viewMovie);

    // Then navigate to the Watch component (or any other component) using the history object
    history.push('/watch');
  };
    return (
      <div>
        <Nav />
        <div className="watch">
          <div className="Cinema"></div>
          <div className="comments-suggestions">
            <div className="comments">
              <ul>
                <li>Comments</li>
                <li>Questions</li>
                <li>Episodes</li>
              </ul>
            </div>
            <div className="suggestions">
              {/* Add the content for suggestions */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Watch;