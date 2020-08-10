const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./usermodel');
var flash = require('connect-flash');



  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    done(null, user.id); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  passport.deserializeUser((id, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    User.findById(id, (err,user)=>{
        done(err, user);   // 여기의 user가 req.user가 됨
    })

  });

  passport.use('local-login', new LocalStrategy({ // local 전략을 세움
    usernameField: 'id',
    passwordField: 'password',
    // session: true, // 세션에 저장 여부
    passReqToCallback: true,
  }, (req, id, password, done) => {
    User.findOne({ id: id }, (findError, user) => {
      if (findError) return done(findError); // 서버 에러 처리
      if (!user) return done(null, false,req.flash('loginError','No user found.')); // 임의 에러 처리
      if(user.password!=password){
          return done(null,faluse, req.flash('loginError','passord does not match.'));
      }
      return done(null,user);
    });
  }));


  module.exports=passport;
