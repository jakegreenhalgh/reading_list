document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', formHandler)

  const button = document. querySelector('#button');
  button.addEventListener('click', handleButtonClick);

})

const formHandler = function (event) {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;
  const newItem = document.createElement('li');
    const titleItem = document.createElement('p');
      titleItem.textContent = `${title}`;
      titleItem.classList.add('title');
    const authorItem = document.createElement('p');
      authorItem.textContent = `${author}`;
      authorItem.classList.add('author');
    const categoryItem = document.createElement('p');
      categoryItem.textContent = `${category}`;
      categoryItem.classList.add('category');
    const list = document.querySelector('ul');
    newItem.append(titleItem)
    newItem.append(authorItem)
    newItem.append(categoryItem)
    list.appendChild(newItem)
  event.target.reset()
}

const handleButtonClick = function () {
  const list= document.querySelector('ul');
  list.reset()
};