module.exports = function(app)
{

    app.get('/order',(req,res,next) =>{
        res.render('Home.ejs');
    });
}