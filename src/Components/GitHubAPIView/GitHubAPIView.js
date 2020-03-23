import React from 'react';
import RepoListView from '../RepoListView/RepoListView';
import { sortedLangs, langsFilter } from '../../Services/GitHubAPIService'
import PieChart from 'react-minimal-pie-chart';

 

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

    mapLangs(langs)
    {
        var counts = {}
        for (var i = 0; i < langs.length; i++) {
            counts[langs[i]] = (counts[langs[i]] + 1) || 1;
        }
        //const langsMappedArr = Object.keys(counts).map(i => counts[i])
        //console.log(langsMappedArr)
        var arr = Object.entries(counts)
        return arr
    }

    render() {
        const { gitData, langs, mappedLangs } = this.state;
        console.log(this.mapLangs(langs))
        console.log(JSON.stringify(this.mapLangs(langs))) 
        return (
            <div>
                <RepoListView list={ gitData } />
                
            </div>
    )}
};

export default GitHubAPIView;

/*
<PieChart
                    data={[
                        
                        { title: 'One', value: 10, color: '#E38627' 
                         },
                        { title: 'Two', value: 15, color: '#C13C37' },
                        { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                />
*/