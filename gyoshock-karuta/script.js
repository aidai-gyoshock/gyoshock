'use strict'

const QandA=[
    {
        "read": "あさい海でくらすよ「ゴンベ」",
        "answer": "サンゴ",
        "answerNumber": "1"
    },
    {
        "read": "いろいろな生き物がいる「さんご」は海のゆりかご",
        "answer": "白色",
        "answerNumber": "1"
    },
    {
        "read": "うちわのような大きな甲羅を持っている「ウチワエビ」",
        "answer": "6本",
        "answerNumber": "3"
    },
    {
        "read": "えいようたっぷりなを｢ブリ｣を食べて疲れを吹っ飛ばそう",
        "answer": "おせち料理",
        "answerNumber": "3"
    },
    {
        "read": "おめでたい時に食べる「タイ」は赤くて美味しい魚の王様",
        "answer": "エビ",
        "answerNumber": "1"
    },
    {
        "read": "からふるな色がいっぱい「ヒオウギガイ」",
        "answer": "ホタテ",
        "answerNumber": "2"
    },
    {
        "read": "きれいな真珠は「アコヤガイ」が作っている",
        "answer": "7画",
        "answerNumber": "1"
    },
    {
        "read": "「クマノミ」はイソギンチャクに仲間と住んでいる",
        "answer": "イソギンチャク",
        "answerNumber": "3"
    },
    {
        "read": "けんこうのために｢ひじき｣を食べよう！",
        "answer": "海藻",
        "answerNumber": "3"
    },
    {
        "read": "こうかな「ヤガラ」お口がとても長いよ",
        "answer": "口",
        "answerNumber": "3"
    },
    {
        "read": "さんごを食べちゃう厄介者「オニヒトデ」",
        "answer": "サンゴ",
        "answerNumber": "3"
    },
    {
        "read": "しおやきがおいしい秋の味覚、「サンマ」",
        "answer": "秋",
        "answerNumber": "2"
    },
    {
        "read": "「スズキ」来たー！釣りの醍醐味嬉しい瞬間",
        "answer": "緑",
        "answerNumber": "3"
    },
    {
        "read": "せすじピーン！「タチウオ」の立ち泳ぎ",
        "answer": "1.5m",
        "answerNumber": "2"
    },
    {
        "read": "そだつ場所は違うけど同じ魚の「アマゴ」と「サツキマス」",
        "answer": "川",
        "answerNumber": "1"
    },
    {
        "read": "たくさん集まれば怖くない｢イワシ｣の大群",
        "answer": "10倍",
        "answerNumber": "1"
    },
    {
        "read": "ちいさな歯がたくさんあることが名前の由来の｢サバ｣",
        "answer": "青",
        "answerNumber": "1"
    },
    {
        "read": "つるのようになんでも巻き付く「タツノオトシゴ」",
        "answer": "口",
        "answerNumber": "3"
    },
    {
        "read": "てで触ると危険海の「クラゲ」に要注意！",
        "answer": "骨",
        "answerNumber": "2"
    },
    {
        "read": "とがった口で「カワハギ」はなんでもつつく",
        "answer": "ウロコ",
        "answerNumber": "1"
    },
    {
        "read": "なぜ怒る？気性が荒い「スズメダイ」",
        "answer": "たくさん",
        "answerNumber": "1"
    },
    {
        "read": "にほんのヒゲがチャームポイントの「オジサン」",
        "answer": "ヒゲイチ",
        "answerNumber": "1"
    },
    {
        "read": "ぬき足さし足、「エイ」は静かに砂に潜る",
        "answer": "川から流れる",
        "answerNumber": "1"
    },
    {
        "read": "ねじったような模様が由来の「ネジリンボウ」",
        "answer": "穴に潜る",
        "answerNumber": "1"
    },
    {
        "read": "のんびりと実は暮らしている「ウツボ」",
        "answer": "太平洋",
        "answerNumber": "3"
    },
    {
        "read": "はち(八)の字は「カンパチ」だけの印だよ",
        "answer": "8",
        "answerNumber": "1"
    },
    {
        "read": "ひらいた胸びれはまるで飛行機「トビウオ」",
        "answer": "愛南ゴールド",
        "answerNumber": "3"
    },
    {
        "read": "ふかい海は赤色、浅い海は茶色、「カサゴ」の七変化",
        "answer": "擬態（隠れる）",
        "answerNumber": "2"
    },
    {
        "read": "へんそうが得意な「タコ」はどんな場所でも化けられる",
        "answer": "8本",
        "answerNumber": "2"
    },
    {
        "read": "ほうせきのようにきれいな「ウミウシ」は海の宝",
        "answer": "青色",
        "answerNumber": "2"
    },
    {
        "read": "まんまと騙された！実は千本もない「ハリセンボン」",
        "answer": "千",
        "answerNumber": "3"
    },
    {
        "read": "みんなの体を掃除する「ホンソメワケベラ」は魚のお医者さん",
        "answer": "夜",
        "answerNumber": "3"
    },
    {
        "read": "むなもとの黒い斑点は「スマ」を見分けるポイント",
        "answer": "黒い斑点",
        "answerNumber": "2"
    },
    {
        "read": "めいっぱい広げた口で食べちゃうぞ「サメ」",
        "answer": "nose",
        "answerNumber": "3"
    },
    {
        "read": "もばの海藻を食べる「ウニ」の集団生活",
        "answer": "体がトゲトゲ",
        "answerNumber": "3"
    },
    {
        "read": "やいばのような爪は「マガキガイ」の武器である",
        "answer": "クエ",
        "answerNumber": "3"
    },
    {
        "read": "ゆたかな海で育つ「カキ」は栄養豊富な海のミルク",
        "answer": "平坦地",
        "answerNumber": "1"
    },
    {
        "read": "よちよち歩いて獲物は一飲み「カエルアンコウ」",
        "answer": "歩く",
        "answerNumber": "1"
    },
    {
        "read": "ラブラブのカップルで泳ぐ「チョウチョウウオ」",
        "answer": "地球温暖化",
        "answerNumber": "1"
    },
    {
        "read": "りゅうせんがたは「マグロ」が速く泳ぐ秘訣",
        "answer": "black",
        "answerNumber": "2"
    },
    {
        "read": "るあーのデザインに使う「キビナゴ」は魚の大好物",
        "answer": "2次産業",
        "answerNumber": "1"
    },
    {
        "read": "れんずのような目で「イカ」は獲物を見つけるよ",
        "answer": "黒色",
        "answerNumber": "1"
    },
    {
        "read": "ろけっとパンチを繰り出す「モンハナシャコ」",
        "answer": "南",
        "answerNumber": "2"
    },
    {
        "read": "わらで焼く「カツオ」は、みんな大好きカツオのたたき",
        "answer": "ビヤビヤ",
        "answerNumber": "1"
    }
]
// 変数宣言
const cardNum=44;
const cardWidth=Number(getComputedStyle(document.documentElement).getPropertyValue('--cardWidth').slice( 0, -2 )) //90
const cardHeight=Number(getComputedStyle(document.documentElement).getPropertyValue('--cardHeight').slice( 0, -2 )) //128
const cardColumnsOnMainField=Number(getComputedStyle(document.documentElement).getPropertyValue('--cardColumnsOnMainField')) //11
const cardRowOnMainField=Number(getComputedStyle(document.documentElement).getPropertyValue('--cardRowOnMainField')) //4
const gapBetweenCard=Number(getComputedStyle(document.documentElement).getPropertyValue('--gapBetweenCard').slice( 0, -2 )) //5
const getCardFieldWidth=(cardWidth*cardColumnsOnMainField)+(gapBetweenCard*(cardColumnsOnMainField-1)) //1040
const getCardFieldHeight=(cardHeight*cardRowOnMainField)+(gapBetweenCard*(cardRowOnMainField-1)) //527
const expansionMagnification=Number(getComputedStyle(document.documentElement).getPropertyValue('--expansionMagnification')) //3

