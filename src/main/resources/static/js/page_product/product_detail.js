
/*  상세 정보 */

const fea = document.getElementById("proAdd")
const des = document.getElementById("proDes");
const rPolicy = document.getElementById("rPolicy");

const ex1 = document.querySelector(".ex1");
const ex2 = document.querySelector(".ex2");
const ex3 = document.querySelector(".ex3");

fea.addEventListener('click', () => {
    ex1.classList.toggle('invisible');
});

des.addEventListener('click', () => {
    ex2.classList.toggle('invisible');
});

rPolicy.addEventListener('click', () => {
    ex3.classList.toggle('invisible');
})

/* top 버튼 */ 

$(function(){

	$("#top").hide();
	


	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 900) {
				$('#top').fadeIn();
			} else {
				$('#top').fadeOut();
			}
		});

		$('#top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});

});


