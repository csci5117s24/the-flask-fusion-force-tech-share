import ScrollableProgressBar from '../Components/ScrollableProgressBar';
import logo from '../logo.svg';

export default function Home(){
    return (
        <div className="App">
            <ScrollableProgressBar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