// メイン
const readPathArray=setReadPathArray();
const readFieldArray=randomSelect(readPathArray,cardNum);
const fieldReadDOMid=document.getElementById("read")
let progress=0 //何枚目の読み札か数えるカウント変数
let zIndex=0 //横に置く札のz-index。新しい札が一番上に来るようにする
fieldReadDOMid.src=readFieldArray[progress];
let readCardNum=fieldReadDOMid.src.match(/_\d{2}/).toString()

const getPathArray=setGetPathArray();
const getCardFieldArray=randomSelect(getPathArray,cardNum);
const fieldGetDOM=document.getElementsByClassName('get');
setField();
clickCard();

const wrapperDOM=document.getElementById('wrapper')
wrapperDOM.classList.add('displayNone')
const loaderDOM=document.getElementById('loader')
loaderDOM.classList.remove('displayNone')

let myCard=[]
let wrongCard=[]
let timeOutCard=0
const wrongCardDOM=document.getElementById("wrong")
const myCardDOM=document.getElementById("myCard")
const timeOutCardDOM=document.getElementById("timeOutCard")

const bgm = new Audio('../music/karuta-bgm.mp3')
bgm.loop = true
const correct=new Audio('../music/correct.mp3')
const incorrect=new Audio('../music/incorrect.mp3')
const touch=new Audio('../music/touch.mp3')

