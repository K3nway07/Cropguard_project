import { useState } from 'react'
import './Nodes.css'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

function Nodes() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])

  const fetchData = () => {
    setLoading(true)
    fetch('https://api.thingspeak.com/channels/2815838/feeds.json?api_key=HZG7NZSB5KMN3AK8&results=1')
      .then(res => res.json())
      .then(json => {
        const newData = json.feeds[0]
        setData(newData)

        setHistory(prev => [
          ...prev,
          {
            timestamp: new Date(newData.created_at).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
            temp1: parseFloat(newData.field1),
            hum1: parseFloat(newData.field2),
            soil1: parseFloat(newData.field3),
            temp2: parseFloat(newData.field4),
            hum2: parseFloat(newData.field5),
            soil2: newData.field6 ? parseFloat(newData.field6) : null
          }
        ])

        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch data', err)
        setLoading(false)
      })
  }

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    const options = { hour: '2-digit', minute: '2-digit', hour12: true }
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

              <div className="chart-wrapper">
                <h4>Node 1 Data Graph</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={history}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp1" stroke="#f87171" name="Temp (°C)" />
                    <Line type="monotone" dataKey="hum1" stroke="#60a5fa" name="Humidity (%)" />
                    <Line type="monotone" dataKey="soil1" stroke="#34d399" name="Soil (%)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
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

              <div className="chart-wrapper">
                <h4>Node 2 Data Graph</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={history}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp2" stroke="#facc15" name="Temp (°C)" />
                    <Line type="monotone" dataKey="hum2" stroke="#818cf8" name="Humidity (%)" />
                    {history.some(d => d.soil2 !== null) && (
                      <Line type="monotone" dataKey="soil2" stroke="#a78bfa" name="Soil (%)" />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
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
