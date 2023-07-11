function func() {
  let x = document.querySelector('.day-js').value;
  let y = document.querySelector('.month-js').value;
  let z = document.querySelector('.year-js').value;
  console.log(x);
  console.log(y);
  console.log(z);
  let flag = 0, f1 = 0, f2 = 0, f3 = 0;
  if (x === '') {
    document.querySelector('.day-error-message').innerHTML = `<div class = "null-error">
    This field is required
    </div>`;
    flag = 1;
    f1 = 1;
  }
  else if (x < 1 || x > 31) {
    document.querySelector('.day-error-message').innerHTML = `<div class = "not-null-error">
    Must be a valid date
    </div>`;
    flag = 1;
    f1 = 1;
  }
  if (z === '') {
    document.querySelector('.year-error-message').innerHTML = `<div class = "null-error">This field is required </div>`
    flag = 1;
    f3 = 1;
  }
  else if (z > 2023) {
    document.querySelector('.year-error-message').innerHTML = `<div class = "not-null-error">Must be in a past </div>`
    flag = 1;
    f3 = 1;
  }
  if (y === '') {
    document.querySelector('.month-error-message').innerHTML = `<div class = "null-error">This field is required </div>`
    flag = 1;
    f2 = 1;
  }
  else if (y > 12 || y < 1) {
    document.querySelector('.month-error-message').innerHTML = ` <div class = "not-null-error"> Must be a valid month </div>`;
    flag = 1;
    f2 = 1;
  }
  else {
    if (y == 2 && x > 28) {
      document.querySelector('.day-error-message').innerHTML = ` <div class = "not-null-error">Must be a valid date </div>`;
      document.querySelector('.month-error-message').innerHTML = ` <div class = "not-null-error">Must be a valid month  </div>`;
      flag = 1;
      f2 = 1;
      f1 = 1;
    }
    else if ((!(y & 1) && x == 31) || (y & 1) && (x == 30)) {
      document.querySelector('.day-error-message').innerHTML = ` <div class = "not-null-error">Must be a valid date </div>`;
      document.querySelector('.month-error-message').innerHTML = ` <div class = "not-null-error">Must be a valid month </div>`;
      flag = 1;
      f2 = 1;
      f1 = 1;
    }
    else {
      if (!flag) {
        document.querySelector('.year-blue-box').innerHTML = `<div class = "num" >${2023 - z} </div>`;
        document.querySelector('.month-blue-box').innerHTML = `<div class = "num">${Math.abs(7 - y)}</div>`;
        document.querySelector('.day-blue-box').innerHTML = `<div class = "num">${Math.abs(11 - x)}</div>`;
      }
    }
  }
  if (!f1)
    document.querySelector('.day-error-message').innerHTML = ``;
  if (!f2)
    document.querySelector('.month-error-message').innerHTML = ``;
  if (!f3)
    document.querySelector('.year-error-message').innerHTML = ``;
  let q = document.querySelector('.day-text');
  let q1 = document.querySelector('.day-js');
  let r = document.querySelector('.month-text');
  let r1 = document.querySelector('.month-js');
  let s = document.querySelector('.year-text');
  let s1 = document.querySelector('.year-js');
  if (flag) {
    q.style.color = 'red';
    q1.style.borderColor = 'red';
    r.style.color = 'red';
    r1.style.borderColor = 'red';
    s.style.color = 'red';
    s1.style.borderColor = 'red';
  }
  else {
    q.style.color = 'hsl(0, 1%, 44%)';
    q1.style.borderColor = 'hsl(0, 1%, 44%)';
    r.style.color = 'hsl(0, 1%, 44%)';
    r1.style.borderColor = 'hsl(0, 1%, 44%)';
    s.style.color = 'hsl(0, 1%, 44%)';
    s1.style.borderColor = 'hsl(0, 1%, 44%)';
  }

}