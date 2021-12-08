let div = document.createElement('div')
div.className = 'alert';
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение."
document.body.append(div)
// setTimeout(() => div.remove(), 1000)