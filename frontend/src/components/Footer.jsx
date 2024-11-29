
const Footer = () => {
    return (
        <div className="bg-black text-white font-[Poppins] flex py-24 justify-around items-start">
    <div className="flex flex-col gap-3">
        <h1 className="text-xl font-extrabold">
            ELECTROMART
        </h1>
        <h2 className="text-lg">Subscribe</h2>
        <h3 className="text-lg">Get 10 off your first order</h3>
        <input
            type="text"
            placeholder="Enter your email"
            className="p-1 text-sm rounded-md"
        />
    </div>
    <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Support</h1>
        <h3 className="text-lg">Get 10 off your first order</h3>
        <h3 className="text-lg">Get 10 off your first order</h3>
        <h3 className="text-lg">Get 10 off your first order</h3>
    </div>
    <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Account</h1>
        <h3 className="text-lg">My Account</h3>
        <h3 className="text-lg">Login/Register</h3>
        <h3 className="text-lg">Cart</h3>
        <h3 className="text-lg">Wishlist</h3>
        <h3 className="text-lg">Shop</h3>
    </div>
    <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">Quick Link</h1>
        <h3 className="text-lg">Privacy Policy</h3>
        <h3 className="text-lg">Terms of Use</h3>
        <h3 className="text-lg">FAQ</h3>
        <h3 className="text-lg">Contact</h3>
    </div>
    <div className="text-xs">lol</div>
</div>

    )
}

export default Footer