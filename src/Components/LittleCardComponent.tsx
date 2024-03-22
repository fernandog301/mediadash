import React from 'react'
import { Row, Col } from 'react-bootstrap'

const LittleCardComponent = (
    props:{
        description: string
        mediaIcon: string
        numberCount: string
        arrow: string
        value:string
        cardBackground: string
        pTagClass: string
        hOnetags: string
        valueClass: string
    }
) => {
  return (
    <div className={`p-4 mb-4 ${props.cardBackground}`} >

      <div className="">
        <Row>
        <Col className='d-flex justify-content-start align-items-end'>
        <p className={`${props.pTagClass} d-flex justify-content-center align-items-center `}>{props.description}</p></Col>   
        <Col className='d-flex justify-content-end align-items-start'>     
        <img className='d-flex justify-content-end' src={props.mediaIcon}  alt="Social Media Icon"/></Col>
        </Row>
      </div>

        <div className=''>
        <Row>
            <Col className='d-flex justify-content-start align-items-end'>
            <h1 className={`${props.hOnetags}`}>{props.numberCount}</h1>
            </Col>

            <Col className='d-flex justify-content-end align-items-end'>
            <img className='d-flex justify-content-center align-items-center' src={props.arrow} alt="" />
            <p className={`${props.valueClass} d-flex justify-content-center align-items-end`}>{props.value}</p>
            </Col>
            </Row>
        </div>

    </div>
  )
}

export default LittleCardComponent
