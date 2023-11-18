
export default function Subscribtion() {
  return (
    <div className="text-center bg-slate-50 p-14">
        <h1 className="text-green-600 font-bold">SUBSCRIBE</h1> <br />
        <p className="text-2xl font-bold">Subscribe to Get the Latest <br /> News About us.</p>
        <p className="text-[16px] font-">Please drop your email below to get the daily update what we do.</p>

        <br />

        <div className="border border-gray-600 inline-block p-1 rounded-md">
            <input type="text" placeholder="Enter your email address" className="h-8 w-56 mr-4 outline-none"/>
            <button className="btn btn-outline btn-warning">Subscribe</button>
        </div>
    </div>
  )
}
