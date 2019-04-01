document.querySelector('.search').oninput = function(){
    let searchGood = this.value.toLowerCase().trim();
    let goods = document.querySelectorAll('.good');
    if (searchGood != ""){
        goods.forEach(function(elem){
            if (elem.innerText.toLowerCase().search(searchGood) == -1){
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }else{
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = illumination(str, elem.innerText.toLowerCase().search(searchGood), searchGood.length)
            }    
        });    
    }else{
        goods.forEach(function(elem){
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        });         
    }
}

function illumination(labelString, pos, length){
    return labelString.slice(0, pos) + '<mark>' + labelString.slice(pos, pos+length) + '</mark>' + labelString.slice(pos+length); 
}









