import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isProToggleOn: true,
          isConToggleOn: true,
          pro: '',
          con: '',
          proTextArea: [],
          conTextArea: []
      };
      this.addCard = this.addCard.bind(this);
      this.handleProChange = this.handleProChange.bind(this);
      this.handleConChange = this.handleConChange.bind(this);
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

    handleProChange(e) {
        e.preventDefault();
        this.setState({pro: e.target.value});
    }

    handleConChange(e) {
        e.preventDefault();
        this.setState({con: e.target.value});
    }

    saveCard(type, e) {
        e.preventDefault();
        if (type === "pro") {
            this.setState({pro: e.target.value});
            this.state.proTextArea.push(this.state.pro);
            this.setState({pro: '', isProToggleOn: !this.state.isProToggleOn});
        } else {
            this.setState({con: e.target.value});
            this.state.conTextArea.push(this.state.con);
            this.setState({con: '', isConToggleOn: !this.state.isConToggleOn,});
        }
    }

    removeCard(type, val, e) {
        e.preventDefault();
        var array;
        var index;
        if (type === "pro") {
            array = [...this.state.proTextArea];
            index = array.indexOf(val)
            array.splice(index, 1);
            this.setState({proTextArea: array});
        } else {
            array = [...this.state.conTextArea];
            index = array.indexOf(val)
            array.splice(index, 1);
            this.setState({conTextArea: array});
        }
    }

    render() {
        const pros = this.state.proTextArea;
        const cons = this.state.conTextArea;
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

                        {pros.map((pro, index) =>
                            <div key={index} className="panel panel-default list">
                                <div className="panel-body">
                                    <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                                    <span className="glyphicon glyphicon-remove" aria-hidden="true" onClick={(e) => this.removeCard('pro', pro, e)}></span>
                                    {pro}
                                </div>
                            </div>
                        )}

                        <div className="panel panel-default">
                            <div className="panel-heading left">
                                <button type="button" className={buttonProStyle} onClick={() => this.addCard('pro')}>
                                    {this.state.isProToggleOn ?
                                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> :
                                        <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>}
                                </button>
                                {this.state.isProToggleOn ? '  Add Pro' : 'Close'}
                            </div>

                            {!this.state.isProToggleOn ?
                            <div className="panel-body">
                                <form onSubmit={(e) => this.saveCard('pro', e)}>
                                    <textarea type="text" value={this.state.pro} className="addItem" onChange={this.handleProChange} name="pro"></textarea>
                                    <div className="right">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div> : ''}

                        </div>
                    </div>
                    <div className="col-md-6 cons">
                        <h1>
                            <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                            Cons
                        </h1>

                        {cons.map((con, index) =>
                            <div key={index} className="panel panel-default list">
                                <div className="panel-body">
                                    <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                                    <span className="glyphicon glyphicon-remove" aria-hidden="true" onClick={(e) => this.removeCard('con', con, e)}></span>
                                    {con}
                                </div>
                            </div>
                        )}

                        <div className="panel panel-default">
                        <div className="panel-heading left">
                            <button type="button" className={buttonConStyle} onClick={() => this.addCard('con')}>
                                {this.state.isConToggleOn ?
                                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> :
                                    <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>}
                            </button>
                            {this.state.isConToggleOn ? '  Add Con' : 'Close'}
                        </div>

                        {!this.state.isConToggleOn ?
                        <div className="panel-body">
                            <form onSubmit={(e) => this.saveCard('con', e)}>
                                <textarea type="text" value={this.state.con} className="addItem" onChange={this.handleConChange} name="con"></textarea>
                                <div className="right">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div> : ''}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
