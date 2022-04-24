const newImage=(url, left, bottom) => {

    let newImage = document.createElement('img')
newImage.src = url
newImage.style.position = 'fixed'
newImage.style.left = left + 'px'
newImage.style.bottom = bottom + 'px'
document.body.append(newImage);


return newImage
}
let greenCharacter = document.createElement('img')
    greenCharacter.src = 'assets/green-character.gif'
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = '100px'
    greenCharacter.style.bottom = '100px'
    document.body.append(greenCharacter)

//assets/tree.png (200px from the left, 300px from the bottom)
newImage('assets/tree.png', '200', '300');
//assets/pillar.png (350px from the left, 100px from the bottom)
newImage('assets/pillar.png', '350', '100');
//assets/crate.png (150px from the left, 200px from the bottom)
newImage('assets/crate.png', '150', '200');
//assets/well.png (500px from the left, 425px from the bottom)
newImage('assets/well.png', '500', '425');


const newItem=(url, left, bottom) => {

    let newItem = document.createElement('img')
newItem.src = url
newItem.style.position = 'fixed'
newItem.style.left = left + 'px'
newItem.style.bottom = bottom + 'px'
document.body.append(newItem);


return newItem;
}




// assets/sword.png placed 500px from the left and 405px from the bottom.
newItem('assets/sword.png', '500', '405')
//assets/shield.png (165px from the left, 185px from the bottom)
//azat there is a typo for the shield.png
newItem ('assets/sheild.png', '165','185')
//assets/staff.png (600px from the left, 100px from the bottom)
newItem('assets/staff.png', '600', '100')

newItem.addEventListener('click', function() {
    newItem.remove()})

/*
let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()

*/








