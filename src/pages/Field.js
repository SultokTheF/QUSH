import React, {useState} from 'react'

export default function Field() {
    const [name, setName] = useState( '' );
    const [description, setDescription] = useState( '' );
    const [location, setLocation] = useState( '' );
    // const [category, setCategory] = useState( '' );
    // const [timeFrom, setTimeFrom] = useState( '' );
    // const [timeTo, setTimeTo] = useState( '' );

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        try {
            const res = await fetch( 'http://localhost:8000/field/fields/', {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    owner_id: 1,
                    name: name,
                    category_sport: 2,
                    location: location,
                    time_from: 10,
                    time_to: 22,
                    description: description,
                    price: "25000tg/h",
                    image: null,
                    dimensions: "15x16",
                    surface_type: 2,
                    capacity: null,
                    facilities: null,
                    lighting: null,
                    rules: null
                } ),
            } );

            const resJson = await res.json();

            if( res.status === 200 ) {
                setName( '' );
                setDescription( '' );
                setLocation( '' );
                // setCategory( '' );
                // setTimeFrom( '' );
                // setTimeTo( '' );
            }
        } catch( err ) {
            console.log( err )
        }
    }

    return (
        <div className='content'>
            <div className='row mt-5'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <h1>Основаная информация</h1>
                </div>
                <div className='col-1'></div>
            </div>
            <div className='row mt-3'>
                <div className='col-1'></div>
                <div className='col-6'>
                    <form className='form-control' onSubmit={handleSubmit}>
                        <h3>Общяя информация</h3>
                        <label className='mt-2'>Название</label>
                        <input 
                        type='text'
                        className='form-control'
                        placeholder='Введите название поля' 
                        value={name}
                        onChange={(e) => setName( e.target.value )}
                        />
                        
                        <label className='mt-2'>Описание</label>
                        <textarea
                        className='form-control'
                        placeholder='Введите описание поля'
                        value={description}
                        onChange={(e) => setDescription( e.target.value )}
                        />

                        <label className='mt-2'>Адрес</label>
                        <input 
                        type='number'
                        className='form-control' 
                        placeholder='Введите адрес поля' 
                        value={location}
                        onChange={(e) => setLocation( e.target.value )}
                        />

                        <div className='row'>
                            <div className='col-8'></div>
                            <div className='col-4'>
                                <button type='submit' className='btn btn-outline-primary mt-3'>Сохранить</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div className='col-4'>
                    <form className='form-control'>
                        <h3>Категория</h3>
                        <label className='mt-2'>Тип поля</label>
                        <select class="form-select">
                            <option value="1">Футбол</option>
                            <option value="2">Баскетбол</option>
                            <option value="3">Гейский спорт</option>
                        </select>
                        
                        <label className='mt-2'>Покрытие</label>
                        <select class="form-select">
                            <option value="1">Газон</option>
                            <option value="2">Паркет</option>
                            <option value="3">Чтото еще</option>
                        </select>

                        <div className='row'>
                            <div className='col-8'></div>
                            <div className='col-4'>
                                <button type='submit' className='btn btn-outline-primary mt-3'>Сохранить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className='row mt-5 mb-5'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <h1>Дополнительная информация</h1>
                    <form className='form-control mt-3'>
                        <h5 className='mt-2'>Размеры поля</h5>
                        <input type='text' className='form-control' placeholder='Ширина и Длина поля'></input>

                        <h5 className='mt-4'>Фотография поля</h5>
                        <input type='file' className='form-control'></input>

                        <h5 className='mt-4'>Дополнительные условия</h5>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Душ</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Раздевалка</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Hookah</label>
                        </div>


                        <h5 className='mt-4'>Комментарий</h5>
                        <textarea className='form-control' placeholder='Что бы вы еще хотели отметить про данный объект'></textarea>

                        <div className='row'>
                            <div className='col-8'></div>
                            <div className='col-4'>
                                <button type='submit' className='btn btn-outline-primary mt-3'>Сохранить</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-1'></div> */}
            </div>
        </div>
    )
}
