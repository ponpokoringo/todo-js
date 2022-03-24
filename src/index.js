import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、入力を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //liタグの子要素に各要素を設定
  li.appendChild(p);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
