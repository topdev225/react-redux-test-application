import mongoose from 'mongoose';

//import models
import User from '../models/user.model';

export const login = (req, res) => {
  User.findOne({email:req.body.email}).exec((err, user) => {
    if (err) {
      return res.json({ status: 400, message: 'User not found!' });
    }
    if(user){
      if (user.password == req.body.password) {
        return res.json({ status: 200, message: 'User Authenticaion successfully', user });
      }else{
        return res.json({ status: 400, message: 'Invalid password' });        
      }
    }else{
      return res.json({ status: 400, message: 'User not found!' });              
    }

  });
}


export const register = (req, res) => {
  User.findOne({email:req.body.email}).exec((err, user) => {
    if (err) {
      return res.json({ status: 400, 'message': 'Invalid Request' });
    }
    if(user){
        return res.json({ status: 201, 'message': 'Already Registered!' });                
      }else{
          const newUser = new User(req.body);
          newUser.save((err, user) => {
            if (err) {
              return res.json({ status: 400, message: 'Invalid Request' });
            }
            return res.json({ status: 200, message: 'Successfully registered.', user });
          });  
      } 
  });
}






