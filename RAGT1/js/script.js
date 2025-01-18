document.addEventListener("DOMContentLoaded", function () {
    // حدد العناصر داخل قسم "clin"
    const clinItems = document.querySelector('.clin .clin-items');
  
    // تأكد من وجود العناصر لتجنب الأخطاء
    if (clinItems) {
      // تكرار العناصر لجعلها تبدو دائرية
      const items = Array.from(clinItems.children);
      items.forEach(item => {
        const clone = item.cloneNode(true);
        clinItems.appendChild(clone); // إضافة نسخة من العنصر
      });
  
      // إضافة تأثير حركة
      clinItems.style.display = 'flex';
      clinItems.style.animation = 'move-items 1s linear infinite';
    }
  });
  
  