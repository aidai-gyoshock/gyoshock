'use strict'

const QandA=[
  {
      "1": "アラ",
      "2": "ヤダ",
      "3": "モウ",
      "num": "1",
      "size": "big",
      "question": "クエは地方によって呼び名が違いますが、九州地方での呼び名は何というでしょう？",
      "answer": "1",
      "primeInCorrect": "180000",
      "primeCorrect": "200000"
  },
  {
      "1": "目の色",
      "2": "性別",
      "3": "身の脂",
      "num": "2",
      "size": "big",
      "question": "日本ではカツオは初鰹・戻り鰹と名前を変えて 1 年に2 度、季節の風物詩として楽しまれているが、初鰹と戻り鰹の特徴的な違いはなに?",
      "answer": "3",
      "primeInCorrect": "23000",
      "primeCorrect": "26000"
  },
  {
      "1": "回遊魚だから",
      "2": "出世魚だから",
      "3": "きれいだから",
      "num": "3",
      "size": "big",
      "question": "ブリはタイなどと同じくおめでたい魚といわれ、地域によってお正月のときに食べられることもあるが、それはなぜ？",
      "answer": "2",
      "primeInCorrect": "20000",
      "primeCorrect": "25000"
  },
  {
      "1": "ヒメスマ",
      "2": "アイマス",
      "3": "オウジマス",
      "num": "4",
      "size": "mid",
      "question": "スマは愛南町で養殖されていますが、そのスマは何と呼ばれているでしょうか？",
      "answer": "1",
      "primeInCorrect": "6000",
      "primeCorrect": "8000"
  },
  {
      "1": "胃の数",
      "2": "色",
      "3": "歯の色",
      "num": "5",
      "size": "mid",
      "question": "天然でとれたタイと養殖で育ったタイの違いはなに？",
      "answer": "2",
      "primeInCorrect": "6500",
      "primeCorrect": "8000"
  },
  {
      "1": "口の大きさ",
      "2": "住む場所",
      "3": "大きさ",
      "num": "6",
      "size": "mid",
      "question": "「左ヒラメと右カレイ」と言われるように、目の位置でヒラメとカレイの区別はできるが、他にも区別できる特徴がある。それはなに？",
      "answer": "1",
      "primeInCorrect": "6000",
      "primeCorrect": "7000"
  },
  {
      "1": "心臓",
      "2": "卵巣",
      "3": "腎臓",
      "num": "7",
      "size": "small",
      "question": "人間とアジで数が同じである臓器はどれ？",
      "answer": "1",
      "primeInCorrect": "230",
      "primeCorrect": "230",
      "versusBIg": "230000",
      "quantityCorrect": "1000"
  },
  {
      "1": "酒",
      "2": "弱",
      "3": "強",
      "num": "8",
      "size": "small",
      "question": "イワシを漢字で書く時のつくりには何の漢字が入る？",
      "answer": "2",
      "primeInCorrect": "150",
      "primeCorrect": "150",
      "versusBIg": "300000",
      "quantityCorrect": "2000"
  },
  {
      "1": "お茶",
      "2": "ラテ",
      "3": "ミズ",
      "num": "9",
      "size": "small",
      "question": "ヤマトカマスの別名で「○○カマス」と呼ばれることがありますが、〇〇に入る言葉は何でしょう？",
      "answer": "3",
      "primeInCorrect": "150",
      "primeCorrect": "150",
      "versusBIg": "300000",
      "quantityCorrect": "2000"
  },
  {
      "1": "節分",
      "2": "クリスマス",
      "3": "新年",
      "num": "10",
      "size": "none",
      "question": "イセエビの季語はどれ？",
      "answer": "3",
      "primeInCorrect": "10000",
      "primeCorrect": "15000"
  },
  {
      "1": "behind（ビハインド）",
      "2": "before（ビフォア）",
      "3": "after（アフター）",
      "num": "11",
      "size": "",
      "question": "SDGsで誓われている言葉の（？）に入る文字はどれ？leave no one（？）：リーブ ノー ワン（？）",
      "answer": "1",
      "primeInCorrect": "2000",
      "secondTime": "5000",
      "operationsSecondTIme": "+"
  },
  {
      "1": "地引網",
      "2": "定置網",
      "3": "底引き網",
      "num": "12",
      "size": "",
      "question": "トロール漁業で使うものはなに？",
      "answer": "3",
      "quantityCorrect": "10",
      "secondTime": "1",
      "operationsSecondTIme": "-"
  },
  {
      "1": "卵",
      "2": "成魚",
      "3": "稚魚",
      "num": "13",
      "size": "",
      "question": "養殖漁業はどこまで人の手で魚を育てるでしょう？",
      "answer": "2",
      "quantityCorrect": "2"
  },
  {
      "1": "食物繊維",
      "2": "ビタミン",
      "3": "ソーダ",
      "num": "14",
      "size": "",
      "question": "じゃこ天には栄養が豊富に含まれています。五大栄養素は炭水化物、脂質、ミネラル、タンパク質とあと一つはなんでしょう？",
      "answer": "2",
      "primeInCorrect": "10000",
      "restriction": "7",
      "restriction2": "8",
      "restriction3": "9"
  },
  {
      "1": "一度にたくさん獲れること",
      "2": "ある期間内にたくさんとれること",
      "3": "船長の好きな魚がたくさんとれること",
      "num": "15",
      "size": "",
      "question": "豊漁の意味は何？",
      "answer": "2",
      "quantityCorrect": "5",
      "restriction": "7",
      "restriction2": "8",
      "restriction3": "9",
      "restriction4": "4"
  },
  {
      "1": "酒と塩",
      "2": "砂糖と水",
      "3": "はちみつと水あめ",
      "num": "16",
      "size": "",
      "question": "青魚を焼くとき、青魚は臭みが強いため、その臭みをとるために何をかけて焼くでしょうか？",
      "answer": "1",
      "primeInCorrect": "4000",
      "restriction": "1",
      "restriction2": "5",
      "restriction3": "6"
  },
  {
      "1": "小麦粉",
      "2": "片栗粉",
      "3": "ベーキングパウダー",
      "num": "17",
      "size": "",
      "question": "白身魚のムニエルは香ばしく、ほろほろとして食感が楽しめるおいしい料理だが、ムニエルとは何をつけてバターで焼いたものでしょうか？",
      "answer": "1",
      "primeInCorrect": "5000",
      "restriction": "2",
      "restriction2": "3",
      "restriction3": "4",
      "restriction4": "7",
      "restriction5": "8"
  },
  {
      "1": "ミドリムシ",
      "2": "ミトコンドリア",
      "3": "ヘモグロビン",
      "num": "18",
      "size": "",
      "question": "魚の味や食感などは、魚に含まれるミオグロビンともう一つは何によって決まるのでしょうか？",
      "answer": "3",
      "primeInCorrect": "3000",
      "restriction": "5",
      "restriction2": "7"
  },
  {
      "1": "手料理",
      "2": "中華料理",
      "3": "郷土料理",
      "num": "19",
      "size": "",
      "question": "さつま飯のような地域に根付いた産物を使い、独自の調理法で作られたものを何料理というでしょうか？",
      "answer": "3",
      "primeInCorrect": "6000"
  },
  {
      "1": "タイ",
      "2": "テントウムシ",
      "3": "プランクトン",
      "num": "20",
      "size": "",
      "question": "海中でとある生物が異常に繫殖して発生する赤潮ですが、その生物とは何？",
      "answer": "3",
      "quantityCorrect": "0"
  }
]

// 変数宣言
const cardWidth=Number(getComputedStyle(document.documentElement).getPropertyValue('--cardWidth').slice( 0, -2 ))
const cardHeight=Number(getComputedStyle(document.documentElement).getPropertyValue('--cardHeight').slice( 0, -2 ))
const cardColumnsOnMainField=Number(getComputedStyle(document.documentElement).getPropertyValue('--cardColumnsOnMainField'))
const cardRowOnMainField=Number(getComputedStyle(document.documentElement).getPropertyValue('--cardRowOnMainField'))
const gapBetweenCard=Number(getComputedStyle(document.documentElement).getPropertyValue('--gapBetweenCard').slice( 0, -2 ))
const fieldWidth=(cardWidth*cardColumnsOnMainField)+(gapBetweenCard*(cardColumnsOnMainField-1))
const fieldHeight=(cardHeight*cardRowOnMainField)+(gapBetweenCard*(cardRowOnMainField-1))
const expansionMagnification=Number(getComputedStyle(document.documentElement).getPropertyValue('--expansionMagnification'))


