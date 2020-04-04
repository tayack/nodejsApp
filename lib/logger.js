module.exports=function(req,res,next){
    var date =(new Date()).toISOString();
    var method=req.method;
    var url=req.url;
    console.log("["+date+"] "+method+" "+url);
    next();
}