import React from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CardContainer = styled.li`
	{CardSlaveholder}:nth-child(even) {background: #454545}
	padding: 0.5em;
	border-radius: 0.2em;
	margin: 0.5em 0 0.5em 0;
`

const CardSlaveholder = styled.li`

`

const ProgLangIcon = styled.div`
	img {max-width: 3em; height: auto;}
`

const CardDetails = styled.p`
	font-style: italic;
`

const GitRepoIcon = styled.a`
	font-size: 2em;
	text-decoration: none; 
	color: #b6b7b7;

`


function assignLangIcon(lang) {

	switch(lang) {
		case 'CSS':
			return (<img src={"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"} />)
			break;
		case 'C++':
			return (<img src={"https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"} />)
			break;		
		case 'C#':
			return (<img src={"https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg"} />)
			break;
		case 'Java':
			return (<img src={"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"} />)
			break;
		case 'JavaScript':
			return (<img src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"} />)
			break;
		case 'Python':
			return (<img src={"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"} />)
			break;

		default:
			return(<div>{lang}</div>)
	}
}

const RepoViewItem = (props) => {
	console.log(props.repoItem.language)
	if(props.repoItem.language != null) { return (
		<CardContainer>
			<CardSlaveholder className="card border-dark mb-3">
				<ProgLangIcon>{assignLangIcon(props.repoItem.language)}</ProgLangIcon>
				<div className="card-body">
					<GitRepoIcon href={ props.repoItem.html_url }>{props.repoItem.name}</GitRepoIcon>
					<CardDetails>{props.repoItem.description}</CardDetails>
				</div>
			</CardSlaveholder>
		</CardContainer>
	);
	} else {return null}
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