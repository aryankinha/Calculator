let result="";

let btns = document.querySelectorAll("button")
let screen = document.querySelector("#screen")


btns.forEach( (el) => {
    el.addEventListener("click", () => {
        let el_text = el.innerText
        calculate(el_text)
    })
})
document.addEventListener("keydown" , (ev) => {
    let keyDown = String(ev.key)
    calculate(keyDown)
})
function calculate(text){
    if (text != "D" && text !="Clr" && text !== "=" && /^[0-9+\-/*%=\.]+$/.test(text)){
        result = result + text
        screen.setAttribute("value",result);
    }else if (text === "=" || text === "Enter"){
        try {
            let ans = eval(result);
            screen.setAttribute("value", ans);
            result = ans.toString();
        } catch (e) {
            screen.setAttribute("value", "Error");
            result = "";
        }
    }else if(text === "Clr"){
        result = ""
        ans = ""
        screen.setAttribute("value",ans);
    }
    else if(text === "D" || text === "Backspace"){
        result = result.slice(0,-1)
        screen.setAttribute("value",result);
    }
}