var compareVersion = function(version1, version2) {
  //split both versions into arrays
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  let index = 0;
  let v1Value;
  let v2Value;
  //loop through arrays comparing values  
  while(index < v1.length || index < v2.length) {
    //end of v1 but still stuff in v2
    if(index >= v1.length){
      v1Value = 0;
    } else {
      v1Value = parseInt(v1[index]);
    }

    //end of v2 but still stuff in v1
    if(index >= v2.length){
      v2Value = 0;
    } else {
      v2Value = parseInt(v2[index]); 
    }

    if(v1Value > v2Value){
      return 1;
    }

    if(v2Value > v1Value){
      return -1;
    }

    index++;
  }

  return 0;

  
};

