var gitLangs = () => {
    fetch('https://api.github.com/users/sindridan/repos').then(response => response.json()).then(response => {
        var langs = response.map(function(el)  {return el.language }).filter(Boolean)
    })
};

function langsFilter (results) {
    return results.map(function(el) {return el.language}).filter(Boolean)
}

function sortedLangs (langs) {
    var sorted = {}
    langs.forEach(function(i) { sorted[i] = (sorted[i] || 0) + 1})
    return sorted
}

export {
    gitLangs, langsFilter, sortedLangs
};