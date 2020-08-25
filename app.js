// phone Event handler

function handleProductChange(isIncrement) {
  const phoneInput = document.getElementById("phone-cart-no");
  const phoneCount = parseInt(phoneInput.value);

  let phoneNewCount = phoneCount;
  if (isIncrement == true) {
    phoneNewCount = phoneCount + 1;
  }
  if (isIncrement == false && phoneCount > 0) {
    phoneNewCount = phoneCount - 1;
  }

  phoneInput.value = phoneNewCount;
  const phoneTotal = phoneNewCount * 1219;
  document.getElementById("phone-cart").innerText = phoneTotal;

  calculateTotal()

}

// case Event handler

function handleCaseChange(isIncrement){
    const caseInput=document.getElementById('case-cart-no');
    const caseCount=parseInt(caseInput.value);

    let caseNewCount=caseCount;
    if(isIncrement==true){
        caseNewCount=caseCount+1;
    }
    if(isIncrement==false && caseCount>0){
        caseNewCount=caseCount-1;
    }
    caseInput.value=caseNewCount;
    const caseTotal=caseNewCount*59;
    document.getElementById('case-cart').innerText=caseTotal;
    calculateTotal()

}


// Sub Total
 
function calculateTotal(){
    const phoneInput = document.getElementById("phone-cart-no");
    const phoneCount = parseInt(phoneInput.value);

    const caseInput=document.getElementById('case-cart-no');
    const caseCount=parseInt(caseInput.value);

    const priceTotal=phoneCount*1219+caseCount*59;
    document.getElementById('sub-total').innerText=priceTotal;

    const tax=priceTotal*0.1;
    document.getElementById('tax').innerText=tax;

    const grandTotal=priceTotal+tax;
    document.getElementById('total-amount').innerText=grandTotal;
}

