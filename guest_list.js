
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
'Kimberly',
'Jane',
'Barrett',
'Nathan'
]
