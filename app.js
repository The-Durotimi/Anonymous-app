const menubtn = document.querySelector(".menu")
const nav = document.querySelector("nav")

menubtn.addEventListener("click", function(){
    nav.classList.toggle("slide")
    if(nav.classList.contains('slide')){
        menubtn.src = "./close.png"
    } else{
        menubtn.src = "./menu.png"
    }
})


const message = document.querySelector(".messages")


message.addEventListener("click", function(){
    let messagePage = `<section class="message-area">
    <h2>Send Your Anonymous Message to Your Friend</h2>
    <div>
      <textarea placeholder="Enter Your Message"></textarea>
    </div>
    <button class="next">Send</button>
</section>`


document.querySelector(".message-area").innerHTML = messagePage
document.querySelector(".send").style.display = "none"
const nextPage = document.querySelector(".next")


nextPage.addEventListener("click", function(){
    let next = `<section class="congratulation">
        <h1>You have sent your Anonymous text to your friend!!!</h1>
        <p>CLick <a href="">Home</a> to go back to the Homepage</p>
    </section>`
document.querySelector(".congratulation").innerHTML = next
document.querySelector(".message-area").style.display ="none"
    
})

})






