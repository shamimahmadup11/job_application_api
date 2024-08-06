const Job = require("../model/job");
const JObmodel=require("../model/job")
const createJob =async(req, res)=>{
  // console.log(req.body);
 const response= await JObmodel.create(req.body)
//  console.log(response);
 res.json({
  success:true,
  message:"created job api"
 })
}
const listjob =async(req, res)=>{
  const minsalary=req.query.minsalary  || 0;

const listJob=await JObmodel.find({
  minsalary:{
    $gt:minsalary,
  },
  title:{
    $regex:new RegExp(`${req.query.title}`, "gi"),
  }

});
  res.json({
   success:true,
   message:"list job api",
   result:listJob
  })
 }
 const updatejob =async(req, res)=>{
  console.log(req.params.id)
   const newSalary=req.body.salary
  const updateObject={
    $set:{
      salary:newSalary,
    },
  }
  const filterObj={
    salary:90000,
  }
  // await JObmodel.findByIdAndUpdate(req.params.id, updateObject )
  await JObmodel.updateMany(filterObj, updateObject )
  res.json({
   success:true,
   message:"updated job api"
  })
 }
 const deletejob =async(req, res)=>{
  await JObmodel.findByIdAndDelete(req.params.id)
  res.json({
   success:true,
   message:"delete job api"
  })
 }

 const jobController={
  createJob,
  listjob,
  updatejob,
  deletejob
}

module.exports=jobController;