let iniSec=15
const timerDOM=document.getElementById('timer')
timerDOM.textContent=`${iniSec}`
let countTimer=setInterval(function(){
    iniSec-=1;
    timerDOM.textContent=`${iniSec}`
}, 1000);
function clearTimer(){
    clearInterval(countTimer);
    clearInterval(timeOut);
    iniSec=11
    timeOut=setInterval(function(){
        if ((iniSec-1)===0){
            timerDOM.textContent=`0`
            clearTimer()
            for (let i=0;i<cardNum;i++){
                let fieldGetDOMid=document.getElementById(`${fieldGetDOM[i].id}`);
                let getCardNum=fieldGetDOMid.src.match(/_\d{2}/).toString();
                if (getCardNum===readCardNum){
                    fieldGetDOMid.onclick=function(){
                        return false
                    }
                    fieldGetDOMid.style.left=``;
                    fieldGetDOMid.style.right=`-${(cardWidth+cardHeight)/2+gapBetweenCard}px`;
                    fieldGetDOMid.style.top=`50%`;
                    fieldGetDOMid.style.transform=`translateY(-190%)`;
                    zIndex+=1;;
                    fieldGetDOMid.style.zIndex=`${zIndex}`;
                    timeOutCard+=1
                    timeOutCardDOM.textContent=`時間切れ${timeOutCard}`
                    incorrect.play()
                }
            }
            progress+=1;
            finish();
            fieldReadDOMid.src=readFieldArray[progress];
            readCardNum=fieldReadDOMid.src.match(/_\d{2}/).toString();
            countTimer=setInterval(function(){
                iniSec-=1;
                timerDOM.textContent=`${iniSec}`
            }, 1000);
        }
        console.log(iniSec-1);
    },1000)
}
let timeOut=setInterval(function(){
    if(iniSec===10){
        bgm.play()
        wrapperDOM.classList.remove('displayNone')
        loaderDOM.classList.add('displayNone')
    }
    console.log(iniSec);
    if (iniSec===0){
        clearTimer()
        for (let i=0;i<cardNum;i++){
            let fieldGetDOMid=document.getElementById(`${fieldGetDOM[i].id}`);
            let getCardNum=fieldGetDOMid.src.match(/_\d{2}/).toString()
            if (getCardNum===readCardNum){
                fieldGetDOMid.onclick=function(){
                    return false
                }
                fieldGetDOMid.style.left=``;
                fieldGetDOMid.style.right=`-${(cardWidth+cardHeight)/2+gapBetweenCard}px`;
                fieldGetDOMid.style.top=`50%`;
                fieldGetDOMid.style.transform=`translateY(-190%)`;
                zIndex+=1;;
                fieldGetDOMid.style.zIndex=`${zIndex}`;
                timeOutCard+=1
                timeOutCardDOM.textContent=`時間切れ${timeOutCard}`
                incorrect.play()
            }
        }
        progress+=1;
        fieldReadDOMid.src=readFieldArray[progress];
        readCardNum=fieldReadDOMid.src.match(/_\d{2}/).toString();
        countTimer=setInterval(function(){
            iniSec-=1;
            timerDOM.textContent=`${iniSec}`
        }, 1000);
    }
},1000)

