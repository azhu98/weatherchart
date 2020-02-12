const fetch = require('node-fetch')

const root = 'https://api.darksky.net/forecast'

const key = '3eaf282204a3f24a7ef8b03f0e555f5a'

module.exports = async function(req, res) {
  const {lat, lon} = req.query
  try {
    const url = `${root}/${key}/${lat},${lon}`
    const r = await fetch(url)
    const json = await r.json()
    res.status(200).send(json)
  } catch(e) {
    res.status(500).send('fail: '+e.message)
  }
}