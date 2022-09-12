////////////////////Variables//////////////////////////////////////
const $=document
let srcArray=['images/1.jpg','images/2.png','images/3.jpg']
let index=0
const prevButton=_q('.fa-circle-chevron-left')
const nextButton=_q('.fa-circle-chevron-right')
const imageSlider=_q('.img-slider')
/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  $.getElementById(tag)
}
function _class(tag) {
    return $.getElementsByClassName(tag)
}
function _q(tag) {
    return $.querySelector(tag)
}
function _qAll(tag) {
    return $.querySelectorAll(tag)
}
///////////////////////////////////

function nextImageHandler() {
	clearInterval(timer)
    index++
    if(index > srcArray.length-1 ){
        index=0
    }
    imageSlider.setAttribute('src',srcArray[index])
    console.log(index)
}
function previousImageHandler() {
	clearInterval(timer)
    index--
    if(index ===-1){
        index=srcArray.length-1
    }
    imageSlider.setAttribute('src',srcArray[index])
    console.log(index)
}
var timer=setInterval(nextImageHandler,3000)

nextButton.addEventListener('click',nextImageHandler)
prevButton.addEventListener('click',previousImageHandler)