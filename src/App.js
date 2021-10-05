
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from  './img2.jpg'
import video1 from './videoJSX.mp4'


function App() {
  return (
    <div className="App">
             <header className="App-header"> 
            <div style={{border:"solid 1px black",maxWidth:"100vw"}} >

<h1 className="title red">Your name here</h1>

<br />

<img src={img2} width="400" height="240" controls alt="" />

<br />

<img src='../img1.jpg' width="400" height="240" controls alt="" />

</div>

<video width="400" height="240" controls >

<source src={video1} type="video/mp4" />

</video>
          

 </header>
     </div>
   );
 }

 export default App;