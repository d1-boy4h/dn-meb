"use strict";

/* ---------------- Стрелочка наверх ---------------- */

window.addEventListener('scroll', function () {
  var headerHeight = document.querySelector('.header').offsetHeight;

  if (window.scrollY > headerHeight / 2) {
    document.querySelector('.arrow_up').classList.add('visible');
  }
  else {
    document.querySelector('.arrow_up').classList.remove('visible');
  }
});

/* ---------------- Проверка видимости (для анимаций) ---------------- */

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');

for (let elm of elements) {
  observer.observe(elm);
}

/* ---------------- Обработка форм ---------------- */

// Заказать бесплатный замер
$(document).ready(function () {

  // E-mail Ajax Send
  $("#order-form").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../php/mail.php",
      data: th.serialize()
    }).done(function () {
      document.querySelector('.successfully').classList.add('show');
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

// Оставить отзыв
$(document).ready(function () {

  // E-mail Ajax Send
  $("#review-form").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../php/mail.php",
      data: th.serialize()
    }).done(function () {
      document.querySelector('.successfully_review').classList.add('show');
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

// Заказать замер (скидка)
$(document).ready(function () {

  // E-mail Ajax Send
  $("#order-form-sale").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../php/mail.php",
      data: th.serialize()
    }).done(function () {
      document.querySelector('.successfully').classList.add('show');
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

/* ---------------- Модальные окна ---------------- */

// Наши работы
let projects = 7;
for (let k = 1; k <= projects; k++) {
  // Открытие модального окна
  document.getElementById("open-project-" + k).addEventListener("click", function () {
    document.getElementById("project-" + k).classList.add("open");
    document.getElementById("body").classList.add("locked");
  });

  // Закрытие модального окна
  document.getElementById("close-project-" + k).addEventListener("click", function () {
    document.getElementById("project-" + k).classList.remove("open");
    document.getElementById("body").classList.remove("locked");
  });
}

// Другие проекты
document.getElementById("open-other-projects").addEventListener("click", function () {
  document.getElementById("other-projects").classList.add("open");
  document.getElementById("body").classList.add("locked");
});

document.getElementById("close-other-projects").addEventListener("click", function () {
  document.getElementById("other-projects").classList.remove("open");
  document.getElementById("body").classList.remove("locked");
});

// Заказать замер
document.getElementById("open-order-modal").addEventListener("click", function () {
  document.getElementById("order-modal").classList.add("open");
  document.getElementById("body").classList.add("locked");
});

document.getElementById("close-order-modal").addEventListener("click", function () {
  document.getElementById("order-modal").classList.remove("open");
  document.getElementById("body").classList.remove("locked");
});

// Оставить отзыв
document.getElementById("open-review-modal").addEventListener("click", function () {
  document.getElementById("review-modal").classList.add("open");
  document.getElementById("body").classList.add("locked");
});

document.getElementById("close-review-modal").addEventListener("click", function () {
  document.getElementById("review-modal").classList.remove("open");
  document.getElementById("body").classList.remove("locked");
});

// Согласие на обработку персональных данных
for (let k = 1; k <= 4; k++) {
  // Открытие модального окна
  document.getElementById("open-personal-data-" + k).addEventListener("click", function () {
    document.getElementById("personal-data-modal").classList.add("open");
    document.getElementById("body").classList.add("locked");
  });
}

// Закрытие модального окна
document.getElementById("close-personal-data-modal").addEventListener("click", function () {
  document.getElementById("personal-data-modal").classList.remove("open");
  document.getElementById("body").classList.remove("locked");
});

/* ---------------- Слайдер партнёров ---------------- */

let offset = 0; // Смещение от левого края
let firstClick = false; // Первое нажатие на кнопку

const step = 256; // Размер шага
const maxStep = 4352; // Максимальный шаг

const sliderLine = document.querySelector('.slider_line');

// Кнопка Вперёд
document.querySelector('.slider_next').addEventListener('click', function () {
  if (!firstClick) {
    offset = 0;
    firstClick = true;
  }
  else {
    offset -= step;
    if (offset < -maxStep) {
      offset = 0;
    }
  }
  sliderLine.style.left = offset + 'px';
});

// Кнопка Назад
document.querySelector('.slider_prev').addEventListener('click', function () {
  if (!firstClick) {
    offset = 0;
    firstClick = true;
  }
  else {
    offset += step;
    if (offset > 0) {
      offset = -maxStep;
    }
  }
  sliderLine.style.left = offset + 'px';
});

/* ---------------- Год в подвале ---------------- */
const year = document.getElementById('year');
year.innerText = new Date().getFullYear();
