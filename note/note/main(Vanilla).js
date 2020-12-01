var clientId = 'af2to134op81557smc4lidr80q12so'
var authToken = "Bearer 1lh1ca7kbnjlej5wj4o1b753p6j4dp"
let apiURL = `https://api.twitch.tv/helix/streams/?game=League%20of%20Legends&first=10`

let isLoading = true

function getData(cb) {
  isLoading=true
  var xhr = new XMLHttpRequest()
  xhr.open('GET', apiURL, true);
  xhr.setRequestHeader('Client-ID', clientId)
  xhr.setRequestHeader('Authorization', authToken)
  
  xhr.send();
  xhr.onload = () => { //監聽請求是否成功

    if (xhr.status >= 200 && xhr.status < 400) {
      //2xx和3xx
      var res = JSON.parse(xhr.responseText)
      cb(null, res)
    }
  }
}

function cb(err, res) {
  const { data } = res
  for (d of data) {
    const row = document.querySelector('.row')
    const div = document.createElement('div')
    row.appendChild(div)
    //要先append div到.row element裡面的原因是因為outerHTML需要有parent node
    //報錯：Failed to set the 'outerHTML' property on 'Element': This element has no parent node.
    div.outerHTML = renderCol(d)

  }
  isLoading = false
}

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

document.addEventListener('DOMContentLoaded', function () {
  getData(cb)
  window.addEventListener('scroll', function () {
    if ((document.documentElement.scrollTop + window.innerHeight) > (document.documentElement.scrollHeight - 100)) {
      
      if (!isLoading) {
        getData(cb)
      }
    }
  })
})
//DOM的scroll監聽事件