let emoji = "❤,💖,💕,❤️‍🔥,❤️‍🩹,💓".split(",")
let kor_word1 = 
  "아,앗,앙,오,옷,우,웅,웃,으,읏,응,잇,엣".split(",")
let kor_word2 =
  "흐,하,헤,핫,호,흣".split(",")
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
funtion create(){
  let value = ""
  let emojiNum = []
  let word1Num = []
  let word2Num = []
  for(let i=0;i<rand(1,39);i++){
    let emojiCount = rand(0,2)
    for(let j=0;j<emojiCount;j++){
      let emojiNum = rand(0,5)
    }
    let wordCount = rand(1,4)
    for(let j;j<wordCount;j++){
      let word1Num = rand(0,12)
      let word2Num = rand(0,5)
    }
    let pointCount = rand(2,5)
    randomPick = null
    value += randomPick
    emojiNum, word1Num, word2Num = [],[],[]
  }
}
