import { useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const location = useLocation();
  const order = location.state;

  return (
    <div className="min-h-screen bg-[#fff7f2] p-10 text-[#5c3e3e]">
      <h2 className="text-3xl font-bold mb-4 text-center">
        🎉 Order Confirmed!
      </h2>
      <p className="text-center text-lg mb-10">
        Thank you, {order.customerName}!
      </p>

      <div className="grid gap-4">
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-3">
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p>Quantity: {item.qty}</p>
              <p>
                Price: {item.price} x {item.qty} = {item.price * item.qty} ৳
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-6 text-2xl font-bold">
        Total: {order.total} ৳
      </div>
    </div>
  );
};

export default OrderSuccess;
