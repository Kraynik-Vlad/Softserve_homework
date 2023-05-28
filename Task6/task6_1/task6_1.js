function task6_1(){
    let listItems = document.querySelectorAll('#list li')
    let itemsArray = Array.from(listItems);

    let firstItem = itemsArray[0].textContent;
    let secondItem = itemsArray[4].textContent;
    let thirdItem = itemsArray[1].textContent;
    let fourtItem = itemsArray[3].textContent;
    let fiveItem = itemsArray[2].textContent;

    const result = `${firstItem}, ${secondItem}, ${thirdItem}, ${fourtItem}, ${fiveItem}`;
    console.log(result );
}