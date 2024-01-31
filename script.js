/* CUSTOM CODE */
const style = `
<style>
.h3.rte--block {
    font-size: 18px;
}
div.rte-setting.rte--block.text-spacing > p {
    font-size: 12px;
}
   .my-container {
      display: flex;
      align-items:center;
    }
.my-bg{
background-color:#F8F8F8;
}
    .my-column {
      flex: 1;
      box-sizing: border-box;
    }

    .my-box {
      background-color: #fff;
	padding:60px;
      border-radius: 24px;
          display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    }
 .my-box h2{
 color: #000;
font-family: Montserrat;
font-size: 43px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 5.76px;
text-align:center;
 }
 .my-box p{
 color: #D1A333;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align:center;
 }
 
 .my-btn{
 border-radius: 40px;
background: #E7B56A;
padding: 20px 90px;
margin:40px auto 20px auto;
text-align:center;

font-family: Montserrat;
font-size: 19px;
font-style: normal;
font-weight: 700;
line-height: normal;
 }
 .my-btn a{
 color:#fff;
 }
 .rating{
 display: flex;
align-items:flex-start;
justify-content:center;
gap: 16px;
 }
 .star-rating{
display: flex;
flex-direction:row;
 }
 .star{
 width: 20px;
height: 20px;
 }
 .reviews{
 color: #D1A333;
 }
    .my-column img {
      max-width: 100%;
      height: auto;
      display: block;
     
    }
   
    
    
    @media only screen and (min-width: 1000px) and (max-width: 1180px) {
 
.my-box{
padding:5px;

}

.my-container {
    padding: 20px 0;
}
}


@media only screen and (max-width:1000px){
  .my-container {
        flex-direction: column;
      }

      .my-column {
        padding: 10px;
      }
      
    
.my-box{
padding:5px;
}

.my-box h2{
font-size:25px;
}

.my-box p{

font-size:14px;
}
.my-btn{

margin: 15px 0 10px 0;
padding: 15px 50px;
font-size: 15px;
}

.my-column .image-2{
display:none;
}

}
   
</style>
`;
const new_elm_html = () => `
  <div class="my-container my-bg">
    <div class="my-column">
      <img src="https://i.ibb.co/L8bqkwS/screenshot2024-01-28212509-removebg-preview-1.png"  alt="Image 1">
    </div>
    <div class="my-column">
      <div class="my-box">
        <h2>BEST AIRSTYLER</h2>
        <p>We’ve got the best Airstyler for your Hair Style</p>
        <button class="my-btn"><a href="https://www.travx.nl/">SHOP NOW SALE</a></button>
         <div class="rating">
      <p>4.9/5</p>
          <div class="star-rating">  
          <img class="star" src="https://i.ibb.co/0trJzph/star-5-1bb.png" alt="Star">
            <img class="star" src="https://i.ibb.co/0trJzph/star-5-1bb.png" alt="Star">
            <img class="star" src="https://i.ibb.co/0trJzph/star-5-1bb.png" alt="Star">
            <img class="star" src="https://i.ibb.co/0trJzph/star-5-1bb.png" alt="Star">
            <img class="star" src="https://i.ibb.co/0trJzph/star-5-1bb.png" alt="Star"> 
            </div>
             <p><a class="reviews" href="https://www.travx.nl/">(1286 reviews)</a></p>
          </div>
      </div>
    </div>
    <div class="my-column">
      <img class="image-2" src="https://i.ibb.co/yFX5xW6/screenshot2024-01-28213916-removebg-preview-1.png" alt="Image 2">
    </div>
  </div>

<div id="shopify-section-template--18800983507211__611371b3-e165-4bc2-8d1b-70fb0da24512" class="shopify-section">

<div class="index-section color-scheme-1">
<h2 class="header__title section-header__title" style="margin-bottom:20px;">
     ONLY AT TRAVX
    </h2>
<div class="scheme-none"></div><div class="page-width"><div class="grid grid--uniform grid--flush-bottom"><div class="grid__item medium-up--one-third text-center"><div style="margin: 0 auto; max-width: 80px;"><div class="image-wrap text-spacing" style="height: 0; padding-bottom: 100.0%;"><img loading="lazy" class=" lazyautosizes lazyloading" data-widths="[180, 360, 540, 720, 900, 1080]" data-aspectratio="1.0" data-sizes="auto" alt="VANDAAG BESTELD = MORGEN IN HUIS!" src="//www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_{width}x.gif?v=1679986065" data-srcset="//www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_180x.gif?v=1679986065 180w, //www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_360x.gif?v=1679986065 360w, //www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_540x.gif?v=1679986065 540w, //www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_720x.gif?v=1679986065 720w, //www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_900x.gif?v=1679986065 900w, //www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_1080x.gif?v=1679986065 1080w" sizes="80px" srcset="//www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_180x.gif?v=1679986065 180w, //www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_360x.gif?v=1679986065 360w, //www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_540x.gif?v=1679986065 540w, //www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_720x.gif?v=1679986065 720w, //www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_900x.gif?v=1679986065 900w, //www.travx.nl/cdn/shop/files/VANDAAG_BESTELD_MORGEN_IN_HUIS_1080x.gif?v=1679986065 1080w">
                </div></div><div class="h3 rte--block">GRATIS VERZENDING</div><div class="rte-setting rte--block text-spacing"><p>WIJ BIEDEN GRATIS EEN VERZEKERDE VERZENDING BINNEN NL &amp; BE<br></p></div></div><div class="grid__item medium-up--one-third text-center"><div style="margin: 0 auto; max-width: 80px;"><div class="image-wrap text-spacing" style="height: 0; padding-bottom: 100.0%;"><img loading="lazy" class=" lazyautosizes lazyloading" data-widths="[180, 360, 540, 720, 900, 1080]" data-aspectratio="1.0" data-sizes="auto" alt="BESTEL NU, BETAAL LATER" src="//www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_{width}x.gif?v=1679986159" data-srcset="//www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_180x.gif?v=1679986159 180w, //www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_360x.gif?v=1679986159 360w, //www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_540x.gif?v=1679986159 540w, //www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_720x.gif?v=1679986159 720w, //www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_900x.gif?v=1679986159 900w, //www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_1080x.gif?v=1679986159 1080w" sizes="80px" srcset="//www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_180x.gif?v=1679986159 180w, //www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_360x.gif?v=1679986159 360w, //www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_540x.gif?v=1679986159 540w, //www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_720x.gif?v=1679986159 720w, //www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_900x.gif?v=1679986159 900w, //www.travx.nl/cdn/shop/files/BESTE_NU_BETAAL_LATER_1080x.gif?v=1679986159 1080w">
                </div></div><div class="h3 rte--block">BESTEL NU, BETAAL LATER</div><div class="rte-setting rte--block text-spacing"><p>KLARNA GEEFT DE EXTRA FLEXIBILITEIT OMDAT U BINNEN 30 DAGEN KUNT BETALEN. U KUNT GEMAKKELIJK TESTEN ZONDER TE BETALEN</p></div></div><div class="grid__item medium-up--one-third text-center"><div style="margin: 0 auto; max-width: 80px;"><div class="image-wrap text-spacing" style="height: 0; padding-bottom: 100.0%;"><img loading="lazy" class=" lazyautosizes lazyloading" data-widths="[180, 360, 540, 720, 900, 1080]" data-aspectratio="1.0" data-sizes="auto" alt="30 DAGEN TESTTIJD" src="//www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_{width}x.gif?v=1679986241" data-srcset="//www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_180x.gif?v=1679986241 180w, //www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_360x.gif?v=1679986241 360w, //www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_540x.gif?v=1679986241 540w, //www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_720x.gif?v=1679986241 720w, //www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_900x.gif?v=1679986241 900w, //www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_1080x.gif?v=1679986241 1080w" sizes="80px" srcset="//www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_180x.gif?v=1679986241 180w, //www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_360x.gif?v=1679986241 360w, //www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_540x.gif?v=1679986241 540w, //www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_720x.gif?v=1679986241 720w, //www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_900x.gif?v=1679986241 900w, //www.travx.nl/cdn/shop/files/14_DAGEN_RETOURBELEID_1080x.gif?v=1679986241 1080w">
                </div></div><div class="h3 rte--block">30 DAGEN TESTTIJD</div><div class="rte-setting rte--block text-spacing"><p>NIET TEVREDEN? - GEEN PROBLEEM! WIJ BIEDEN EEN 30 DAGEN TESTBELEID ALS U NIET TEVREDEN BENT MET UW BESTELLING</p></div></div></div>
  </div>
</div></div>

`;
const interval = setInterval(() => {
	const img_elm = document.querySelector('.index-section--hero');
	const head = document.querySelector('head');
	if (img_elm && head) {
		head.insertAdjacentHTML('beforeend', style);
		img_elm.innerHTML = new_elm_html();
		clearInterval(interval);
	}
  // Select all elements with the specified ID
var sectionsToHide = document.querySelectorAll("#shopify-section-template--18800983507211__611371b3-e165-4bc2-8d1b-70fb0da24512");
// Check if there is more than one element with the same ID
if (sectionsToHide.length > 1) {
        // Hide the second element (index 1)
        sectionsToHide[1].style.display = "none";
    }

}, 10);
