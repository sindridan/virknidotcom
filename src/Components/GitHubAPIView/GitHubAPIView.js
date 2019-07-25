import React from 'react';
import RepoListView from '../RepoListView/RepoListView';
import { gitAPI } from '../../Services/GitHubAPIService'
 
class GitHubAPIView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitData: [],
            langs: []
        };
    }
    
    componentDidMount() {
        console.log(gitAPI())
        fetch('https://api.github.com/users/sindridan/repos')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    gitData: result,
                    langs: result.map(function(el)  {return el.language })
                })
            }
        )
    }


    render() {
        const { gitData, langs } = this.state;
        return (
            <div>
                <RepoListView list={ gitData } />
                <div list={ langs }></div>
            </div>
    )}
};

export default GitHubAPIView;