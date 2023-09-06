import { elementObj } from "./globals.js";
/**
 * Object for tracking flexibility
 * @prop {number} num flexibility measurement
 */
export const flexibility = {
    num: 0,
    divElem: document.getElementById("floor-dist").firstElementChild,
    labelElem: document.getElementById("floor-dist").firstElementChild.children[0],
    sliderElem: document.getElementById("floor-dist").firstElementChild.children[1],
    /**
     * Makes label move along with slider tumb
     *  and updates this.num
     * @param {InputEvent} event 
     */
    rangeOninput(event) {
        flexibility.num = event.target.valueAsNumber
        const newTransform = 35+ ((305/50)*flexibility.num)
        flexibility.divElem.style.cssText = "--transform-left: "+ newTransform +"px"
        flexibility.labelElem.innerText = flexibility.num + " cm";
    }
}

/**
 * Object for tracking timing speed
 * @prop {number} timeEnd timing measurement
 */
export const timingSpeed = {
    running: false,
    powered: false,
    timeStart: 0,
    timeEnd: 0,
    randomTime: 0,
    reactSpdTimeout: null,
    timingSpdDiv: document.getElementById("timing-spd").firstElementChild,
    /**
     * Upon hitting [Enter]: code will change states, 
     *  record delay times and make states visable
     * @param {KeyboardEvent} event 
     */
    onEnterKeyUp(event) {
        if (event.key == "Enter") {
            let trueAgeSubmit = elementObj.trueAgeDiv.getElementsByTagName("input")[1]
            let resultButton = elementObj.resultActivation
            if (timingSpeed.running) {
                timingSpeed.running = false
                clearTimeout(timingSpeed.reactSpdTimeout)
                timingSpeed.reactSpdTimeout = null
                if (timingSpeed.powered) {
                    timingSpeed.timeEnd = Date.now() - (timingSpeed.timeStart + timingSpeed.randomTime)
                    timingSpeed.powered = false
                    timingSpeed.timingSpdDiv.innerText = timingSpeed.timeEnd + " ms"
                    timingSpeed.timingSpdDiv.className = "completed"
                    trueAgeSubmit.attributes.removeNamedItem("disabled")
                    resultButton.attributes.removeNamedItem("disabled")
                } else {
                    timingSpeed.powered = false
                    timingSpeed.timingSpdDiv.innerText = "Te vroeg"
                    console.log(resultButton.attributes);
                    if(!("disabled" in trueAgeSubmit.attributes)) {
                        console.log(("disabled" in trueAgeSubmit.attributes));
                        trueAgeSubmit.setAttribute("disabled", "")
                    }
                    if(!("disabled" in resultButton.attributes)) {
                        resultButton.setAttribute("disabled", "")
                    }
                }
            } else {
                timingSpeed.running = true
                timingSpeed.timingSpdDiv.className = "operable"
                timingSpeed.timingSpdDiv.innerText = "Wacht!"
                timingSpeed.randomTime = Math.floor((Math.random()*2500)+2500)
                timingSpeed.timeStart = Date.now()
                timingSpeed.reactSpdTimeout = setTimeout(() => {
                    timingSpeed.powered = true
                    timingSpeed.timingSpdDiv.className = "powered_state"
                    timingSpeed.timingSpdDiv.innerText = "Druk!"
                }, timingSpeed.randomTime);
            }
        }

    }
}

export const balance = {
    time: 0,
    textField: document.getElementById("balance").getElementsByTagName("input")[0],
    /**
     * updates this.time
     * @param {InputEvent} event 
     */
    numberOnInput(event) {
        balance.time = event.target.valueAsNumber
    }
}

/**
 * Object for tracking medication status
 * @prop {number} num number of medication
 */
export const medication = {
    num: 0,
    divElem: document.getElementById("medication").firstElementChild,
    labelElem: document.getElementById("medication").firstElementChild.children[0],
    sliderElem: document.getElementById("medication").firstElementChild.children[1],
    /**
     *  Makes label move along with slider tumb
     *   and updates this.num
     *  @param {InputEvent} event 
     */
    rangeOninput(event) {
        medication.num = event.target.valueAsNumber
        let newTransform = 47+ ((305/10)*medication.num)
        medication.divElem.style.cssText = "--transform-left: "+ newTransform +"px"
        medication.labelElem.innerText = medication.num;
        if (medication.num == 10) {
            medication.labelElem.innerText += "+"
        }
    }
}