import React, { Component } from 'react'
import { Form,FormControl,InputGroup } from 'react-bootstrap'
import stayle from '../css/Navbar.module.css';
import img1 from '../../img/dastur.png';
import img2 from '../img/siz.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Bosh1 extends Component {
    
    
    render() {
        return (
            <div>
                <div id={stayle.all} expand="lg"  className="mr-auto my-2 my-lg-0">
<div className={stayle.elips}></div>
<div className={stayle.dastur}>
    <img  variant="top" src={img1}  alt="BigCo Inc. logo" />
</div>
<div className={stayle.tayoq} >|</div>

<div className={stayle.dastur1}>
    <img src={img2}  alt="BigCo Inc. logo" />
</div>

<div className={stayle.search}>
<Form>
<InputGroup className="mb-3">
    <FormControl className={stayle.soz}
 style={{border:'none'}}
 placeholder="Qanday kurs o`rganmoqchisiz?"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    /><div className={stayle.sea}>
    <i class="fa fa-search"  aria-hidden="true"></i>
</div>
  </InputGroup>

</Form></div>

<div className={stayle.card1}>
<div className={stayle.card11}>Marketting</div>
<div className={stayle.som1}>250.000<span>UZS</span></div>
<div className={stayle.Sharx1}>Raqamli marketing bo'yicha 
to'liq kurs<span>|48 soat</span></div>
<div className={stayle.star1}>
<i class="fa fa-star"  aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<div className={stayle.top1}>4.1 <span>(560)</span></div>

</div>
</div>

<div className={stayle.card2}>
<div className={stayle.card12}>Dasturlash</div>
<div className={stayle.som2}>350.000<span>UZS</span></div>
<div className={stayle.Sharx2}>Java Spring bo’yicha to’liq
kurs(amaliy)<span>|64 soat</span></div>
<div className={stayle.star1}>
<i class="fa fa-star"  aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<div className={stayle.top1}>4.1 <span>(560)</span></div>

</div>
</div>

<div className={stayle.card3}>
<div className={stayle.card13}>Dizayn</div>
<div className={stayle.som3}>400.000<span>UZS</span></div>
<div className={stayle.Sharx3}>Illustrator 0 dan professionalgacha
to’liq kurs)<span>|72 soat</span></div>
<div className={stayle.star1}>
<i class="fa fa-star"  aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>

<div className={stayle.top1}>4.1 <span>(560)</span></div>
</div>
</div>

<div className={stayle.card4}>
<div className={stayle.card14}>Bizness</div>
<div className={stayle.som4}>250.000<span>UZS</span></div>
<div className={stayle.Sharx4}>Shaxsiy biznersni rivojlantirishda
e’tibor berish kerak bo’lgan<span>|48 soat</span></div>
<div className={stayle.star1}>
<i class="fa fa-star"  aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<i class="fa fa-star" aria-hidden="true"></i>
<div className={stayle.tor1}>4.1 <span>(560)</span></div>
</div>

</div>
 </div>




 
            </div>
        )
    }
}
