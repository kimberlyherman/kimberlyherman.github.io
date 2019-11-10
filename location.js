
function make_guest_list(array) {
  // CREATE LIST
  var list = document.createElement('ul');
  list.classList.add('list-group');
  list.setAttribute('class', 'list-group')
  list.setAttribute('id', 'guest_list')

  //SET LIST ITEMS
  for(var i=0; i < guests.length; i++) {
    var item = document.createElement('li');
    item.setAttribute('class', 'list-group-item');

    item.appendChild(document.createTextNode(array[i]));

    list.appendChild(item);
  } 

  return list;
  
}

guests = [
"Alexia Urban",
"Ashlee Herman",
"Aunt Roberta (Birdie)",
"Bonnie and Larry",
"Brian Bice",
"Cain Bice and Bree",
"Cassandra and Alex",
"Cody Herman",
"Franchesca (Franny) LaChance",
"Gary LastName",
"Howard Harvey and Johnny",
"Jacob Herman and Dequala",
"Jake Imans",
"James Dean-Howell",
"Jane and Dan Herman",
"Jim Herman",
"John and Gianni",
"Kenneth and Katie LaChance",
"Kevin and Debbie Bice",
"Linda Bice",
"Lucille (Lucy) Urban",
"Lynor Urban",
"Matt and Amy Heisler",
"Melinda Katanbafnezad",
"Michelle (Micky) Urban",
"Nathan Herman",
"Nicole LaChance and Louis B",
"Regina Urban",
"Rho-Ann Urban",
"Shane LastName",
"Shelby Bice",
"Taylor Larson and Karlee",
"William and Brenda"
]
