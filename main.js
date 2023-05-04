function solution(d) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const result = {"Mon":null , "Tue":null, "Wed":null , "Thu":null, "Fri":null,"Sat":null, "Sun":null};
  const keys = Object.keys(d).sort();
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = d[key];
    const date = new Date(key);
    const dayOfWeek = daysOfWeek[date.getDay()];
    if (result[dayOfWeek]!=null) {
      result[dayOfWeek] += value;
    } else {
      result[dayOfWeek] = value;
    }
  }
  for(let i=2;i<7;i++){
      if(result[daysOfWeek[i]]==null){
          result[daysOfWeek[i]]=((2*result[daysOfWeek[i-1]])-result[daysOfWeek[i-2]]);
      }
  }
  
  return result;
}