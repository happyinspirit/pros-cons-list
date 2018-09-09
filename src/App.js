import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {isProToggleOn: true, isConToggleOn: true};
      this.addCard = this.addCard.bind(this);
    }

    addCard(type) {
        if (type === "pro") {
            this.setState(state => ({
              isProToggleOn: !state.isProToggleOn,
            }));
        } else {
            this.setState(state => ({
              isConToggleOn: !state.isConToggleOn,
            }));
        }
    }

    saveCard() {
        //this will add to an array
    }

    render() {
        let buttonProStyle = 'btn btn-danger btn-circle';
        let buttonConStyle = 'btn btn-danger btn-circle';
        this.state.isProToggleOn && (buttonProStyle = 'btn btn-success btn-circle');
        this.state.isConToggleOn && (buttonConStyle = 'btn btn-success btn-circle');

        return (
            <div className="App container">
                <div className="row">
                    <div className="col-md-6 pros">
                        <h1>
                            <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                            Pros
                        </h1>
                        <div className="panel panel-default">
                            <div className="panel-heading left">
                                <button type="button" className={buttonProStyle} onClick={() => this.addCard('pro')}>
                                    {this.state.isProToggleOn ?
                                        <i className="glyphicon glyphicon-plus"></i> :
                                        <i className="glyphicon glyphicon-minus"></i>}
                                </button>
                                {this.state.isProToggleOn ? '  Add Pro' : ''}
                            </div>

                            {!this.state.isProToggleOn ?
                            <div><textarea className="addItem"></textarea><div className="right"><button type="button" className="btn btn-primary" onClick="{this.saveCard}">Save</button></div></div> : ''}

                        </div>
                    </div>
                    <div className="col-md-6 cons">
                        <h1>
                            <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                            Cons
                        </h1>
                        <div className="panel panel-default">
                            <div className="panel-heading left">
                                <button type="button" className={buttonConStyle} onClick={() => this.addCard('con')}>
                                    {this.state.isConToggleOn ?
                                        <i className="glyphicon glyphicon-plus"></i> :
                                        <i className="glyphicon glyphicon-minus"></i>}
                                </button>
                                {this.state.isConToggleOn ? '  Add Con' : ''}
                            </div>

                            {!this.state.isConToggleOn ?
                            <div><textarea className="addItem"></textarea><div className="right"><button type="button" className="btn btn-primary" onClick="{this.saveCard}">Save</button></div></div> : ''}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
