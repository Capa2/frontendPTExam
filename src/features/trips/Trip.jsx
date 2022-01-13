import { useState } from "react";
import AssignButton from "./AssignButton";
import DeleteButton from "./DeleteButton";

const Trip = ({ index, trip }) => {
    const { id, dateTime, name, location, duration, packingList } = trip;
    const { date: { year, month, day }, time: { hour, minute } } = dateTime;
    const [deleted, setDeleted] = useState(false);

    return (
        trip && !deleted && <div key={index} className="mx-2 my-4 p-2 border">
            <h4 key="name">{name}</h4>
            <p className="my-0" key="dur">{duration / 60 / 60} hours</p>
            <p className="my-0" key="date">{`${year}-${month}-${day} ${hour}:${minute}0`}</p>
            <strong>Location:</strong>
            <p className="my-0" key="loc">{location}</p>
            <strong>Packing List:</strong>
            <p className="my-0">{packingList.map((item, index) => `${item}${(index + 1 < packingList.length) ? ", " : ""}`)}</p>
            <DeleteButton tripId={id} setDeleted={setDeleted} />
            <AssignButton tripId={id} />
        </div>
    );
}

export default Trip;