var $=require('jquery')
var i18n={
  en:require('../i18n/lang-eng'),
  zh:require('../i18n/lang-zh-tw'),
  th:require('../i18n/lang-th'),
}

let nowIndex = 0
//是否正在等待請求返回
let isLoading = false
var clientId = 'af2to134op81557smc4lidr80q12so'
var authToken ="Bearer 1lh1ca7kbnjlej5wj4o1b753p6j4dp"
let apiURL
let Lang='zh'

function changeLang(lang){
  Lang=lang
  $('.title h1').text(i18n[lang].title)
  $('.row').empty()  
  getData(Lang,callback)
  
  
}

//bug：
// 當參數叫cb，真正要調用的函數也叫cb，編譯出現問題！！
function getData(lang, cb) {
  apiURL = `https://api.twitch.tv/helix/streams/?game=League%20of%20Legends&first=10&offset=${nowIndex}&language=${lang}`
  isLoading = true;
  $.ajax({
    url: apiURL,
    headers: {
      'Client-ID': clientId,
      'Authorization': authToken,
    },
    success: (res) => {
      cb(null, res);
    },
    error: (err) => {
      cb(err)
    }
  })

}

function callback(err, res) {
  if (err) {
    console.log(err)
  }
  const { data } = res
  for (d of data) {
    $('.row').append(renderCol(d))
  }
  isLoading = false
  nowIndex+=10
  // 目標：整個畫面出現時，有漸進式效果（效果不好）
  //JQuery不能選到偽元素，因為偽元素並不是真正的DOM，JS無法存取
  // $('.wrap::before').css('opacity','0')
}

$(document).ready(function(){
  getData(Lang,callback);

  $(window).scroll(()=>{
    
    console.log(Lang)
    if ($(window).scrollTop() + $(window).height() > ($(document).height() - 50) && !isLoading) {    
      getData(Lang,callback)
    }
  })
  $('.zh').click(()=>{
    changeLang('zh')
  })
  $('.en').click(()=>{
    changeLang('en')
  })
  $('.th').click(()=>{
    changeLang('th')
  })


})


//成功將html字串加到index.html
function renderCol(d) {
  return `
      <a href="https://www.twitch.tv/${d.user_name}">
        <div class="col">
          <div class="preview">
            <img src="${(d.thumbnail_url).replace('-{width}x{height}', '')}" onload="this.style.opacity=1">
          </div>    
          <div class="bottom">
            <div class="avatar">
              <img src="./static/pics/avator.png" alt="${d.user_name}" >
            </div>
            <div class="intro">
              <div class="channel-name">${d.title}</div>
              <div class="user-name">${d.user_name}</div>
            </div>
          </div>
        </div>
      </a>`
}