const cardNum=10
let myFish=setFishPathArray()
let mySpecial=setSpecialPathArray()
let enemyFish=randomSelect(myFish,5) //myFishを5枚ずつ分割
let enemySpecial=randomSelect(mySpecial,5)
let myField=document.getElementById('myField')
let myFishDOM=document.getElementsByClassName('myFish');
let mySpecialDOM=document.getElementsByClassName('mySpecial');
setMyInitialPosition()
let enemyFishDOM=document.getElementsByClassName('enemyFish');
let enemySpecialDOM=document.getElementsByClassName('enemySpecial');
const backSideCardDOM=document.getElementsByClassName('backSide');
setEnemyInitialFishPosition()
setEnemyInitialSpecialPosition()

const isDebug=false
//trueなら相手のカードを見れる
if(isDebug===true){
  for(let i=0;i<backSideCardDOM.length;i++){
    backSideCardDOM[i].classList.add('displayNone')
  }
}

let zIndex=0

const answerButtonDOM=document.getElementsByClassName('answerButton')
const myFishAnswerDOM=document.getElementById('myFishAnswer')
const mySpecialAnswerDOM=document.getElementById('mySpecialAnswer')
const mySpecialAnswerDOM2=document.getElementById('mySpecialAnswer2')
const enemyFishAnswerDOM=document.getElementById('enemyFishAnswer')
const enemySpecialAnswerDOM=document.getElementById('enemySpecialAnswer')
const enemySpecialAnswerDOM2=document.getElementById('enemySpecialAnswer2')
const myPrimeDOM=document.getElementById('myPrime')
const enemyPrimeDOM=document.getElementById('enemyPrime')
const myPrime2DOM=document.getElementById('myPrime2')
const enemyPrime2DOM=document.getElementById('enemyPrime2')
const myWin1DOM=document.getElementById('myWin1')
const myWin2DOM=document.getElementById('myWin2')
const myWin3DOM=document.getElementById('myWin3')
const enemyWin1DOM=document.getElementById('enemyWin1')
const enemyWin2DOM=document.getElementById('enemyWin2')
const enemyWin3DOM=document.getElementById('enemyWin3')

let myWin=0
let enemyWin=0
let draw=0

const continueButtonDOM=document.getElementById('continueButton')
continueButtonRarefaction()

const CorrectAnswerRate=4 //正解率＝1-1/(CorrectAnswerRate+1)

let mySDGsFlag=1
let myTrawlFlag=1
let enemySDGsFlag=1
let enemyTrawlFlag=1

let previousMyCalcPrime
let previousEnemyCalcPrime

let countEnemyFishTurn=4
let countEnemySpecialTurn=9

const sleepTime=2000
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const bgm = new Audio('../music/battle-bgm.mp3')
bgm.play()
bgm.loop = true
const correct=new Audio('../music/correct.mp3')
const incorrect=new Audio('../music/incorrect.mp3')

// flagによりゲームを進行させる。順番は以下の通り。
// marketStep-myChoose > marketStep-enemyChoose > marketStep-myAnswer > marketStep-enemyAnswer
// >valueStep-myChoose > valueStep-enemyChoose > valueStep-myAnswer > valueStep-enemyAnswer > battle
let flag=`marketStep-myChoose`
console.log(`${flag}`)
myPrime2DOM.innerHTML+=`あなたのターン`
textBoxBorder('my')

marketStepMyChoose()

function marketStepMyChoose(){
  fishDrag()
  clickAndExpansion()
}

async function marketStepEnemyChoose(){
  enemyPrime2DOM.innerHTML=`相手のターン`
  myPrime2DOM.innerHTML=``
  textBoxBorder('enemy')

  await sleep(sleepTime)

  resetContinueButtonRarefaction()
  if (flag===`marketStep-enemyChoose`){
    let enemyChooseCard=randomSelect(enemyFish,1)
    for (let i=0;i<enemyFishDOM.length;i++){
      if (enemyFishDOM[i].src.match(enemyChooseCard)!==null){
        enemyFishDOM[i].id='enemyChooseFish'
      }
    }
    const enemyChooseFishCardDOM=document.getElementById('enemyChooseFish')
    enemyChooseFishCardDOM.style.left=`${(cardWidth+gapBetweenCard)*4}px`
    enemyField.appendChild(enemyChooseFishCardDOM)
    resetEnemyFishPosition(enemyChooseFishCardDOM)
    if(enemySDGsFlag===2){
      NumberToLocaleString((Number(QandA[getCardNumber(enemyChooseFishCardDOM)-11]['primeInCorrect'])+5000).toLocaleString(),enemyPrimeDOM)
      previousEnemyCalcPrime=removeComma(enemyPrimeDOM.textContent.slice(0,-1))
    }
    else if(enemyTrawlFlag===2){
      NumberToLocaleString((Number(QandA[getCardNumber(enemyChooseFishCardDOM)-11]['primeInCorrect'])).toLocaleString(),enemyPrimeDOM)
      previousEnemyCalcPrime=removeComma(enemyPrimeDOM.textContent.slice(0,-1))
      NumberToLocaleString(0,enemyPrimeDOM)
    }
    else{
      NumberToLocaleString(Number(QandA[getCardNumber(enemyChooseFishCardDOM)-11]['primeInCorrect']).toLocaleString(),enemyPrimeDOM)
      previousEnemyCalcPrime=removeComma(enemyPrimeDOM.textContent.slice(0,-1))
    }

    myPrime2DOM.innerHTML=`⬆クイズ⬆`
    enemyPrime2DOM.innerHTML=``
    textBoxBorder('my')
    continueButtonDOM.onclick=function(){
      flag=`marketStep-myAnswer`
      console.log(`${flag}`)
      marketStepMyAnswer()
      continueButtonRarefaction()
    }
  }

  backSideCardDOM[countEnemyFishTurn].classList.add('displayNone')
  countEnemyFishTurn-=1
}

function marketStepMyAnswer(){
  myPrime2DOM.innerHTML=`解答中`
  if (`${flag}`===`marketStep-myAnswer`){
    displayAnswerButton()
    const myChooseFishCardDOM=document.getElementById('myChooseFish')
    expansion(myChooseFishCardDOM)
    setCenter(myChooseFishCardDOM)
    myChooseFishCardDOM.style.top=`-1px`
  }
}
async function marketStepEnemyAnswer(){
  enemyPrime2DOM.innerHTML='解答中'
  textBoxBorder('enemy')
  await sleep(sleepTime)
  const myChooseFishCardDOM=document.getElementById('myChooseFish')
  const enemyChooseFishCardDOM=document.getElementById('enemyChooseFish')
  const probability = Math.floor(Math.random() * CorrectAnswerRate);
  if (probability!==0){
    // クイズが正解の場合
    enemyPrime2DOM.innerHTML='正解！'
    correct.play()
    setAnswerCard(enemyFishAnswerDOM,`enemy`)
    calcFishPrime(myChooseFishCardDOM,enemyChooseFishCardDOM)
    if(enemyTrawlFlag!==2){
      previousEnemyCalcPrime=removeComma(enemyPrimeDOM.textContent.slice(0,-1))
    }
  }
  else{
    enemyPrime2DOM.innerHTML='不正解...'
    incorrect.play()
  }
  //-------------デバッグ用（必ず正解）----------------
  // setAnswerCard(enemyFishAnswerDOM,`enemy`)
  // calcFishPrime(myChooseFishCardDOM,enemyChooseFishCardDOM)
  flag=`valueStep-myChoose`
  console.log(`${flag}`)
  valueStepMyChoose()
}

function valueStepMyChoose(){
  myPrime2DOM.innerHTML='あなたのターン'
  textBoxBorder('my')
  removeEventsNone()
  clickAndExpansion()
  specialDrag()
}

