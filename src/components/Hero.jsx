
export default function Hero() {
  return (
    <div className="mb-2">
      <div className="hero min-h-screen bg-base-200 bg-green-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
            
            <img src="/images/Mobile ui.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div className="divider divider-success"></div>
            
            <div>
            <h1 className="text-5xl font-bold">Increase your Customers Loyalty and Satisfaction</h1>
            <p className="py-6">We help business like yours earn more customers, standout from competitors, make more money</p>
            <button className="btn btn-success">Get Started</button>
            </div>
        </div>
        </div>
        <div className="flex justify-evenly bg-white mt-2 p-2">
          <img className="h-8 w-20" src="/images/google.png" alt="" srcset="" />
          <img className="h-8 w-20" src="/images/monday.png" alt="" srcset="" />
          <img className="h-8 w-20" src="/images/trello.png" alt="" srcset="" />
          <img className="h-8 w-20" src="/images/nation.png" alt="" srcset="" />
          <img className="h-8 w-20" src="/images/slag.svg" alt="" srcset="" />
        </div>
    </div>
  )
}
