function showSalary(users, age) {
  let maxAge = '';

   for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
 
      maxAge+=`${users[i].name}, ${users[i].balance}\n`
    }
  } return maxAge.trim()
}