// 関数定義

function clickCard(){
    for (let i=0;i<cardNum;i++){
        let fieldGetDOMid=document.getElementById(`${fieldGetDOM[i].id}`);
        fieldGetDOMid.onclick=function(){
            let getCardNum=this.src.match(/_\d{2}/).toString()
            if (getCardNum===readCardNum){
                clearTimer();
                this.classList.add('expansion');
                this.style.left=`${getCardFieldWidth/2-cardWidth*expansionMagnification/2}px`
                this.style.top=`${getCardFieldHeight/2-cardHeight*expansionMagnification/2}px`
                answer()
                touch.play()
            }
            else{
                this.style.animation=`shake 1s`
                // console.log(this);
                setTimeout(function() {
                    this.style.animation=``;
                }.bind(this), 150);
            }
        }
    }
}

function answer(){
    for (let i=0;i<cardNum;i++){
        let fieldGetDOMid=document.getElementById(`${fieldGetDOM[i].id}`);
        // 回答中はボタン以外クリック出来ない。
        fieldGetDOMid.classList.add('eventsNone');
    }
    for(let i=0;i<3;i++){
        let answerButtonDOMid=document.getElementById(`answerButton${i+1}`);
        answerButtonDOMid.classList.remove('displayNone');
        answerButtonDOMid.onclick=clickAnswerButton.bind(answerButtonDOMid);
    }
}

function clickAnswerButton(){
    const getCard=document.querySelector('.expansion')
    const getCardNum=getCard.src.match(/_\d{2}/).toString().match(/\d{2}/).toString();
    const getCardId=getCard.id.match(/\d{2}/).toString()

    getCard.onclick=function(){
        return false
    }

    //クイズに正解
    if (QandA[getCardNum-10].answerNumber===this.textContent){
        getCard.classList.remove('expansion');
        getCard.style.left=``;
        getCard.style.right=`-${(cardWidth+cardHeight)/2+gapBetweenCard}px`;
        getCard.style.top=`50%`;
        getCard.style.transform=`translateY(90%)`;
        zIndex+=1;;
        getCard.style.zIndex=`${zIndex}`;
        myCard.push(getCardId);
        myCardDOM.textContent=`正解${myCard.length}`
        correct.play()
        
        //クイズに正解
        if (wrongCard.length!==0){
            const nextAnswerDOM=document.getElementById(`get_${wrongCard.pop()}`)
            nextAnswerDOM.classList.add('expansion');
            nextAnswerDOM.style.left=`${getCardFieldWidth/2-cardWidth*expansionMagnification/2}px`
            nextAnswerDOM.style.right=``
            nextAnswerDOM.style.top=`${getCardFieldHeight/2-cardHeight*expansionMagnification/2}px`
            nextAnswerDOM.style.transform=``
            answer();
            wrongCardDOM.textContent=`不正解${wrongCard.length}`
        }
        //クイズに不正解
        else{
            for (let i=0;i<3;i++){
                let answerButtonDOMid=document.getElementById(`answerButton${i+1}`);
                answerButtonDOMid.classList.add('displayNone');
            }
            for (let i=0;i<cardNum;i++){
                let fieldGetDOMid=document.getElementById(`${fieldGetDOM[i].id}`);
                // 回答終了後にeventsNoneを解除
                fieldGetDOMid.classList.remove('eventsNone');
            }
            progress+=1;
            finish();
            fieldReadDOMid.src=readFieldArray[progress];
            readCardNum=fieldReadDOMid.src.match(/_\d{2}/).toString();
            timerDOM.textContent=`10`
            clearTimer()
            countTimer=setInterval(function(){
                iniSec-=1;
                timerDOM.textContent=`${iniSec}`
            }, 1000);
        }

        // console.log(nextAnswerDOM);
        // console.log(`mycard=${myCard}`);
        // console.log(`wrongcard=${wrongCard}`);
    }
    //クイズに不正解
    else{
        getCard.classList.remove('expansion');
        getCard.style.left=``;
        getCard.style.right=`-${(cardWidth+cardHeight)/2+gapBetweenCard}px`;
        getCard.style.top=`50%`;
        getCard.style.transform=`translateY(-50%)`;
        zIndex+=1;
        getCard.style.zIndex=`${zIndex}`;
        wrongCard.push(getCardId);
        // console.log(`mycard=${myCard}`);
        // console.log(`wrongcard=${wrongCard}`);
        wrongCardDOM.textContent=`不正解${wrongCard.length}`
        incorrect.play()
        
        for (let i=0;i<3;i++){
            let answerButtonDOMid=document.getElementById(`answerButton${i+1}`);
            answerButtonDOMid.classList.add('displayNone');
        }
        for (let i=0;i<cardNum;i++){
            let fieldGetDOMid=document.getElementById(`${fieldGetDOM[i].id}`);
            // 回答終了後にeventsNoneを解除
            fieldGetDOMid.classList.remove('eventsNone');
        }
        progress+=1;
        finish();
        fieldReadDOMid.src=readFieldArray[progress];
        readCardNum=fieldReadDOMid.src.match(/_\d{2}/).toString();
        timerDOM.textContent=`10`
        clearTimer()
        countTimer=setInterval(function(){
            iniSec-=1;
            timerDOM.textContent=`${iniSec}`
        }, 1000);
    }
}

