import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import '../assets/styles/FieldInfo.css';

import { intToTime } from "../../../helpers/timeConverter";
import { categoryOptions, surfaceOptions } from '../store/constants';
import Field from '../../../types/Field';
import FieldHandler from '../services/FieldHandler';

import Button from '../../../components/ui/Button';

import RenderMap from '../../map/components/RenderMap';

const FieldInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [field, setField] = useState<Field | null>(null);

  useEffect(() => {
    fetchFieldList();
  }, []);

  const fetchFieldList = async () => {
    try {
      const fieldsData = await FieldHandler.fetchFields();
      const foundField = fieldsData.find(field => field.id === parseInt( id as string ));
      setField(foundField || null);
    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  };

  const category = categoryOptions.find( ( obj ) => parseInt( obj.value ) === field?.category_sport )
  const surface = surfaceOptions.find( ( obj ) => parseInt( obj.value ) === field?.surface_type )

  return(
    <>
      { field ? (
        <Container className='field-container'>
          <Row>
            <Col md={6} className="text-md-start">
              <h1 className="mb-4 display-4 text-color-black">{field.name}</h1>
              <p className="mb-4 lead">{field.description}</p>
              <p className="mb-2 h5">
                <strong className='text-color-blue'>Адрес:</strong> {field.location}
              </p>
              <p className="mb-2 h5">
                <strong className='text-color-blue'>Стоимость аренды:</strong> {field.price} тг/час
              </p>
              <p className="mb-2 h5">
                <strong className='text-color-blue'>Тип:</strong> {category?.text}
              </p>
              <p className="mb-2 h5">
                <strong className='text-color-blue'>Покрытие:</strong> {surface?.text}
              </p>
              <p className="mb-2 h5">
                <strong className='text-color-blue'>Размеры:</strong> {field.width} x {field.length}
              </p>

              <Row className='mt-5'>
                <Col md={4} className="text-md-end">
                  <button type="button" className="btn btn-danger form-control p-2" data-bs-toggle="modal" data-bs-target="#delete_object">
                    Удалить
                  </button>
                </Col>
                <Col md={4} className="text-md-end">
                  <a className='btn btn-success form-control p-2' href={`/edit/${field.id}`}>Редактировать</a>
                  <a className='btn btn-success form-control p-2 mt-2' href={`/manage_rents/${field.id}`}>Заказы</a>
                </Col>
                <Col md={4} className="text-md-end">
                  {/* {isRentAvailable ? ( 
                    <button className='btn btn-outline-primary form-control p-2' onClick={createTickets}>Активировать</button> ) : (
                      <a className='btn btn-outline-primary form-control p-2' href={`/rent/${field.id}`}>Аренда</a>
                  )} */}
                </Col>
              </Row>
            </Col>
            <Col md={6} className="text-md-end">
              <div className='field-map'>
                {/* <RenderMap/> */}
              </div>
            </Col>
          </Row>
        </Container>

      ) : (
        <h1>Loading</h1>
      ) }


      <div className="modal fade" id="delete_object" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Удаление объекта [<span className='text-primary'>{field?.name}</span>]</h5>
            </div>
            <div className="modal-body">
              Вы действительно хотите удалить объект <span className='text-primary'>{field?.name}</span>?
            </div>
            <div className="modal-footer">
              {/* <button type="button" onClick={handleDelete} className="btn">Удалить</button> */}
              <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Отмена</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FieldInfo;