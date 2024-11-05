document.getElementById("deposit-btn").addEventListener("click", ()=> {
    const depositInput = document.getElementById("deposit-input")
    const depositInputValue = depositInput.value
    const depositInputValueNumber = parseFloat(depositInputValue)


    const depositBalance = document.getElementById("deposit-amount")
    const totalDepositBalance = depositBalance.innerText
    const depositBalanceNumber = parseFloat(totalDepositBalance)

    const totalDeposit = depositInputValueNumber + depositBalanceNumber
    depositBalance.innerText = totalDeposit


    const totalBalnce = document.getElementById("total-balance")
    const totalBalnceValue = totalBalnce.innerText
    const totalBalnceValueNumber = parseFloat(totalBalnceValue)

    const addBalnce = totalBalnceValueNumber + depositInputValueNumber
    totalBalnce.innerText = addBalnce

    depositInput.value = ""

    console.log(typeof(totalBalnceValueNumber));
})


// withdraw-btn part 

document.getElementById("withdraw-btn").addEventListener("click", ()=> {
    const withdrawInput = document.getElementById("withdraw-input")
    const withdrawInputValue = withdrawInput.value
    const withdrawInputValueNumber = parseFloat(withdrawInputValue)

    const withdrawAmoutn = document.getElementById("withdraw-amount")
    const totalWithdraw = withdrawAmoutn.innerText
    const totalWithdrawNumber = parseFloat(totalWithdraw)

    const addWithdraw = withdrawInputValueNumber + totalWithdrawNumber
    withdrawAmoutn.innerText = addWithdraw

    const withdrawBalnce = document.getElementById("total-balance")
    const totalWithdrawBalnce = withdrawBalnce.innerText
    const totalWithdrawBalnceNumber = parseFloat(totalWithdrawBalnce)

    const totalWithdrawAmount = totalWithdrawBalnceNumber - withdrawInputValueNumber
    withdrawBalnce.innerText = totalWithdrawAmount

    withdrawInput.value = ""

    console.log(typeof(totalWithdrawBalnceNumber));
})