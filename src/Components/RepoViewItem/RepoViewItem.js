import React from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

const CardContainer = styled.li`
	/* {CardSlaveholder}:nth-child(even) {background: #454545} */
	background: #454545;
	padding: 0.5em;
	border-radius: 0.2em;
	margin: 0.5em 0 0.5em 0;

	.Collapsible__trigger { display:none }
	/*transition: box-shadow .2s;*/
	:hover {
		-moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
		background: #545454;
		/*box-shadow: inset 1em 0 0 #b6b7b7;*/
		
		.Collapsible__trigger.is-closed { 
			display:block; 
			text-align: center;
			cursor: pointer;
		}
		
		.Collapsible__trigger.is-open { 
			display:block; 
			text-align: center;
			cursor: pointer;
		}
	}

	width: 48%;
	max-height: auto;
	/*:last-child {
		flex-grow: 1
	}*/

	:nth-last-of-type(-n+2):not(:nth-child(even)) {
		flex-grow: 1;
	}

`

const CardSlaveholder = styled.div`

`

const ProgLangIcon = styled.div`
	img {max-width: 3em; height: auto;}
`
const DateContainer = styled.div`

`
const CardDetails = styled.p`
	font-style: italic;

	max-width: 80%;
	margin: 0;
`

const GitRepoIcon = styled.a`
	font-size: 2em;
	text-decoration: none; 
	color: #b6b7b7;

	:visited { text-decoration: none; #b6b7b7; }

    :hover, :active { text-decoration: none; 
        -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
        color: #808080; }

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
function triggerIcons(tmp) {
	if(tmp === "open") {
		return (<svg class="bi bi-arrows-expand" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 012 8zm6-1.5a.5.5 0 00.5-.5V1.5a.5.5 0 00-1 0V6a.5.5 0 00.5.5z" clip-rule="evenodd"/>
	  </svg>)
	} 
	else if (tmp === "close") {
		return(
		<svg class="bi bi-arrows-collapse" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 012 8zm6-7a.5.5 0 01.5.5V6a.5.5 0 01-1 0V1.5A.5.5 0 018 1z" clip-rule="evenodd"/>
		</svg>)
	}
}

class RepoViewItem extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            triggerOpen: false
        };
	}

	setTrigger() {
		//console.log(this.state.triggerOpen)
		this.setState({triggerOpen: !this.state.triggerOpen})
	}
	
	render() {
		if(this.props.repoItem.language != null) { return (
			<CardContainer>
				<CardSlaveholder className="card border-dark mb-3">
					<ProgLangIcon>{assignLangIcon(this.props.repoItem.language)}</ProgLangIcon>
						<GitRepoIcon href={ this.props.repoItem.html_url }>{this.props.repoItem.name}</GitRepoIcon>

						<CardDetails>{this.props.repoItem.description}</CardDetails>
						<Collapsible triggerWhenOpen="Collapse" trigger="Click to see more">
							<DateContainer>
								<div>Repository created at: {this.props.repoItem.created_at}</div>
								<div>Last updated at: {this.props.repoItem.updated_at}</div>
							</DateContainer>
						</Collapsible>
				</CardSlaveholder>
			</CardContainer>
		);} else {return null}
	};
}

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