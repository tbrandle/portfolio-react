import React from 'react'

import arrow from 'images/spear-arrow.svg'
import { withEither } from '@bowtie/react-utils'
import {
  BowtieLogo,
  Title,
  Row,
  Col
} from 'atoms'

const ProjectRight = ({ project }) => {
  const { logo, projectName, description, screenshot } = project
  return (
    <Row className='project-preview-section'>
      <Col sm='6' className='flex-column flex-center'>
        <div className='parent-perspective'>
          <img src={screenshot} className='project-preview-img right' />
        </div>
      </Col>
      <Col sm='6' className='flex-column flex-center'>

        <div className='flex-column'>

          <div className='flex-row'>
            <div className='logo-container'>
              <img className='project-logo' src={logo} />
            </div>

            <div sm='9'>
              <div sm='12' className='project-title'>{projectName}</div>

              <div sm='12' className='project-description'>{description}</div>
            </div>
          </div>

          <div sm='12' className='flex center view-project'>
              View Project  ------->
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

            <div sm='9'>
              <div sm='12' className='project-title'>{projectName}</div>

              <div sm='12' className='project-description'>{description}</div>
            </div>
          </div>

          <div sm='12' className='flex center view-project'>
            View Project  ------->
          </div>

        </div>

      </Col>
      <Col sm='6' className='flex-column flex-center'>
        <div className='parent-perspective'>
          <img src={screenshot} className='project-preview-img left' />
        </div>
      </Col>
    </Row>
  )
}

const projectDirConditionalFn = ({ dir }) => dir === 'right'

export default withEither(projectDirConditionalFn, ProjectRight)(ProjectLeft)
