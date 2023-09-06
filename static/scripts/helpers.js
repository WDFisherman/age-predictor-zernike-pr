/**
 * Values each number to points and calculates a resulting age.
 * @param {Number} floorDistNum 
 * @param {Number} reactSpdNum 
 * @param {Number} balanceNum
 * @param {Number} mediNum 
 * @returns {Number} calculated age
 */
export function ageCalculator(floorDistNum, reactSpdNum, balanceNum, mediNum) {
    let floorDistPoints = 0
    let reactSpdPoints = 0
    let balancePoints = 0
    let mediNumPoints = 0

    if(floorDistNum <= 3) {
        floorDistPoints = 4
    } else if (floorDistNum >= 45) {
        floorDistPoints = 85
    } else {
        floorDistPoints = floorDistNum/0.518518
    }
    
    if(reactSpdNum <= 100) {
        reactSpdPoints = 24
    } else if (reactSpdNum > 100 && reactSpdNum <= 250) {
        reactSpdPoints = 12
    } else if (reactSpdNum >= 800) {
        reactSpdPoints = 85
    } else if (reactSpdNum > 250 && reactSpdNum <= 400) {
        reactSpdPoints = ((reactSpdNum-250)/5)+25
    } else {
        reactSpdPoints = (reactSpdNum-400)/16+55
    }
    
    if(mediNum <= 1) {
        mediNumPoints = 7
    } else if (mediNum >= 10) {
        mediNumPoints = 85
    } else {
        mediNumPoints = (mediNum-1)*8.666666667+7
    }
    
    if((floorDistPoints + mediNumPoints)/2 <= 35) {
        balancePoints = 5+(balanceNum*(30/60))
    } else {
        balancePoints = 100-balanceNum*(65/60)
    }
    
    return (floorDistPoints + reactSpdPoints + balancePoints + mediNumPoints)/4
}

/**
 * modifies imgElem scr related to age
 * @param {number} age 
 * @param {HTMLImageElement} imgElem 
 * @param {HTMLElement} figcaptionElem 
 */
export function modifImgByAge(age, imgElem, figcaptionElem) {
    if (imgElem.hasAttribute("hidden")) {imgElem.removeAttribute("hidden")}
    imgElem.src = "./ageCategoryImg/"
    if (age > 80) {
        imgElem.src += "80-90.jpg"
    } else if (age > 70 && age < 80) {
        imgElem.src += "70-80-https__nl.depositphotos.com_23672335stock-illustration-smiling-senior-woman.html.jpg"
        figcaptionElem.innerText = "Van: https://nl.depositphotos.com/23672335/stock-illustration-smiling-senior-woman.html"
    } else if (age >= 60 && age < 70) {
        imgElem.src += "60-70.jpg"
    } else if (age >= 50 && age < 60) {
        imgElem.src += "50-60.jpg"
    } else if (age >= 40 && age < 50) {
        imgElem.src += "40-50.webp"
    } else if (age >= 30 && age < 40) {
        imgElem.src += "30-40.png"
    } else if (age >= 20 && age < 30) {
        imgElem.src = "https://www.boredpanda.com/blog/wp-content/uploads/2018/08/funny-20s-vs-30s-differences-comics-boredpanda-friends-5b67f157bc52a__700.jpg"
        figcaptionElem.innerText = "Van: www.boredpanda.com"
    } else if (age >= 16 && age < 20) {
        imgElem.src += "16-20.jpg"
    } else {
        switch (age) {
            case 15:
                imgElem.src += "15.jpg"
                break;
            case 14:
                imgElem.src += "14.jpg"
                break;
            case 13:
                imgElem.src += "13.webp"
                break;
            case 12:
                imgElem.src += "12.jpg"
                break;
            case 11:
                imgElem.src += "11.webp"
                break;
            case 10:
                imgElem.src += "10.webp"
                break;
            case 8:
                imgElem.src += "8.jpg"
                break;
            case 7:
                imgElem.src += "7.jpg"
                break;
            default:
                break;
        }
    }
}