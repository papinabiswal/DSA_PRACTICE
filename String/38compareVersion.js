var compareVersion = function(version1, version2) {
    let v1 = getTokens(version1);
    let v2 = getTokens(version2); 
 
    let m = v1.length;
    let n = v2.length;
 
    let i=0;
 
    while(i < m || i < n){
       let a = i < m ? parseInt(v1[i], 10) : 0;
       let b = i < n ? parseInt(v2[i], 10) : 0;
 
       if(a > b) return 1;
       if(a < b) return -1;
 
       i++;
    } 
    return 0;
 };

 compareVersion("1.2", "1.10");
 
 function getTokens(version) {
     return version.split('.');
 }