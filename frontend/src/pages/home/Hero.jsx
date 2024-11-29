
const Hero = () => {
  return (
    <div className="flex justify-center">
  <div className="w-1/4 bg-white border-r pt-16 border-gray-300 p-4">
    <div className="flex flex-col p-4 space-y-4 text-gray-700 ">
      <a href="#" className="flex justify-between items-center hover:text-black">
        Mobile Accessories <span>›</span>
      </a>
      <a href="#" className="flex justify-between items-center hover:text-black">
        Electronics <span>›</span>
      </a>
      <a href="#" className="flex justify-between items-center hover:text-black">
        Home Decoratives <span>›</span>
      </a>
      <a href="#" className="flex justify-between items-center hover:text-black">
        Gaming Stuff <span>›</span>
      </a>
      <a href="#" className="flex justify-between items-center hover:text-black">
        Sports & Outdoor <span>›</span>
      </a>
      <a href="#" className="flex justify-between items-center hover:text-black">
        Baby's & Toys <span>›</span>
      </a>
      <a href="#" className="flex justify-between items-center hover:text-black">
        Groceries & Pets <span>›</span>
      </a>
      <a href="#" className="flex justify-between items-center hover:text-black">
        Health & Beauty <span>›</span>
      </a>
    </div>
  </div>
  <div className="w-3/4 bg-white p-8 ">
      <img src="image/Banner.png" alt="Banner" />
  </div>
</div>

  )
}

export default Hero