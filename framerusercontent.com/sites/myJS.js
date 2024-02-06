

//-------------電腦版loading動畫
document.addEventListener("DOMContentLoaded", function () {
  const loadingAnimation = document.getElementById("loadingAnimation");
  const mainContent = document.getElementById("main");

  loadingAnimation.classList.add("show"); // 加上顯示動畫的 CSS class

  // 延遲兩秒後隱藏動畫
  setTimeout(function () {
    loadingAnimation.classList.remove("show"); // 移除顯示動畫的 CSS class
    mainContent.style.display = "block"; // 顯示主要內容
  }, 2000);
});

//--------簡易手機板loading動畫
// document.addEventListener("DOMContentLoaded", function () {
//   const loadingAnimation = document.getElementById("loadingAnimation");
//   const mainContent = document.getElementById("jennyPhone");

//   loadingAnimation.classList.add("show"); // 加上顯示動畫的 CSS class

//   // 延遲兩秒後隱藏動畫
//   setTimeout(function () {
//     loadingAnimation.classList.remove("show"); // 移除顯示動畫的 CSS class
//     mainContent.style.display = "block"; // 顯示主要內容
//   }, 2500);
// });


// ----------------------------- 手機板展開
document.addEventListener('click', function (event) {
  // 檢查被點擊的元素是否為按鈕
  if (event.target.classList.contains('moreBtn')) {
    // 取得被點擊的按鈕元素
    var btn = event.target;

    // 取得與按鈕相關聯的折疊內容的ID
    var collapseId = btn.getAttribute('data-bs-target');

    // 取得相應的折疊內容元素
    var collapseContent = document.querySelector(collapseId);

    // 判斷按鈕是否可見
    if (btn.style.display !== 'none') {
      // 如果按鈕可見，則將其隱藏
      btn.style.display = 'none';
    }

    // 判斷折疊內容是否可見
    if (collapseContent.style.display !== 'none') {
      // 如果折疊內容可見，則將其顯示
      collapseContent.style.display = 'block';
    }
  }
});

