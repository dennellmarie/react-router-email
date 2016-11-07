var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Home = function(props) {
	return (
		<div>Home!
			<ul>
				<li>
					<Link to={'/inbox'}>
						inbox
					</Link>
				</li>
				<li>
					<Link to={'/spam'}>
						spam
					</Link>
				</li>
			</ul>
		</div>
	)
}

module.exports = Home;