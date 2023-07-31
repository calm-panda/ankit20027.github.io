import { useEffect, useState } from 'react';
import axios from 'axios';
const userUrl = "https://api.github.com/users/ankit20027";

const Hero = () => {
    const [userData, setUserData] = useState(null);
    async function getData() {
        await axios
            .get(userUrl)
            .then(res => { setUserData(res.data); })
    }
    useEffect(() => {
        getData();
    }, []);
    console.log(userData);
    return (
        <div className='w-full p-24 flex flex-col items-center text-sm'>
            <img src={userData.avatar_url} alt='My Image' className='w-32 aspect-square rounded-full' />
            <div className='my-5'>Hi, I&apos;m {userData.name.split(" ")[0]}. 👋🏽</div>
            <div className='text-5xl text-center py-3'>
                <div className='text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600'> 
                    Talk is cheap 
                    <br /> 
                    Show me <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#b16b56] to-[#855040] font-pacafico text-6xl'>&quot;code&quot;</span>
                </div>
            </div>
            <button className="rounded-lg my-10 px-8 py-3 bg-[#303036] border-2 border-gray-900 hover:scale-95 duration-300 flex flex-row"> 
                Latest Projects 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="24" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg>
            </button>
        </div>
    )
}

export default Hero;