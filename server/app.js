import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import bb from 'express-busboy';
import proxy from 'express-http-proxy';

const PARAM1 = process.env.PARAM1;
console.log('PARAM1', PARAM1);
const PARAM2 = process.env.PARAM2;
console.log('PARAM2', PARAM2);
const BASE_PATH = PARAM1 && PARAM2 ? `/${PARAM1}/${PARAM2}/` : '/';

// import routes
import Routes from './routes';

// define our app using express
const app = express();

// express-busboy to parse multipart/form-data
bb.extend(app);

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views engine', 'ejs');

// PROXY BEGIN
// app.use('/p1/p2', proxy('localhost:3001'));

app.use(`/assets`, proxy('localhost:3001'));

app.use(`/sockjs-node`, proxy('localhost:3001', {
    proxyReqPathResolver: function(req) {
        console.log(req.originalUrl);
        return Promise.resolve(req.originalUrl);
    }
}));
// PROXY END

// set the port
const port = process.env.PORT || 3000;

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/expense_db', {
  useMongoClient: true,
});

// add Source Map Support
SourceMapSupport.install();

app.use('/api', Routes);

// SERVED PAGES
app.get(['/', '/expenses', '/login', '/register'], (req,res) => {
  return res.render('index.html.ejs', {
      test: 'test text',
      basePath: BASE_PATH
  });
});

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});



// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
