import HomeCard from "./HomeCard"

function HomeCardsTab() {
  return (
    //Todo: Repetition here
    <div>
    <div className="flex justify-center">
        <HomeCard heading="Share To Heal" text=" Empower your mental growth with our diverse resources and supportive community. Learn and grow with us." img="learn.jpeg" btntext="Our community."/>        
    </div>
    <div className="flex justify-center">
        <HomeCard heading="Personalized Profile" text="Take charge of your mental health journey by using our Mood Tracker and specialized tests to track your mood and progress." img="learn.jpeg"/>        
    </div>
    <div className="flex justify-center">
        <HomeCard heading="Smart Day Management Tools" text="Manage your day with our efficient tools like your task manager." img="learn.jpeg"/>        
    </div>
    <div className="flex justify-center">
        <HomeCard heading="Want to Help?" text="Lend a hand, mend a heart. You can donate, if you want to or you can choose to volunteer as well." img="learn.jpeg"/>        
    </div>
    </div>
    
  )
}

export default HomeCardsTab
