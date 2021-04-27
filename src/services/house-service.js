const HOUSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001304749/houses";

export const findAllHouses = () =>
    fetch(HOUSES_URL)
        .then(response => response.json())

export const deleteHouse = (houseId) =>
    fetch(`${HOUSES_URL}/${houseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const createHouse = (house) =>
    fetch(HOUSES_URL, {
        method: 'POST',
        body: JSON.stringify(house),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateHouse = (houseId,house) =>
    fetch(`${HOUSES_URL}/${houseId}`, {
        method: 'PUT',
        body: JSON.stringify(house),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const api = {
    findAllHouses: findAllHouses,
    deleteHouse: deleteHouse,
    createHouse,
    updateHouse
}
export default api;