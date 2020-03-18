
import React, {PureComponent} from 'react'
import {Jumbotron, Grid, Row, Col, Image} from 'react-bootstrap'
import pic from '../../images/paint.jpg'

export default class Home extends PureComponent {
    render() {
      return (
        <div>
          <Grid>
            <Row>
              <Col sm={6} md={7}>
              <Jumbotron>
        <h2>"A picture is a poem without words."</h2>
        <p align="right"><h3>                        Horace    </h3></p>
        </Jumbotron>
					</Col>
          <Col sm={6} md={5}>
          <Image src={pic} responsive ></Image>
         </Col>
          </Row>
          </Grid>
        
         </div>
      )
    }
  }

