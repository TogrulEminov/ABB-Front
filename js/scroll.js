
{
    const nav = document.querySelector('#second-third-line-header');
    let prevScrollpos = window.pageYOffset;
    
    window.addEventListener('scroll', ()=>{
      let currentScrollPos = window.pageYOffset;
    
      if(prevScrollpos < currentScrollPos){
        nav.classList.add('hide');
      }else{
        nav.classList.remove('hide');
      }
      prevScrollpos = currentScrollPos;
    });
  
    }
    {
      const nav2=document.querySelector("#mobile-header-head-section")
      let prevScrollpos = window.pageYOffset;
    
    window.addEventListener('scroll', ()=>{
      let currentScrollPos = window.pageYOffset;
    
      if(prevScrollpos < currentScrollPos){
        nav2.classList.add('showhide')
      }
      else{
        nav2.classList.remove('showhide')
      }
    
      prevScrollpos = currentScrollPos;
    })
    }