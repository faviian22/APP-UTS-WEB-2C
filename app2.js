function calculateTotal() {
    let totalPrice = 0; // Ganti nilai awal dari 30000 menjadi 0
    }

const items = [
    { title: 'Cappucino', price: 20000, id: 'option-1' },
    { title: 'Green Tea Latte', price: 15000, id: 'option-2' },
    { title: 'Fish and Chips', price: 24000, id: 'option-3' },
    { title: 'Tuna Sandwich', price: 40000, id: 'option-4' },
    { title: 'Mineral Water', price: 4000, id: 'option-5' },

  ];
  
  const formElements = document.querySelectorAll('input[type="checkbox"]');
  const total = document.querySelector('.total-container .amount');
  
  items.forEach((item) => {
    const checkbox = document.getElementById(item.id);
  
    if (item.isSelected) checkbox.checked = true;
  
    checkbox.addEventListener('change', () => {
      calculateTotal();
    });
  
    let label = document.querySelector(`label[for="${item.id}"]`);
  
    const price = document.createElement('div');
    price.className = 'price';
    price.innerHTML = `<div class="price">Rp ${item.price}</div>`;
  
    label.parentElement.appendChild(price);
  });
  
  function calculateTotal() {
    let totalPrice = 0;
  
    formElements.forEach((checkbox) => {
      if (checkbox.checked) {
        const currentItem = items.find((item) => checkbox.value === item.title);
        totalPrice += currentItem.price;
      }
    });
  
    total.innerHTML = `Rp ${totalPrice.toLocaleString('id-ID')}`;
  }
  
  calculateTotal();
  // Menghapus fungsi pada baris pertama
// const items = [
//   { title: 'Cappucino', price: 20000, id: 'option-1', isSelected: false },
//   { title: 'Green Tea Latte', price: 15000, id: 'option-2', isSelected: false },
//   { title: 'Fish and Chips', price: 24000, id: 'option-3', isSelected: false },
//   { title: 'Tuna Sandwich', price: 40000, id: 'option-4', isSelected: false },
//   { title: 'Mineral Water', price: 4000, id: 'option-5', isSelected: false },
//   { title: 'French Fries', price: 30000, id: 'option-6', isSelected: true },
// ];

// Menambahkan fungsi untuk mengembalikan ke halaman order ulang
function changePage(page) {
    window.location.href = 'order.html';
  }
  
  // Sisanya sama
  // ...