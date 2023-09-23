// //ボタンを一度押したらクラスを付与し、もう一度押したらクラスが解除されるようにしたい
// //ヘッダー、ボタンの要素を取得
// const header = document.getElementById('js-header');
// const button = document.getElementById('js-headerButton');

// // ボタンをクリックした時の処理用の関数を定義
// function jsHeaderButtonClick() {
//     console.log('実行できています。');
// }

// // ボタンのクリックイベントに関数を割り当て
// button.addEventListener('click', jsHeaderButtonClick);

// // クラスのトグル処理も追加
// button.addEventListener('click', () => {
//     button.classList.toggle('is-open');
//     console.log('button');
// });

$(".openbtn1").click(function () {
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

const header = document.querySelector(".header"); // ヘッダー要素を取得

//メインビジュアルの要素を取得
const mainVisual = document.getElementById("js-mainVisual")

//スクロールした時の処理
window.addEventListener("scroll", () => {
  // [スクロールした分の高さ] が [メインビジュアルの高さ - ヘッダーの高さ] より大きい時
  if (window.scrollY > mainVisual.clientHeight - header.clientHeight) {
    header.classList.remove("is-transparent");
  } else {
    header.classList.add("is-transparent");
  }
});

new Splide('#js-eventSlide',eventSlideOptions).mount();

const eventSlideOptions = {
  type: "loop",       // スライドの種類：ループ
  gap: '40px',        // スライド間の余白：40px
  width: '1096px',    // スライドショー全体の横幅：1096px
  perPage: 3,         // 一度に表示するスライドの数
  padding: { right: '28px', left: '28px' }, // 内側の余白
  responsive: [
    {
      breakpoint: 768,
      options: {
        perPage: 1
      }
    }
  ],
  pagination: false  // ページネーションはデフォルトで非表示
}

new Splide('#js-eventSlide', eventSlideOptions).mount();

// ウィンドウ幅が768px未満の場合はページネーションを有効にする
if (window.innerWidth <= 768) {
  eventSlideOptions.pagination = true;
}

new Splide('#js-eventSlide', eventSlideOptions).mount();
