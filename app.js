document.querySelector('input').addEventListener('input', function(e) {
    let value = e.target.value / 100;
    document.querySelector('.dollars').textContent = value.toFixed(2);
  });