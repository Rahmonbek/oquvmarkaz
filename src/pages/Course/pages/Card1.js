import React, { Component } from 'react'
import 'antd/dist/antd.css';
import style from '../css/Card.module.css'
import { Drawer, Button } from 'antd';
import '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default class Card1 extends Component {
    state = { visible: false }; 
 showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
    render() {
       


        return (
            <div>
    <div className={style.cardall}>
<div style={{marginTop:'24px'}} className={style.dasturlash} >Dasturlash</div>
<div style={{ display:'flex', paddingLeft:'20px',paddingTop:'104px'}}>  
    
<div style={{ display:'block'}}>
<h6 style={{opacity:'0.7'}}>kurs narxlari</h6>
<h3 style={{fontWeight:'600'}}>250.000<span sytle={{fontSize: '14px',textAlign: 'left',fontWeight:'200'}}> uzs</span></h3>
</div>
<div style={{ display:'block', paddingLeft:'43px'}}>
<h6 style={{opacity:'0.7'}}>Kurs hajmi</h6>
<h3 style={{fontWeight:'600'}}>38 soat</h3>
</div>
</div>


<div style={{paddingTop:'71px',fontSize: '18px', paddingLeft:'24px'}}>Kurs bo`limlari:
     </div>


<Accordion style={{backgroundColor:' #F1F2F6'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox onClick={this.showDrawer} />}
            label="Dasturlashga kirish va o’rnatish jarayoni"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
          <div style={{ display:'flex', paddingLeft:'20px',paddingTop:'34px'}}>  
    
    <div style={{ display:'block'}}>
    <h6 style={{opacity:'0.7'}}>kurs narxlari</h6>
    <h3 style={{fontWeight:'600'}}>250.000<span sytle={{fontSize: '14px',textAlign: 'left',fontWeight:'200'}}> uzs</span></h3>
    </div>
    <div style={{ display:'block', paddingLeft:'43px'}}>
    <h6 style={{opacity:'0.7'}}>Kurs hajmi</h6>
    <h3 style={{fontWeight:'600'}}>38 soat</h3>
    </div>
    </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{backgroundColor:' #F1F2F6'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox onClick={this.showDrawer} />}
            label="Dasturda oddiy amallar bilan ishlash"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
          <div style={{ display:'flex', paddingLeft:'20px',paddingTop:'34px'}}>  
    
    <div style={{ display:'block'}}>
    <h6 style={{opacity:'0.7'}}>kurs narxlari</h6>
    <h3 style={{fontWeight:'600'}}>450.000<span sytle={{fontSize: '14px',textAlign: 'left',fontWeight:'200'}}> uzs</span></h3>
    </div>
    <div style={{ display:'block', paddingLeft:'43px'}}>
    <h6 style={{opacity:'0.7'}}>Kurs hajmi</h6>
    <h3 style={{fontWeight:'600'}}>38 soat</h3>
    </div>
    </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{backgroundColor:' #F1F2F6'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox onClick={this.showDrawer}  />}
            label=" OOP dasturlash asoslari"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
          <div style={{ display:'flex', paddingLeft:'20px',paddingTop:'34px'}}>  
    
    <div style={{ display:'block'}}>
    <h6 style={{opacity:'0.7'}}>kurs narxlari</h6>
    <h3 style={{fontWeight:'600'}}>150.000<span sytle={{fontSize: '14px',textAlign: 'left',fontWeight:'200'}}> uzs</span></h3>
    </div>
    <div style={{ display:'block', paddingLeft:'43px'}}>
    <h6 style={{opacity:'0.7'}}>Kurs hajmi</h6>
    <h3 style={{fontWeight:'600'}}>38 soat</h3>
    </div>
    </div>
          </Typography>
        </AccordionDetails>
      </Accordion>














    </div> <Drawer
          title="Basic Drawer"
          placement="bottom"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute', width:'20%'}}
        >
          <p style={{display:'flex'}}>
          <Button type="primary" style={{ height:'50px'}} >
            <p style={{fontSize:'22px',display:'flex',justifyContent:'center'}} >  sotib olish  |  150.000  uzs  </p>
          </Button>
         
          </p>
        </Drawer>  
            </div>
        )
    }
}
