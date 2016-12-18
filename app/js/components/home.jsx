var React = require('react');
var Reflux = require('reflux');
var Deepak = require('./deepak');


var Home = React.createClass({
	mixins:[],

	render: function() {
		return <main>
		      hello how are u???
		      <Deepak/>
		</main>;
	}
});


module.exports = Home;