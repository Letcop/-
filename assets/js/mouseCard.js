let newCardLists = document.querySelectorAll('.new_card_list');


newCardLists.forEach((hideCardList) => {
  hideCardList.addEventListener('mouseover', () => {
    hideCardList.lastElementChild.classList.add('hide_card_info');
    hideCardList.firstElementChild.lastElementChild.classList.add('card_date_show');
    hideCardList.offsetParent.firstElementChild.classList.add('new_card_title_hide');
    hideCardList.offsetParent.children[1].classList.add('bgc_back');
  })
});

newCardLists.forEach((showCardList) => {
  showCardList.addEventListener('mouseout', () => {
    showCardList.lastElementChild.classList.remove('hide_card_info')
    showCardList.firstElementChild.lastElementChild.classList.remove('card_date_show');
    showCardList.offsetParent.firstElementChild.classList.remove('new_card_title_hide');
    showCardList.offsetParent.children[1].classList.remove('bgc_back');
  })
});
