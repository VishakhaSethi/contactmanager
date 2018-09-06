import React, { Component } from 'react'

class Test extends Component {
    state = {
        test: 'test'
    }
 componentDidMount() {
    console.log('componentDidMount...')
 }

 componentWillMount() {
    console.log('componentWillMount...')
 }

 componentWillUpdate() {
    console.log('componentWillUpdate...')
 }

 componentDidUpdate() {
    console.log('componentDidUpdate...')
 }

 componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps...')
 }

 static getDerivedStateFromProps(nextProps, prevState) {
    return {
        test: 'some other thing'
    }
 }
 getSnapshotBeforeUpdate(prevProps, prevState) {
     console.log('getSnapshotBeforeUpdate')
 }
 render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}

export default Test