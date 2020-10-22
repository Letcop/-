window.addEventListener('DOMContentLoaded', function(e) {
	let singed = false;

	if(singed){
		document.querySelector('.head__profile').style.display = "flex";
	}else{
		document.querySelector('.head__singIn').style.display = "block";
		document.querySelector('.head__botton').style.display = "none";
		document.querySelector('.head__right').style.width = "350px";
	}

	const showHideElem = (trigger, hidden, clas) => {
		const triggerElem = document.querySelectorAll(trigger),
			  hiddenElem = document.querySelectorAll(hidden);

		for(let i = 0; i < triggerElem.length; i++){
			triggerElem[i].addEventListener('click', (e) => {
				showHide(i,e);
			});
		}

		function showHide(index,e) {
			if(innerWidth <= 1040 && innerWidth >= 551 ){
				if(clas === 'activeProfile'){
					let parent = triggerElem[index].offsetParent

					if(parent.classList.contains(clas) === true){
						parent.classList.remove(clas);
					}else{
						if(e.target.parentElement.classList.contains('head__logine') === true){
							document.querySelector('.head__bell').classList.remove('activeBell');
							document.querySelector('.head__media_modal').classList.remove('activeModal');
						}

						parent.classList.add(clas);
					}
				}else{
					if(triggerElem[index].classList.contains(clas) === true){
						triggerElem[index].classList.remove(clas);
					}else{
						
						for(let i = 0; i < triggerElem.length; i++){
							triggerElem[i].classList.remove(clas)		
						}
						if(triggerElem[index].classList.contains('head__bell') === true){
							document.querySelector('.head__right').classList.remove('activeProfile');
							document.querySelector('.head__media_modal').classList.remove('activeModal');
						}

						triggerElem[index].classList.add(clas);

					}
				}
				console.log('asd')

			}else if (innerWidth <= 550) {
				let mobileBell = document.querySelector('.mobile__bell_modal');
				try {
					document.querySelector('#remove__mobile').remove()
				} catch(e) {
					// statements
				}
				if(triggerElem[0].classList.contains('head__bell') === true){
					if(mobileBell.classList.contains('active__mobile_bell') === true){
						mobileBell.classList.remove('active__mobile_bell');
					}else{
						mobileBell.classList.add('active__mobile_bell');
					}
				}

				if(triggerElem[index].classList.contains('media__active_hide') === true){
					triggerElem[index].classList.remove('media__active_hide');
				}else{
					for (var i = 0; i < triggerElem.length; i++) {
						triggerElem[i].classList.remove('media__active_hide')
					}
					triggerElem[index].classList.add('media__active_hide');
				}

			}else{
				console.log('asd')
				let clicked = document.querySelectorAll('.clickedElem');
				
				if(clas === 'activeProfile'){
					let parent = triggerElem[index].offsetParent

					if(parent.classList.contains(clas) === true){
						parent.classList.remove(clas);
					}else{
						for(let i = 0; i < clicked.length; i++){
							clicked[i].classList.remove('active');
							clicked[i].classList.remove('activeBell');
							clicked[i].classList.remove('activeProfile');
						}
						parent.classList.add(clas);
					}
				}else{
					if(triggerElem[index].classList.contains(clas) === true){
						triggerElem[index].classList.remove(clas);
					}else{
						for(let i = 0; i < clicked.length; i++){
							clicked[i].classList.remove('active');
							clicked[i].classList.remove('activeBell');
							clicked[i].classList.remove('activeProfile');
						}

						triggerElem[index].classList.add(clas);
					}
				}
			}
		}
	};
	const showModal = (open, close,elem) => {
		const openElem = document.querySelector(open),
			  closeElem = document.querySelectorAll(close),
			  element = document.querySelector(elem);

		openElem.addEventListener("click", openModal);
		for (let i = 0; i < closeElem.length; i++) {
			closeElem[i].addEventListener('click',closeModal);
		}

		function openModal () {
			element.classList.add('activeModal');

			document.querySelector('.head__right').classList.remove('activeProfile');
			document.querySelector('.head__bell ').classList.remove('activeBell');
			document.querySelector('.mobile__bell_modal ').classList.remove('active__mobile_bell');

		}
		function closeModal () {
			element.classList.remove('activeModal');
		}
	}

	const checkTextLength = (iteam) => {
		const text = document.querySelectorAll(iteam);

		for(let i = 0; i < text.length; i++){
			let despText = text[i].textContent.replace(/\s+/g, ' ').trim();
			let textArrow = despText.split(' ');

			if(textArrow[0].length > 13){
				let longName = textArrow[0].split('');
				let newText = longName.splice(0, 13);

				text[i].textContent = newText.toString().replace(/,/g, "") + '...';
			}else{	
				let textArrow2 = despText.split('');
				if(textArrow2.length > 13){
					let space = textArrow2.indexOf(' ');
					let newText = textArrow2.splice(0, space + 2);

					text[i].textContent = newText.toString().replace(/,/g, "") + '.';
				}
			}

		} 
	};
	const checkNumberLenght = (iteam) => {
		const number = document.querySelector(iteam);

		if(+number.textContent >= 100){
			number.textContent = '99+';
		}
	}

	checkTextLength('.head__name')
	showHideElem('.head__bottom','.hide__link','active');
	showHideElem('.head__bell','.hide__bell_modal','activeBell');
	showHideElem('.head__logine','.head__hide','activeProfile');
	showHideElem('.media__hide_button','.media__hide_links','media__active_hide');

	showModal('.head__burger','.close','.head__media_modal');

	checkNumberLenght('.head__bell p');
	checkNumberLenght('.head__chat p');
})