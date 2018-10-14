import React from 'react'
import { NavArrow } from 'molecules'
import { NavLink, Nav, Row } from 'atoms'

const Navigation = ({ page }) => {
  return (
    <section className='navigation-section' >
      {
        page !== 'contact' &&
          <NavArrow
            dir='right'
            page={page}
            className='right'
          />
      }
      {
        page !== 'home' &&
          <NavArrow
            dir='left'
            page={page}
            className='left'
          />
      }
      {
        page !== 'home' &&
        <NavArrow
          dir='down'
          page={page}
          className='down'
        />

      }
    </section>
  )
}

export default Navigation
