
import React from 'react'
import TaskBoard from './TaskBoard'

describe('<TaskBoard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TaskBoard />)
  })
})