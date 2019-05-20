function getItems()
	{
		var x = document.getElementById("myItems");
		var nr = "Number of items: ";
		var itemsLegth = document.getElementById("myItems").length;  
		nr = nr+itemsLegth;

		for (var i=0; i<x.length; i++)
	  	{
	    	nr = nr + "\n" + x.options[i].text;
	    }
	  alert(nr);
	}