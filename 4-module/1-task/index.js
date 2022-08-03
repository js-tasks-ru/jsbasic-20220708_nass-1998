function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  
  return friends.reduce((ul, { firstName, lastName }) => {
    const li = document.createElement('li');
    li.textContent = `${firstName} ${lastName}`;
    ul.appendChild(li);
    
    return ul;
  }, ul);
}
