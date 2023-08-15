import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { intToTime } from "../../helpers/timeConverter";

interface RentProps {
  // Define any props you expect to receive here
}

const Rent: React.FC<RentProps> = (props) => {
  const params = useParams<{ id: string }>();
  const fieldId = Number( params.id );

  const [rents, setRents] = useState<any[] | null>(null);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedTimeFroms, setSelectedTimeFroms] = useState<number[]>([]);
  const [selectedTimeTos, setSelectedTimeTos] = useState<number[]>([]);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
    timeFrom: number,
    timeTo: number
  ) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedIds([...selectedIds, id]);
      setSelectedTimeFroms([...selectedTimeFroms, timeFrom]);
      setSelectedTimeTos([...selectedTimeTos, timeTo]);
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
      setSelectedTimeFroms(selectedTimeFroms.filter((selectedTime) => selectedTime !== timeFrom));
      setSelectedTimeTos(selectedTimeTos.filter((selectedTime) => selectedTime !== timeTo));
    }
  };

  const handleTicketChange = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('http://83.229.87.19:8090/rent/rents/', {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client_id: 1,
          field_id: fieldId,
          num_tickets: selectedIds.length,
          time_from: 0,
          time_to: 0
        }),
      });

      if (res.ok) {
        const resJson = await res.json();
        for (const id of selectedIds) {
          const index = selectedIds.indexOf(id);
          const timeFrom = selectedTimeFroms[index];
          const timeTo = selectedTimeTos[index];

          try {
            const response = await fetch(`http://localhost:8082/rent/ticket-change/${timeFrom}/${timeTo}/${resJson.data.id}`);
          } catch (error) {
            console.log(error);
          }
        }

        try {
          const response = await fetch(`http://localhost:8082/rent/rents-settime/${resJson.data.id}/`);
        } catch (error) {
          console.log(error);
        }

        window.location.reload();
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8082/rent/ticket/');
        const data = await response.json();
        const foundRents = data.data.filter((rents: any) => rents.field_id === fieldId);
        setRents(foundRents);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='content text-light'>
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-10'>
          <div className="greeting text-center">
            <h1>Здраствуйте Султанияр</h1>
          </div>
          <div className="row">
            <div className='col-1'></div>
            <div className='col-10 text-center'>
              <h4>Вы можете выбрать удобное для вас время и арендовать у нас поле</h4>
            </div>
            <div className='col-1'></div>
          </div>

          <table className="table text-center text-light mt-5">
            <thead className='tableHead'>
              <tr>
                <th scope="col"></th>
                <th scope="col">Время</th>
                <th scope="col">Статус</th>
                <th scope="col">Действия</th>
              </tr>
            </thead>
            <tbody>
              {rents && rents.map((rent, index) => (
                <tr key={rent.id}>
                  {!rent.is_rented && <>
                    <td>{index + 1}</td>
                    <td>{intToTime(rent.time_from)} - {intToTime(rent.time_to)}</td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        {/* <Status status={rent.is_rented} /> */}
                      </div>
                    </td>
                    <td>
                      <div className='actions'>
                        <div className="form-check form-switch d-flex justify-content-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={selectedIds.includes(rent.id)}
                            onChange={(event) => handleCheckboxChange(event, rent.id, rent.time_from, rent.time_to)}
                          />
                        </div>
                      </div>
                    </td>
                  </>}
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td> <button onClick={handleTicketChange} className='btn btn-outline-primary'>Арендовать</button> </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col-1'></div>
      </div>
    </div>
  )
}

export default Rent;