async function valueStepEnemyChoose(){
  enemyPrime2DOM.innerHTML='相手のターン'
  myPrime2DOM.innerHTML=''
  textBoxBorder('enemy')
  await sleep(sleepTime)
  for (let i=0;i<enemySpecial.length;i++){
    for (let j=0;j<enemySpecialDOM.length;j++){
      if (enemySpecialDOM[j].src.match(enemySpecial[i])!==null){
        if(enemySDGsFlag===2 || enemyTrawlFlag===2){
          enemySpecialDOM[j].id='enemyChooseSpecial2'
        }
        else{
          enemySpecialDOM[j].id='enemyChooseSpecial'
        }
      }
    }
    if(enemySDGsFlag===2 || enemyTrawlFlag===2){
      const enemyChooseSpecialCardDOM2=document.getElementById('enemyChooseSpecial2')
      tempValueStepEnemyChoose(enemyChooseSpecialCardDOM2)
    }
    else{
      const enemyChooseSpecialCardDOM=document.getElementById('enemyChooseSpecial')
      tempValueStepEnemyChoose(enemyChooseSpecialCardDOM)
    }
    break
  }
  function tempValueStepEnemyChoose(DOM){
    if(enemySDGsFlag===2 || enemyTrawlFlag===2){
      DOM.style.left=`${(cardWidth+gapBetweenCard)*6+cardHeight-cardWidth}px`
    }
    else{
      DOM.style.left=`${(cardWidth+gapBetweenCard)*5}px`
    }
    enemyField.appendChild(DOM)
    resetEnemySpecialPosition(DOM)
    nextStep()
  }

  enemyPrime2DOM.innerHTML=''
  myPrime2DOM.innerHTML='⬆クイズ⬆'
  textBoxBorder('my')
  function nextStep() {
    resetContinueButtonRarefaction()
    continueButtonDOM.onclick = function () {
      continueButtonRarefaction()
      flag = `valueStep-myAnswer`
      console.log(`${flag}`)
      valueStepMyAnswer()
    }
  }

  backSideCardDOM[countEnemySpecialTurn].classList.add('displayNone')
  countEnemySpecialTurn-=1
}

function valueStepMyAnswer(){
  if (flag===`valueStep-myAnswer`){
    displayAnswerButton()
    if(mySDGsFlag===2 || myTrawlFlag===2){
      const myChooseSpecialCardDOM2=document.getElementById('myChooseSpecial2')
      expansion(myChooseSpecialCardDOM2)
      setCenter(myChooseSpecialCardDOM2)
      myChooseSpecialCardDOM2.style.top=`-1px`
    }
    else{
      const myChooseSpecialCardDOM=document.getElementById('myChooseSpecial')
      expansion(myChooseSpecialCardDOM)
      setCenter(myChooseSpecialCardDOM)
      myChooseSpecialCardDOM.style.top=`-1px`
    }
  }
}

async function valueStepEnemyAnswer(){
  textBoxBorder('enemy')
  enemyPrime2DOM.innerHTML='解答中'
  await sleep(sleepTime)
  const probability = Math.floor(Math.random() * CorrectAnswerRate);
  const enemyChooseSpecialCardDOM=document.getElementById('enemyChooseSpecial')
  if (probability!==0){
    enemyPrime2DOM.innerHTML='正解！'
    correct.play()
    if(enemySDGsFlag===2 || enemyTrawlFlag===2){
      setAnswerCard(enemySpecialAnswerDOM2,`enemy`)
    }
    else{
      setAnswerCard(enemySpecialAnswerDOM,`enemy`)
    }
    calcEnemySpecialPrime()
    if(enemySDGsFlag===2){
      enemySDGsFlag=3
    }
    if(enemyTrawlFlag===2){
      enemyTrawlFlag=3
    }
    if(enemySDGsFlag===3 || enemyTrawlFlag===3){
      const enemyChooseSpecialCardDOM2=document.getElementById('enemyChooseSpecial2')
      if(getCardNumber(enemyChooseSpecialCardDOM2)===11 && enemySDGsFlag===1){
        enemySDGsFlag=2
      }
      else if(getCardNumber(enemyChooseSpecialCardDOM2)===12 && enemyTrawlFlag===1){
        enemyTrawlFlag=2
      }
    }
    else{
      if(getCardNumber(enemyChooseSpecialCardDOM)===11 && enemySDGsFlag===1){
        enemySDGsFlag=2
      }
      else if(getCardNumber(enemyChooseSpecialCardDOM)===12 && enemyTrawlFlag===1){
        enemyTrawlFlag=2
      }
    }
  }
  else{
    enemyPrime2DOM.innerHTML='不正解...'
    incorrect.play()
    if(enemySDGsFlag===2){
      enemySDGsFlag=3
    }
    if(enemyTrawlFlag===2){
      enemyTrawlFlag=3
    }
  }
  
  textBoxBorder('')
  continueButtonDOM.textContent='勝負！'
  resetContinueButtonRarefaction()
  continueButtonDOM.onclick=function(){
    flag=`battle`
    console.log(`${flag}`)
    battle()
  }
}

function battle(){
  textBoxBorder('')
  continueButtonDOM.textContent='次の勝負へ'
  const finalMyPrime=removeComma(myPrimeDOM.textContent.slice(0,-1))
  const finalEnemyPrime=removeComma(enemyPrimeDOM.textContent.slice(0,-1))
  if(finalMyPrime>finalEnemyPrime){
    myPrime2DOM.innerHTML=`勝ち！`
    enemyPrime2DOM.innerHTML=`負け…`
    myWin+=1
    console.log(`myWin=${myWin}`)
    if(myWin===1){
      myWin1DOM.style.visibility=`visible`
    }
    else if(myWin===2){
      myWin2DOM.style.visibility=`visible`
    }
    else if(myWin===3){
      myWin3DOM.style.visibility=`visible`
    }
  }
  else if(finalMyPrime===finalEnemyPrime){
    myPrime2DOM.innerHTML=`引き分け`
    enemyPrime2DOM.innerHTML=`引き分け`
    draw+=1
  }
  else{
    myPrime2DOM.innerHTML=`負け…`
    enemyPrime2DOM.innerHTML=`勝ち！`
    enemyWin+=1
    console.log(`enemyWin=${enemyWin}`)
    if(enemyWin===1){
      enemyWin1DOM.style.visibility=`visible`
    }
    else if(enemyWin===2){
      enemyWin2DOM.style.visibility=`visible`
    }
    else if(enemyWin===3){
      enemyWin3DOM.style.visibility=`visible`
    }
  }
  if(myWin===3 || enemyWin===3){
    continueButtonDOM.textContent='結果'
    continueButtonDOM.onclick=function(){
      displayResult()
    }
  }
  else if(myWin===2 && enemyWin===2 && draw===1){
    continueButtonDOM.textContent='結果'
    continueButtonDOM.onclick=function(){
      displayResult()
    }
  }
  else{
    continueButtonDOM.onclick=function(){
      continueButtonRarefaction()
      continueButtonDOM.textContent='クイズに答える'
      myPrimeDOM.innerHTML=`0円`
      myPrime2DOM.innerHTML=`あなたのターン`
      enemyPrimeDOM.innerHTML=`0円`
      enemyPrime2DOM.innerHTML=''
      initialize()
    }
  }
  // console.log(`isInvalidRedTied=${isInvalidRedTied}`);
  if(isInvalidRedTied===true){
    isInvalidRedTied=false
  }
}

function textBoxBorder(myOrEnemy){
  const borderPx=3
  if(myOrEnemy==='my'){
    myPrimeDOM.style.border=`${borderPx}px solid`
    myPrime2DOM.style.border=`${borderPx}px solid`
    myPrime2DOM.style.animation=`blink 1s ease-in-out infinite alternate`
    enemyPrimeDOM.style.border=''
    enemyPrime2DOM.style.border=''
    enemyPrime2DOM.style.animation=``
  }
  else if(myOrEnemy==='enemy'){
    myPrimeDOM.style.border=''
    myPrime2DOM.style.border=''
    myPrime2DOM.style.animation=``
    enemyPrimeDOM.style.border=`${borderPx}px solid`
    enemyPrime2DOM.style.border=`${borderPx}px solid`
    enemyPrime2DOM.style.animation=`blink 1s ease-in-out infinite alternate`
  }
  else{
    myPrimeDOM.style.border=''
    myPrime2DOM.style.border=''
    myPrime2DOM.style.animation=``
    enemyPrimeDOM.style.border=''
    enemyPrime2DOM.style.border=''
    enemyPrime2DOM.style.animation=``
  }
}

