import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MoviesPlayer from './components/MoviesPlayer';
import AllMovies from './components/AllMovies';
import Logo from './components/Logo';

class App extends React.Component {
  state = {
    movies: [
      {
        id: 0,
        title: "KORONAWIRUS vs. CYFROZA | Cezary Graf",
        url: "https://youtu.be/Dr8nb2DEGtY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 1,
        title: "Ja tego nie wybrałam...",
        url: "https://youtu.be/zvcTNfBY8As",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 2,
        title: "Krótki Film o Czerpaniu Przyjemności z Porażek",
        url: "https://youtu.be/Y2ATJB9QMkU",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 3,
        title: "42A Chojrak Tchórzliwy pies S04E03A Balon le Quack'a",
        url: "https://youtu.be/-ltIZcFMju0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 4,
        title: "Enigma Sitting On The Moon Piotr Sounder Lewandowicz [Remix]",
        url: "https://youtu.be/3ZM3LXSON9M",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 5,
        title: "TRADER 21 i jego książka POD OSTRZAŁEM! Dosyć tego przymilania się...",
        url: "https://youtu.be/sDe0ni3Wrdg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 6,
        title: "Jak inwestować w złoto? Przemysław Słomski. [Expert w Bentley'u #29]",
        url: "https://youtu.be/9pc26zBNCOE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 7,
        title: "Muzyka relaksacyjna na stres, muzyka do nauki, koncentracja, spa",
        url: "https://youtu.be/JPzMHVCXLDs",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 8,
        title: "Dodaj tego do chleba a zawsze będziesz zdrowy. Sprawdź dlaczego.",
        url: "https://youtu.be/FELHqhU7Y0U",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 9,
        title: "10 Największych MASZYN na świecie",
        url: "https://youtu.be/du7BAm2J0Wk",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 10,
        title: "10 Największych pojazdów",
        url: "https://youtu.be/t5A81wcc_5E",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  }

  render() {
    return (
      <BrowserRouter>
        <Logo />
        <Switch>
          <Route path="/" exact component={() => <AllMovies movies={this.state.movies} />} />
          <Route path="/video/:title" component={(props) => <MoviesPlayer movies={this.state.movies} {...props} />} />
        </Switch>
      </BrowserRouter>
    )
  }

}



export default App;
