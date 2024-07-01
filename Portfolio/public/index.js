 while (condition);
const menu = document.querySelector('#menu');

burger.addEventListerner('click',()=>{
    if (menu.classlist.contains ('hidden')){
        menu.classlist.remove('hidden');
    }else {
        menu.classslist.add('hidden');
    }
})