function displayResult(){
  const wrapperDOM=document.getElementById('wrapper')
  const resultText=document.getElementById('resultText')
  const restartButtonDOM=document.getElementById('restartButton')
  wrapperDOM.classList.add('displayNone')
  if(myWin>enemyWin){
    resultText.textContent=`${myWin}勝${enemyWin}敗であなたの勝ち！`
  }
  else if(myWin===enemyWin){
    resultText.textContent=`${myWin}勝${enemyWin}敗で引き分け`
  }
  else{
    resultText.textContent=`${myWin}勝${enemyWin}敗であなたの負け...`
  }
  restartButtonDOM.classList.remove('displayNone')
}

function initialize(){
  // console.log(`mySDGsFlag=${mySDGsFlag}`)
  // console.log(`myTrawlFlag=${myTrawlFlag}`)
  // console.log(`enemySDGsFlag=${enemySDGsFlag}`)
  // console.log(`enemyTrawlFlag=${enemyTrawlFlag}`)
  const myChooseFishCardDOM=document.getElementById('myChooseFish')
  const enemyChooseFishCardDOM=document.getElementById('enemyChooseFish')
  const myChooseSpecialCardDOM=document.getElementById('myChooseSpecial')
  const enemyChooseSpecialCardDOM=document.getElementById('enemyChooseSpecial')
  myChooseFishCardDOM.classList.add('displayNone')
  enemyChooseFishCardDOM.classList.add('displayNone')
  if(mySDGsFlag!==2 && myTrawlFlag!==2){
    myChooseSpecialCardDOM.classList.add('displayNone')
    myChooseSpecialCardDOM.id=''
    mySpecialAnswerDOM.classList.add('displayNone')
  }
  if(mySDGsFlag===3){
    myChooseSpecialCardDOM.classList.add('displayNone')
    myChooseSpecialCardDOM.id=''
    const myChooseSpecialCardDOM2=document.getElementById('myChooseSpecial2')
    if(myTrawlFlag===2){
      myChooseSpecialCardDOM2.style.left=`${(cardWidth+gapBetweenCard)*5}px`
      myChooseSpecialCardDOM2.id='myChooseSpecial'
      mySpecialAnswerDOM2.classList.add('displayNone')
      const myChooseSpecialCardDOM=document.getElementById('myChooseSpecial')
      const cardNumber=getCardNumber(myChooseSpecialCardDOM)
      zIndex+=1
      mySpecialAnswerDOM.style.zIndex=zIndex
      mySpecialAnswerDOM.src=`png/special/specialAnswer_${cardNumber}.png`
      mySpecialAnswerDOM.style.left=`${(cardWidth+gapBetweenCard)*5+cardHeight-cardWidth}px`
    }
    else{
      myChooseSpecialCardDOM2.classList.add('displayNone')
      myChooseSpecialCardDOM2.id=''
      mySpecialAnswerDOM2.classList.add('displayNone')
    }
    mySDGsFlag=4
  }
  if(myTrawlFlag===3){
    myChooseSpecialCardDOM.classList.add('displayNone')
    myChooseSpecialCardDOM.id=''
    const myChooseSpecialCardDOM2=document.getElementById('myChooseSpecial2')
    if(mySDGsFlag===2){
      myChooseSpecialCardDOM2.style.left=`${(cardWidth+gapBetweenCard)*5}px`
      myChooseSpecialCardDOM2.id='myChooseSpecial'
      mySpecialAnswerDOM2.classList.add('displayNone')
      const myChooseSpecialCardDOM=document.getElementById('myChooseSpecial')
      const cardNumber=getCardNumber(myChooseSpecialCardDOM)
      zIndex+=1
      mySpecialAnswerDOM.style.zIndex=zIndex
      mySpecialAnswerDOM.src=`png/special/specialAnswer_${cardNumber}.png`
      mySpecialAnswerDOM.style.left=`${(cardWidth+gapBetweenCard)*5+cardHeight-cardWidth}px`
    }
    else{
      myChooseSpecialCardDOM2.classList.add('displayNone')
      myChooseSpecialCardDOM2.id=''
      mySpecialAnswerDOM2.classList.add('displayNone')
    }
    myTrawlFlag=4
  }
  if(enemySDGsFlag!==2 && enemyTrawlFlag!==2){
    enemyChooseSpecialCardDOM.classList.add('displayNone')
    enemyChooseSpecialCardDOM.id=''
    enemySpecialAnswerDOM.classList.add('displayNone')
  }
  if(enemySDGsFlag===3){
    enemyChooseSpecialCardDOM.classList.add('displayNone')
    enemyChooseSpecialCardDOM.id=''
    const enemyChooseSpecialCardDOM2=document.getElementById('enemyChooseSpecial2')
    if(enemyTrawlFlag===2){
      enemyChooseSpecialCardDOM2.style.left=`${(cardWidth+gapBetweenCard)*5}px`
      enemyChooseSpecialCardDOM2.id='enemyChooseSpecial'
      enemySpecialAnswerDOM2.classList.add('displayNone')
      const enemyChooseSpecialCardDOM=document.getElementById('enemyChooseSpecial')
      const cardNumber=getCardNumber(enemyChooseSpecialCardDOM)
      zIndex+=1
      enemySpecialAnswerDOM.style.zIndex=zIndex
      enemySpecialAnswerDOM.src=`png/special/specialAnswer_${cardNumber}.png`
      enemySpecialAnswerDOM.style.left=`${(cardWidth+gapBetweenCard)*5+cardHeight-cardWidth}px`
    }
    else{
      enemyChooseSpecialCardDOM2.classList.add('displayNone')
      enemyChooseSpecialCardDOM2.id=''
      enemySpecialAnswerDOM2.classList.add('displayNone')
    }
    enemySDGsFlag=4
  }
  if(enemyTrawlFlag===3){
    enemyChooseSpecialCardDOM.classList.add('displayNone')
    enemyChooseSpecialCardDOM.id=''
    const enemyChooseSpecialCardDOM2=document.getElementById('enemyChooseSpecial2')
    if(enemySDGsFlag===2){
      enemyChooseSpecialCardDOM2.style.left=`${(cardWidth+gapBetweenCard)*5}px`
      enemyChooseSpecialCardDOM2.id='enemyChooseSpecial'
      enemySpecialAnswerDOM2.classList.add('displayNone')
      const enemyChooseSpecialCardDOM=document.getElementById('enemyChooseSpecial')
      const cardNumber=getCardNumber(enemyChooseSpecialCardDOM)
      zIndex+=1
      enemySpecialAnswerDOM.style.zIndex=zIndex
      enemySpecialAnswerDOM.src=`png/special/specialAnswer_${cardNumber}.png`
      enemySpecialAnswerDOM.style.left=`${(cardWidth+gapBetweenCard)*5+cardHeight-cardWidth}px`
    }
    else{
      enemyChooseSpecialCardDOM2.classList.add('displayNone')
      enemyChooseSpecialCardDOM2.id=''
      enemySpecialAnswerDOM2.classList.add('displayNone')
    }
    enemyTrawlFlag=4
  }
  myFishAnswerDOM.classList.add('displayNone')
  enemyFishAnswerDOM.classList.add('displayNone')
  myChooseFishCardDOM.id=''
  enemyChooseFishCardDOM.id=''
  flag='marketStep-myChoose'
  console.log(flag)
  removeEventsNone()
  marketStepMyChoose()
  clickAndExpansion()
  textBoxBorder('my')
}

function randomSelect(array, num){
    const newArray = [];
    while(newArray.length < num && array.length > 0){
      const rand = Math.floor(Math.random() * array.length);
      newArray.push(array[rand]);
      array.splice(rand, 1);
    }
    return newArray;
}

