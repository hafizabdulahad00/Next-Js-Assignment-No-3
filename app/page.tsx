import Image from 'next/image';
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import profile from '../app/profile.png'
import p1 from '../app/p1.png'
import p2 from '../app/p2.png'
import p3 from '../app/p3.png'


const homepage = () => {
  return(
    <div>
      <Header />
   <section className='bg-gray-900 h-screen flex flex-col justify-center items-center border-b border-yellow-500 px-5 md:px-10'>
   <Image src={profile} className='h-40 w-40 mb-5' alt={'Profile picture of [Your Name]'} />
   <h1 className='text-3xl md:text-5xl font-bold text-center py-2 capitalize text-yellow-500'>Building Digital Solutions</h1>
   <p className='text-base md:text-lg font-medium text-center capitalize text-yellow-300'>Exploring my creativity, one project at a time</p>
   <button className="mt-5 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-3xl hover:bg-yellow-400 transition">
    View My Projects
   </button>
</section>

<section className='bg-gray-900 h-auto border-b border-yellow-500'>
  <div className='flex flex-col md:flex-row'>
    <div className='py-10 px-5 md:px-20 md:w-1/2'>
      <h1 className='text-3xl md:text-5xl font-bold py-5 capitalize text-yellow-500'>My Story</h1>
      <p className='text-base md:text-lg font-medium capitalize text-yellow-300'>
        I'm a web developer passionate about creating functional and beautiful digital experiences.
      </p>
    </div>
    <div className='py-10 px-5 md:px-20 md:w-1/2'>
      <img 
        src="https://www.2440media.com/sites/default/files/assets/images/blog/The%20Difference%20between%20Web%20Designer%2C%20Web%20Developer%2C%20and%20Web%20Programmer.jpg" 
        alt="Web Development"  
        className='h-64 rounded-sm w-full object-cover'
      />
    </div>
  </div>
</section>

<section className='bg-gray-900 h-auto py-20 px-5 md:px-20 border-b border-yellow-500'>
  <h1 className='font-bold text-3xl md:text-5xl text-center text-yellow-500'>My Projects</h1>
  <div className='flex flex-col md:flex-row items-center justify-center py-10 gap-10'>
    
    <div className='border-yellow-500 border py-10 px-6 flex flex-col items-center justify-center gap-6'>
      <Image src={p1} className='w-80' alt={'Project 1'} />
      <h1 className='font-bold text-yellow-500 text-2xl md:text-4xl text-center'>Project 1</h1>
      <p className='text-center font-medium text-yellow-300 text-base md:text-lg'>
        I created this landing page using HTML and CSS to showcase a product launch. The design focuses on user engagement, featuring a clean layout with eye-catching visuals and compelling call-to-action buttons. The responsive design ensures an optimal experience across devices, inviting visitors to explore the product details and sign up for updates.
      </p>
    </div>

    <div className='border-yellow-500 border py-10 px-6 flex flex-col items-center justify-center gap-6'>
      <Image src={p2} className='w-80' alt={'Project 2'} />
      <h1 className='font-bold text-yellow-500 text-2xl md:text-4xl text-center'>Project 2</h1>
      <p className='text-center font-medium text-yellow-300 text-base md:text-lg'>
        I created this landing page using HTML and CSS to showcase a product launch. The design focuses on user engagement, featuring a clean layout with eye-catching visuals and compelling call-to-action buttons. The responsive design ensures an optimal experience across devices, inviting visitors to explore the product details and sign up for updates.
      </p>
    </div>

    <div className='border-yellow-500 border py-10 px-6 flex flex-col items-center justify-center gap-6'>
      <Image src={p3} className='w-80' alt={'Project 3'} />
      <h1 className='font-bold text-yellow-500 text-2xl md:text-4xl text-center'>Project 3</h1>
      <p className='text-center font-medium text-yellow-300 text-base md:text-lg'>
        I created this landing page using HTML and CSS to showcase a product launch. The design focuses on user engagement, featuring a clean layout with eye-catching visuals and compelling call-to-action buttons. The responsive design ensures an optimal experience across devices, inviting visitors to explore the product details and sign up for updates.
      </p>
    </div>

  </div>
</section>
     <Footer />
     </div>
      
  );
}

export default homepage;