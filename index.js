const newImage=(url, left, bottom) => {

    let newImage = document.createElement('img')
newImage.src = url
newImage.style.position = 'fixed'
newImage.style.left = left + 'px'
newImage.style.bottom = bottom + 'px'
document.body.append(newImage);


return newImage
}

let url='assets/boulder.png'
let left='400'
let bottom='100'
newImage(url, left, bottom);

//assets/tree.png (200px from the left, 300px from the bottom)
newImage('assets/tree.png', '200', '300');
//assets/pillar.png (350px from the left, 100px from the bottom)
newImage('assets/pillar.png', '350', '100');
//assets/crate.png (150px from the left, 200px from the bottom)
newImage('assets/crate.png', '150', '200');
//assets/well.png (500px from the left, 425px from the bottom)
newImage('assets/well.png', '500', '425');

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})






let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)


/*let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree) */