function setFishPathArray(){
  const Array=[]
  for (let i=11;i<=cardNum+10;i++){
      Array.push(`png/fish/fish_${i}.png`)
  }
  return Array;
}
function setSpecialPathArray(){
  const Array=[]
  for (let i=11;i<=cardNum+10;i++){
      Array.push(`png/special/special_${i}.png`)
  }
  return Array;
}

function setMyInitialPosition(){
  for (let i=0;i<myFishDOM.length;i++){
    myFishDOM[i].src=myFish[i]
    myFishDOM[i].style.left=`${(cardWidth+gapBetweenCard)*(4-i)}px`//内側から並べる
    myFishDOM[i].style.top=`${fieldHeight-cardHeight}px`
  }
  for (let i=0;i<mySpecialDOM.length;i++){
    mySpecialDOM[i].src=mySpecial[i]
    mySpecialDOM[i].style.left=`${(cardWidth+gapBetweenCard)*(5+i)}px`//内側から並べる
    mySpecialDOM[i].style.top=`${fieldHeight-cardHeight}px`
  }
}

function setEnemyInitialFishPosition(){
  for (let i=0;i<enemyFishDOM.length;i++){
    enemyFishDOM[i].src=enemyFish[i]
    enemyFishDOM[i].style.left=`${(cardWidth+gapBetweenCard)*(4-i)}px`//内側から並べる
    backSideCardDOM[i].src=`png/back.png`
    backSideCardDOM[i].style.left=`${(cardWidth+gapBetweenCard)*(4-i)}px`//内側から並べる
  }
}
function setEnemyInitialSpecialPosition(){
  for (let i=0;i<enemySpecialDOM.length;i++){
    enemySpecialDOM[i].src=enemySpecial[i]
    enemySpecialDOM[i].style.left=`${(cardWidth+gapBetweenCard)*(5+i)}px`//内側から並べる
    backSideCardDOM[i+5].src=`png/back.png`
    backSideCardDOM[i+5].style.left=`${(cardWidth+gapBetweenCard)*(5+i)}px`//内側から並べる
  }
}

let target=``
function fishDrag(){
  for (let i=0;i<mySpecialDOM.length;i++){
    mySpecialDOM[i].ondrag=function(element){
      target=element.target
    }
  }
  for (let i=0;i<myFishDOM.length;i++){
    myFishDOM[i].ondrag=function(element){
      target=element.target
    }
    myField.ondragover=function(element){
      element.preventDefault()
    }
    myField.ondrop=function(element){
      element.preventDefault()
      if (target.className.match(/Fish/)){
        element.target.appendChild(target)
        target.id='myChooseFish'
        target.style.left=`${(cardWidth+gapBetweenCard)*4}px`
        target.style.top=``
        myField.ondrop=``
        for (let i=0;i<myFishDOM.length;i++){
          myFishDOM[i].ondrag=``
        }
        eventsNone()
        resetMyFishPosition(target)
      
        if(flag==='marketStep-myChoose'){
          NumberToLocaleString(Number(QandA[getCardNumber(target)-11]['primeInCorrect']).toLocaleString(),myPrimeDOM)
          previousMyCalcPrime=removeComma(myPrimeDOM.textContent.slice(0,-1))
          flag=`marketStep-enemyChoose`
          console.log(`${flag}`)
          marketStepEnemyChoose()
        }
      }
      if(mySDGsFlag===2){
        let tempPrime=removeComma(myPrimeDOM.textContent.slice(0,-1))
        NumberToLocaleString(tempPrime+5000,myPrimeDOM)
      }
      if(myTrawlFlag===2){
        let tempPrime=removeComma(myPrimeDOM.textContent.slice(0,-1))
        NumberToLocaleString(tempPrime*0,myPrimeDOM)
      }
    }
  }
}
function specialDrag(){
  for (let i=0;i<myFishDOM.length;i++){
    myFishDOM[i].ondrag=function(element){
      target=element.target
    }
  }
  for (let i=0;i<mySpecialDOM.length;i++){
    mySpecialDOM[i].ondrag=function(element){
      target=element.target
    }
    myField.ondragover=function(element){
      element.preventDefault()
    }
    myField.ondrop=function(element){
      element.preventDefault()
      const myChooseFishCardDOM=document.getElementById('myChooseFish')
      const fishNumber=getCardNumber(myChooseFishCardDOM)
      if(target.className.match(/Special/)){
        switch(getCardNumber(target)){
          case 14:
            if(!(fishNumber===17 || fishNumber===18 || fishNumber===19 || fishNumber===20)){
              specialCardAlert()
            }
            break
          case 16:
            if(!(fishNumber===14 || fishNumber===17 || fishNumber===18 || fishNumber===19 || fishNumber===20)){
              specialCardAlert()
            }
            break
          case 17:
            if(!(fishNumber===11 || fishNumber===15 || fishNumber===16 || fishNumber===20)){
              specialCardAlert()
            }
            break
          case 18:
            if(!(fishNumber===12 || fishNumber===13 || fishNumber===14 || fishNumber===17 || fishNumber===18 || fishNumber===20)){
              specialCardAlert()
            }
            break
          case 19:
            if(!(fishNumber===15 || fishNumber===17 || fishNumber===20)){
              specialCardAlert()
            }
            break
          function specialCardAlert(){
            alert('この特殊カードは、クイズに正解しても現在場にある魚カードには効果がありません。')
          }
        }
        specialDrop()
        function specialDrop(){
          element.target.appendChild(target)
          if(mySDGsFlag===2 || myTrawlFlag===2){
            target.style.left=`${(cardWidth+gapBetweenCard)*6+(cardHeight-cardWidth)}px`
            target.id='myChooseSpecial2'
          }
          else{
            target.style.left=`${(cardWidth+gapBetweenCard)*5}px`
            target.id='myChooseSpecial'
          }
          target.style.top=``
          myField.ondrop=``
          for (let i=0;i<mySpecialDOM.length;i++){
            mySpecialDOM[i].ondrag=``
          }
          eventsNone()
          resetMySpecialPosition(target)
        
          if(flag==='valueStep-myChoose'){
            flag=`valueStep-enemyChoose`
            console.log(`${flag}`)
            valueStepEnemyChoose()
          }
        }
      }
    }
  }
}

function continueButtonRarefaction(){
  continueButtonDOM.style.opacity=`0.3`
  continueButtonDOM.disabled = true
}
function resetContinueButtonRarefaction(){
  continueButtonDOM.style.opacity=`1.0`
  continueButtonDOM.removeAttribute("disabled")
}

function resetEnemyFishPosition(DOM) {
  DOM.classList.remove('enemyFish')
  enemyFish = enemyFish.filter(item => (item.match(`${getCardNumber(DOM)}`)) === null)
  setEnemyInitialFishPosition()
}
function resetEnemySpecialPosition(DOM) {
  DOM.classList.remove('enemySpecial')
  enemySpecial = enemySpecial.filter(item => (item.match(`${getCardNumber(DOM)}`)) === null)
  setEnemyInitialSpecialPosition()
}

function resetMyFishPosition(DOM) {
  DOM.classList.remove('myFish')
  myFish = myFish.filter(item => (item.match(`${getCardNumber(DOM)}`)) === null)
  setMyInitialPosition()
}
function resetMySpecialPosition(DOM){
  DOM.classList.remove('mySpecial')
  mySpecial = mySpecial.filter(item => (item.match(`${getCardNumber(DOM)}`)) === null)
  setMyInitialPosition()
}

function displayAnswerButton(){
  for(let i=0;i<answerButtonDOM.length;i++){
    answerButtonDOM[i].classList.remove('displayNone');
    clickAnswerButton()
  }
}

function hideAnswerButton(){
  for(let i=0;i<answerButtonDOM.length;i++){
    answerButtonDOM[i].classList.add('displayNone');
  }
}

