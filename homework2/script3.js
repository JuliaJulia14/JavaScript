function getMinutesToTomorrow() {
  var now = new Date();
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0, 0);
  var diff = tomorrow - now; 
  return Math.round(diff / 60000); 
}
document.write(getMinutesToTomorrow()+" minutes left before the end of the day");