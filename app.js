const clickLocations = () => {
    const locations = document.querySelector('.locations')
    locations.scrollIntoView({behavior: "smooth", alignTo: true});
}
const clickBenefits = () => {
    const benefits = document.querySelector('.benefits')
    benefits.scrollIntoView({behavior: "smooth", alignTo: true});
}
const clickContact = () => {
    const contact = document.querySelector('.contact')
    contact.scrollIntoView({behavior: "smooth", alignTo: true});
}
window.onscroll = function(){
     const y = this.scrollY;
     const main_head = document.querySelector('.main-head');
     if(y > 0){
          main_head.style.opacity = "0.6";
     }else{
          main_head.style.opacity = "1";
     }
}


