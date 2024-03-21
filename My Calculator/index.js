
const mydiv=document.createElement("div")
mydiv.style.height='191px'
mydiv.style.width='192px'
mydiv.style.backgroundColor='red'
document.body.append(mydiv)

const display=document.createElement("input")
display.addEventListener('click', cal)
display.type="text"
display.id="display"
display.style.marginTop='2px'
display.style.fontSize="35px"
display.style.width="185px"
display.style.height="50px"
display.readOnly='true'
mydiv.appendChild(display)

document.body.append(document.createElement("br"))
const mybuttondiv=document.createElement("div")

mybuttondiv.style.height='132px'
mybuttondiv.style.width='192px'
mybuttondiv.style.backgroundColor='green'
mydiv.appendChild(mybuttondiv)

let br1=document.createElement("br")
document.body.append(br1)
let bname=[['AC','DEL','%','/'],['7','8','9','x'],['4','5','6','-'],['1','2','3','+'],['00','0','.','=']]
let mybutton
for(let i=0;i<5;i++)
{
    for(let j=0;j<4;j++)
    {
        mybutton=document.createElement("button")
        let id=bname[i][j]
        //let bname=String(i)+String(j)
        mybutton.id=id
        mybutton.textContent=bname[i][j];
        mybutton.style.height="20px"
        mybutton.style.width="40px"
        mybutton.style.mar="10px"
        mybutton.style.marginTop="5px"
        mybutton.style.borderRadius="50px"
        mybutton.style.borderWidth='1px'
        mybutton.style.marginRight="5px"
        mybutton.style.marginLeft='3px'
        if(mybutton.innerHTML=='='){
            mybutton.style.backgroundColor='#ffe066'
        }
        mybuttondiv.appendChild(mybutton)
        //document.body.append(mybutton)
        // let buttonname=document.getElementById(id)
        // buttonname.style.color="blue"
        // buttonname.style.marginTop="5px"
        // buttonname.style.marginRight="10px"
    }
    document.body.append(document.createElement("br"))
}


let buttons=document.querySelectorAll("button")
let arr=Array.from(buttons)
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        addtoDisplay(button.innerHTML)
    })
})
function addtoDisplay(x){
    if(x=='AC')
    {
        display.value=""
    }
    else if(x=='DEL'){
        let str=display.value
        str=str.substring(0,str.length-1)
        display.value=str
    }
    else if(x=='='){
        
        display.value=eval(display.value.replace('x','*'))
    }
    else display.value+=x
}
function cal(){
    if(display.value==''){
        display.value=''
    }
    else
    display.value=eval(display.value.replace('x','*'))
}


