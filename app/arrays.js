exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
 		var index=-1;
		arr.forEach(function(val,i){
				if(val===item){
				 index=i;
			 }
		});
		return index;
  },

  sum: function(arr) {
     return arr.reduce(function(previousValue, currentValue) {
		return previousValue + currentValue;
	});
  },

  remove: function(arr, item) {
	return arr.filter(function(val){
				if(val!=item){
				    return true;
			    }else{
					return false;
				}
		});
  },

  removeWithoutCopy: function(arr, item) {
    var arrayLength=arr.length;
    for (var i = 0; i < arrayLength; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        arrayLength--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
	arr.push(item);
	return arr;
  },

  truncate: function(arr) {
	arr.pop();
	return arr;
  },

  prepend: function(arr, item) {
	arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
	arr.splice(0,1)
	return arr
  },

  concat: function(arr1, arr2) {
	return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
	 arr.splice(index, 0, item);
     return arr;
  },

  count: function(arr, item) {
     return arr.filter(function(val){
		 if(val==item){
			 return true;
		 }else{
			 return false;
		 }
	 }).length;
  },

  duplicates: function(arr) {
	  var valCount={};
	  var newArray=Array();
	  arr.forEach(function(val){
		  if(valCount[val]){
			  valCount[val]++;
		  }else{
			  valCount[val]=1;
		  }
	  });
	  for(var key in valCount){
		  if(valCount[key]>1){
			  newArray.push(parseInt(key));
		  }
	  }
	  return newArray;
	  
  },

  square: function(arr) {
	  arr=arr.map(function(val){
		  return val*val;
	  });
	  return arr;
  },

  findAllOccurrences: function(arr, target) {
	var occures=new Array();
	for(var i=0;i<arr.length;i++){
		if(arr[i]===target){
			occures.push(i)
		}
	}
	return occures;
  }
};
