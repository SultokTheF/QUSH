import React, { useState, useEffect } from 'react';

import '../assets/styles/FieldList.css';

import FieldHandler from '../services/FieldHandler';
import Field from '../../../types/Field';

import FieldCard from './FieldCard';

const InfiniteFieldList: React.FC = () => {
  // const [fields, setFields] = useState<Field[]>([]);

  const fields: Field[] = [
    {
      id: 1,
      owner_id: 101,
      name: "Футбольное поле на территории Алтын Каргалы",
      category_sport: 1,
      location: "Алматы, Казахстан, Алматы, улица Жандосова, 204",
      latitude: 40.7128,
      longitude: -74.0060,
      time_from: 720,
      time_to: 1440,
      description: "Просторное футбольное поле для неформальных матчей.",
      price: 10000,
      image: "https://kz.all.biz/img/kz/service_catalog/5968.jpeg",
      width: 38,
      length: 68,
      surface_type: 1,
      capacity: 40,
      facilities: "Туалеты, Парковка",
      lighting: " на 10квт. Металлогалогенновые лампы 400 и 1000 ватт, ЛЕД прожекторы на 200 ватт. 4 мачты по углам поля, на каждой мачте по 4-5 прожекторов.",
      rules: "Медицинское отделение, залы для конференции находятся в санатории Алтын-Каргалы. Две парковки (со стороны Аскарова большая парковка, со стороны фут.поля малая парковка на 20 авто)",
      bath: 3,
      сloakroom: 3,
      additional_services: "Прокат перчаток вратаря",
      for_rent: true,
    },
    {
      id: 3,
      owner_id: 278,
      name: "Баскетбольная площадка 'Steppe Dunk'",
      category_sport: 2,
      location: "Аcтана, Казахстан, Алматы, улица Туркестан, 2/1",
      latitude: 44.0522,
      longitude: -167.2437,
      time_from: 9,
      time_to: 21,
      description: "Крытая баскетбольная площадка с качественным паркетом, и с мячами",
      price: 25000,
      image: "https://athlet.kz/images/inner17.jpg",
      width: 50,
      length: 84,
      surface_type: 3,
      capacity: 20,
      facilities: "Душ, Шкафчики,",
      lighting: "Внутреннее освещение",
      rules: "Запрещено играть не в кросовках",
      bath: 3,
      сloakroom: 3,
      additional_services: "Парковка, Мячи",
      for_rent: true,
    },
    {
      id: 5,
      owner_id: 242,
      name: "Баскетбольная площадка в Ботаническом саду",
      category_sport: 2,
      location: "Аcтана, Казахстан, Алматы, улица Орынбор, 3",
      latitude: 54.0522,
      longitude: -137.437,
      time_from: 0,
      time_to: 1440,
      description: "Баскетбольная площадка в парке - Ботанический",
      price: 0,
      image: "https://kainar-group.kz/wp-content/uploads/new_images/sport_plosh(5).jpg",
      width: 25,
      length: 16,
      surface_type: 2,
      capacity: 20,
      facilities: "",
      lighting: "Освещение",
      rules: "",
      bath: 0,
      сloakroom: 0,
      additional_services: "Парковка",
      for_rent: false,
    },
    {
      id: 4,
      owner_id: 101,
      name: "Крытое футбольное поле",
      category_sport: 1,
      location: "Астана, Казахстан, улица Жубанова, 34/1",
      latitude: 40.7128,
      longitude: -74.0060,
      time_from: 600,
      time_to: 1200,
      description: "Новое крытое футбольное поле.",
      price: 11111,
      image: "https://frankfurt.apollo.olxcdn.com/v1/files/wpwu51muhdzu1-KZ/image;s=1000x700",
      width: 100,
      length: 200,
      surface_type: 1,
      capacity: 22,
      facilities: "Туалеты, Парковка",
      lighting: "Прожекторы",
      rules: "Запрещено играть в бутсах",
      bath: 2,
      сloakroom: 0,
      additional_services: "Прокат перчаток вратаря",
      for_rent: true,
    },
    {
      id: 43,
      owner_id: 202,
      name: "САЙРАН",
      category_sport: 1,
      location: "Астана, Казахстан, улица Достык, 9",
      latitude: 34.0522,
      longitude: -118.2437,
      time_from: 0,
      time_to: 1440,
      description: "Школа футбола Астана Школа мини футбола в Астане",
      price: 14000,
      image: "http://llf-ast.kz/images/0001_%D0%9A%D0%A3%D0%91%D0%9E%D0%9A_%D0%9E%D0%A2%D0%9A%D0%A0%D0%AB%D0%A2%D0%98%D0%AF/5Q0A1759.JPG",
      width: 50,
      length: 84,
      surface_type: 3,
      capacity: 15,
      facilities: "Душ, Шкафчики",
      lighting: "Внутреннее освещение",
      rules: "Запрещено делать данк",
      bath: 1,
      сloakroom: 1,
      additional_services: "",
      for_rent: true,
    },
    {
      id: 5,
      owner_id: 242,
      name: "Волейбольная площадка в Ботаническом саду",
      category_sport: 2,
      location: "Аcтана, Казахстан, Алматы, улица Орынбор, 3",
      latitude: 54.0522,
      longitude: -137.437,
      time_from: 0,
      time_to: 1440,
      description: "Волейбольная площадка в парке - Ботанический",
      price: 0,
      image: "https://kainar-group.kz/wp-content/uploads/2018/01/2017-08-30-PHOTO-00000893.jpg",
      width: 25,
      length: 16,
      surface_type: 2,
      capacity: 20,
      facilities: "",
      lighting: "Освещение",
      rules: "",
      bath: 0,
      сloakroom: 0,
      additional_services: "Парковка",
      for_rent: false,
    },
    {
      id: 5,
      owner_id: 145,
      name: "Спортивный комплекс 'Астана'",
      category_sport: 3,
      location: "Сыганак 14",
      latitude: 54.4552,
      longitude: -71.2437,
      time_from: 9,
      time_to: 23,
      description: "Качественный и профессиональный игровой зал для волейбола" ,
      price: 15000,
      image: "https://skastana.kz/data/media/news/images/a99bb3cc256dd2eea966e2a246bdc38f.png",
      width: 16,
      length: 28,
      surface_type: 3,
      capacity: 30,
      facilities: "Душ",
      lighting: "Внутреннее освещение",
      rules:"Играть строго в кроссовках, В верхней одежде не играть" ,
      bath: 2,
      сloakroom: 2,
      additional_services: "Парковка",
      for_rent: true,
    },
    {
      id: 4,
      owner_id: 162,
      name: "Баскетбольная площадка в Триатлон парке",
      category_sport: 4,
      location: "Аcтана, Казахстан, Алматы, улица Сарайшык, 1/1",
      latitude: 51.0522,
      longitude: 71.2437,
      time_from: 0,
      time_to: 1440,
      description: "Баскетбольная площадка под мостом для всех желающих с хорошим покрытием" ,
      price: 0,
      image: "https://vesti.kz/userdata/gallery/gallery_2115/photo_102181.jpeg",
      width: 15,
      length: 23,
      surface_type: 3,
      capacity: 15,
      facilities: "Душ",
      lighting: "Освещение",
      rules: "",
      bath: 1,
      сloakroom: 1,
      additional_services: "Киоски с напитками",
      for_rent: false,
    },
    {
      id: 5,
      owner_id: 242,
      name: "Тенисный корт в Ботаническом саду",
      category_sport: 2,
      location: "Аcтана, Казахстан, Алматы, улица Орынбор, 3",
      latitude: 54.0522,
      longitude: -137.437,
      time_from: 0,
      time_to: 1440,
      description: "Тенисный корт в парке - Ботанический",
      price: 0,
      image: "https://kainar-group.kz/wp-content/uploads/2018/01/2017-08-30-PHOTO-00000929.jpg",
      width: 25,
      length: 16,
      surface_type: 2,
      capacity: 20,
      facilities: "",
      lighting: "Освещение",
      rules: "",
      bath: 0,
      сloakroom: 0,
      additional_services: "Парковка",
      for_rent: false,
    },
  ];

  // useEffect(() => {
  //   fetchFieldList();
  // }, []);

  // const fetchFieldList = async () => {
  //   try {
  //     const fieldsData = await FieldHandler.fetchFields();
  //     setFields(fieldsData);
  //   } catch (error) {
  //     console.error('Error fetching fields:', error);
  //   }
  // };
  
  return (
    <>
      <div>
        <section className='offer section container'>
          <div className="secContainter">

            <div data-aos="fade-up" data-aos-duration="2000"  className="secIntro">
              <h2 className='secTitle text-light'>
                Все доступные предложения
              </h2>
              <p className='text-light'>
                Здесь предствлены все спортивные поля, доступные на данный момент
              </p>

            </div>

            <div className="mainContent grid">
              {fields.map(field => (
                <FieldCard key={field.id} field={field}/>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default InfiniteFieldList;