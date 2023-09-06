
import { flexibility, timingSpeed, balance, medication } from "./scripts/interactive.js";
import { trueAgeSubmitOnclick, resultActivationOnclick } from "./scripts/events.js";
import { elementObj } from "./scripts/globals.js";

flexibility.sliderElem.oninput  = flexibility.rangeOninput
document.onkeyup = timingSpeed.onEnterKeyUp
balance.textField.onchange = balance.numberOnInput
medication.sliderElem.oninput = medication.rangeOninput

// on change of one of the input, make resulting age hidden again
document.onchange = (e) => {
    // when user setting true age, guessed age should remain visable 
    if(e.target.parentElement.id != "true-age") {
        const resultImg = elementObj.resultFigure.getElementsByTagName("img")[0]
        const resultFigCapt = elementObj.resultFigure.getElementsByTagName("figcaption")[0]
        elementObj.resultSpan.innerText = "?? jaar"
        resultImg.src = ""
        resultImg.setAttribute("hidden", "")
        resultFigCapt.innerText = ""
    }
    elementObj.trueAgeDiv.getElementsByTagName("span")[0].innerText = ""
}

elementObj.resultActivation.onclick = resultActivationOnclick
elementObj.trueAgeSubmit.onclick = trueAgeSubmitOnclick
