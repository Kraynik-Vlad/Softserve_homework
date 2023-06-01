let currentDate = new Date();
module.exports.date = currentDate;

module.exports.showMessage = function(name){
  let hour = currentDate.getHours();

  switch(true){
    case hour >= 5 && hour < 11:
      return `Good morning, ${name}`;
    case hour >= 11 && hour < 17:
      return `Good day, ${name}`;
    case hour >= 18 && hour < 23:
      return `Good evening, ${name}`;
    case hour >= 23 || hour < 5:
      return `Good night, ${name}`;
  }
}