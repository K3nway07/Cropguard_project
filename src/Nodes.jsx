import { useState } from 'react'
import './Nodes.css'

function Nodes() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    fetch('https://api.thingspeak.com/channels/2815838/feeds.json?api_key=HZG7NZSB5KMN3AK8&results=2')
      .then(res => res.json())
      .then(json => {
        setData(json.feeds[0])
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch data', err)
        setLoading(false)
      })
  }

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }
    const time = date.toLocaleTimeString('en-IN', options)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `As on: ${time} ${day}.${month}.${year}`
  }

  return (
    <div className="nodes-container">
      <h2>CropGuard Nodes</h2>
      <button onClick={fetchData} className="fetch-button">
        Fetch Node Data
      </button>

      <div className="nodes-data">
        <div className="node-card">
          <h3>Node 1</h3>
          {data ? (
            <>
              <ul>
                <li>Ambient Temp: {data.field1} °C</li>
                <li>Ambient Humidity: {data.field2} %</li>
                <li>Soil Moisture: {data.field3} %</li>
                <li>Location: MSIT, Ruby, Kolkata</li>
              </ul>
              <p className="timestamp">{formatDate(data.created_at)}</p>
            </>
          ) : (
            <p>{loading ? 'Loading...' : 'Click button to fetch Node 1 data'}</p>
          )}
        </div>

        <div className="node-card">
          <h3>Node 2</h3>
          {data ? (
            <>
              <ul>
                <li>Ambient Temp: {data.field4} °C</li>
                <li>Ambient Humidity: {data.field5} %</li>
                <li>Soil Moisture: {data.field6 ?? 'N/A'} %</li>
                <li>Location: MSIT, Ruby, Kolkata</li>
              </ul>
              <p className="timestamp">{formatDate(data.created_at)}</p>
            </>
          ) : (
            <p>{loading ? 'Loading...' : 'Click button to fetch Node 2 data'}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nodes
