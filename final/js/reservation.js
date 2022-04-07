window.addEventListener("load",start,false);

 function start () {
  document.getElementById('saved').addEventListener("click",save,false);
 }

//Saved Data in Web Storage
function save (evt) {
	localStorage.setItem("Name",document.getElementById('txtName').value);
	localStorage.setItem("LastName",document.getElementById('txtLName').value);
	localStorage.setItem("ID",document.getElementById('txtID').value);
	localStorage.setItem("Room",document.getElementById('txtRoom').value);
	localStorage.setItem("CheckIn",document.getElementById('txtCheckIn').value);														    
	localStorage.setItem("CheckOut",document.getElementById('txtCheckOut').value);				
	localStorage.setItem("Adult",document.getElementById('txtAdult').value);
	localStorage.setItem("Children",document.getElementById('txtChildren').value);
	
	//Clear TextBox
	document.querySelector('#txtName').value ='';
	document.querySelector('#txtLName').value ='';
	document.querySelector('#txtID').value ='';
	document.querySelector('#txtRoom').value ='';
	document.querySelector('#txtCheckIn').value ='';
	document.querySelector('#txtCheckOut').value ='';
	document.querySelector('#txtAdult').value ='';
	document.querySelector('#txtChildren').value ='';
	console.log('Saved Data');
}
