const billAmount = document.getElementById('bill-amount');
const serviceQuality = document.getElementById('service-quality');
const billShare = document.getElementById('bill-share');
const calculateBtn = document.getElementById('calculate');
let result

calculateBtn.addEventListener('click', calculateTip);

function calculateTip(bill, service, share){
    bill = billAmount.valueAsNumber;
    service = serviceQuality.value;
    share = billShare.valueAsNumber;
    service === "excellent" ? result = (bill + ((bill/100)*30)) / share
    : service === "good" ? result = (bill + ((bill/100)*20)) / share
    : service === "average" ? result = (bill + ((bill/100)*15)) / share
    : service === "bad" ? result = (bill + ((bill/100)*10)) / share
    : result = (bill + ((bill/100)*5)) / share
    alert(`With ${service} service and a ${bill} dollar bill divided by ${share}, the total sum to pay, with tip included, is $${Math.ceil(result)} per person.`);
}