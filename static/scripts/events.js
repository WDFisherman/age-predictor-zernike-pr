import {flexibility, timingSpeed, balance, medication} from "./interactive.js";
import { elementObj } from "./globals.js";
import { ageCalculator, modifImgByAge } from "./helpers.js";


// Calculates latest age and saves in file via a POST request
export function trueAgeSubmitOnclick() {
    if (timingSpeed.timeEnd == 0) { // timing speed of 0 ms is definily cheating/too early submit
        elementObj.trueAgeDiv.getElementsByTagName("span")[0].innerText = "De timings waarde is '0ms', dit is te laag om in te dienen."
    } else {
        elementObj.trueAgeDiv.getElementsByTagName("span")[0].innerText = "Bedankt!"
        let ageRestult = ageCalculator(flexibility.num, timingSpeed.timeEnd, balance.time, medication.num)
        elementObj.resultSpan.innerText = Math.round(
            ageRestult
        ) + " jaar";
        modifImgByAge(
            Math.round(
                ageRestult
            ),
            elementObj.resultFigure.children[0], //<img>
            elementObj.resultFigure.children[1] //<figcaption>
        )
        let actualAge = elementObj.trueAgeDiv.getElementsByTagName("input")[0] // input field
        fetch('./age', {
            method:"POST", 
            body: JSON.stringify(
                {
                    ageData: [flexibility.num, timingSpeed.timeEnd, balance.time, medication.num, ageRestult, actualAge.valueAsNumber]
                }
            ),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((e) => {
            console.log(e);
        }).catch(e=>console.log(e))
    }
}

// Calculates latest age
export function resultActivationOnclick() {
    const ageRestult = ageCalculator(flexibility.num, timingSpeed.timeEnd, balance.time, medication.num)
    elementObj.resultSpan.innerText = Math.round(
        ageRestult
    ) + " jaar";

    modifImgByAge(
        Math.round(
            ageRestult
        ),
        elementObj.resultFigure.children[0], //<img>
        elementObj.resultFigure.children[1] //<figcaption>
    )
}