'use strict';

//function createComment(comment) {
//  return `<div class="comment-wrap">
//    <div class="photo" title="${comment.author.name}">
//      <div class="avatar" style="background-image: url(`${comment.author.pic}`)"></div>
//    </div>
//    <div class="comment-block">
//      <p class="comment-text">
//        ${comment.text.split('\n').join('<br>')}
//      </p>
//      <div class="bottom-comment">
//        <div class="comment-date">${new Date(comment.date).toLocaleString('ru-Ru')}</div>
//        <ul class="comment-actions">
//          <li class="complain">Пожаловаться</li>
//          <li class="reply">Ответить</li>
//        </ul>
//      </div>
//    </div>
//  </div>`
//}

function createComment(comment) {
  const wrap = document.createElement('div');
  wrap.className = 'comment-wrap';
  
  const photo = document.createElement('div');
  photo.className = 'photo';
  photo.setAttribute('title', `${comment.author.name}`);

  const avatar = document.createElement('div');
  avatar.setAttribute('style', 'background-image: url(`${comment.author.pic}`)');
  
  
  photo.appendChild(avatar);
  
  const commentBlock = document.createElement('div');
  commentBlock.className = 'comment-block';
  
  const commentText = document.createElement('p');
  commentText.className = 'comment-text';
  
  const ct = document.createTextNode(`${comment.text.split('\n').join('<br>')}`);
  commentText.appendChild(ct);
  
  wrap.appendChild(photo);
  wrap.appendChild(commentBlock);
  
//  const productNode = document.createElement('div');
//  productNode.className = 'product';
//  productNode.appendChild(title);
//  productNode.appendChild(price);
  return wrap;
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);

function showComments(list) {
  const commentsContainer = document.querySelector('.comments');
//  const comments = list.map(createProductNode).join('');
//  commentsContainer.innerHTML += comments;
  
  const comments = list.map(createComment);
  const fragment = comments.reduce((fragment, currentValue) => {
      fragment.appendChild(currentValue);
      return fragment;
    }, document.createDocumentFragment());
document.body.appendChild(fragment);
}

//pastebin.com/SUuWN6bR
