const express = require('express'),
  router = express.Router(), 
  surveyModel = require('../models/surveyModel')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const classInfoData = await surveyModel.getAllTopicData();
  const classStatuses = await surveyModel.getClassStatuses();

  res.render('template', 
    {locals:{
      title: 'Class Survey',
      classInfoData: classInfoData,
      classStatuses: classStatuses
    }, 
    partials: {
      partial: 'partial-index'
    }
  });
});

router.post('/update', async function(req, res){
  console.log(req.body); // finish this
})

module.exports = router;
