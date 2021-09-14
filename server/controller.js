const { resolveSoa } = require('dns')
const house = require('./db.json')
let globalId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(house)
    },
    createHouse: (req, res) => {
        const {address, price, imgURL} = req.body
        let newHouse = {
            id: globalId,
            address,
            price,
            imgURL
        }  
        house.push(newHouse)
            globalId++
            res.status(200).send(house)
    },
    updateHouse: (req, res) => {

    },
    deleteHouse: (req, res) =>{
        const {id} = req.params
        let index = house.findIndex(elem => elem.id === +id)
        house.splice(index, 1)
        res.status(200).send(house)
    }
}



