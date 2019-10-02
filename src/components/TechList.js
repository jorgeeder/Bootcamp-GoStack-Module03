import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs:[
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSumit = e => {
    e.preventDefault();

    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSumit}>
        <ul>
          { this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input 
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech} 
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;