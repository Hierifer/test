var Top_line = React.createClass({
  render: function() {
  var style = {
    display: 'inline'
  }
    return (
    <div className="top_line">
      <h2  style={style}>{this.props.list.message}</h2>
      <h2  style={style}>THIS IS <script>document.cookie</script></h2>
    </div>
    );
  }
});

var Exit = React.createClass({
  redirect() {
    fetch("\/post_gradelist?", {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	    'email':'hierifer@hotmail.com',
	    'gradelist':['Project_1',1,3,4,5],
	  },
    }).then((response) =>{
      return response.json();
    }).then((answer) => {
      if(answer==1){
        window.location='/hackathon.html';
      }else{
        window.location='/message.html?err='+ 'grade_cannot_exit';
      }
    })
  },

  render: function() {
    return (
      <div className="exit"  >
        <button onClick={this.redirect} type="button" className="btn btn-info"><span id="exit">Exit Voting</span></button>  
      </div>
    );
  }
});


class Container extends React.Component{
  constructor(props){
    super(props);
    this.state = {message:[]};
    //this.componentDidMount = this.componentDidMount.bind(this);
  }

  get(str) {
    var v = window.location.search.match(new RegExp('(?:[\?\&]'+str+'=)([^&]+)'));
    if(v){
      return v[1];
    } else {
      window.location='\/hackathon.html?err=geterror';
    }
  }

  componentDidMount() {
    var url = "\/getcookie?email="+this.get('email');
    var myInit = {
        method: "GET",
    };
    fetch(url, myInit).then((response) =>{
      return response.text();
    }).then((data) => {
      this.state.message = data;
      this.setState(this.state);
    })
  }

  render(){
    return (
      <div className="container" id="container">
        <Top_line list = {this.state}/>
        <Exit />
      </div>
    );
  }
};

ReactDOM.render(
  <Container />,
  document.getElementById('page')
);