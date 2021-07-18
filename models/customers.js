const mongoose=require('mongoose');

const Schema = mongoose.Schema;

let customerSchema = new Schema({
    
    name:String,
    email:String,
    team_name:String,
    mobile_number:String,
    shocker_brand:String,
    purchase_form:Boolean,
    service_form:Boolean,
    number_of_pairs:Number,
    type_of_service:String,
    type_of_shocker:String,
    problems_facing:String,
    part_type:String,
    number_of_peices:Number,
    other_requirement:String
  });

const customerModel=mongoose.model('customers',customerSchema);

module.exports=customerModel;