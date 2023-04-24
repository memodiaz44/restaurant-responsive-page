// document.body.appendChild(function(){const e=document.createElement("div");return e.innerHTML=_.join(["Hello","webpack"]," "),e}()),console.log("hai");
let mainDiv = document.getElementById('content')

let divs = document.createElement('div')
let container = document.createElement('div')
let conten1 = document.createElement('div')
let conten2 = document.createElement('div')
let text1 = document.createElement('h1')
let text2 = document.createElement('h1')
let text3 = document.createElement('h1')
let home = document.createElement('div')
let mission = document.createElement('h1')
let missionp = document.createElement('p')
let hours = document.createElement('h1')
let hoursB =  document.createElement('p')

let locationDiv = document.createElement('div')
let locations = document.createElement('h1')
let locationsin = document.createElement('p')



let image1 = document.createElement('img')



let menuContainer = document.createElement('div')


locations.innerHTML = 'LOCATION \N Galerias Monterrey'
locationsin.innerHTML = 'Av Insurgentes #2500 Local 370, Segundo Piso, Centro Comercial Galerías Monterrey. Monterrey, Nuevo León Tel. (81) 40670420 y (81) 40670419'
hours.innerHTML = 'HOURS'
hoursB.innerHTML = 'Sunday: 8am - 8pm \n Monday: 6am - 6pm \n Tuesday: 6am - 6pm \n Wednesday: 6am - 6pm \n Thursday: 6am - 10pm \n Friday: 6am - 10pm \n Saturday: 8am - 10pm'  

mission.innerHTML ='WELCOME'
missionp.innerHTML = 'Sierra Madre restaurant has been in the businnes for more than 30 years and has been nominated as the bets customer sevice provider in the region by the World Restaurant Federation'

menuContainer.appendChild(hours)
menuContainer.appendChild(hoursB)

locationDiv.appendChild(locations)
locationDiv.appendChild(locationsin)
home.appendChild(mission)
home.appendChild(missionp)
home.appendChild(locationDiv)


text3.innerHTML = ' CONTACT'

text1.innerHTML = 'HOME'
text1.classList.add('text1')
text2.classList.add('text2')
text3.classList.add('text3')
text2.innerHTML = 'MENU'





let menuDiv = document.createElement('div')
let menuDiv2 = document.createElement('div')
let menuDiv3 = document.createElement('div')

let menu = document.createElement('h1')
let menu1 = document.createElement('p')
let menu2 = document.createElement('h1')
let menu2h = document.createElement('p')
let menu3 = document.createElement('h1')
let menu3h = document.createElement('p')

menu2.innerHTML = 'SIRLOIN LOAD NACHOS'
menu2h.innerHTML = 'Torilla nacho with beans and a mix of queae, pork bally and roasted sirlion with topping of cream and guacamole'

menu.innerHTML = "TASH CAN NACHOS"
menu1.innerHTML = 'Nacho chips, cheddar , Monterey Jack, Chicken grill 220gms, chill beans, jalapeño chease sauce, cinamon and onions'

menu3.innerHTML = 'MINI BURGERS'
menu3h.innerHTML = '5 burgers Xtra Small 80gms with Xtra large flavor and french fries'
menuDiv.appendChild(menu)
menuDiv.appendChild(menu1)

menuDiv2.appendChild(menu2)
menuDiv2.appendChild(menu2h)

menuDiv3.appendChild(menu3)
menuDiv3.appendChild(menu3h)

menuDiv.appendChild(image1)
menuDiv.classList.add('menu')
menuDiv2.classList.add('menu2')
menuDiv3.classList.add('menu3')

home.classList.add('home')
menuContainer.classList.add('home')





container.appendChild(conten1)

divs.classList.add('topbar')
mainDiv.appendChild(divs)
divs.innerHTML = 'Sierra Madre'
container.classList.add('container')



let contact = document.createElement('div')
let nameinput = document.createElement('input')
nameinput.type = "text";
nameinput.placeholder = 'name'
let emailinput = document.createElement('input')
emailinput.type = 'email'
emailinput.placeholder = 'email'
let phoneinput = document.createElement('input')
phoneinput.type = 'text'
phoneinput.placeholder = 'phone number'
let submit = document.createElement('button')
submit.type = 'submit'
submit.innerText =  'SEND'

let textinput = document.createElement('textarea')
textinput.placeholder = 'How can we help?'

let emailDiv = document.createElement('div')
let phoneDiv = document.createElement('div')
let textDiv = document.createElement('div')
let buttomDiv = document.createElement('div')

let touch = document.createElement('h1')
touch.innerText = "GET IN TOUCH"

touch.classList.add('touch')
buttomDiv.appendChild(submit)
textDiv.appendChild(textinput)
phoneDiv.appendChild(phoneinput)
emailDiv.appendChild(emailinput)
contact.classList.add('contact')


nameinput.classList.add('input')
emailinput.classList.add('input')
phoneinput.classList.add('input')
textinput.classList.add('input')

buttomDiv.classList.add('submit')
contact.appendChild(touch)


contact.appendChild(nameinput)
contact.appendChild(emailDiv)
contact.appendChild(phoneDiv)
contact.appendChild(textDiv)
contact.appendChild(buttomDiv)
let thanksDiv = document.createElement('div')
let thanksMs = document.createElement('h1')
thanksMs.innerText = 'THANKS! WE KEEP IN TOUCH '
thanksDiv.appendChild(thanksMs)


submit.addEventListener('click', () => {
    if(nameinput.value !== ''){ 
        if(emailinput.value !== ''){
            if(phoneinput.value !== ''){
                if(textinput.value !== ''){
                    nameinput.value = '',
                    emailinput.value = '',
                    phoneinput.value = '',
                    textinput.value = '',
                    contact.appendChild(thanksDiv)
                    



                }else {
                    alert('missing text')
                }

            }else {
                alert('missingh phone ')
            }
            


        }else {
            alert('missing email')
        }

    }else{
        alert('missing name')
    }
})

mainDiv.appendChild(container)
conten1.appendChild(text1)
conten1.appendChild(text2)
conten1.appendChild(text3)
mainDiv.append(menuDiv)
mainDiv.append(menuDiv2)
mainDiv.append(menuDiv3)
mainDiv.append(home)
mainDiv.append(menuContainer)
mainDiv.append(contact)

text1.classList.add('active')
home.style.display = 'block'
menuContainer.style.display = 'block'

text2.addEventListener('click', () => {
    home.style.display = 'none'
    menuContainer.style.display = 'none'
    menuDiv.style.display = 'block'
    menuDiv2.style.display = 'block'
    menuDiv3.style.display = 'block'
    text2.classList.add('active')
    text1.classList.remove('active')
    text3.classList.remove('active')
    contact.style.display = 'none'

})


text1.addEventListener('click', () => {
    home.style.display = 'block'
    menuContainer.style.display = 'block'
    text1.classList.add('active')
    text2.classList.remove('active')
    text3.classList.remove('active')
    contact.style.display = 'none'

    menuDiv.style.display = 'none'
    menuDiv2.style.display = 'none'
    menuDiv3.style.display = 'none'


})


text3.addEventListener('click', () => {
    contact.style.display = 'block'


    text1.classList.remove('active')
    text2.classList.remove('active')
    text3.classList.add('active')
    home.style.display = 'none'
    menuContainer.style.display = 'none'
    menuDiv.style.display = 'none'
    menuDiv2.style.display = 'none'
    menuDiv3.style.display = 'none'

})
