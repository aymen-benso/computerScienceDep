import Hero from "../../components/Hero";
import News from "../../components/News";
import Speciality from "../../components/Speciality";
import Heads from "../../components/Heads";
import StudentSpace from "../../components/StudentSpace";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <div>
        <h1 className="text-center text-4xl font-bold p-10">Last News</h1>
      </div>
      <News />
      
      <div>
        <h1 className="text-center text-4xl font-bold p-10">Our Specialities</h1>
      </div>

      <Speciality />  

      <div>
        <h1 className="text-center text-4xl font-bold p-10"> Leads of Department</h1>
      </div>

     <Heads />

      <br/>

     <div>
        <h1 className="text-center text-4xl font-bold p-5"> Students Space</h1>
      </div>
      
      <div className="text-center text-4xl font-bold p-10">

      <StudentSpace btname="Login" fixed="" />
      
      </div>



      <footer className="footer footer-center p-10 bg-[#f5f5f5] text-[#333]">
            
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52358.70412079997!2d-1.4206118783203396!3d34.89593299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd78c860f3e0b7a9%3A0x77a8b59ad2757a3e!2zZmFjdWx0w6kgZGVzIHNjaWVuY2VzINmD2YTZitipINin2YTYudmE2YjZhQ!5e0!3m2!1sfr!2sdz!4v1713312659368!5m2!1sfr!2sdz"
       width="100%" 
       height="450" 
       style={{border:0}}  
       
       allowfullscreen=""

       loading="lazy"
       referrerpolicy="no-referrer-when-downgrade">

      </iframe>


        </footer>
      
    </main>
  );
}
