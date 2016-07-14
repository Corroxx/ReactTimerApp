var React = require('react');


var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired

  },
  render: function() {
    var{countdownStatus} = this.props;
    var renderStartStopButton = (countdownStatus) => {
      switch (countdownStatus) {
        case 'started':
        return <button className="button secondary">Pause</button>
        break;
      case 'paused':
          return <button className="button primary">Start</button>
          break;
      }
    };

    return (
      <div className="controls">
      {renderStartStopButton()}
      <button className="buton alert hollow">Clear</button>
      </div>
    );
  }

});

module.exports = Controls;
