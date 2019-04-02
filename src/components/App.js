import React, {useState}  from 'react';
import UserInput from './UserInput'
const App = () => {
    let [result, updateResult] = useState(null)
    console.log(result)
    return (
        <div> 
            <UserInput updateResult={updateResult} />
            
        </div>
    );
};

export default App;