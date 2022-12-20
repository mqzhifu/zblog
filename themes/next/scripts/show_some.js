var fs = require("fs");

hexo.extend.tag.register('show_some', function(args){

    if(!args[0]){
	return false;
    }

    var listStr = "";
    const files = fs.readdirSync(args[0]);
    const prefix = args[1];

    files.forEach(function (item, index) {
        var thisPicLink = prefix+item;
        var divStyle = "float:left";
        var oneRow = "<div  style='margin-right:10px;"+divStyle+"'><div>"+item+"</div>"

        oneRow += "<div><a href='"+thisPicLink+"' target='_blank' >"  +"<img src='" + thisPicLink + "' alt='"+item+"' width=200 height=400 > </a> </div>";
        //display: inline-block
        oneRow += "</div>";
        listStr += oneRow;
    })

  listStr += "<div style='clear: left'></div>";


    return listStr ;
});

