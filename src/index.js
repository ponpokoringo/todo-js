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

  //buttonタグ（完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（li）を未完了リストから削除
    deleteFormIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //li以下を初期化
    addTarget.textContent = null;

    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    //button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //liタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //buttonタグ（削除）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFormIncompleteList(deleteButton.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除

const deleteFormIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
