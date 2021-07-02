/* import logo from './logo.svg'; */
import './App.css';
import Contents from "./component/contents"

function App() {
  var childFunc = null;
  var data = {
            "rubric":"Odd one Out",

            "options":[
                        ["a", "b", "c"],
                        ["a1", "b2", "c3"]
                      ],

            "answers":[]
  }

  function abc(_func, _target){
    childFunc = _func;
    console.log(_target, "setting content");
  }

  function setContents(_a){
    childFunc(_a)
  }
  
  return (
    <div className="App">
      <header className="App-header" onClick={()=>setContents(5)}>
       asdf asdf asdf 
      </header>

      <Contents data={data} func={abc}/>

    </div>
  );
}

export default App;
