/* goatstone/ui/Menu.js Jose Collas : 7.2015 */
var React = require('react');
var Radium = require('radium');
var style = {
    position:'absolute',
    opacity: '0',
    top: 40,
    right: 50,
    boxShadow:'gray 20px 20px 20px',
    width: 100,
    backgroundColor:'blue',
    borderRadius:12,
    fontFamily:'sans-serif', 
    transition: 'opacity 1s' 
};
var Menu = React.createClass({
  handleClick: function(){
    this.props.pb.publish('message.show');
    style.backgroundColor = (style.backgroundColor === 'red')? 'blue':'#008' ;
    this.forceUpdate();
  },
  onF: function(){
    style.boxShadow = 'blue 10px 10px 20px';
    this.forceUpdate();    
  },
  onB: function(){
    style.boxShadow = 'gray 10px 10px 20px';
    this.forceUpdate();    
  },
  componentDidMount: function(){
    this.props.menushow = false;
    this.props.pb.subscribe('menu.show', function(a){
      console.log('show me...', a);
      if(style.opacity === '0'){
        style.opacity = '1.0';
      }else{
        style.opacity = '0';
      }
      this.forceUpdate();
    }.bind(this));
  },
  render: function () {
    var ab = this.props.id;
    var b = '111';
    var viewBox = [0, 0, 350, 310].join(' ');
    return (
      <div style={style} onClick={this.handleClick} tabIndex="100"
      onFocus={this.onF} onBlur={this.onB}>
        <ul>
          <li style={linkStyle}> About </li>        
          <li style={linkStyle}> Control </li>        
        </ul>
      </div>
    );
  }
});
Menu = Radium(Menu);
var linkStyle = {
  cursor:'pointer',
  listStyleType: 'none',
  marginLeft:'-25px'
}
module.exports = Menu;