function setGetPathArray(){
    const Array=[]
    for (let i=10;i<cardNum+10;i++){
        Array.push(`png\\get\\get_${i}.png`)
    }
    return Array;
}

function setReadPathArray(){
    const Array=[]
    for (let i=10;i<cardNum+10;i++){
        Array.push(`png\\read\\read_${i}.png`)
    }
    return Array;
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

function setField(){
    for (let i=0;i<cardNum;i++){
        fieldGetDOM[i].src=getCardFieldArray[i];
        if (i<cardColumnsOnMainField){
            fieldGetDOM[i].style.left=`${i*(cardWidth+gapBetweenCard)}`;
        }
        else if (i>=cardColumnsOnMainField && i<cardColumnsOnMainField*2){
            fieldGetDOM[i].style.left=`${(i-cardColumnsOnMainField)*(cardWidth+gapBetweenCard)}`;
            fieldGetDOM[i].style.top=`${cardHeight+gapBetweenCard}`;
        }
        else if (i>=cardColumnsOnMainField*2 && i<cardColumnsOnMainField*3){
            fieldGetDOM[i].style.left=`${(i-cardColumnsOnMainField*2)*(cardWidth+gapBetweenCard)}`;
            fieldGetDOM[i].style.top=`${(cardHeight+gapBetweenCard)*2}`; 
        }
        else if (i>=cardColumnsOnMainField*3 && i<cardColumnsOnMainField*4){
            fieldGetDOM[i].style.left=`${(i-cardColumnsOnMainField*3)*(cardWidth+gapBetweenCard)}`;
            fieldGetDOM[i].style.top=`${(cardHeight+gapBetweenCard)*3}`; 
        }
    }
}

function finish(){
    if (progress===44){
        displayResult()
    }
}

function displayResult(){
    const wrapperDOM=document.getElementById('wrapper')
    const resultText=document.getElementById('resultText')
    const restartButtonDOM=document.getElementById('restartButton')
    wrapperDOM.classList.add('displayNone')
    resultText.innerHTML=`時間切れ${timeOutCard}枚<br>不正解${wrongCard.length}枚<br>正解${myCard.length}枚`
    restartButtonDOM.classList.remove('displayNone')
}