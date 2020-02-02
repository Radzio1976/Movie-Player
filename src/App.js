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
        title: "Straszne historie Maszy👻BARDZO STRASZNA HISTORIA O CHŁOPCU, KTÓRY BAŁ SIĘ MYĆ👻",
        url: "https://youtu.be/UEmvB3v-VEU",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 5,
        title: "31B Chojrak Tchórzliwy pies S03E05B Zgniłek Zaśmiecacz",
        url: "https://youtu.be/N6HJwyrcZgU",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 6,
        title: "Chojrak, Tchórzliwy Pies | Noc kretołaka (cały odcinek) | Cartoon Network",
        url: "https://youtu.be/yrzbWzzRiu4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 7,
        title: "Gumball | Komórka (cały odcinek) | Cartoon Network",
        url: "https://youtu.be/4-oMNAyFHow",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 8,
        title: "Detektyw | Niesamowity świat Gumballa | Cartoon Network",
        url: "https://youtu.be/f2LjbnGXQcc",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 9,
        title: "🎄 Kłamstwo | Niesamowity świat Gumballa | Cartoon Network",
        url: "https://youtu.be/ajaCFrMWaRE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 10,
        title: "Najlepszy | Niesamowity świat Gumballa | Cartoon Network",
        url: "https://youtu.be/3i6ZCND6ybI",
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
