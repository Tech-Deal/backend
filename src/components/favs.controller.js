const { query } = require('../database')
const { Favs } = require('../model/favs')



const addFavs = async (req, res) => {
  try {
    const favs = await Favs.create({
      user_id: req.params.user_id,
      product_id: req.body.product_id,
      status: true
    })
    res.json({
      status: 201,
      body: favs
    })
  } catch (error) {
    console.log(error)
    res.json({
      error: 'Error add to favs'
    })
  }
}


const getFavs = async (req, res) => {
  const user_id = parseInt(req.params.user_id)
  try {
    const favs = await Favs.findAll({
      where: {
        user_id: user_id
      }
    })
    res.json({
      body: favs
    })

  } catch (e) {
    res.json({
      error: e
    })
  }


}



const removeFavs = async (req, res) => {
  try {
    if (req.query.status === 'false') {
      var status = false
    } else {
      var status = true
    }

    const favs = await Favs.update({
      status: status
    }, {
      where: {
        id: req.params.favs_id
      }
    })
    res.json({
      status: 201,
      body: favs
    })
  } catch (error) {
    console.log(error)
  }
}




module.exports = {
  addFavs,
  removeFavs,
  getFavs
}