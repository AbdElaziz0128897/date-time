function mdyhms() {
    var date = new Date();
var year = String(date.getFullYear());
var year_two_digit =  "'" + year.substr(2,2);

var month = date.getMonth() + 1;
switch(month) {
    case 1:
    var month_str = 'Jan'
    break;
    case 2:
    var month_str = 'Feb'
    break;
    case 3:
    var month_str = 'Mar'
    break;
    case 4:
    var month_str = 'Apr'
    break;
    case 5:
    var month_str = 'May'
    break;
    case 6:
    var month_str = 'Jun'
    break;
    case 7:
    var month_str = 'Jul'
    break;
    case 8:
    var month_str = 'Agu'
    break;
    case 9:
    var month_str = 'Sep'
    break;
    case 10:
    var month_str = 'Oct'
    break;
    case 11:
    var month_str = 'Nov'
    break;
    case 12:
    var month_str = 'Dec'
    break;
}
var day = date.getDate();
if(day <= 9) {
    day = '0' + day;
}
var Hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var time = Hour +":" + min + ":"+ sec;
var mdy = month_str + " " + day + " " + year_two_digit;
var hms = Hour + ":" + min + ":" +sec;
var mdyhms = mdy +" " + hms;
return mdyhms;
}
alert(mdyhms());