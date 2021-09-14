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
        const {id} = req.params
        const {type} = req.body
        let index = house.findIndex(h => h.id === +id)
        
        if (house[index].price === 0 && type === 'minus') {
            res.status(400).send("You can't do that!")
        }
         else if (type === 'plus') {
            house[index].price+=10000 
            res.status(200).send(house)
        } else if
            (type === 'minus') {
            house[index].price-=10000
            res.status(200).send(house)
        } if (house[index].price === 0 && type === 'minus') {
            res.status(400).send("You can't do that!")
        }
    },
    deleteHouse: (req, res) =>{
        const {id} = req.params
        let index = house.findIndex(elem => elem.id === +id)
        house.splice(index, 1)
        res.status(200).send(house)
    }
}



