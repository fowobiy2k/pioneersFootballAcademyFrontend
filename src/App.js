import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Pft from './components/Pft'
import Admin from './components/Admin'

function App() {

  const [fixtures, setFixtures] = useState([]);
  const [message, setMessage] = useState([]);

    useEffect(() => {

        const getResources = async () => {
    
          // await fetchFixtures();
          axios.get('/home').then(
              res => {
                const response = res.data;
                console.log('Data: ', response)
                
              }
            )

          axios.get('/all/fixtures').then(
              res => {
                const response = res.data;
                console.log('Data: ', response)
                setFixtures(response)
                // console.log('Name: ', response.name)
                // console.log('Num: ', response.num)
                // console.log('Balance: ', response.balance)
              }
            )

            // axios.get('/pft/landing').then(
            //   res => {
            //     const response = res.data;
            //     console.log('Data2: ', response)
            //     setMessage(response)
            //   }
            // )
          
        }
    
        getResources()
    
      }, [])

    // Fetch Title
  const fetchFixtures = async () => {


    const res = await fetch('/all/fixtures')
    const data = await res.json()
    console.log(data)
    setFixtures(data)

    return data
  }

  return (
    <Router>
    <div className="App">
      <Header />
      <Route path="/" exact render={
        props => <Home fixtures={fixtures} />
      }/>

      <Route path="/pft" exact render={
        props => <Pft message={message} />
      }/>

      <Route path="/admin" exact render={
        props => <Admin />
      }/>
      
      <Footer />      
    </div>
    </Router>
  );
}

export default App;
