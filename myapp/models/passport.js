const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./usermodel');
var flash = require('connect-flash');




  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    done(null, user.id); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  passport.deserializeUser((id, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    User.findById({"userid":id}, (err,user)=>{
        done(err, user);   // 여기의 user가 req.user가 됨
    })

  });

  passport.use('local-login', new LocalStrategy({ // local 전략을 세움
    usernameField: 'userid',
    passwordField: 'password',
    session: true, // 세션에 저장 여부
    passReqToCallback: true,
  }, (req, id, password, done) => {
    console.log(id);
    User.findOne({ "userid": id }, function(findError, user) {
    if (findError) return done(findError); // 서버 에러 처리
    if (!user) return done(null, false, { message: '존재하지 않는 아이디입니다' }); // 임의 에러 처리
    if(user.password!=password){
        return done(null,false, { message: '비밀번호가 틀렸습니다' });
    }
    return done(null,user);
    console.log(user);
    });
  }));

  passport.use('local-join', new LocalStrategy({
      usernameField:'userid',
      passwordField:'password',
      passReqToCallback:true
  }, function(req,id,password,done){
      console.log('local-join');
  }))

  module.exports=passport;
