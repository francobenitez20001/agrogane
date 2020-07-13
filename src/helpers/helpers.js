export function setActiveItem(url){
    for (let index = 0; index < document.getElementsByClassName('item-menu').length; index++) {
        document.getElementsByClassName('item-menu')[index].classList.remove('active');
    }
    if(url.includes('/servicios')){
        document.getElementsByName('servicios')[0].classList.add('active');
        return;
    }else if(url.includes('/nosotros')){
        document.getElementsByName('nosotros')[0].classList.add('active');
        return;
    }else if(url.includes('/articulos')){
        document.getElementsByName('articulos')[0].classList.add('active');
        return;
    }else if(url.includes('/caso-exito')){
        document.getElementsByName('caso-exito')[0].classList.add('active');
        return;
    }
    return document.getElementsByName('inicio')[0].classList.add('active');
}    
