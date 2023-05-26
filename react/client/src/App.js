import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

const URL = 'http://141.95.163.102:5000'
function App() {
  const [state, setState] = useState([])
  const [newV, setnewV] = useState('')
  const [newK, setnewK] = useState('')
  useEffect(() => {
    fetch(URL + '/items')
        .then((r) => r.json())
        .then(setState)
  }, [])

  const create = (id, val) => {
    fetch(URL + '/item', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, val }),
    }).then((_) => setState([...state, id]))
  }

  return (
      <div className="App">
        {state.map((key) => (
            <Key val={key} key={key} />
        ))}
        <div className="new">
          <h1> New key</h1>
          key:
          <input value={newK} onChange={(event) => setnewK(event.target.value)} />
          Value:
          <input value={newV} onChange={(event) => setnewV(event.target.value)} />
          <button onClick={() => create(newV, newK)}>add</button>
        </div>
      </div>
  )
}

export default App

const Key = ({ val }) => {
  const [state, setState] = useState('')
  const [updated, setUpdated] = useState('')
  useEffect(() => {
    fetch(URL + '/item?id=' + val)
        .then((r) => r.text())
        .then(setState)
  }, [])

  const update = (id, val) => {
    setUpdated('updating')
    fetch(URL + '/item', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, val }),
    }).then(() => setUpdated(''))
  }

  return (
      <div className="key">
        {val}:{' '}
        <input
            value={state}
            onChange={(event) => {
              setUpdated('updated')
              setState(event.target.value)
            }}
        />
        {updated && <button onClick={() => update(val, state)}>update</button>}
      </div>
  )
}
