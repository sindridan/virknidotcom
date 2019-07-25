var gitAPI = () => {
    fetch('https://api.github.com/users/sindridan/repos').then(response => response.json()).then(response => {
        console.log(response);
        return response;
    })
};

export {
    gitAPI
};