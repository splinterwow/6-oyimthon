import { IoMdClose } from "react-icons/io";
import { TbClockHour3 } from "react-icons/tb";

function Card() {
  return (
    <div className="text-center ml-20 mt-4 ">
      <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
        <div className="card-body ">
          <div className="flex justify-between">
            <h2 className="card-title">Osh</h2>
            <span className="text-2xl cursor-pointer mb-10">
              <IoMdClose />
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            expedita architecto eveniet tempore minima.
          </p>
          <div className="flex justify-end gap-4">
            <div className="badge badge-secondary">! NEW</div>
            <div className="badge badge-secondary w-32 flex gap-3 text-black">
              <TbClockHour3 /> 45 minut
            </div>
          </div>
        </div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  );
}

export default Card;
