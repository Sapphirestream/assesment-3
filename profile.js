console.log("connected...")

colorBtn = document.querySelector("#color")
placeBtn = document.querySelector("#place")
ritualBtn = document.querySelector("#ritual")

colorBtn.addEventListener("click", () => { alert("Blue!")})
placeBtn.addEventListener("click", () => { alert("The Beach")})
ritualBtn.addEventListener("click", () => { alert("Pre-rolling the D20 to decide which set of dice I'm going to use that day")})