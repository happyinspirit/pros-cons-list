import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isProToggleOn: true,
          isConToggleOn: true,
          pros: '',
          cons: '',
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
        if (type === "pros") {
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

    listHeader(typeName, icon) {
        return (
            <h1>
                <span className={icon} aria-hidden="true"></span>
                {typeName}
            </h1>
        )
    }

    createdPanel(types, typeName, icon) {
        return (
            types.map((type, index) =>
                <div key={index} className="panel panel-default list">
                    <div className="panel-body">
                        <span className={icon} aria-hidden="true"></span>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true" onClick={(e) => this.removeCard(typeName, type, e)}></span>
                        {type}
                    </div>
                </div>
            )
        )
    }

    initialPanel(typeName, buttonStyle, toggle, state, handle) {
        return (
            <div className="panel panel-default">
                <div className="panel-heading left">
                    <button type="button" className={buttonStyle} onClick={() => this.addCard(typeName)}>
                        {toggle ?
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> :
                            <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>}
                    </button>
                    {toggle ? '  Add ' + typeName.charAt(0).toUpperCase() + typeName.slice(1) : 'Close'}
                </div>

                {!toggle ?
                <div className="panel-body">
                    <form onSubmit={(e) => this.saveCard(typeName, e)}>
                        <textarea type="text" value={state} className="addItem" onChange={handle} name={typeName}></textarea>
                        <div className="right">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div> : ''}

            </div>
        )
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
                        {this.listHeader('Pros', 'glyphicon glyphicon-thumbs-up')}

                        {this.createdPanel(pros, 'pros', 'glyphicon glyphicon-thumbs-up')}

                        {this.initialPanel('pro', buttonProStyle, this.state.isProToggleOn, this.state.pro, this.handleProChange)}
                    </div>
                    <div className="col-md-6 pros">
                        {this.listHeader('Cons', 'glyphicon glyphicon-thumbs-down')}

                        {this.createdPanel(cons, 'cons', 'glyphicon glyphicon-thumbs-down')}

                        {this.initialPanel('con', buttonConStyle, this.state.isConToggleOn, this.state.con, this.handleConChange)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
