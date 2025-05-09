function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('user not found');
            resolve({username: 'eren'});
        }, 2000);
    });
}

function getUserAdresses(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('Error in getUserAdresses');
            resolve(['istanbul', 'ankara']);
        }, 1000);
    });
}

function getRestaruants(adresses) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['A restorani', 'B restorani', 'C restorani']);
        }, 1000);
    });
}

async function displayRestaurants(){
    try{
        const user = await getUser();
        const addresses = await getUserAdresses(user.username);
        const openRestaurants = await getRestaruants(addresses);
        document.body.append('acik restoranlar', openRestaurants.toString())
    }catch(error){
    console.log('error icersiinde: ',error);
    }

}

displayRestaurants();

