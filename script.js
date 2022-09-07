const ratingForm = document.querySelector("#completed-form")
const thanksForm = document.querySelector("#thank-form")

const rateValueList = document.querySelectorAll(".rating")

const rating = document.querySelector("#rating-value")
let rate;

// I found the solution online, but I can't really tell what I did
for(let i = 0 ; i < rateValueList.length; i++){
    rateValueList[i].addEventListener("click", function(){        
        rate = this.textContent;

        let rvl = rateValueList[0];
        while (rvl){
            if (rvl.tagName === "LI"){
                rvl.classList.remove("active")
            }
            rvl = rvl.nextSibling
        }
        this.classList.add("active")
    })
}

ratingForm.addEventListener("submit", (event) => {
    rating.textContent = rate;

    ratingForm.classList.add("hidden")
    thanksForm.classList.remove("hidden")



    event.preventDefault();
})