const errorHandler = (err, req, res, next)=>{
    const statusCode= res.statusCode? statusCode:500;

    switch(statusCode){
        case 400:
            res.json({title: "Validation Failed",message: err,message, stackTrace:err,stackTrace});
        break;
        case 500:
            res.json({title:"Not Found",message: err,message, stackTrace:err,stackTrace});
            break;
    }

   
};

module.exports= errorHandler;