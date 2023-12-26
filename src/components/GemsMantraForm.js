import React, { useRef, useState } from "react";
import GemsMantraResult from "./GemsMantra/GemsMantraResult";
import GemsTable from "./GemsTable";

export default function GemsMantraForm() {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [gender,setGender] = useState();
  const [perpose,setPerpose] = useState();
  const [bodyWeight,setBodyWeight] = useState();
  const [date,setDate] = useState();
  const [time,setTime] = useState();
  const [place,setPlace] = useState();

  const[errorMsg, setErrorMsg] = useState();
  const[loading,setLoading] = useState(true);
  const [records,setRecords] = useState([]);
  const [cityList,setCityList] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);


  const fetchLocation = async (e) => {
    setPlace(e.target.value);
    if(e.target.value.length === 0){
      setCityList([])
    }

    try {
      if (e.target.value.length >= 3) {
        let res = await fetch(
          `https://sit.bloomxapi.in/api/search/${e.target.value}`
        );
        res = await res.json();
        setCityList(res);
        // Do something with the result 'res'
      }
    } catch (error) {
      // Handle errors here
      console.error("Error during fetch:", error);
    }
  };

  const findGems = (event) =>{
    console.log(event,"event")
    event.preventDefault();
     setRecords({
        id: Date.now(),
        name,
        email,
        phone,
        gender,
        perpose,
        bodyWeight,
        date,
        time,
        place
      })
      
      setIsOpen(true)
      // console.log(records)
      ref.current?.scrollIntoView({behavior: 'smooth'});
    
  }


  return (
    <>
    <div className="isolate bg-white px-2 py-8 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="font-bold tracking-tight text_color text-lg sm:text-2xl md:text-4xl">Discover Your Rashi, Gemstones, Rudraksha and Bracelet
            Recommendation</h2>
              
          </div>

        <div className='grid md:grid-cols-3 mx-auto sm:max-w-6xl max-w-6xl '>
        <form
            className="rounded-md col-span-3 lg:col-span-2 mx-2 mt-6 w-auto sm:mt-6 bg-white p-6 px-8 sm:px-16 py-4 md:py-14 shadow-2xl"
            onSubmit={findGems}
          >
            <h1 className="text-[#813C01] md:text-xl text-lg  py-6 sm:py-8 font-bold">
              Fill the form to get result:
            </h1>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[15px] text-[#664421] leading-6 "
                >
                  Enter your name
                </label>
                <div className="">
                  <input
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6 outline-none"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-[15px] text-[#664421] leading-6 "
                >
                  Enter your email
                </label>
                <div className="">
                  <input
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="family-name"
                    className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6 outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="first-name"
                  className="block text-[15px] text-[#664421] leading-6 "
                >
                  Enter your phone number
                </label>
                <div className="">
                  <input
                    placeholder="Enter your mobile"
                    type="number"
                    maxLength={10}
                    name="phone"
                    id="phone"
                    autoComplete="given-name"
                    className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6 outline-none"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-[15px] text-[#664421] leading-6 "
                >
                  Enter your gender
                </label>
                <div className="">
                  <select
                    id="countries"
                    onChange={(e) => setGender(e.target.value)}
                    className="block w-full text-sm rounded-md border-0 px-3.5 py-2.5 md:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6 outline-none"
                    required
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="first-name"
                  className="block text-[15px] text-[#664421] leading-6 "
                >
                  Purpose to wear gemstone
                </label>
                <div className="">
                  <select
                    id="countries"
                    className="block w-full text-sm rounded-md border-0 px-3.5 py-2.5 md:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6 outline-none"
                    onChange={(e) => setPerpose(e.target.value)}
                    required
                  >
                    <option value="">Purpose</option>
                    <option value="general">General</option>
                    <option value="Relationship">Relationship</option>
                    <option value="Education">Education</option>
                    <option value="Job and Career">Job and Career</option>
                    <option value="Health">Health</option>
                    <option value="Business">Business</option>
                    <option value="All relationship,Education, Job, Career, Health, Business">
                      All relationship,Education, Job, Career, Health, Business
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-[15px] text-[#664421] leading-6 "
                >
                  Body weight (in kg)
                </label>
                <div className="">
                  <input
                    placeholder="Enter your weight"
                    type="number"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6 outline-none"
                    onChange={(e) => setBodyWeight(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="first-name"
                  className="block text-[15px] text-[#664421] leading-6 "
                >
                  Enter your birth date
                </label>
                <div className="">
                  <input
                    type="date"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6 outline-none"
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="first-name"
                  className="block text-[15px] text-[#664421] leading-6 "
                >
                  Enter your birth time
                </label>
                <div className="">
                  <input
                    autoComplete="given-name"
                    className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6 outline-none"
                    onChange={(e) => setTime(e.target.value)}
                    id="appt-time"
                    type="time"
                    name="appt-time"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="first-name"
                  className="block text-[15px] text-[#664421] leading-6 "
                >
                  Enter your birth place
                </label>
                <div className="">
                  <input
                    placeholder="Enter birth place here"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full text-sm rounded-md border-0 px-3.5 py-2 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6 outline-none"
                    onChange={(e) => fetchLocation(e)}
                    value={place}
                    required
                  />

                  <div className="absolute max-h-48 overflow-y-scroll">
                    <ul className="max-w-xs flex flex-col">
                      {cityList.map((listName) => {
                        return (
                          <li
                            key={listName.address}
                            className="cursor-pointer inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white"
                            onClick={() => {
                              setPlace(listName.address);
                              setCityList([]);
                            }}
                          >
                            {listName.address}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="text-red-700 mt-4">
                  <span>{errorMsg}</span>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md btn_color px-3.5 py-2.5 text-center text-sm  text-white shadow-sm "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          
          <GemsTable/>
        </div>
      </div>


      

      <div ref={ref}>
        {
          isOpen?
            <GemsMantraResult  records={records} loading={loading} setLoading={setLoading}/>:''
        }
      </div>
    </>
  );
}
