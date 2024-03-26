import loading from "./loading.gif"

const Loader = () => {
  return (
    <div>
        <div className="text-center d-flex justify-content-center mt-5">
        <img src={loading} alt="loading" style={{width: "3rem"}}/>
      </div>
    </div>
  )
}

export default Loader