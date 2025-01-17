const customName = document.getElementById('customname');//HTMLから値をとってくる ここではid = customname にマッチするドキュメント要素を取得
const randomize = document.querySelector('.randomize');//document は 組み込みのオブジェクト。ブラウザが表示しているページ。DOM とも呼ぶ。 Document Object Modelの略。
const story = document.querySelector('.story');//querySelectorはクラスでもIDでも、要素そのものでも指定可能.

function randomValueFromArray(array){//配列からランダムに一個選ぶ関数
  const random = Math.floor(Math.random()*array.length);//おそらくこの行から、引数に入ってくる配列の長さは要素数3以外でもOKだと思う
  return array[random];//選んだ要素を返す
}

//バカ話
const storyText = 'ある日、気温華氏14度で外は寒かったが、花子は:inserty:に行きたいと思った。外に出ると、外には:insertw:。:inserty:に着くと、:insertz:。花子は:insertz:ことに対して驚いたので、:insertx:と会い、話をした。:insertx:は「:inserty:ではよくあることだよ。」と話していた。花子は:insertx:が体重23ポンドということを初めて知ったので驚いた。:insertTime:になったので、花子は家に戻り、今日あった出来事を日記に書いた。';
const insertX = ['アンパンマン', 'キティ', 'おさるのジョージ'];//要素数3, 要素が文字列の配列
const insertY = ['アンパンマンミュージアム', 'サンリオピューロランド', 'ユニバーサルスタジオジャパン'];
const insertZ =['どのアトラクションも1時間以上待たなければならなかった', 'ガラガラで空いていた', '豪雨になっていた'];
const insertW = ['たくさんの人がいて驚いた',  '誰もおらず、街で1人だけ出ているような感覚となった', '親友がいたので、一緒に行くことにした'];
const insertTime = ['夜', '夕方', '閉園の時間'];

//要素randamizeというボタンがクリックされた時にresultが実行される（要素randamizeにイベント（resultという関数）を追加
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  
  //配列からランダムに一個選ぶ
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  const wItem = randomValueFromArray(insertW);
  const timeItem = randomValueFromArray(insertTime);

  //文字列置換
  //newStory.replaceは1回呼び出しただけでは全ての:insertx:を変えてくれる訳ではなかったので、:insertx:を使っている分newStory.replace(':insertx:',xItem)を書いた
  newStory = newStory.replace(':insertx:',xItem);//newStoryの中の:insertx:という文字列をxItem（23行目）で置き換える
  newStory = newStory.replace(':insertx:',xItem);//replaceは文字列型オブジェクトに使えるメソッド（関数）　文字列置換
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertw:',wItem);
  newStory = newStory.replace(':insertTime:',timeItem);
  
  //名前はユーザーが入力したものに置換.もし入力が空文字列でなかったら名前をユーザーが入力したものにする.空文字列なら何もしない（花子のまま）
  if (customName.value !== '') {//JavaScriptでは!==でJavaの!=と同じような比較を行う
    const name = customName.value;
    newStory = newStory.replace('花子', name);
    newStory = newStory.replace('花子', name);
    newStory = newStory.replace('花子', name);
    newStory = newStory.replace('花子', name);
  }

  //体重や気温を計算して置換（日本が選択されたとき）
  if (document.getElementById("jp").checked) {
    const weight = `${Math.round(23 / 2.2046)} kg`;//Math.roundは引数として与えた数を四捨五入する
    const temperature =  `摂氏${Math.round((14-32) * 5 / 9)}`;
    newStory = newStory.replace('華氏14', temperature);
    newStory = newStory.replace('23ポンド', weight);
  }
  
  //story要素のtextContentを書き換えて、見えるようにする
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