function clickAnswerButton(){
  for (let i=0;i<answerButtonDOM.length;i++){
    answerButtonDOM[i].onclick=function(){
      const answerNumber=this.textContent
      if (flag===`marketStep-myAnswer`){
        const myChooseFishCardDOM=document.getElementById('myChooseFish')
        const enemyChooseFishCardDOM=document.getElementById('enemyChooseFish')
        const cardNumber=getCardNumber(myChooseFishCardDOM)
        if (myChooseFishCardDOM.src.match(/fish/)){
          if (answerNumber===QandA[cardNumber-11]['answer']){
            correct.play()
            returnExpansion(myChooseFishCardDOM)
            myChooseFishCardDOM.style.top=`0px`
            myChooseFishCardDOM.style.left=`${(cardWidth+gapBetweenCard)*4}px`
            setAnswerCard(myFishAnswerDOM,`my`)
            hideAnswerButton()
            calcFishPrime(myChooseFishCardDOM, enemyChooseFishCardDOM)
            myPrime2DOM.innerHTML=`正解！`
          }
          else{
            incorrect.play()
            returnExpansion(myChooseFishCardDOM)
            myChooseFishCardDOM.style.top=`0px`
            myChooseFishCardDOM.style.left=`${(cardWidth+gapBetweenCard)*4}px`
            hideAnswerButton()
            myPrime2DOM.innerHTML=`不正解...`
          }
        }
          flag=`marketStep-enemyAnswer`
          console.log(`${flag}`)
          marketStepEnemyAnswer()
      }
      
      if (flag===`valueStep-myAnswer`){
        if(mySDGsFlag===2 || myTrawlFlag===2){
          const myChooseSpecialCardDOM2=document.getElementById('myChooseSpecial2')
          const cardNumber=getCardNumber(myChooseSpecialCardDOM2)
          tempClickAnswerButton(myChooseSpecialCardDOM2,cardNumber)
        }
        else{
          const myChooseSpecialCardDOM=document.getElementById('myChooseSpecial')
          const cardNumber=getCardNumber(myChooseSpecialCardDOM)
          tempClickAnswerButton(myChooseSpecialCardDOM,cardNumber)
        }
        function tempClickAnswerButton(DOM,cardNumber){
          if(DOM.src.match(/special/)){
            if (answerNumber===QandA[cardNumber-1]['answer']){
              correct.play()
              myPrime2DOM.innerHTML=`正解！`
              returnExpansion(DOM)
              if(mySDGsFlag===2 || myTrawlFlag===2){
                DOM.style.top=`0px`
                DOM.style.left=`${(cardWidth+gapBetweenCard)*6+(cardHeight-cardWidth)}px`
                setAnswerCard(mySpecialAnswerDOM2,`my`)
              }
              else{
                DOM.style.top=`0px`
                DOM.style.left=`${(cardWidth+gapBetweenCard)*5}px`
                setAnswerCard(mySpecialAnswerDOM,`my`)
              }
              hideAnswerButton()
              calcMySpecialPrime()
              if(mySDGsFlag===2){
                mySDGsFlag=3
              }
              if(myTrawlFlag===2){
                myTrawlFlag=3
              }
              if(getCardNumber(DOM)===11){
                mySDGsFlag=2
              }
              else if(getCardNumber(DOM)===12){
                myTrawlFlag=2
              }
            }
            else{
              incorrect.play()
              myPrime2DOM.innerHTML=`不正解...`
              returnExpansion(DOM)
              DOM.style.top=`0px`
              if(mySDGsFlag===2 || myTrawlFlag===2){
                DOM.style.left=`${(cardWidth+gapBetweenCard)*6+(cardHeight-cardWidth)}px`
              }
              else{
                DOM.style.left=`${(cardWidth+gapBetweenCard)*5}px`
              }
              hideAnswerButton()
              if(mySDGsFlag===2){
                mySDGsFlag=3
              }
              if(myTrawlFlag===2){
                myTrawlFlag=3
              }
            }
          }
        }

        flag=`valueStep-enemyAnswer`
        console.log(`${flag}`)
        valueStepEnemyAnswer()
      }
    }
  }
}

function calcFishPrime(myChooseFishCardDOM, enemyChooseFishCardDOM){
  if (flag===`marketStep-myAnswer`){
    if (getCardNumber(myChooseFishCardDOM) === 17 || getCardNumber(myChooseFishCardDOM) === 18 || getCardNumber(myChooseFishCardDOM) === 19) {
      if (getCardNumber(enemyChooseFishCardDOM) === 11 || getCardNumber(enemyChooseFishCardDOM) === 12 || getCardNumber(enemyChooseFishCardDOM) === 13){
        NumberToLocaleString(Number(QandA[getCardNumber(myChooseFishCardDOM) - 11]['versusBIg']).toLocaleString(),myPrimeDOM)
      }
      else {
        NumberToLocaleString(Number(QandA[getCardNumber(myChooseFishCardDOM) - 11]['primeCorrect']).toLocaleString(),myPrimeDOM)
      }
    }
    else {
      NumberToLocaleString(Number(QandA[getCardNumber(myChooseFishCardDOM) - 11]['primeCorrect']).toLocaleString(),myPrimeDOM)
    }
    if(mySDGsFlag===2){
      let tempPrime=removeComma(myPrimeDOM.textContent.slice(0,-1))
      previousMyCalcPrime=tempPrime
      NumberToLocaleString(tempPrime+5000,myPrimeDOM)
    }
    if(myTrawlFlag===2){
      let tempPrime=removeComma(myPrimeDOM.textContent.slice(0,-1))
      previousMyCalcPrime=tempPrime
      NumberToLocaleString(0,myPrimeDOM)
    }
  }
  else if (flag===`marketStep-enemyAnswer`){
    if (getCardNumber(enemyChooseFishCardDOM) === 17 || getCardNumber(enemyChooseFishCardDOM) === 18 || getCardNumber(enemyChooseFishCardDOM) === 19) {
      if (getCardNumber(myChooseFishCardDOM) === 11 || getCardNumber(myChooseFishCardDOM) === 12 || getCardNumber(myChooseFishCardDOM) === 13){
        NumberToLocaleString(Number(QandA[getCardNumber(enemyChooseFishCardDOM) - 11]['versusBIg']).toLocaleString(),enemyPrimeDOM)
      }
      else {
        NumberToLocaleString(Number(QandA[getCardNumber(enemyChooseFishCardDOM) - 11]['primeCorrect']).toLocaleString(),enemyPrimeDOM)
      }
    }
    else {
      NumberToLocaleString(Number(QandA[getCardNumber(enemyChooseFishCardDOM) - 11]['primeCorrect']).toLocaleString(),enemyPrimeDOM)
    }
    if(enemySDGsFlag===2){
      let tempPrime=removeComma(enemyPrimeDOM.textContent.slice(0,-1))
      previousEnemyCalcPrime=tempPrime
      NumberToLocaleString(tempPrime+5000,enemyPrimeDOM)
    }
    if(enemyTrawlFlag===2){
      let tempPrime=removeComma(enemyPrimeDOM.textContent.slice(0,-1))
      previousEnemyCalcPrime=tempPrime
      NumberToLocaleString(0,enemyPrimeDOM)
    }
  }
}

