const fetch = required('node-fetch')

const key = '3eaf282204a3f24a7ef8b03f0e555f5a'

const root = 'https://api.darksky.net/forecast'

module.exports = async function(req,res){
    try {
        const {lon,lat} = req.query
        const url = `${root}/${key}/${lat},${lon}`
        const r = await fetch(url)
        const weather = await r.json()
        res.status(200).send(weather)
    } catch(e) {
        res.status(500).send(e.message)
    }
}