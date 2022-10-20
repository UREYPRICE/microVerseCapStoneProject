function myFunction() {
  const x = document.querySelector('.mobile-menu');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

myFunction();

const div = document.querySelector('.speakers-div');

div.innerHTML += `   <section class="speakers-section">

<div id="speakers-section" class="spearker-h">
  <h1 class="speaker-heading">Featured Speakers</h1>
  <div class="red-underline"></div>

</div>




<article>


    <div class="img-div">
      <img src="img/speaker_01.png" alt="">
    </div>

    <div class="info-div">
      <h2>Yochai Benkler</h2>
      <h3>Berkman Professor of Enterepreneurial Legal Studies at Harvard Law School</h3>
      <p>Benlder studies commans-based peer production, and published his seminal book The Wealth of Networks in
        2006.</p>
    </div>


</article>

<article>

 

    <div class="img-div">
      <img src="img/speaker_02.png" alt="">
    </div>

    <div class="info-div">
      <h2>Kilnam Chon</h2>
      <h3>Professor at Oxford University</h3>
      <p>As he is professor at Oxford , he opened Art Center Nabi, Korea first digital art institution in 2012, and is currently serving.</p>
    </div>


  
</article>



<article>



    <div class="img-div">
      <img src="img/speaker_03.png" alt="">
    </div>

    <div class="info-div">
      <h2>SohYeong Noh</h2>
      <h3>Trainer at Cambridge University</h3>
      <p>Layla Tretikov is the general secretary of the Cambridges Foundation, a non-profit organization that runs Wikipedia.</p>
    </div>


  
</article>



<article>

 

    <div class="img-div">
      <img src="img/speaker_04.png" alt="">
    </div>

    <div class="info-div">
      <h2>Julia Leda</h2>
      <h3>President Pirates of Europe</h3>
      <p>Developed Asias first Internet protocol network SDN and led Koreas first private line Internet connection in 1990, ushering in a full-fledged</p>
    </div>


  
</article>



<article>

  

    <div class="img-div">
      <img src="img/speaker_05.png" alt="">
    </div>

    <div class="info-div">
      <h2>Lila Tretikov</h2>
      <h3>Director of the Khan Foundation</h3>
      <p>European integration and online youth participation in politics and democracy are major concerns</p>
    </div>


  
</article>

<article>


    <div class="img-div">
      <img src="img/speaker_06.png" alt="">
    </div>

    <div class="info-div">
      <h2>Ryan Merkley</h2>
      <h3>CEO of the Mozilla Foundation</h3>
      <p>He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014.</p>
    </div>

  
</article>


</section>`;