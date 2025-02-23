import useRouteElement from './useRouteElemant'

function App() {
  const route = useRouteElement()
  return (
    <>
      <div className='App'>{route}</div>
    </>
  )
}

export default App
