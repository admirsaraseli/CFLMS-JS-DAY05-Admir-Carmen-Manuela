var booklistJson = JSON.parse(booklist);
var booksdata =""
var data = document.getElementById("books")
for (var i = 0 ; i < booklistJson.length; i++) {
      var obj = booklistJson[i];
      if (obj.read === "true") {
      booksdata = booksdata+"<li><figure><img src='img/"+booklistJson[i].cover+"'><figcaption style='color: red'>"+
      "The title is: "+obj.title+" and the author is: "+obj.author+"</figcaption></figure></li>"+"<hr>";
	 }	else {
	 	booksdata = booksdata+"<li><figure><img src='img/"+booklistJson[i].cover+"'><figcaption >"+
	 	"The title is: "+obj.title+" and the author is: "+obj.author+"</figcaption></figure></li>"+"<hr>";
	 }
      
  }

data.innerHTML = booksdata;