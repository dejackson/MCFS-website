function validateForm(){
    var location=document.forms["bill_of_sale"]["location"].value;
    var amountOfSale=document.forms["bill_of_sale"]["amount"].value;

    if (location == "none") {
	alert("A restaurant must be selected to continue.");
	return false;
    }    

    if (amountOfSale == null || amountOfSale == "") {
	alert("A sale amount must be entered to continue.");
	return false;
    } else if (isNaN(amountOfSale)){
	alert("The sale amount must be a valid number.");
	return false;
    } else if (amountOfSale <= 0){
	alert("The sale amount cannot be negative.");
	return false;
    }

    if (!validatePaymentType(document.forms["bill_of_sale"]["payment"])) {
	alert("A payment type must be selected to continue.");
	return false;
    }

    alert("Information was verified.");
    return true;
}

function validatePaymentType(radioButtons){
    for(i=0; i < radioButtons.length; i++){
	if (radioButtons[i].checked) return true;
    }
    return false;
}
