function deleteLi(){
    let listCar = document.getElementById('carList');
    let index = listCar.selectedIndex;

    if(index !== 0){
        listCar.remove(index);
    }
}