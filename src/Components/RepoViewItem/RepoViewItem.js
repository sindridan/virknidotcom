import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RepoViewItem = (props) => {
	console.log(props.repoItem.url)
	return (
        <li className="card border-dark mb-3">
    		<div className="card-header">{props.repoItem.language}</div>
    		<div className="card-body">
    			<h4 className="card-title"><a href={ props.repoItem.html_url }>{props.repoItem.name}</a></h4>
    			<h4 className="card-title">{ props.repoItem.id }</h4>
                <p className="card-text">{props.repoItem.description}</p>
    		</div>
    	</li>
    );
};

RepoViewItem.propTypes = {
	repoItem: PropTypes.shape({
		id: PropTypes.number.isRequired,
        name: PropTypes.string || '',
        url: PropTypes.string || '',
		description: PropTypes.string || '',
		language: PropTypes.string || ''
	}).isRequired
};

RepoViewItem.defaultProps = {
	repoItem: {
		id: 0,
        name: 'No description available',
        url: 'https://github.com/sindridan',
		description: 'No description available',
		language: 'No language available'
	}
}

export default RepoViewItem;