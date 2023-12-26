import React, { useEffect, useState } from 'react'
import {
    CardBody,
    Button,
  } from "@material-tailwind/react";
import axios from 'axios';
import { convertTimeTo12Hour, getSuggestion } from '../../commanFun';
  

  const productData = [
      {
          image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/rudraksh/Two-Mukhi%20Rudraksha.jpg",
          name: "Two-Mukhi Rudraksha"
      },
      {
          image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/rudraksh/Two-Mukhi%20Rudraksha.jpg",
          name: "Two-Mukhi Rudraksha"
      },
      {
          image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/rudraksh/Two-Mukhi%20Rudraksha.jpg",
          name: "Two-Mukhi Rudraksha"
      },
      {
          image: "https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/rudraksh/Two-Mukhi%20Rudraksha.jpg",
          name: "Two-Mukhi Rudraksha"
      }
  ]
  
export default function GemsMantraResult(props) {

    const [rashiName,setRashiName] = useState("");
    const [productRes, setProdctRes] = useState([])
    const [prodcutNames,setProductNames] = useState([])
   
    
    useEffect(() =>{
        let birth_date = props.records.date && props.records.date.replaceAll("-","/");
        let bith_time = convertTimeTo12Hour(props.records.time);
        const fetchData = async () =>{
            props.setLoading(true)
            let res =  await axios.get("https://sit.bloomxapi.in/api/moonsign/calculateMoonsign",{
                params: {
                        "date": props.records.date + " " +props.records.time,
                        "timezone": "Asia/kolkata",
                        "name": props.records.name, 
                        "address": props.records.place,
                        "mobile": props.records.mobile,
                        "email": props.records.email,
                        "gender": props.records.gender,
                        "purpose": props.records.purpose,
                        "birth_date": birth_date,
                        "birth_time": bith_time,
                        "body_weight": props.records.bodyWeight,
                        "birth_place": props.records.place
                },
            });

            console.log(res.data,"_____________");
            let {rashi} = res.data;
            setRashiName(rashi.rashi);
            let resultSuggetion = getSuggestion(rashi.rashi);
            console.log(resultSuggetion.gemsName)
            setProdctRes(resultSuggetion.product);
            setProductNames({
                gemsName: resultSuggetion.gemsName,
                rudrakshaName: resultSuggetion.rudrakshaName,
                braceletName: resultSuggetion.braceletName
            })
            props.setLoading(false)
            
        }

        fetchData();

       
    },[props.records])



  return (
  
    <>
        <div className="relative my-8 ">  
            <div className='background_image absolute top-0 w-[100%] '>
                {props.loading?
                <div className='mx-auto flex items-center justify-center h-screen py-16 max-w-6xl'>
                    <h6 className='text-center text-lg font-bold'>
                         Processing , Please wait !!!
                    </h6>
                </div>
                :
                <div className='mx-auto py-16 max-w-6xl'>

                    <div className=' md:w-[75%] md:flex flex-none px-0 sm:px-4 text-sm pr-4'>
                        <div className='border_right px-4 text-[#813C01]'>
                            <span className=''><span className='bold'>Email -</span> {props.records.email}</span><br/>
                            <span><span className='bold'>Phone Number -</span> {props.records.phone}</span>
                        </div>
                        <div className='border_right px-4 text-[#813C01]'>
                            <span className=''><span className='bold'>Date of Birth -</span> {props.records.date}</span><br/>
                            <span><span className='bold'>Gender -</span> {props.records.gender}</span>
                        </div>
                        <div className='px-4 text-[#813C01]'>
                            <span className=''><span className='bold'>Body Weight -</span> {props.records.bodyWeight}</span><br/>
                            <span><span className='bold'>Birth Place -</span> {props.records.place}</span>
                        </div>
                    </div>

                    <div className='text-center md:text-left flex-none md:flex items-center md:justify-items-start justify-items-center pt-8 px-8 '>
                        <div className='md:w-[180px]'>
                            <img className='w-[170px] h-[155px] mx-auto md:-mx-0' src = {`/rashi_image/${rashiName}.png`}/>
                        </div>
                        <div className='md:w-[70%] ps-2'>
                            <h3 className='text_color2 text-xl md:text-3xl font-bold'>Hello, {props.records.name}!</h3>
                            <h3 className='md:w-96 pt-1 text_color2 text-xl md:text-3xl font-bold'> Your Moon Sign Is {rashiName}</h3>
                        </div>
                    </div>


                    <div className='md:w-[70%] w-[100%] px-2 sm:px-8 mt-2'>
                        <h3 className='text_color2 font-semibold'>This suggestion is according to your moon sign :</h3>

                        <div className='bg-white w-[100%] '>
                            <div className='flex border-2 border-gray-400'>
                                <h3 className='overflow-hidden text_color font-semibold p-2 w-[35%]  border-r-2 border-gray-400'>Gems</h3>
                                <h3 className='w-[75%] p-2 '>{prodcutNames && prodcutNames.gemsName} (5 - 7 Ratti) is best for you</h3>
                            </div>
                            <div className='flex border-x-2 border-gray-400'>
                                <h3 className='overflow-hidden text_color font-semibold p-2 w-[35%]  border-r-2 border-gray-400'>Bracelet</h3>
                                <h3 className='w-[75%] p-2 '>{prodcutNames && prodcutNames.braceletName} are best for you</h3>
                            </div>
                            <div className='flex border-2 border-gray-400'>
                                <h3 className='overflow-hidden text_color font-semibold p-2 w-[35%]  border-r-2 border-gray-400'>Rudraksha</h3>
                                <h3 className='w-[75%] p-2 '>{prodcutNames && prodcutNames.rudrakshaName} is best for you</h3>
                            </div>
                        </div>


                    </div>
                        <div className="mt-16 px-2 lg:mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mx-auto gap-6">
                        {
                            productRes.map((product) =>{
                                return(
                                        <div className="my-3 h-72 w-[220px] px-1 lg:my-4 lg:px-4 rounded-2xl bg-white overflow-hidden hover:shadow-md">
                                            <article className="overflow-hidden">
                                                    <div className='md:mt-10 sm:mt-8 mt-6'>
                                                        <img alt="Placeholder" className="w-[80%] mx-auto block h-auto rounded-ss-3xl rounded-se-3xl" src={product.imgPath}/>
                                                    </div>
                                                
                                                <header className="flex items-center justify-center leading-tight pt-1 bg-white rounded-ee-3xl rounded-es-3xl">
                                                    <CardBody className="text-center text-sm pt-1 px-0 rounded-3xl">
                                                    <div className=''>{product.name}</div>
                                                    <div className='mt-4'>
                                                        <a href={product.path} target='_blank' className='btn_color text-white py-2 px-6 rounded-md mt-3 '>Buy Now</a>
                                                    </div>
                                                    </CardBody>
                                                </header>

                                            </article>
                                        </div>
                                    )
                            })
                        }

                        </div>
                </div>
                }

            </div>
        </div>
    </>
  )
}
