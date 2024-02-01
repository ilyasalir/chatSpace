const elements = document.querySelectorAll('.userChatInfo');

elements.forEach((element) => {
  const maxLength = parseInt(element.getAttribute('max-display-length'), 10);
  const ellipsis = element.getAttribute('max-display-length-ellipsis') || '...';

  if (element.textContent.length > maxLength) {
    element.textContent = element.textContent.slice(0, maxLength) + ellipsis;
  }
});
