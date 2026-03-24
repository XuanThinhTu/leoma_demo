window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');

  // Khi lăn chuột cuộn trang xuống
  if (window.scrollY > 50) {
    // Đổi màu nền sang Trắng Sứ hơi trong suốt để đồng bộ tuyệt đối với nền body mới
    header.style.background = 'rgba(248, 249, 250, 0.95)';

    // Hiệu ứng kính mờ cho sang
    header.style.backdropFilter = 'blur(15px)';

    // Thêm tí bóng đổ màu xanh thương hiệu cực nhạt để tách biệt header với nội dung bên dưới
    header.style.boxShadow = '0 5px 20px rgba(24, 70, 148, 0.05)';
    header.style.borderBottom = 'none';
  } else {
    // Khi cuộn lên sát mép trên cùng (Nằm ở phần Hero nền xanh)
    header.style.background = 'transparent';
    header.style.backdropFilter = 'none';
    header.style.boxShadow = 'none';
    header.style.borderBottom = 'none';
  }
});
