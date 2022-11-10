/* 상세 약관 */

const terms1 = document.getElementById("terms1");
const terms2 = document.getElementById("terms2");
const terms3 = document.getElementById("terms3");

const joinTerms = document.querySelectorAll(".join-terms-content");


terms1.addEventListener('click', () => {
    joinTerms[0].classList.toggle('invisible');
});

terms2.addEventListener('click', () => {
    joinTerms[1].classList.toggle('invisible');
});

terms3.addEventListener('click', () => {
    joinTerms[2].classList.toggle('invisible');
});




/* checkbox 모두 동의하기 -> 모두 체크 되도록 */

const checkBox1 = document.querySelector(".agree_service_check0");
const checkBox2 = document.querySelector(".agree_service_check1");
const checkBox3 = document.querySelector(".agree_service_check2");
const checkBox4 = document.querySelector(".agree_service_check3");

const checkAll = document.querySelector(".agree-service-all");


checkAll.addEventListener('click', (e) => {
    const checked = e.target.checked;

    if (checked) {
        checkBox1.checked = true;
        checkBox2.checked = true;
        checkBox3.checked = true;
        checkBox4.checked = true;
    }else {
        checkBox1.checked = false;
        checkBox2.checked = false;
        checkBox3.checked = false;
        checkBox4.checked = false;
    }

}); 
