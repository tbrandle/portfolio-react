import React from 'react'
import { titleize } from '@bowtie/utils'
import { spearArrow } from 'images'
import { withEither } from '@bowtie/react-utils'
import {
  Row,
  Col,
  Link
} from 'atoms'

const ProjectRight = ({ project }) => {
  const { logo, projectName, description, screenshot } = project
  return (
    <Row className='project-preview-section'>
      <Col sm='6' className='flex-column flex-center'>
        <div>
          <img src={screenshot} className='project-preview-img  right' />
        </div>
      </Col>
      <Col sm='6' className='flex-column flex-center'>

        <div className='flex-column'>

          <div className='flex-row'>
            <div className='logo-container'>
              <img className='project-logo' src={logo} />
            </div>

            <div>
              <div className='project-title'>{projectName}</div>
              <div className='project-description'>{description}</div>
            </div>
          </div>

          <div sm='12' className='flex center view-project'>
            <Link to={`/work/${titleize(projectName, ' ', '')}`}>View Project  -------></Link>
          </div>

        </div>

      </Col>
    </Row>
  )
}

const ProjectLeft = ({ project }) => {
  const { logo, projectName, description, screenshot } = project
  return (
    <Row className='project-preview-section'>

      <Col sm='6' className='flex-column flex-center'>

        <div className='flex-column'>

          <div className='flex-row'>
            <div className='logo-container'>
              <img className='project-logo' src={logo} />
            </div>

            <div>
              <div className='project-title'>{projectName}</div>

              <div className='project-description'>{description}</div>
            </div>
          </div>

          <div className='flex center view-project'>
            <Link to={`/work/${projectName}`}>View Project  -------></Link>
          </div>

        </div>

      </Col>
      <Col sm='6' className='flex-column flex-center'>
        <div >
          <img src={screenshot} className='project-preview-img  left' />
        </div>
      </Col>
    </Row>
  )
}

const projectDirConditionalFn = ({ dir }) => dir === 'right'

export default withEither(projectDirConditionalFn, ProjectRight)(ProjectLeft)
