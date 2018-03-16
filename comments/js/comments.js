'use strict';

function createComment(comment) {
  const wrap = document.createElement('div');
  wrap.className = 'comment-wrap';
  
  const photo = document.createElement('div');
  photo.className = 'photo';
  photo.setAttribute(`title`, `${comment.author.name}`);

  const avatar = document.createElement('div');
  avatar.setAttribute('style', 'background-image: url(`${comment.author.pic}`)');
  
  
  photo.appendChild(avatar);
  
  const commentBlock = document.createElement('div');
  commentBlock.className = 'comment-block';
  
  const commentText = document.createElement('p');
  commentText.className = 'comment-text';
  
  const ct = document.createTextNode(`${comment.text.split('\n').join('<br>')}`);
  commentText.appendChild(ct);
  
  const bottomComment = document.createElement('div');
  bottomComment.className = 'bottom-comment';
  
  const commentDate = document.createElement('div');
  commentDate.className = "comment-date";
  
  const date = document.createTextNode(`${new Date(comment.date).toLocaleString('ru-Ru')}`);
  commentDate.appendChild(date);
  
  const commentActions = document.createElement('ul');
  commentActions.className = 'comment-actions';
  
  const complain = document.createElement('li'); 
  complain.className = 'complain';
  const cmp = document.createTextNode('Пожаловаться');
  complain.appendChild(cmp);
  
  const reply = document.createElement('li'); 
  reply.className = 'reply';
  const rpl = document.createTextNode('Ответить');
  reply.appendChild(rpl);
  
  commentActions.appendChild(complain);
  commentActions.appendChild(reply);
  
  commentBlock.appendChild(commentActions); 
  
  wrap.appendChild(photo);
  wrap.appendChild(commentBlock);
  
  console.log(wrap);

  return wrap;
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);

function showComments(list) {
  const commentsContainer = document.querySelector('.comments');
  const comments = list.map(createComment);
  const fragment = comments.reduce((fragment, currentValue) => {
      fragment.appendChild(currentValue);
      return fragment;
    }, document.createDocumentFragment());
document.body.appendChild(fragment);
}

//pastebin.com/SUuWN6bR
