import React from 'react';
import RepoListView from '../RepoListView/RepoListView';
 
class FrontPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitData: []
        };
    }
    
    componentDidMount() {
        fetch('https://api.github.com/users/sindridan/repos')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    gitData: result
                })
            }
        )
    }


    render() {
        const { gitData } = this.state;
        return (
            <div>
                <RepoListView list={ gitData } />
            </div>
    )}
};

export default FrontPage;