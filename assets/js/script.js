//ボタンを一度押したらクラスを付与し、もう一度押したらクラスが解除されるようにしたい
//ヘッダー、ボタンの要素を取得
const header = document.getElementById('js-header');
const button = document.getElementById('js-headerButton');

// ボタンをクリックした時の処理用の関数を定義
function jsHeaderButtonClick() {
    console.log('実行できています。');
}

// ボタンのクリックイベントに関数を割り当て
button.addEventListener('click', jsHeaderButtonClick);

// クラスのトグル処理も追加
button.addEventListener('click', () => {
    button.classList.toggle('is-open');
    console.log('button');
});

