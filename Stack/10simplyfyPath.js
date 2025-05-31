// 1. Split path into parts by '/'
// 2. For each part:
//    - Skip "" and "."
//    - If "..", pop from stack if possible
//    - Else, push directory name to stack
// 3. Join stack with '/' and prepend '/'

// Time: O(n)
// Space: O(n)

var simplifyPath = function(path) {
    let component = path.split('/');
    let st =[];

    for(let ch of component){
       if(ch === "" || ch === '.'){
           continue;
       }

       if(ch === ".."){
          if(st.length){
            st.pop();
          }
       } else {
          st.push(ch);
       }
    }
    return '/' + st.join("/");
};
