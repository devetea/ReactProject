const express = require('express')//익스프레스 모듈을 가져옴 
const app = express()//새로인 익스프레스 앱 생성
const port = 3000//포트번호 (백서버)


//###################################################################
//몽고DB연결
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:1234@reactdb.cxs6c.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true //, useCreateIndex: true, useFindAndModify: false << 두 옵션은 몽고DB 6버전에서 지원안함으로 지움 
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
//###################################################################
//루트 디렉토리에 오면 아래 문구 출력
app.get('/', (req, res) => {
  res.send('Hello World!~ 안녕하세여!!!123123!')
})

//지정한 포트 실행 > 실행 시 문구 출력
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})