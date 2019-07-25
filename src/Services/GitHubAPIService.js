var gitAPI = () => {
    fetch('https://api.github.com/users/sindridan/repos').then(response => response.json()).then(response => {
        console.log(response.map(function(el)  {return el.language }));
        return response.map(function(el)  {return el.language })
        
    })
};

var getLanguages = () => gitAPI().map(function(el)  {return el.language })

export {
    gitAPI, getLanguages
};