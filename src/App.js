
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Switch as buttonSwitch } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/header/Header';
import axios from 'axios';
import Definitions from './components/header/Definitions/Definitions';
import { grey } from '@material-ui/core/colors';


function App() {

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(buttonSwitch);
  const [word, setWord] = useState([]);
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const [lightMode, setLightMode] = useState(false);









  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setMeanings(data.data);


    }

    catch (error) {

      console.log(error);
    }
  };
  useEffect(() => {
    dictionaryAPI();
  }, [category, word])


  return (
    <Router>
      <Router>
        <Switch>
          <div className="App" style={{
            height: '100vh',
            backgroundColor: lightMode ? "#fff" : "#282c34",
            color: lightMode ? "black" : "white",
            transition: "all 0.5s linear",
          }}>
            <Container
              maxWidth="md"
              style={{ display: "flex", flexDirection: "column", height: "100vh" }}
            >

              <div style={{ position: "absolute", top: 0, right: 25, paddingTop: 25 }}>


                <span> {lightMode ? "Dark" : "Light"} mode </span>
                <DarkMode checked={lightMode} onChange={() => setLightMode(!lightMode)} />
              </div>
              <Route exact path="/">
                <Header category={category} setCategory={setCategory} word={word} setWord={setWord} lightMode={lightMode} />
                {meanings && (<Definitions
                  word={word}
                  meanings={meanings}
                  category={category}
                  lightMode={lightMode}
                />
                )}
              </Route>



            </Container>
          </div>
        </Switch>
      </Router>
    </Router>
  );
}

export default App;
