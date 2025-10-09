document.addEventListener('DOMContentLoaded',function(){
  const img = document.querySelector('.avatar');
  if(img && img.getAttribute('src') === 'avatar-placeholder.png'){
    try{
      const c = document.createElement('canvas');
      const size = 480;
      c.width = size; c.height = size;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#081225'; ctx.fillRect(0,0,size,size);
      ctx.fillStyle = '#9be3ff';
      ctx.font = 'bold 140px system-ui';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('H2', size/2, size/2);
      img.src = c.toDataURL();
    }catch(e){}
  }
});
