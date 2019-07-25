import React from 'react';
import RepoViewItem from '../RepoViewItem/RepoViewItem';

const RepoListView = (props) => {
    if(props) {
        return (
            <ul className="list-view">
                { props.list.map(repo => <RepoViewItem key={ repo.id } repoItem={ repo } />) }
            </ul>
        );    
    } else { return (<div><h1>No Repos found</h1></div>) }
        
};

export default RepoListView;