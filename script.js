//your JS code here. If required.
function leapyear(year) {
	if(year%400 === 0) return true;
	else if(year%100===0) return false;
	else if(year%4===0) return true;
	return false;
}
function daysOfAYear(year) {
	if(leapyear(year)) return 366;
	return 365;
}