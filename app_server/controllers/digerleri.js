const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında', footer:'Alperen COSKUN' });
}

module.exports={

	hakkinda
}
