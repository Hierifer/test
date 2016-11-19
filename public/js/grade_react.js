
var Top_line = React.createClass({
  render: function() {
  var style = {
    display: 'inline'
  }
  
  return (
    <div className="top_line">
      <h2  style={style}>{this.props.list.message}</h2>
      <Grade />
    </div>
    );
  }
});



class Container extends React.Component{
  constructor(props){
    super(props);
    this.state = {message:[]};
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var url = "\/getcookie?email="+this.get('email');
    var myInit = {
        method: "GET"
    };
    fetch(url, myInit).then((response) =>{
      return response.json();
    }).then((data) => {
      this.state.message = data;
      this.setState(this.state);
    })
  }

  render(){
    return (
      <div className="container" id="container">
        <Top_line list = {this.state}/>
      </div>
    );
  }
};

ReactDOM.render(
  <Container />
  document.getElementById('page')
);