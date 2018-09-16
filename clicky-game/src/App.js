import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/navbar";
import HostCard from "./components/hosts";
import hostsJson from "./hosts.json";
import Title from "./components/title"
import Wrapper from "./components/wrapper";


function shuffleHosts(array){
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // console.log(array, "shufffled");
    return array;
  };

class App extends Component {
    state = {
        hosts: hostsJson,
        message: "Click an Image to Begin!",
        correctMessage: '',
        correctMessageClass: '',
        incorrectMessage: '',
        incorrectMessageClass: '',
        winMessage: 'Clicky Game!',
        winMessageClass: '',
        topScore: 0,
        currentScore: 0,
        selectedHosts: [],
    }


    handleClick = id => {
        // console.log(this.state.selectedHosts.indexOf(id))

        //checks to see if id has been selected and is in array
        if(this.state.selectedHosts.indexOf(id) === -1){
            // console.log("id not in the array");
            this.state.selectedHosts.push(id);
            this.handleCorrect();
        }
        else{
            // console.log("In the array");
            this.handleIncorrect();
        }
        // console.log("Placed in selectedHosts array", this.state.selectedHosts);
    };
    
    handleCorrect = () => {
        const newScore = this.state.currentScore +1;
        this.setState({
            currentScore: newScore,
            // topScore: this.state.topScore +1,
            message: "",
            correctMessage: "Correct!",
            correctMessageClass: "tracking-in-contract",    
        })
        console.log("Score", newScore); 
        // , () => setTimeout(() => this.setState({correctMessageClass: ''}), 500))
        if (newScore >= this.state.topScore){
            this.setState({
                topScore: newScore
            })   
        }
        if (newScore === 5){
            console.log(newScore);
            this.setState({ 
                message: "",
                winMessage: 'You Are An HGTV Champ!!!',
                winMessageClass: 'text-pop-up-top'
                }
            ,() => setTimeout(() =>this.reset(), 2000));
            
        }
        // this.reset();
        this.handleShuffle();
    };

    handleIncorrect = () => {
        
        this.setState({
            currentScore: 0,
            message:'',
            incorrectMessage: 'Wrong!',
            incorrectMessageClass: 'tracking-in-contract',
            correctMessage: '',
            selectedHosts: []
        }, () => setTimeout(() => this.setState({IncorrectMessageClass: '', incorrectMessage: '', correctMessage:''}), 800))
        this.handleShuffle();
        this.reset();
    };

    handleShuffle = () => {
        let shuffledHosts = shuffleHosts(hostsJson);
        this.setState({hosts: shuffledHosts});
    };

    reset = () => {
        this.setState({
            hosts: hostsJson,
            currentScore: 0,
            winMessage: '',
            winMessageClass: '',
            message: "Click an Image to Begin!",
            correctMessage: '',
            correctMessageClass: '',
            IncorrectMessage: '',
            incorrectMessageClass: 'flip-in-hor-bottom',
            selectedHosts: []
        })
        this.handleShuffle();
    }

    render() {
        return (
           <div>
                <Navbar
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                    message={this.state.message}
                    correctMessageClass={this.state.correctMessageClass}
                    correctMessage={this.state.correctMessage}
                    incorrectMessage={this.state.incorrectMessage}
                    incorrectMessageClass={this.state.incorrectMessageClass}
                />
                <Title 
                    winMessage={this.state.winMessage}
                    winMessageClass={this.state.winMessageClass}
                    />
                <Wrapper>
                {this.state.hosts.map(host => (
                    <HostCard
                        key={host.id}
                        handleClick={this.handleClick}
                        handleCorrect={this.handleCorrect}
                        handleIncorrect={this.handleIncorrect}
                        handleShuffle={this.handleShuffle}
                        incorrectMessageClass={this.state.incorrectMessageClass}
                        id={host.id}
                        name={host.name}
                        image={host.image}
                        show={host.show}
                    />
                ))}
            </Wrapper>
            </div>
        );
    }
}

export default App;

