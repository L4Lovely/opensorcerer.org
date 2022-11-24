/* initialization of variable data */
let projects_B_elements = document.querySelectorAll(".divbutton_sub_2");
let media_B_elements    = document.querySelectorAll(".divbutton_sub_3");
let about_B_elements    = document.querySelectorAll(".divbutton_sub_4");

let sidebar             = document.getElementById('BAR_sidebar');

let home_button         = document.getElementById('B_home');
let proj_button         = document.getElementById("B_projects");
let media_button        = document.getElementById("B_media");
let misc_button         = document.getElementById('sub_d1');
let digitalArt_button   = document.getElementById('sub_d0');
let about_button        = document.getElementById('B_about');
let nav_button          = document.getElementById('B_nav');

let pj_subDIV           = document.getElementById('pj_subDIV_ID');
let md_subDIV           = document.getElementById('md_subDIV_ID');
let ab_subDIV           = document.getElementById('ab_subDIV_ID');

let content_bar         = document.getElementById('content_0');

let navBstate = 'in';

/* initialization of dormant functions */
async function _asyncInject(pagePATH, targetID){
    const response = await fetch(pagePATH);
    const body     = await response.text();
    document.querySelector(targetID).innerHTML = body;
} 
function _accordion_toggle(elList, elDIV){
    for (let i = 0; i < elList.length; i++){
        elList[i].classList.toggle('subelements');
    }
    elDIV.classList.toggle('subDIV_expand');
}
function _hideInactiveEls(currEls){
    let excl_el = [currEls];
    let incl_el = [projects_B_elements, media_B_elements, about_B_elements];
    let hide_el = incl_el.filter(x => !excl_el.includes(x));
    for (let j = 0; j < hide_el.length; j++){
        for (let i = 0; i < hide_el[j].length; i++){
            hide_el[j][i].classList.remove('subelements')
        }
    }
}
function nav_clicked(){
    let act, cact = '';
    navBstate  === 'in' ? (navBstate  = 'out'):(navBstate = 'in');
    navBstate  !== 'in' ? (act = 'pushout', cact = 'pushin'):(act = 'pushin', cact = 'pushout');
    nav_button.classList.remove('navButton_' + cact);
    nav_button.classList.toggle('navButton_' + act);
    sidebar.classList.remove('sidebar_' + cact);
    sidebar.classList.toggle('sidebar_' + act);
}
function _toggleCommander(elList, elDIV){
    _hideInactiveEls(elList);
    _accordion_toggle(elList,elDIV);
}

proj_button.addEventListener('click',()=>{
    _toggleCommander(projects_B_elements,pj_subDIV);
    }
)
media_button.addEventListener('click',()=>{
    _toggleCommander(media_B_elements,md_subDIV);
    }
)
about_button.addEventListener('click',()=>{
    _toggleCommander(about_B_elements,ab_subDIV);
    }
)

digitalArt_button.addEventListener('click',()=>{
    _asyncInject('HTML/digitalArt.html', '#content_0');
})
home_button.addEventListener('click',()=>{
    _asyncInject('HTML/welcome.html', '#content_0');
    _hideInactiveEls('');
})

nav_button.addEventListener('click', nav_clicked);

/* INIT LOAD */
_asyncInject('HTML/welcome.html', '#content_0');