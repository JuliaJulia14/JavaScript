var obj_window = ["Navigator.ppCodeName", "Navigator.appName", "Navigator.userAgent", "Screen.availHeight","Screen.availWidth", "Screen.colorDepth", "Location.Protocol"]; 
var value = [navigator.appCodeName, navigator.appName, navigator.userAgent, screen.availHeight, screen.availWidth, screen.colorDepth,  location.protocol] 
document.write("<table><tr><th><span class=caption>Информационные объекты Window</span></th><th><span class=caption>Значение</span></th></tr>"); 
for(var i = 0; i<obj_window.length; i++){ 
document.write("<tr><th width='50%'>" + obj_window[i] + "</th><th width='50%'><p>" + value[i] + "</p></th></tr>"); 
}
document.write("</table>");