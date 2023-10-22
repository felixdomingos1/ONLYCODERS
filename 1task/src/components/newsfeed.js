import ActionCard from "./actionCard";
import "../assets/css/newest.css"
import Post from "./post";
import UpdateBar from "./updateBar";


function NewsFeed() {
    const membersNewest = [
        { name: 'Sondre Strangee', username: '@4 members', avatar: 'https://randomuser.me/api/portraits/men/44.jpg',notification:1 },
        { name: 'Damian Greyson', username: '@5 members', avatar: 'https://randomuser.me/api/portraits/men/6.jpg',notification:4 },
        { name: 'Damian Greyson', username: '@2 members', avatar: 'https://randomuser.me/api/portraits/men/7.jpg',notification:1 },
        { name: 'Damian Greyson', username: '@1 members', avatar: 'https://randomuser.me/api/portraits/men/8.jpg',notification:1 },
        { name: 'Damian Greyson', username: '@6 members', avatar: 'https://randomuser.me/api/portraits/men/10.jpg',notification:2 },
    ];
    const popularG = [
    { name: 'Stream Designers', username: '3 members', avatar: 'https://randomuser.me/api/portraits/men/79.jpg' },
    { name: 'Stream Designers', username: '3 members', avatar: 'https://randomuser.me/api/portraits/men/79.jpg' },
    { name: 'Stream Designers', username: '3 members', avatar: 'https://randomuser.me/api/portraits/men/79.jpg' },
    ]
    return (
        <>
        <div className="col-3">
            <ActionCard heading = "Newest Members" members = {membersNewest} notification = {true} />
        </div>
        <div style={{ marginTop:"2%"}} className="col-6">
            <UpdateBar/>
            <Post/>
        </div>
        <div className="col-3">
            <ActionCard heading = "Popular Groups" members={popularG} button = {true}/>
            <ActionCard heading = "Popular Groups" members={popularG} button = {true}/>
        </div>
        </>
    );
  }
  
  export default NewsFeed;
  