

var clientId='af2to134op81557smc4lidr80q12so'
var authToken="Bearer 1lh1ca7kbnjlej5wj4o1b753p6j4dp"
var limit=1
var apiUrl=`https://api.twitch.tv/helix/streams/?game=League%20of%20Legends&first=1`


function getData(cb){
  $.ajax({
    url:apiUrl,
    headers:{
      'Client-ID':'af2to134op81557smc4lidr80q12so',
      "Authorization":"Bearer 1lh1ca7kbnjlej5wj4o1b753p6j4dp"
    },
    success:response=>{
      console.log(response);
      // cb(null,response)  //null表error
    }
  })
}
getData()

// var xhr=new XMLHttpRequest();
// xhr.open("GET",apiUrl,true); //true是什麼？
// xhr.setRequestHeader('Client-ID','af2to134op81557smc4lidr80q12so')
// xhr.setRequestHeader("Authorization","Bearer 1lh1ca7kbnjlej5wj4o1b753p6j4dp")
// xhr.send();
// //重點居然是bearer的B要大寫！！ twitch你也設計貼心一點啊！

// xhr.onreadystatechange=function(){
//   if(this.readyState===4 && this.status===200){
//     var data=JSON.parse(this.responseText) //記得取回的資料都是JSON格式，要轉換
//     console.log(data);
//     // cb(null,response);
//   }
// }

//好不容易得到的Oauth token
// {
//   "access_token": "1lh1ca7kbnjlej5wj4o1b753p6j4dp",
//   "expires_in": 4823553,
//   "token_type": "bearer"
// }
