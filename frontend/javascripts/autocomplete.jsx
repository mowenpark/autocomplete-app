var React = require('react');


var Autocomplete = React.createClass({
  getInitialState: function() {
    return {value: '',
      inputWords: ["Blackbeard", "Blackbread", "Sparrow",
        "Redbread", "Breadbeard", "potato"],
      matches: []};
  },

  handleChange: function(text) {
    var re = new RegExp("^(" + text + ").+");
    var matches = [];
    this.state.inputWords.map( function(hereMatches, word) {
      if (re.test(word)) {
        hereMatches.push(word);
      }
    }.bind(this, matches));
    this.setState({value: text, matches: matches});
  },

  typeUpdate: function(event) {
    this.handleChange(event.target.value);
  },

  completeCallback: function (event) {
    this.handleChange(event.target.innerHTML);
  },

  render: function() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.typeUpdate}
        />
        <ul>
          {this.state.matches.map(function(match, ind) {
            return <li key={ind} onClick={this.completeCallback}>{match}</li>;
          }.bind(this))}
        </ul>
      </div>
    );
  }
});

module.exports = Autocomplete;
