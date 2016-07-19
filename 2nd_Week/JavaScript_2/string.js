
	String.prototype.isEmpty=function(){

		return (this.length === 0 || !this.trim() || !str);
	}

	function onClikCheck(){

		console.log(1);
		var inputString=document.getElementById('str').value;
		document.getElementById('p1').innerHTML=inputString.isEmpty();
	}


	


