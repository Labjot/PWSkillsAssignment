let count = document.getElementById("count");
let incrementButton = document.getElementById("increment-btn");
let decrementButton = document.getElementById("decrement-btn");
let resetButton = document.getElementById("reset-btn");

incrementButton.addEventListener("click", updateIncreasedCount);

let initialValue = 0;
function increaseCount(){
    initialValue = initialValue+1;
    return initialValue;
}
function updateIncreasedCount(){
    count.textContent = increaseCount();
}

decrementButton.addEventListener("click",updateDecreasedCount);
function decreaseCount(){
    initialValue = initialValue-1;
    return initialValue;
}
function updateDecreasedCount(){
    count.textContent = decreaseCount();
}

resetButton.addEventListener("click",updateResetValue);
function resetValue(){
    initialValue = 0;
    return initialValue;
}
function updateResetValue(){
    count.textContent = resetValue();
}

