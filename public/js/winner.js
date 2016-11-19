
var Manubar = React.createClass({
  render: function() {
    return (
    <nav className="manubar">
      <div>
        <ul>
          <a href="#">Hackday</a>
          <a href="/home.html"> Home </a>
          <a href="/hackathon.html"> Hackathon </a>
          <a href="/winner.html"> Winner </a>
        </ul>
      </div>
    </nav>
    );
  }
});

var Top = React.createClass({
  render: function() {
    return (
    <div className="top">
        <h2>Congratulation for everyone participating Tenx Hackathon</h2>
        <h4>This is a wonderful competition of Intelligence. Above all, <strong>Good Job</strong></h4>
    </div>
    );
  }
});

var Projecttable = React.createClass({
  render: function() {
    return (
    <table className="projecttable">
    <thead>
    <tr>
        <th>Price</th>
        <th>Team ID</th>
        <th>Project Name</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Outstanding Price</td>
        <td><a  href="">Tenx_Hackday5</a></td>
        <td><a  href="">tenx hackday5</a></td>
        <td>This is a description of tenx hackday5 project.</td>
    </tr>
    <tr>
        <td>Wonderful Price</td>
        <td><a href="">Tenx_Hackday2</a></td>
        <td><a href="">tenx hackday2</a></td>
        <td>This is a description of tenx hackday2 project.</td>
    </tr>
    <tr>
        <td>Great Price</td>
        <td><a href="">Tenx_Hackday4</a></td>
        <td><a href="">tenx hackday4</a></td>
        <td>This is a description of tenx hackday1 project.</td>
    </tr>
    </tbody>
    </table>
    );
  }
});

var Slide_block = React.createClass({
  render: function() {
    return (
      <div className="slide_block" id="slide_block">
          <br />
            <Top />
            <hr />
            <Projecttable />
      </div>
    );
  }
});


var Container = React.createClass({
  render: function() {
    return (
      <div className="container" id="container">
        <Manubar />
        <Slide_block />
      </div>
    );
  }
});

ReactDOM.render(
  <Container />,
  document.getElementById('page')
);