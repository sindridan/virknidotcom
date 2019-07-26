import React from 'react';
import RepoListView from '../RepoListView/RepoListView';
import { sortedLangs, langsFilter } from '../../Services/GitHubAPIService'
 

class GitHubAPIView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitData: [],
            langs: [],
            mappedLangs: {}
        };
    }
    
    componentDidMount() {
        fetch('https://api.github.com/users/sindridan/repos')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    gitData: result,
                    langs: result.map(function(el)  {return el.language}).filter(Boolean),
                    mappedLangs: sortedLangs(langsFilter(result))
                })
            }
        )
    }

    render() {
        const { gitData, langs, mappedLangs } = this.state;
        console.log(mappedLangs)
        return (
            <div>
                <RepoListView list={ gitData } />
                <div>{langs}</div>
            </div>
    )}
};

export default GitHubAPIView;