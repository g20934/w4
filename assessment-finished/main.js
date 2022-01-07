const customName = document.getElementById('customname');//HTMLから値をとってくる
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){//配列からランダムに一個選ぶ関数
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//バカ話
const storyText = 'その日は、とても暑かった。 so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']; //要素数3, 要素が文字列の配列
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//要素randamizeというボタンがクリックされた時にresultが実行される（要素randamizeにイベント（resultという関数）を追加
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  
  //配列からランダムに一個選ぶ
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  //文字列置換
  newStory = newStory.replace(':insertx:',xItem);//newStoryの中の:insertx:という文字列をxItem（23行目）で置き換える
  newStory = newStory.replace(':insertx:',xItem);//replaceは文字列型オブジェクトに使えるメソッド（関数）　文字列置換
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  
  //名前はユーザーが入力したものに置換(もし入力が空文字列だったら名前を花子にする）
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  //体重や気温を計算して置換
  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }
  
  //story要素のtextContentを書き換える
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
