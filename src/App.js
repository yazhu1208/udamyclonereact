import Navbar from './component/Navbar'
import Suggestion from './component/Suggestion';

import Catageries from './component/Categeries'
import Udamyimage from './component/Udamyimage'
import Recommended from './component/Recommended'
import Topic from './component/Topic'
import Footer from './component/Footer'


function App() {
    return (
        <div>
           <Navbar></Navbar> 
              
            <Catageries></Catageries>
            <Udamyimage></Udamyimage>
           <Recommended></Recommended>
              <Topic></Topic>
            <Suggestion></Suggestion>
            
            <Footer></Footer>
            
        </div>
    )
}

export default App
