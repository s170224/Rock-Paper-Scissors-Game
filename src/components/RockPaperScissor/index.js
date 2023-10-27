import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {ScorePara, ResultPara} from './styledComponents'

import EachListComponent from '../EachListComponent'

import './index.css'

class RockPaperScissor extends Component {
  state = {
    score: 0,
    yourGame: '',
    oppositeGame: '',
    displayResults: false,
    win: '',
  }

  onClickUpdateResults = id => {
    const {choicesList} = this.props
    const newDate = choicesList.filter(each1 => id === each1.id)
    const newOppositeData = Math.random() * 3
    const oppGame = Math.floor(newOppositeData)

    if (id === 'ROCK') {
      if (choicesList[oppGame].id === 'SCISSORS') {
        this.setState(prevState => ({
          win: 'YOU WON',
          score: prevState.score + 1,
          yourGame: newDate[0].imageUrl,
          oppositeGame: choicesList[oppGame].imageUrl,
          displayResults: true,
        }))
      } else if (choicesList[oppGame].id === 'PAPER') {
        this.setState(prevState => ({
          win: 'YOU LOSE',
          score: prevState.score - 1,
          yourGame: newDate[0].imageUrl,
          oppositeGame: choicesList[oppGame].imageUrl,
          displayResults: true,
        }))
      } else {
        this.setState(prevState => ({
          win: 'IT IS DRAW',
          score: prevState.score,
          yourGame: newDate[0].imageUrl,
          oppositeGame: choicesList[oppGame].imageUrl,
          displayResults: true,
        }))
      }
    } else if (id === 'SCISSORS') {
      if (choicesList[oppGame].id === 'PAPER') {
        this.setState(prevState => ({
          win: 'YOU WON',
          score: prevState.score + 1,
          yourGame: newDate[0].imageUrl,
          oppositeGame: choicesList[oppGame].imageUrl,
          displayResults: true,
        }))
      } else if (choicesList[oppGame].id === 'ROCK') {
        this.setState(prevState => ({
          win: 'YOU LOSE',
          score: prevState.score - 1,
          yourGame: newDate[0].imageUrl,
          oppositeGame: choicesList[oppGame].imageUrl,
          displayResults: true,
        }))
      } else {
        this.setState(prevState => ({
          win: 'IT IS DRAW',
          score: prevState.score,
          yourGame: newDate[0].imageUrl,
          oppositeGame: choicesList[oppGame].imageUrl,
          displayResults: true,
        }))
      }
    } else if (id === 'PAPER') {
      if (choicesList[oppGame].id === 'ROCK') {
        this.setState(prevState => ({
          win: 'YOU WON',
          score: prevState.score + 1,
          yourGame: newDate[0].imageUrl,
          oppositeGame: choicesList[oppGame].imageUrl,
          displayResults: true,
        }))
      } else if (choicesList[oppGame].id === 'SCISSORS') {
        this.setState(prevState => ({
          win: 'YOU LOSE',
          score: prevState.score - 1,
          yourGame: newDate[0].imageUrl,
          oppositeGame: choicesList[oppGame].imageUrl,
          displayResults: true,
        }))
      } else {
        this.setState(prevState => ({
          win: 'IT IS DRAW',
          score: prevState.score,
          yourGame: newDate[0].imageUrl,
          oppositeGame: choicesList[oppGame].imageUrl,
          displayResults: true,
        }))
      }
    }

    // if (id === 'ROCK' && choicesList[oppGame].id === 'SCISSORS') {
    //   this.setState(prevState => ({win: 'YOU WON', score: prevState.score + 1}))
    // } else if (id === 'ROCK' && choicesList[oppGame].id === 'PAPER') {
    //   this.setState(prevState => ({
    //     win: 'YOU LOSE',
    //     score: prevState.score - 1,
    //   }))
    // } else if (id === 'ROCK' && choicesList[oppGame].id === 'ROCK') {
    //   this.setState(prevState => ({win: 'IT IS DRAW', score: prevState.score}))
    // } else if (id === 'SCISSORS' && choicesList[oppGame].id === 'ROCK') {
    //   this.setState(prevState => ({
    //     win: 'YOU LOSE',
    //     score: prevState.score - 1,
    //   }))
    // } else if (id === 'SCISSORS' && choicesList[oppGame].id === 'SCISSORS') {
    //   this.setState(prevState => ({win: 'IT IS DRAW', score: prevState.score}))
    // } else if (id === 'SCISSORS' && choicesList[oppGame].id === 'PAPER') {
    //   this.setState(prevState => ({win: 'YOU WON', score: prevState.score + 1}))
    // } else if (id === 'PAPER' && choicesList[oppGame].id === 'ROCK') {
    //   this.setState(prevState => ({
    //     win: 'YOU WON',
    //     score: prevState.score + 1,
    //   }))
    // } else if (id === 'PAPER' && choicesList[oppGame].id === 'SCISSORS') {
    //   this.setState(prevState => ({
    //     win: 'YOU LOSE',
    //     score: prevState.score - 1,
    //   }))
    // } else if (id === 'PAPER' && choicesList[oppGame].id === 'PAPER') {
    //   this.setState(prevState => ({win: 'IT IS DRAW', score: prevState.score}))
    // }

    // this.setState({
    //   yourGame: newDate[0].imageUrl,
    //   oppositeGame: choicesList[oppGame].imageUrl,
    //   displayResults: true,
    // })

    console.log('new', newDate)
  }

  playAgainButton = () => {
    this.setState({displayResults: false})
  }

  resultView = () => {
    const {yourGame, oppositeGame, displayResults, score, win} = this.state
    return (
      <div className="displayContainer">
        <div className="div12">
          <h1>YOU</h1>
          <img src={yourGame} alt="your choice" className="image1" />
        </div>
        <div className="div12">
          <h1>OPPONENT</h1>
          <img src={oppositeGame} alt="opponent choice" className="image1" />
        </div>
        <div className="playContainer">
          <ResultPara>{win}</ResultPara>
          <button
            className="ruleButton1"
            type="button"
            onClick={this.playAgainButton}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {choicesList} = this.props

    const {score, yourGame, oppositeGame, win, displayResults} = this.state
    console.log('win or loss', win)
    return (
      <div className="mainContainer">
        <div className="container">
          <div>
            <h1 className="head1">ROCK PAPER SCISSORS</h1>
          </div>
          <div className="scoreContainer">
            <p className="scoreHead">Score</p>
            <ScorePara>{score}</ScorePara>
          </div>
        </div>
        <div>
          {displayResults ? (
            this.resultView()
          ) : (
            <ul className="gameContainer">
              {choicesList.map(eachItem1 => (
                <EachListComponent
                  eachItemDetails={eachItem1}
                  key={eachItem1.id}
                  onClickUpdateResults={this.onClickUpdateResults}
                />
              ))}
            </ul>
          )}
        </div>

        <Popup
          trigger={<button className="ruleButton"> RULES </button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <div className="content">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="img1"
                />
              </div>
              <div>
                <button onClick={() => close()}>
                  <RiCloseLine />
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default RockPaperScissor
