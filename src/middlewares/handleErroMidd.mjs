export default function(err, req, res, next) {
    let status = err.hasOwnProperty('statusCode') ? err.statusCode : 500;
    let message = err.message;
    
    if(status === 401)
      message = 'Não autorizado.'
    
    if(status === 403)
      message = 'Acesso proibido.'


    console.log('Error Middlware' , status, message)
  
    res.status(status).send({
      success: false,
      message,
    });
  };