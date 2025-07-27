var destCity = function(paths) {
    let cities = new Set();
    for(let path of paths){
       cities.add(path[0]);
    }

    for(let path of paths){
        let dest = path[1]
        if(!cities.has(dest)){
            return dest;
        }
    }
    return "";
};