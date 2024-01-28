let emoji = "❤,💖,💕,❤️‍🔥,❤️‍🩹,💓".split(",")
let word1 = "아,앗,앙,오,옷,우,웅,웃,으,읏,응,잇,엣".split(",")
let word2 ="흐,하,헤,핫,호,흣".split(",")
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function create(){
  document.getElementById("ver").innerText="ver:1.2.1";
  let value = ""
  let emojiStr = ""
  let wordStr = ""
  for(let i=0;i<document.getElementById("sentenceLength").value;i++){
    
    let emojiCount = document.getElementById("heartCount").value;
    if(emojicount!=0){
      for(let j=0;j<emojiCount;j++){
        let emojiNum = rand(0,5)
        emojiStr += emoji[emojiNum]
      }
    }
    
    let wordCount = document.getElementById("charLimit").value;
    let word2Num = rand(0,5)
    wordStr += word2[word2Num]
    for(let j=0;j<wordCount-1;j++){
      let word1Num = rand(0,12)
      wordStr += word1[word1Num]
    }
    
    let pointCount = rand(2,5)
    let randomPick = wordStr+emojiStr+".".repeat(pointCount)
    value += randomPick
    emojiStr= ""
    wordStr = ""
  }
  let element=document.getElementById("main");
element.innerText = value
}
