import React, {PureComponent} from 'react'
import {Grid, Row, Col, PanelGroup, Panel, Jumbotron, Image} from 'react-bootstrap'
import pic from '../../images/logo.jpg'

export default class About extends PureComponent {
    render() {
      return (
        <Grid>
          <Row>
            <Col sm={6} md={8} >
              <PanelGroup accordion id="accordion-example">
                <Panel id="collapsible-panel-example-2" defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle>Our Story</Panel.Title>
                  </Panel.Heading>        
        
                    <Panel.Collapse>
                      <Panel.Body> 
                      <p>We believe every child is born with the power to create, and that power should be released early and developed wisely. Yes, we teach drawing lessons! </p>
                      <p>Our classes are geared towards teaching creativity for life. We seek to develop and strengthen creative skills, to nurture a sense of self-esteem and confidence as well as awareness of aesthetics and beauty. We actively encourage expression and creative thinking while stimulating children's imagination.
                      We introduce students to the fundamentals of art - figurative drawing, painting, composition, proportions, the color theory, perspective. We also teach about famous artists and art movements. Inspired by well-known paintings to understand the artist’s style, children learn to appreciate art history, recognizing that they are part of an ongoing tradition in art.</p>
                      <p>The teacher and founder of Draw to Grow - Elena Belin, holds a Master's Degree in Fine Arts and Art Education from Sofia University. She started the Art Studio in order to share her practical professional skills and love of art. Elena Belin believes that if children look at artworks and think of artists as real people, if they are given the opportunity to explore new ideas, travel through art history, try different materials and techniques, then the exciting world of art will be open to them for the rest of their lives.</p>
                      </Panel.Body>
                    </Panel.Collapse> 
                </Panel>

                <Panel eventKey="2">
                  <Panel.Heading>
                    <Panel.Title toggle>Our Schedule</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <p> Mondays - 3:30 - 4:30 pm: Art adventure for kids age 5-7 years.</p>
                    <p> Tuesdays - 4:30-6pm; Advanced class for kids age 11 to 14 years.</p>
                    <p>Thursdays - 4:30-6pm; Art fundamentals for kids age 7 to 11 years.</p>
                    <p>Saturdays - 10:30-11:30am; Art adventure for kids age 5-7 years.</p>
                    <p>Saturdays - 12 - 1:30pm; Art fundamentals for kids age 7-11 years.</p>
                    <p>Saturdays - 3 - 5pm; Drawing from direct observation for students 14 years and up.</p>
                    <p>Join us for a wonderful, colorful adventure into the world of art. </p>
                    <p>Register today at 781-266-8378, contact@drawtogrow.com </p>
                  </Panel.Body>
                  </Panel>
                </PanelGroup>
              </Col>
              <Col sm={6} md={4}>
                  <Image src={pic} center responsive></Image>
              </Col>
            </Row>
          </Grid>
     )
  }
}