let isInvalidRedTied=false
let useRedTied=false
function calcMySpecialPrime(){
  if(mySDGsFlag===2){
    const myChooseSpecialCardDOM2=document.getElementById('myChooseSpecial2')
    const myChooseFishCardDOM=document.getElementById('myChooseFish')
    const fishNumber=getCardNumber(myChooseFishCardDOM)
    switch(getCardNumber(myChooseSpecialCardDOM2)){
      case 12:
        if(previousMyCalcPrime<230000){
          NumberToLocaleString(previousMyCalcPrime*10,myPrimeDOM)
        }
        isInvalidRedTied=true
        break
      case 13:
        if(previousMyCalcPrime<230000){
          NumberToLocaleString(previousMyCalcPrime*2,myPrimeDOM)
        }
        isInvalidRedTied=true
        break
      case 14:
        if(fishNumber===17 || fishNumber===18 || fishNumber===19 || fishNumber===20){
          NumberToLocaleString(previousMyCalcPrime+10000,myPrimeDOM)
        }
        break
      case 15:
        if(previousMyCalcPrime<230000){
          NumberToLocaleString(previousMyCalcPrime*5,myPrimeDOM)
        }
        isInvalidRedTied=true
        break
      case 16:
        if(fishNumber===14 || fishNumber===17 || fishNumber===18 || fishNumber===19 || fishNumber===20){
          NumberToLocaleString(previousMyCalcPrime+4000,myPrimeDOM)
        }
        break
      case 17:
        if(fishNumber===11 || fishNumber===15 || fishNumber===16 || fishNumber===20){
          NumberToLocaleString(previousMyCalcPrime+5000,myPrimeDOM)
        }
        break
      case 18:
        if(fishNumber===12 || fishNumber===13 || fishNumber===14 || fishNumber===17 || fishNumber===18 || fishNumber===20){
          NumberToLocaleString(previousMyCalcPrime+3000,myPrimeDOM)
        }
        break
      case 19:
        if(fishNumber===15 || fishNumber===17 || fishNumber===20){
          NumberToLocaleString(previousMyCalcPrime+6000,myPrimeDOM)
        }
        break
      case 20:
        NumberToLocaleString(0,enemyPrimeDOM)
        NumberToLocaleString(previousMyCalcPrime,myPrimeDOM)//後で+5000するための帳尻合わせ
        useRedTied=true
        break
    }
    let tempPrime=removeComma(myPrimeDOM.textContent.slice(0,-1))
    NumberToLocaleString(tempPrime+5000,myPrimeDOM)
  }
  else if(myTrawlFlag===2){
    const myChooseSpecialCardDOM2=document.getElementById('myChooseSpecial2')
    const myChooseFishCardDOM=document.getElementById('myChooseFish')
    const fishNumber=getCardNumber(myChooseFishCardDOM)
    // console.log(`previous=${previousMyCalcPrime}`)
    switch(getCardNumber(myChooseSpecialCardDOM2)){
      case 13:
        if(fishNumber===17){
          NumberToLocaleString(230*2,myPrimeDOM)
        }
        else if(fishNumber===18){
          NumberToLocaleString(150*2,myPrimeDOM)
        }
        else if(fishNumber===19){
          NumberToLocaleString(150*2,myPrimeDOM)
        }
        else{
          NumberToLocaleString(previousMyCalcPrime*2,myPrimeDOM)
        }
        isInvalidRedTied=true
        break
      case 15:
        if(fishNumber===17){
          NumberToLocaleString(230*5,myPrimeDOM)
        }
        else if(fishNumber===18){
          NumberToLocaleString(150*5,myPrimeDOM)
        }
        else if(fishNumber===19){
          NumberToLocaleString(150*5,myPrimeDOM)
        }
        else{
          NumberToLocaleString(previousMyCalcPrime*5,myPrimeDOM)
        }
        isInvalidRedTied=true
        break
      case 20:
        NumberToLocaleString(0,enemyPrimeDOM)
        useRedTied=true
        break
    }
  }
  else{
    const myChooseSpecialCardDOM=document.getElementById('myChooseSpecial')
    const myChooseFishCardDOM=document.getElementById('myChooseFish')
    const fishNumber=getCardNumber(myChooseFishCardDOM)
    let tempPrime=removeComma(myPrimeDOM.textContent.slice(0,-1))
    switch(getCardNumber(myChooseSpecialCardDOM)){
      case 11:
        NumberToLocaleString(tempPrime+2000,myPrimeDOM)
        break
      case 12:
        if(tempPrime<230000){
          NumberToLocaleString(tempPrime*10,myPrimeDOM)
        }
        isInvalidRedTied=true
        break
      case 13:
        if(tempPrime<230000){
          NumberToLocaleString(tempPrime*2,myPrimeDOM)
        }
        isInvalidRedTied=true
        break
      case 14:
        if(fishNumber===17 || fishNumber===18 || fishNumber===19 || fishNumber===20){
          NumberToLocaleString(tempPrime+10000,myPrimeDOM)
        }
        break
      case 15:
        if(tempPrime<230000){
          NumberToLocaleString(tempPrime*5,myPrimeDOM)
        }
        isInvalidRedTied=true
        break
      case 16:
        if(fishNumber===14 || fishNumber===17 || fishNumber===18 || fishNumber===19 || fishNumber===20){
          NumberToLocaleString(tempPrime+4000,myPrimeDOM)
        }
        break
      case 17:
        if(fishNumber===11 || fishNumber===15 || fishNumber===16 || fishNumber===20){
          NumberToLocaleString(tempPrime+5000,myPrimeDOM)
        }
        break
      case 18:
        if(fishNumber===12 || fishNumber===13 || fishNumber===14 || fishNumber===17 || fishNumber===18 || fishNumber===20){
          NumberToLocaleString(tempPrime+3000,myPrimeDOM)
        }
        break
      case 19:
        if(fishNumber===15 || fishNumber===17 || fishNumber===20){
          NumberToLocaleString(tempPrime+6000,myPrimeDOM)
        }
        break
      case 20:
        NumberToLocaleString(0,enemyPrimeDOM)
        useRedTied=true
        break
    }
  }
}

function calcEnemySpecialPrime(){
  if(enemySDGsFlag===2){
    const enemyChooseSpecialCardDOM2=document.getElementById('enemyChooseSpecial2')
    const enemyChooseFishCardDOM=document.getElementById('enemyChooseFish')
    const fishNumber=getCardNumber(enemyChooseFishCardDOM)
    switch(getCardNumber(enemyChooseSpecialCardDOM2)){
      case 12:
        if(previousEnemyCalcPrime<230000){
          NumberToLocaleString((previousEnemyCalcPrime-5000)*10+5000,enemyPrimeDOM)
        }
        break
      case 13:
        if(previousEnemyCalcPrime<230000){
          NumberToLocaleString((previousEnemyCalcPrime-5000)*2+5000,enemyPrimeDOM)
        }
        break
      case 14:
        if(useRedTied===false){
          if(fishNumber===17 || fishNumber===18 || fishNumber===19 || fishNumber===20){
            NumberToLocaleString(previousEnemyCalcPrime+10000,enemyPrimeDOM)
          }
        }
        break
      case 15:
        if(previousEnemyCalcPrime<230000){
          NumberToLocaleString((previousEnemyCalcPrime-5000)*5+5000,enemyPrimeDOM)
        }
        break
      case 16:
        if(useRedTied===false){
          if(fishNumber===14 || fishNumber===17 || fishNumber===18 || fishNumber===19 || fishNumber===20){
            NumberToLocaleString(previousEnemyCalcPrime+4000,enemyPrimeDOM)
          }
        }
        break
      case 17:
        if(useRedTied===false){
          if(fishNumber===11 || fishNumber===15 || fishNumber===16 || fishNumber===20){
            NumberToLocaleString(previousEnemyCalcPrime+5000,enemyPrimeDOM)
          }
        }
        break
      case 18:
        if(useRedTied===false){
          if(fishNumber===12 || fishNumber===13 || fishNumber===14 || fishNumber===17 || fishNumber===18 || fishNumber===20){
            NumberToLocaleString(previousEnemyCalcPrime+3000,enemyPrimeDOM)
          }
        }
        break
      case 19:
        if(useRedTied===false){
          if(fishNumber===15 || fishNumber===17 || fishNumber===20){
            NumberToLocaleString(previousEnemyCalcPrime+6000,enemyPrimeDOM)
          }
        }
        break
      case 20:
        if(isInvalidRedTied===false){
          NumberToLocaleString(0,myPrimeDOM)
          NumberToLocaleString(previousEnemyCalcPrime,enemyPrimeDOM)
        }
        break
    }
  }
  else if(enemyTrawlFlag===2){
    const enemyChooseSpecialCardDOM2=document.getElementById('enemyChooseSpecial2')
    const enemyChooseFishCardDOM=document.getElementById('enemyChooseFish')
    const fishNumber=getCardNumber(enemyChooseFishCardDOM)
    switch(getCardNumber(enemyChooseSpecialCardDOM2)){
      case 13:
        if(fishNumber===17){
          NumberToLocaleString(230*2,enemyPrimeDOM)
        }
        else if(fishNumber===18){
          NumberToLocaleString(150*2,enemyPrimeDOM)
        }
        else if(fishNumber===19){
          NumberToLocaleString(150*2,enemyPrimeDOM)
        }
        else{
          NumberToLocaleString(previousEnemyCalcPrime*2,enemyPrimeDOM)
        }
        break
      case 15:
        if(fishNumber===17){
          NumberToLocaleString(230*5,enemyPrimeDOM)
        }
        else if(fishNumber===18){
          NumberToLocaleString(150*5,enemyPrimeDOM)
        }
        else if(fishNumber===19){
          NumberToLocaleString(150*5,enemyPrimeDOM)
        }
        else{
          NumberToLocaleString(previousEnemyCalcPrime*5,enemyPrimeDOM)
        }
        break
      case 20:
        if(isInvalidRedTied===false){
          NumberToLocaleString(0,myPrimeDOM)
        }
        break
    }
  }
  else{
    const enemyChooseSpecialCardDOM=document.getElementById('enemyChooseSpecial')
    const enemyChooseFishCardDOM=document.getElementById('enemyChooseFish')
    const fishNumber=getCardNumber(enemyChooseFishCardDOM)
    console.log(`useRedTied=${useRedTied}`)
    switch(getCardNumber(enemyChooseSpecialCardDOM)){
      case 11:
        if(useRedTied===false){
          NumberToLocaleString(previousEnemyCalcPrime+2000,enemyPrimeDOM)
        }
        break
      case 12:
        if(previousEnemyCalcPrime<230000){
          NumberToLocaleString(previousEnemyCalcPrime*10,enemyPrimeDOM)
        }
        break
      case 13:
        if(previousEnemyCalcPrime<230000){
          NumberToLocaleString(previousEnemyCalcPrime*2,enemyPrimeDOM)
        }
        break
      case 14:
        if(useRedTied===false){
          if(fishNumber===17 || fishNumber===18 || fishNumber===19 || fishNumber===20){
            NumberToLocaleString(previousEnemyCalcPrime+10000,enemyPrimeDOM)
          }
        }
        break
      case 15:
        if(previousEnemyCalcPrime<230000){
          NumberToLocaleString(previousEnemyCalcPrime*5,enemyPrimeDOM)
        }
        break
      case 16:
        if(useRedTied===false){
          if(fishNumber===14 || fishNumber===17 || fishNumber===18 || fishNumber===19 || fishNumber===20){
            NumberToLocaleString(previousEnemyCalcPrime+4000,enemyPrimeDOM)
          }
        }
        break
      case 17:
        if(useRedTied===false){
          if(fishNumber===11 || fishNumber===15 || fishNumber===16 || fishNumber===20){
            NumberToLocaleString(previousEnemyCalcPrime+5000,enemyPrimeDOM)
          }
        }
        break
      case 18:
        if(useRedTied===false){
          if(fishNumber===12 || fishNumber===13 || fishNumber===14 || fishNumber===17 || fishNumber===18 || fishNumber===20){
            NumberToLocaleString(previousEnemyCalcPrime+3000,enemyPrimeDOM)
          }
        }
        break
      case 19:
        if(useRedTied===false){
          if(fishNumber===15 || fishNumber===17 || fishNumber===20){
            NumberToLocaleString(previousEnemyCalcPrime+6000,enemyPrimeDOM)
          }
        }
        break
      case 20:
        if(isInvalidRedTied===false){
          NumberToLocaleString(0,myPrimeDOM)
        }
        break
    }
  }
  if(useRedTied===true){
    useRedTied=false
  }
}

