var booklistJson = JSON.parse(booklist);


for (var i = 0 ; i < booklistJson.length; i++) {
      var obj = booklistJson[i];
      document.writeln("<p>");
      document.writeln(obj.title+obj.author);
      document.writeln("</p>");
  }

