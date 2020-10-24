let newCardLists = document.querySelectorAll('.new_card_list');


newCardLists.forEach((hideCardList) => {
  hideCardList.addEventListener('mouseover', () => {
    hideCardList.parentElement.firstElementChild.classList.add('new_card_hide');
    hideCardList.offsetParent.children[1].classList.add('bgc_back');
    hideCardList.children[0].children[1].classList.add('card_date_show');
    hideCardList.children[1].classList.remove('new_card_info');
  })
});

newCardLists.forEach((showCardList) => {
  showCardList.addEventListener('mouseout', () => {
    showCardList.parentElement.firstElementChild.classList.remove('new_card_hide');
    showCardList.offsetParent.children[1].classList.remove('bgc_back')
    showCardList.children[0].children[1].classList.remove('card_date_show');
    showCardList.children[1].classList.add('new_card_info');
  })
});