function NumberToLocaleString(Number,DOM){
  DOM.textContent=`${Number.toLocaleString()}円`
}
function removeComma(number) {
  var removed = number.replace(/,/g, '');
  return parseInt(removed, 10);
}

function setAnswerCard(DOM,myOrEnemy){
  if(myOrEnemy===`my`){
    if(flag===`marketStep-myAnswer`){
      const myChooseFishCardDOM=document.getElementById('myChooseFish')
      const cardNumber=getCardNumber(myChooseFishCardDOM)
      if (myChooseFishCardDOM.src.match(/fish/)){
        DOM.src=`png/fish/fishAnswer_${cardNumber}.png`
        DOM.style.left=`${(cardWidth+gapBetweenCard)*4}px`
      }
    }
    else if(flag===`valueStep-myAnswer`){
      if(mySDGsFlag===2 || myTrawlFlag===2){
        const myChooseSpecialCardDOM2=document.getElementById('myChooseSpecial2')
        const cardNumber=getCardNumber(myChooseSpecialCardDOM2)
        if (myChooseSpecialCardDOM2.src.match(/special/)){
          DOM.src=`png/special/specialAnswer_${cardNumber}.png`
          DOM.style.left=`${(cardWidth+gapBetweenCard)*6+(cardHeight-cardWidth)*2}px`
        }
      }
      else{
        const myChooseSpecialCardDOM=document.getElementById('myChooseSpecial')
        const cardNumber=getCardNumber(myChooseSpecialCardDOM)
        if (myChooseSpecialCardDOM.src.match(/special/)){
          DOM.src=`png/special/specialAnswer_${cardNumber}.png`
          DOM.style.left=`${(cardWidth+gapBetweenCard)*5+cardHeight-cardWidth}px`
        }
      }
    }
  }
  else if(myOrEnemy===`enemy`){
    if(flag===`marketStep-enemyAnswer`){
      const enemyChooseFishCardDOM=document.getElementById('enemyChooseFish')
      const cardNumber=getCardNumber(enemyChooseFishCardDOM)
      if (enemyChooseFishCardDOM.src.match(/fish/)){
        DOM.src=`png/fish/fishAnswer_${cardNumber}.png`
        DOM.style.left=`${(cardWidth+gapBetweenCard)*4}px`
      }
    }
    else if(flag===`valueStep-enemyAnswer`){
      if(enemySDGsFlag===2 || enemyTrawlFlag===2){
        const enemyChooseSpecialCardDOM2=document.getElementById('enemyChooseSpecial2')
        const cardNumber=getCardNumber(enemyChooseSpecialCardDOM2)
        if (enemyChooseSpecialCardDOM2.src.match(/special/)){
          DOM.src=`png/special/specialAnswer_${cardNumber}.png`
          DOM.style.left=`${(cardWidth+gapBetweenCard)*6+(cardHeight-cardWidth)*2}px`
        }
      }
      else{
        const enemyChooseSpecialCardDOM=document.getElementById('enemyChooseSpecial')
        const cardNumber=getCardNumber(enemyChooseSpecialCardDOM)
        if (enemyChooseSpecialCardDOM.src.match(/special/)){
          DOM.src=`png/special/specialAnswer_${cardNumber}.png`
          DOM.style.left=`${(cardWidth+gapBetweenCard)*5+cardHeight-cardWidth}px`
        }
      }
    }
  }
  DOM.classList.remove('displayNone')
  zIndex+=1
  DOM.style.zIndex=zIndex
}

function getCardNumber(DOM){
  const cardNumber=Number(DOM.src.match(/_\d{2}/).toString().match(/\d{2}/))
  return cardNumber
}

function eventsNone(){
  for (let i=0;i<myFishDOM.length;i++){
    myFishDOM[i].classList.add('eventsNone')
  }
  for (let i=0;i<mySpecialDOM.length;i++){
    mySpecialDOM[i].classList.add('eventsNone')
  }
}
function removeEventsNone(){
  for (let i=0;i<myFishDOM.length;i++){
    myFishDOM[i].classList.remove('eventsNone')
  }
  for (let i=0;i<mySpecialDOM.length;i++){
    mySpecialDOM[i].classList.remove('eventsNone')
  }
}

function clickAndExpansion(){
  clickAndExpansionOfFishOrSpecial(myFishDOM)
  clickAndExpansionOfFishOrSpecial(mySpecialDOM)
}

function clickAndExpansionOfFishOrSpecial(DOM){
  for (let i=0;i<DOM.length;i++){
    DOM[i].onclick=function(element){
      if (this.className.match(/card/)){
        expansion(this)
        setCenter(this);
        eventsNone()
        this.classList.remove('eventsNone')
      }
      else{
        returnExpansion(this)
        setMyInitialPosition()
        removeEventsNone()
      }
    }
  }
}
function setCenter(DOM){
  zIndex+=1
  DOM.style.zIndex=zIndex
  DOM.style.left=`50%`
  DOM.style.top=`50%`
  DOM.transform=`translate(-50%,-50%)`
}
function expansion(DOM){
  DOM.classList.remove('card')
  DOM.classList.add('expansionCard')
}
function returnExpansion(DOM){
  DOM.classList.add('card')
  DOM.classList.remove('expansionCard')
}
