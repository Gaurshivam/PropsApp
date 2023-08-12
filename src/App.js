import './App.css';
import Card from './Components/PropsTwo/Card';

function App() {
  var LogoImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  var LogoImage1 = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  var LogoImage2 = "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
 
 
 var  Name = "Eric Feng";
 var  Name1 = "Eric John";
 var  Name2 = "Joggy tom";
 
 var Heading = "What are there so many web startups ?"
 var Heading1 = "What merriage means to me ?"
 var Heading2 = "Leaving san Francisco ?"

 var Content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis libero reiciendis deleniti vero tempore perspiciatis similique quas, laboriosam pariatur blanditiis, distinctio cumque explicabo excepturi, dolore ducimus? Pariatur totam inventore aut!"
 var Content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis libero reiciendis deleniti vero tempore perspiciatis similique quas, laboriosam pariatur blanditiis, distinctio cumque explicabo excepturi, dolore ducimus? Pariatur totam inventore aut!"
 var Content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis libero reiciendis deleniti vero tempore perspiciatis similique quas, laboriosam pariatur blanditiis, distinctio cumque explicabo excepturi, dolore ducimus? Pariatur totam inventore aut!"
 

 var Image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
 var Image1 = "https://images.unsplash.com/photo-1546736317-58e353553344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
 var Image2 = "https://images.unsplash.com/photo-1610452898466-9a73d657f407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1839&q=80"
  
 var date = "Dec 4."
 var date1 = "Nov 20."
 var date2 = "Mar 14."

 var time = "5 min."
 var time1 = "9 min."
 var time2 = "15 min."

 var tech = "Web3"
 var tech1 = "Printing"
 var tech2 = "Change"
 
 
 
 return (
    <div  >
    <Card logoImage={LogoImage} name={Name} heading={Heading} content={Content} image={Image} Date={date} Time={time} Tech={tech}/>
    <Card logoImage={LogoImage1} name={Name1} heading={Heading1} content={Content} image={Image1} Date={date1} Time={time1} Tech={tech1}/>
    <Card logoImage={LogoImage2} name={Name2} heading={Heading2} content={Content} image={Image2} Date={date2} Time={time2} Tech={tech2}/>
    </div>
  );
}

export default App;
