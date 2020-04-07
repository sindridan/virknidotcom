import React from 'react';
import RepoListView from '../RepoListView/RepoListView';
import { sortedLangs, langsFilter } from '../../Services/GitHubAPIService'
//import PieChart from 'react-minimal-pie-chart';
import ReactApexChart from "react-apexcharts";

import styled from 'styled-components';

const GitBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
    `

const GitView = styled.div`
    display: flex;
    flex-direction: column;
`

const ColTitle = styled.div`
    font-size: 2em;
    font-weight: bold;
`

const ObjectTitle = styled.div`
    font-size: 1em;
    
`

const TotalPieView = styled.div`
    margin: 1em 0 1em 0;
    .apexcharts-legend-text {
        font-size: 1em !important;
        color: #b6b7b7 !important;
    }
`

class GitHubAPIView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitData: [],
            langs: [],
            mappedLangs: {},

            series: [],
            options: {
              chart: {
                width: 600,
                type: 'pie',
              },
              labels: [],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
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
                    mappedLangs: sortedLangs(langsFilter(result)),
                })
                this.mapLangs(this.state.langs)
            }
        )
        
    }

    mapLangs(langs)
    {
        var counts = {}
        for (var i = 0; i < langs.length; i++) {
            counts[langs[i]] = (counts[langs[i]] + 1) || 1;
        }
        var arr = Object.entries(counts)

        // dirty fix to isolate languages and counts of them into seperate lists for state
        var countsList = []
        var langsList = []

        for(var i = 0; i < arr.length; i++)
        {
            langsList.push(arr[i][0])
            countsList.push(arr[i][1])
            
        }
        this.setState({series: countsList, options: {...this.state.options, labels: langsList}})

    }

    render() {
        const { gitData, langs, mappedLangs, series, options } = this.state;
        return (
            <GitBodyContainer>
                <GitView>
                    <ColTitle>Repository statistics</ColTitle>
                    <TotalPieView>
                        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={600} />
                    </TotalPieView>
                </GitView>
                
                <GitView>
                    <ColTitle>My GitHub repositories</ColTitle>
                    <RepoListView id="main-repo-list" list={ gitData } />
                </GitView>
            </GitBodyContainer>
            
    )}
};

export default GitHubAPIView;
