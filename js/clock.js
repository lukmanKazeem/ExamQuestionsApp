function showTime()
{
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var ses = 'AM';

	console.log(h+' '+m+' '+s);

	if (h == 0)
	{
		h = 12;
	}
	if (h > 12)
	{
		h = h - 12;
		ses = 'PM';
	}

	h = (h < 10) ? "0"+h : h;
	m = (m < 10) ? "0"+m : m;
	s = (s < 10) ? "0"+s : s;

	var time = h+':'+m+':'+s+' '+ses;
	console.log(time);
	document.getElementById("MyClock").innerText = time;
	document.getElementById("MyClock").textContent = time;

	setTimeout(showTime, 1000);
}

showTime();